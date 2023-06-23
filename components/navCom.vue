<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="/">
         <img src="/img/logo.png" alt="" class="footer__logo">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav mx-auto">
            <a class="nav-link active" aria-current="page" href="/">Главная</a>
            <a class="nav-link" href="/catalog">Каталог</a>
            <a class="nav-link" href="about">О нас</a>
            <a class="nav-link" href="installments">Расcрочка</a>
            <a class="nav-link" href="warranty">Гарантия</a>
            <a class="nav-link" href="/contact">Контакты</a>
          </div>
          <div class="navbar-nav"  v-if="user.name === ''">
            <a class="nav-link" href="/auth/signin">Войти</a>
          </div>
          <div class="user r" v-if="user.name !== ''">
                <p>{{user.name}}</p>
                <img src="/img/exit.png" alt="" class="exit" @click="exit()">
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
  
<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'

export default {

  data() {
    return {
      title: 'Привет, мир!',
      description: 'Это мой компонент.',
    };
  },
  computed: {
        ...mapState({
          user: (state) => state.log.user,
          cards: (state) => state.catalog.cards
        }),
        ...mapGetters([
      'getUserName'
    ])
    },
    methods: {
      ...mapMutations({
        exit: 'log/exit'
    })
    }
};
</script>
  
<style scoped>
/* Стили для вашего компонента */
</style>
  