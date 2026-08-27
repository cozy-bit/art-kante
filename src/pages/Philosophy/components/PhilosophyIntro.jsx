import introInterior from '../../../assets/images/home/design-idea-2.png'

export function PhilosophyIntro() {
  return (
    <section className='pt-6 sm:pt-10'>
      <h1 className='text-3xl sm:text-4xl lg:text-[42px] font-light tracking-wide text-white mb-8 sm:mb-12'>
        Философия
      </h1>

      <div className='grid grid-cols-1 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] gap-8 lg:gap-14 items-start'>
        <div className='relative aspect-[16/10] w-full overflow-hidden rounded-md border border-white/10 shadow-[12px_12px_30px_rgba(0,0,0,0.8)]'>
          <img
            src={introInterior}
            alt='Интерьер с камином от бюро АртКанте'
            className='absolute inset-0 h-full w-full object-cover opacity-40'
          />
          <div className='absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/80' />
          <div className='absolute inset-0 flex flex-col items-center justify-center leading-none select-none'>
            <span className='text-[15vw] sm:text-6xl lg:text-7xl font-extrabold tracking-[0.14em] text-[#e03122]/70 [text-shadow:2px_2px_1px_rgba(0,0,0,0.9),-1px_-1px_1px_rgba(255,255,255,0.06)]'>
              ART
            </span>
            <span className='text-[15vw] sm:text-6xl lg:text-7xl font-extrabold tracking-[0.14em] text-[#e03122]/70 [text-shadow:2px_2px_1px_rgba(0,0,0,0.9),-1px_-1px_1px_rgba(255,255,255,0.06)]'>
              KANTE
            </span>
          </div>
        </div>

        <div className='space-y-5 text-sm sm:text-[15px] leading-relaxed'>
          <p className='text-white/90'>
            Проектное бюро АртКанте — это смелый, порой эпатажный симбиоз
            архитектурных традиций и прогрессивного дизайна, разрушающий старую
            парадигму печного строительства.
          </p>
          <p className='text-white/45 font-light'>
            В основе нашей деятельности лежит постулат, что домашний очаг — это в
            первую очередь то, что объединяет всех членов семьи под одной крышей,
            наполняя их сердца добром, счастьем и любовью. И мы стремимся добавить
            в эту атмосферу ещё больше тепла и уюта, создавая безопасные печи и
            камины любого размера и сложности.
          </p>
          <p className='text-white/45 font-light'>
            Наша цель — переломить привычное представление о печах, выложенных из
            камня или кирпича, создать тренд на эстетически устойчивый дизайн вне
            огня. Мы проектируем неповторимые художественные объекты, которые
            можно рассматривать бесконечно. Создаём стильный и незаменимый элемент
            интерьера.
          </p>
        </div>
      </div>
    </section>
  )
}
