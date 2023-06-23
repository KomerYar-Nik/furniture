<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="header-title">
            <h2 class="header-titile__el header-title">
              Качество и уют
              <br>
              Главные принципы нашей компании
            </h2>
          </div>
          <p class="header-subtitle text-center">
            Наш опытный мастер изготовят для вас качественную корпусную и
            встроенную мебель на заказ.
          </p>
          <button class="header-button button mx-auto">Заказать</button>
        </div>
        <div class="header-items d-flex">
          <div class="header-items__el">
            <!-- <img src="/img/header/1.png" alt="" class="header-items__img"> -->
            <p class="header-items__title">Гардеробы и Шкафы</p>
          </div>
          <div class="header-items__el">
            <p class="header-items__title">Кухонная мебель</p>
          </div>
          <div class="header-items__el">
            <p class="header-items__title">Спальная мебель</p>
          </div>
          <div class="header-items__el">
            <p class="header-items__title">Офисная мебель</p>
          </div>
          <div class="header-items__el">
            <p class="header-items__title">Мебель для гостинной</p>
          </div>

        </div>
      </div>
    </header>
    <section class="values ">
      <div class="values-content">
        <div class="values-item">
          <img src="/img/value_1.png" alt="" class="values-item__img">
          <p class="values-item__title">Замер и и 3D проект бесплатно!</p>
        </div>
        <div class="values-item">
          <img src="/img/value_2.png" alt="" class="values-item__img">
          <p class="values-item__title">Доставка и сборка в подарок!</p>
        </div>
        <div class="values-item">
          <img src="/img/value_3.png" alt="" class="values-item__img">
          <p class="values-item__title">
            Рассрочка без банка и
            переплат до 6 месяцев!
          </p>
        </div>
      </div>
    </section>
    <section class="idea ">
      <h2 class="idea-title">От Идеи до Реальности</h2>
      <div class="idea-items container">
        <div class="idea-items-el">
          <img src="/img/idea/1.png" alt="" class="idea-items__img">
          <p class="idea-items__title">Вызвать дизайнер</p>
          <p class="idea-items__subtitle">Выезд. замер и проект бесплатно</p>
        </div>
        <div class="idea-items-el">
          <img src="/img/idea/2.png" alt="" class="idea-items__img">
          <p class="idea-items__title">Согласовать проект</p>
          <p class="idea-items__subtitle">Дизайнер предложит оптимальные варианты</p>
        </div>
        <div class="idea-items-el">
          <img src="/img/idea/3.png" alt="" class="idea-items__img">
          <p class="idea-items__title">Внести предоплату</p>
          <p class="idea-items__subtitle">Картой, наличными или беспроцентной рассрочкой</p>
        </div>
        <div class="idea-items-el">
          <img src="/img/idea/4.png" alt="" class="idea-items__img">
          <p class="idea-items__title">Получить мебель</p>
          <p class="idea-items__subtitle">Доставим и соберём абсолютно бесплатно</p>
        </div>
      </div>
      <div class="idea-action">
        <h4 class="idea-action__title">Сделай первый шаг!</h4>
        <button class="idea-action__button button">
          <img src="/img/idea/phone.png" alt="">
          <span>Вызвать замерщика </span>
        </button>
      </div>
    </section>
    <section class="about">
      <div class="about-content container">
        <h2 class="about__title text-center">О нас</h2>
        <p class="about__text">Добро пожаловать в компанию "Регина" -
          ваш надёжный партнёр в создании качественной и
          уютной корпусной мебели на заказ. Мы гордимся
          своим опытным мастером, который с любовью и
          профессионализмом изготавливает каждое изделие.
          <br>
          <br>
          В компании "Регина" мы ценим качество и стараемся превзойти ожидания наших клиентов. Мы с удовольствием
          предоставляем гарантию на каждое изготовленное нами изделие, потому что мы уверены в его долговечности и
          надёжности. Ваша удовлетворенность и комфорт - наша главная цель.
        </p>
      </div>
    </section>
    <section class="jobs">
      <h3 class="jobs__title text-center">Наши работы</h3>
      <div class="jobs-items container">
        <img src="/img/jobs/1.png" alt="" class="jobs-items__el">
        <img src="/img/jobs/2.png" alt="" class="jobs-items__el">
        <img src="/img/jobs/3.png" alt="" class="jobs-items__el">
      </div>
    </section>
    <section class="entry">
      <h2 class="entry__title text-center">Запишись бесплатную на <br>констультациюи выезд замерщика</h2>
      <div class="entry-form container">
        <div class="entry-form-container">
          <input type="text" class=" entry-form__el" placeholder="Введите имя">
          <div class="entry-form__icon user fa-search"></div>
        </div>
        <div class="entry-form-container">
          <input type="text" class=" entry-form__el" placeholder="Введите номер телефона">
          <div class="entry-form__icon phone fa-search"></div>
        </div>
        <button class="button entry-form__button">Записаться на замер</button>
      </div>
    </section>
  </div>
</template>

<script>

//import { mapActions, mapGetters, mapState } from 'vuex'


export default {
  name: 'IndexPage',
  layout: 'main_layout',
  components: {
    
  },
  data: () => ({
    // ...mapState({
    //   sportEvent: 'getItem/sportEvent'
    // })
  }),
  async mounted() {
    // this.$nextTick(() => {
    //   this.$nuxt.$loading.start()
    //   this.$nuxt.$loading.finish()
    // })


  },
  computed: {
    // ...mapGetters({
    //   flag: 'getItem/CloaseLoadingGet',
    // }),
  },
  methods: {
    // ...mapActions({
    //   flag: 'getItem/CloaseLoadingGet',
    // }),
  }

}
</script>


