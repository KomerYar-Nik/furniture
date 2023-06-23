<template>
  <div class="sign register">
    <div class="team sign ">
   
      <h1 class="sign__title">Регистрация</h1>
      <form class="sign-form">
        <div class="sign-inputs">
          <label for="name" class="sign-input__text">Имя пользователя</label>
          <input type="text" name="name" id="name" class="sign-input" placeholder="Введите свою имя" v-model="user.name">
        </div>
        <div class="sign-inputs">
          <label for="password" class="sign-input__text">Пароль</label>
          <input type="text" name="password" id="password" class="sign-input" placeholder="Введите свой пароль"
            v-model="user.password">
        </div>
        <div class="btn cab-scor__button sign__link button" @click="registr(user)">
          Зарегистрироваться
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'

export default {
  name: "signin",
  layout: 'clear',
  computed: {
    ...mapState({
      user: (state) => state.log.user,

    })
  },
  data() {
    return {
      user: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      registr: 'log/registr'
    }),
  }
}
</script>

<style ></style>

