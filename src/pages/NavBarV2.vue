<template>
  <nav class="navbar bg-white navbar-expand-lg">
    <div class="container-fluid">
      <div class="bg-dark rounded-end-pill d-flex">
      <a class="navbar-brand text-success">
        <img src="@/images/hamster-icon.png"   width="26" height="26" alt="hamster-ico">BelleNook</a>
      </div>

      <!-- Кнопка-триггер модального окна регистрации -->
      <button type="button" class="btn btn-outline-white ms-auto" data-bs-toggle="modal" data-bs-target="#signupModal">
        Регистрация
      </button>
      <!-- Кнопка-триггер модального окна входа-->
      <button type="button" class="btn btn-outline-dark ms-2" data-bs-toggle="modal" data-bs-target="#signinModal">
       Войти
      </button>
    </div>
  </nav>

  <!-- Модальное окно регистрации -->
  <form @submit.prevent="handlerSubmit" class="modal fade" id="signupModal" tabindex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content p-3 mb-2 bg-white">
        <div class="modal-header">
          <h5 class="modal-title" id="signupModalLabel">Регистрация</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>Email</label>
            <input type="email" v-model="email" class="form-control" />
          </div>
          <div class="form-group">
            <label>Пароль</label>
            <input type="password" v-model="password" class="form-control" />
          </div>
        </div>
        <div class="modal-footer d-flex justify-content-center">
          <button type="button" class="btn btn-dark">Зарегистрироваться</button>
        </div>
      </div>
    </div>
  </form>


  <!-- Модальное окно входа -->
  <div class="modal fade" id="signinModal" tabindex="-1" aria-labelledby="signinModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content p-3 mb-2 bg-white">
        <div class="modal-header">
          <h5 class="modal-title" id="signinModalLabel">Вход</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" />
          </div>
          <div class="form-group">
            <label>Пароль</label>
            <input type="password" class="form-control" />
          </div>
        </div>

        <div class="modal-footer d-flex justify-content-between align-items-center">
          <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#signinModal">
            Забыл пароль
          </button>
          <button type="button" class="btn btn-dark">Войти</button>

        </div>



      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";
export default {

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
          email: this.email,
          password: this.password,
        }
        console.log('submitted')
        console.log(data)
      },

      signup() {
        const payload = {

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

};
</script>
<style>
.navbar {
  height: 50px;
  background-color: gray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns {
  margin-left: auto;
  padding: 0 15px;
}
</style>
