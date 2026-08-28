import introArtkante from '../../../assets/images/philosophy/intro-artkante.png'

export function PhilosophyIntro() {
  return (
    <section className='pt-4 sm:pt-8'>
      <h1 className='mb-8 text-3xl font-light tracking-wide text-white/90 sm:mb-12 sm:text-[32px]'>
        Философия
      </h1>

      <div className='grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,505px)_minmax(0,1fr)] lg:gap-14'>
        <img
          src={introArtkante}
          alt='АРТ КАМИН — проектное бюро'
          className='w-full self-start rounded-none border border-white/10 shadow-2xl'
        />

        <div className='space-y-6 text-sm leading-relaxed sm:text-[15px]'>
          <p className='text-white/90'>
            Проектное бюро АртКанте — это смелый, порой эпатажный симбиоз
            архитектурных традиций и прогрессивного дизайна, разрушающий старую
            парадигму печного строительства.
          </p>
          <p className='text-white/45'>
            В основе нашей деятельности лежит постулат, что домашний очаг — это в
            первую очередь то, что объединяет всех членов семьи под одной крышей,
            наполняя их сердца добром, счастьем и любовью. И мы стремимся добавить
            в эту атмосферу еще больше тепла и уюта, создавая безопасные печи и
            камины любого размера и сложности.
          </p>
          <p className='text-white/45'>
            Наша цель — переломить привычное представление о печах, выложенных из
            камня или кирпича, создать тренд на эстетически устойчивый дизайн зон
            огня. Мы проектируем неповторимые художественные объекты, которые
            можно рассматривать бесконечно. Создаем стильный и незаменимый элемент
            интерьера.
          </p>
        </div>
      </div>
    </section>
  )
}
