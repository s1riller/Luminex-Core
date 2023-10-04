<template>
  <!-- Кнопка-триггер модального окна регистрации -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#signupModal">
    Регистрация
  </button>
  <!-- Кнопка-триггер модального окна входа-->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#signinModal">
    Войти
  </button>

  <!-- Модальное окно регистрации -->
  <div class="modal fade" id="signupModal" tabindex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content p-3 mb-2 bg-white">
        <div class="modal-header">
          <h5 class="modal-title" id="signupModalLabel">Регистрация</h5>
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
        <div class="modal-footer d-flex justify-content-center">
          <button type="button" class="btn btn-dark">Зарегистрироваться</button>
        </div>
      </div>
    </div>
  </div>


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
          <div class="modal-footer d-flex justify-content-center">
            <button type="button" class="btn btn-dark">Войти</button>
          </div>
        </div>
      </div>

  </div>
</template>

<script>

</script>