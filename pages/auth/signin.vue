<template>
  <div class="sign">
    <div class="team sign">
      <h1 class="sign__title">Вход в систему</h1>
      <form action="/" class="sign-form">
        <div class="conten-err" :class="{ 'active': !errorFlag }">
          Не верный пароль или имя пользователя
        </div>
        <div class="sign-inputs">
          <label for="email" class="sign-input__text">Имя пользователя</label>
          <input type="text" name="name" id="email" class="sign-input" placeholder="Введите свой логин"
            v-model="user.name">
        </div>
        <div class="sign-inputs">
          <label for="password" class="sign-input__text">Пароль</label>
          <input type="text" name="password" id="password" class="sign-input" placeholder="Введите свой пароль"
            v-model="user.password">
        </div>
        <div class="btn cab-scor__button sign__link button" @click="login(user)">
          <!-- <nuxt-link to="/" class="sign__link button">Войти</nuxt-link> -->
          Войти
        </div>

      </form>
      <nuxt-link to="/auth/signup" class="sign__link">Зарегистрироваться</nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'


export default {
  name: "signin",
  layout: 'clear',
  data() {
    return {
      title: 'Привет, мир!',
      description: 'Это мой компонент.',
      cards_filter: {
        id: 'all',
        cards: []
      },
      local_cards: [],
      user: {
        name: '',
        password: '',
        error: this.errorFlag
      }
    };
  },
  computed: {
    ...mapState({
      cards: (state) => state.catalog.cards,
      errorFlag: (state) => state.log.error401
    }),
  },
  methods: {
    ...mapActions({
      login: 'log/login'
    }),
    // authOp(){
    //   this.checkAccount(this.user)
    // }
  }
}
</script>

<style ></style>
