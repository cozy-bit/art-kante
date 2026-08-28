import { useRef, useState, useLayoutEffect, useEffect } from 'react'
import { ACHIEVEMENTS } from '../data/achievements'

function TargetNode({ className = '' }) {
  return (
    <div
      className={`relative z-20 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/35 bg-[#0e0e0e] shadow-[0_0_12px_rgba(0,0,0,0.9)] ${className}`}
    >
      <div className='flex h-3.5 w-3.5 items-center justify-center rounded-full border border-white/50'>
        <div className='h-1.5 w-1.5 rounded-full bg-white/90' />
      </div>
    </div>
  )
}

export function AchievementsTimeline() {
  const containerRef = useRef(null)
  const nodeRefs = useRef([])
  const itemRefs = useRef({})
  const [svgLines, setSvgLines] = useState({
    stems: [],
    connectors: [],
    branches: [],
    bullets: [],
  })

  const updateLines = () => {
    if (!containerRef.current) return
    const containerRect = containerRef.current.getBoundingClientRect()

    const stems = []
    const connectors = []
    const branches = []
    const bullets = []

    const nodePositions = []

    ACHIEVEMENTS.forEach((group, i) => {
      const nodeEl = nodeRefs.current[i]
      if (nodeEl) {
        const r = nodeEl.getBoundingClientRect()
        nodePositions.push({
          x: r.left - containerRect.left + r.width / 2,
          y: r.top - containerRect.top + r.height / 2,
        })
      } else {
        nodePositions.push({ x: 0, y: 0 })
      }
    })

    ACHIEVEMENTS.forEach((group, i) => {
      const currNode = nodePositions[i]
      if (!currNode) return
      const nextNode = nodePositions[i + 1]

      let lastItemY = currNode.y

      group.items.forEach((_, j) => {
        const itemEl = itemRefs.current[`${i}-${j}`]
        if (itemEl) {
          const ir = itemEl.getBoundingClientRect()
          const itemY = ir.top - containerRect.top + ir.height / 2
          lastItemY = itemY

          // Ветка 18px от вертикального ствола к точке
          let bulletX
          if (group.listSide === 'right') {
            bulletX = currNode.x + 18
          } else {
            bulletX = currNode.x - 18
          }

          branches.push({
            x1: currNode.x,
            y1: itemY,
            x2: bulletX,
            y2: itemY,
          })
          bullets.push({ cx: bulletX, cy: itemY })
        }
      })

      if (nextNode) {
        // Вертикальный ствол от текущего узла ровно до Y-координаты следующего узла
        stems.push({
          x1: currNode.x,
          y1: currNode.y,
          x2: currNode.x,
          y2: nextNode.y,
        })

        // Горизонтальный мост от вертикального ствола ровно в центр следующего узла
        connectors.push({
          x1: currNode.x,
          y1: nextNode.y,
          x2: nextNode.x,
          y2: nextNode.y,
        })
      } else {
        // Для 2016 года ствол останавливается на последнем пункте
        stems.push({
          x1: currNode.x,
          y1: currNode.y,
          x2: currNode.x,
          y2: lastItemY,
        })
      }
    })

    setSvgLines({ stems, connectors, branches, bullets })
  }

  useLayoutEffect(() => {
    updateLines()
  }, [])

  useEffect(() => {
    updateLines()
    const ro = new ResizeObserver(() => {
      updateLines()
    })
    if (containerRef.current) {
      ro.observe(containerRef.current)
    }
    window.addEventListener('resize', updateLines)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', updateLines)
    }
  }, [])

  return (
    <section className='overflow-x-auto lg:overflow-visible pb-24 pt-12'>
      <div
        ref={containerRef}
        className='relative mx-auto min-w-[760px] max-w-[1100px] px-8 sm:px-12'
      >
        {/* SVG-слой со всеми идеальными пунктирными линиями */}
        <svg className='absolute inset-0 h-full w-full pointer-events-none z-10'>
          {/* Вертикальные стволы */}
          {svgLines.stems.map((s, idx) => (
            <line
              key={`stem-${idx}`}
              x1={s.x1}
              y1={s.y1}
              x2={s.x2}
              y2={s.y2}
              stroke='rgba(255, 255, 255, 0.22)'
              strokeDasharray='3 3'
              strokeWidth='1'
            />
          ))}

          {/* Горизонтальные соединительные ветки между годами */}
          {svgLines.connectors.map((c, idx) => (
            <line
              key={`conn-${idx}`}
              x1={c.x1}
              y1={c.y1}
              x2={c.x2}
              y2={c.y2}
              stroke='rgba(255, 255, 255, 0.22)'
              strokeDasharray='3 3'
              strokeWidth='1'
            />
          ))}

          {/* Ответвления к пунктам списка */}
          {svgLines.branches.map((b, idx) => (
            <line
              key={`branch-${idx}`}
              x1={b.x1}
              y1={b.y1}
              x2={b.x2}
              y2={b.y2}
              stroke='rgba(255, 255, 255, 0.22)'
              strokeDasharray='3 3'
              strokeWidth='1'
            />
          ))}

          {/* Точки у пунктов */}
          {svgLines.bullets.map((b, idx) => (
            <circle
              key={`bullet-${idx}`}
              cx={b.cx}
              cy={b.cy}
              r='1.5'
              fill='rgba(255, 255, 255, 0.45)'
            />
          ))}
        </svg>

        {/* DOM-элементы с контентом и узлами */}
        <ol className='relative w-full space-y-10 sm:space-y-14'>
          {ACHIEVEMENTS.map((group, i) => {
            const isRightList = group.listSide === 'right'

            return (
              <li key={group.year} className='relative w-full'>
                {isRightList ? (
                  <div
                    className='relative flex flex-col'
                    style={{ marginLeft: `${group.nodeOffset}%` }}
                  >
                    {/* Узел с годом */}
                    <div className='relative flex items-center'>
                      <div ref={(el) => (nodeRefs.current[i] = el)}>
                        <TargetNode />
                      </div>
                      {group.yearSide === 'left' ? (
                        <div className='absolute right-[calc(100%+20px)] top-1/2 -translate-y-1/2 flex items-center whitespace-nowrap text-2xl font-light text-white sm:text-3xl'>
                          <span>{group.year}</span>
                          <span className='ml-1 text-base font-normal text-white/40 sm:text-lg'>
                            г
                          </span>
                        </div>
                      ) : (
                        <div className='absolute left-[calc(100%+20px)] top-1/2 -translate-y-1/2 flex items-center whitespace-nowrap text-2xl font-light text-white sm:text-3xl'>
                          <span>{group.year}</span>
                          <span className='ml-1 text-base font-normal text-white/40 sm:text-lg'>
                            г
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Список пунктов достижений с комфортным отступом от линии и точки */}
                    <ul className='space-y-2.5 pl-11 pt-3'>
                      {group.items.map((item, j) => (
                        <li
                          key={j}
                          ref={(el) => (itemRefs.current[`${i}-${j}`] = el)}
                          className='flex items-center'
                        >
                          <span className='whitespace-nowrap text-[11px] font-normal uppercase tracking-wider text-white/80 sm:text-xs'>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div
                    className='relative flex flex-col items-end'
                    style={{ width: `calc(${group.nodeOffset}% + 12px)` }}
                  >
                    {/* Узел с годом */}
                    <div className='relative flex items-center'>
                      {group.yearSide === 'left' ? (
                        <div className='absolute right-[calc(100%+20px)] top-1/2 -translate-y-1/2 flex items-center whitespace-nowrap text-2xl font-light text-white sm:text-3xl'>
                          <span>{group.year}</span>
                          <span className='ml-1 text-base font-normal text-white/40 sm:text-lg'>
                            г
                          </span>
                        </div>
                      ) : (
                        <div className='absolute left-[calc(100%+20px)] top-1/2 -translate-y-1/2 flex items-center whitespace-nowrap text-2xl font-light text-white sm:text-3xl'>
                          <span>{group.year}</span>
                          <span className='ml-1 text-base font-normal text-white/40 sm:text-lg'>
                            г
                          </span>
                        </div>
                      )}
                      <div ref={(el) => (nodeRefs.current[i] = el)}>
                        <TargetNode />
                      </div>
                    </div>

                    {/* Список пунктов достижений с комфортным отступом от линии и точки */}
                    <ul className='space-y-2.5 pr-11 pt-3'>
                      {group.items.map((item, j) => (
                        <li
                          key={j}
                          ref={(el) => (itemRefs.current[`${i}-${j}`] = el)}
                          className='flex items-center justify-end'
                        >
                          <span className='whitespace-nowrap text-right text-[11px] font-normal uppercase tracking-wider text-white/80 sm:text-xs'>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

export default AchievementsTimeline
