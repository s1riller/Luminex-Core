<script>
import data from "bootstrap/js/src/dom/data";
import axios from "axios";
export  default {

  data(){
    return{
      firstName:'',
      lastName:'',
      email:'',
      password:'',
    }
  },
  methods:{
    handlerSubmit(){
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      }
      console.log('submitted')
      console.log(data)
    },

    signup() {
      const payload = {

        username: (this.email.split('@'))[0],
        email: this.email,
        password: this.password,
        // Добавьте другие данные, если необходимо
      };

      // Здесь вы можете использовать Axios для выполнения запроса
      axios.post('http://127.0.0.1:8000/auth/users/', payload)
          .then(response => {
            // Обработайте успешный ответ от сервера здесь
            console.log('Регистрация прошла успешно!', response.data);
          })
          .catch(error => {
            // Обработайте ошибку здесь
            console.error('Произошла ошибка при регистрации:', error);
          });
    }


  }
}
</script>

<template>
  <form @submit.prevent="signup">
    <h3>Sign up</h3>

  <div class="form-group">
    <label>Имя</label>
    <input type="text" class="form-control" v-model="firstName" placeholder="Имя"/>
  </div>

    <div class="form-group">
      <label>Фамилия</label>
      <input type="text" class="form-control"  v-model="lastName"  placeholder="Фамилия"/>
    </div>
    <div class="form-group">
      <label>Почта</label>
      <input type="email" class="form-control"  v-model="email" placeholder="Почта"/>
    </div>

    <div class="form-group">
      <label>Пароль</label>
      <input type="password" class="form-control" v-model="password" placeholder="Пароль"/>
    </div>

    <button class="btn btn-primary btn-block">Зарегистрироваться</button>
  </form>
</template>

<style scoped>

</style>