<template>
  <header class="p-3 bg-discord-blue gg-sans">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <router-link to="/" class="nav-link px-2 text-white">Домой</router-link>
          <router-link to="/Testing" class="nav-link px-2 text-white">Тестирование</router-link>
          <router-link to="/Performance" class="nav-link px-2 text-white">Эффективность</router-link>
          <router-link to="/Statistic" class="nav-link px-2 text-white">Статистика</router-link>
          <li><a href="#" class="nav-link px-2 text-white">About</a></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control form-control-dark text-bg-white" placeholder="Поиск" aria-label="Search">
        </form>

        <div class="text-end" v-if="!user">


          <button type="button" class="btn btn-outline-light me-2 rounded-5" data-bs-toggle="modal" data-bs-target="#signinModal">
            Войти
          </button>
          <!-- Кнопка-триггер модального окна регистрации -->
          <button type="button" class="btn bg-light rounded-5" data-bs-toggle="modal" data-bs-target="#signupModal">
            Нужна учетная запись?
          </button>

        </div>
      </div>
    </div>

    <!-- Модальное окно регистрации -->
    <form @submit.prevent="handlerSubmit" class="modal fade blur" id="signupModal" tabindex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content p-4 mb-2 bg-white">
          <div class="modal-header">
            <h5 class="modal-title text-black" id="signupModalLabel">Рады видеть вас!</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label class="text-black mb-1">Адрес электронной почты <span class=text-discord-red>*</span></label>
              <input type="email" v-model="email" class="form-control" />
            </div>
            <div class="form-group pt-2">
              <label class="text-black mb-1">Пароль <span class=text-discord-red>*</span></label>
              <input type="password" v-model="password" class="form-control" />
            </div>

            <div class="form-group pt-2">
              <label class="text-black mb-1">День рождения <span class=text-discord-red>*</span></label>
              <input type="date" class="form-control" v-model="birthday" name="birthday" placeholder="Дата">
            </div>


          </div>



          <div class="modal-footer d-flex justify-content-center">
            <button type="button" @click="signup" class="btn btn-success text-white rounded-5">Зарегистрироваться</button>
          </div>
        </div>
      </div>
    </form>


    <!-- Модальное окно входа -->
    <form class="modal fade blur" id="signinModal" tabindex="-1" aria-labelledby="signinModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content p-3 mb-2">
          <div class="modal-header">
            <h5 class="modal-title" id="signinModalLabel">С возвращением!</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Закрыть"></button>
          </div>

          <div class="modal-body">
            <div class="form-group pt-2">
              <label class="text mb-1">Адрес электронной почты <span class=text-discord-red>*</span></label>
              <input type="email" class="form-control" />
            </div>
            <div class="form-group pt-2">
              <label class="text mb-1">Пароль <span class=text-discord-red>*</span></label>
              <input type="password" class="form-control" />
            </div>
          </div>

          <div class="modal-footer d-flex justify-content-between align-items-center">
            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#signinModal">
              Забыл пароль
            </button>
            <button type="button" class="btn bg-discord-blue text-white rounded-5">Войти</button>

          </div>





        </div>
      </div>

    </form>

  </header>


</template>

<script>

import Calendar from "@/components/calendar.vue";
import "@/static/discord.css";
import axios from "axios";
export default {
  components: {Calendar},

  name: 'Navbar',
  data(){
    return{
      API_URL:'http://127.0.0.1:8000',
      user: null,
      email: '',
      password: '',
      birthday: '',
      isLoading: false
    }
  },
  methods: {
    async signup() {
      this.isLoading = true;

      try {
        const response = await axios.post(
            `${this.API_URL}/auth/users/`,
            {
              birth_date: this.birthday,
              username: this.email,
              password: this.password
            },
            {
              headers: { 'Content-Type': 'application/json' }
            }
        );

        this.user = response.data;
        this.isLoading = false;
        console.log('Успеншая регистрация'); // Вывести сообщение "OK" в консоль
      } catch (error) {
        // Обработка ошибки, если запрос не удался
        console.error(error);
        this.isLoading = false;
      }
    },
    log() {
      console.log('Hello')
    }
  }
}
</script>

<style scoped>
.blur{
  backdrop-filter: blur(2px);
}
.bg-discord-blue{
  background-color: #5865F2;
}
.gg-sans{
  font-family: "gg sans", sans-serif;
}
.bg-discord-black{
  background-color: #23272A;
}
.text-discord-red{
  color: #ED4245;
}

.form-control-color-discord-black:focus{
  width: 100%;
  height: 48px;
  border: 2px solid #3626a7;
  background: rgba(54,38,167,0.32);
  border-radius: 8px;
  text-align: center;
  color: #fff;
  font-size: 24px;
}

.form-control-color-discord-black{
  width: 100%;
  height: 48px;
  border: 2px solid #3626a7;
  background: rgba(54,38,167,0.32);
  border-radius: 8px;
  text-align: center;
  color: #fff;
  font-size: 24px;
}
</style>