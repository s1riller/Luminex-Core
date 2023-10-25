<template>
  <body class="d-flex bg-discord-gray vh-100">
  <div class="container">
    <div class="row">
      <div class="mx-auto">
        <div class="block bg-discord-black text-white d-flex justify-content-center align-items-center vh-100">
          <!-- Кнопка-триггер модального окна -->
          <button type="button" class="btn btn-lg btn-light fw-bold" data-bs-toggle="modal" data-bs-target="#acneModal">
            Начать
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Второе модальное окно -->
  <div class="modal fade" id="acneModal" tabindex="-1" aria-labelledby="acneModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Имеются ли элементы пост-акне?</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
        </div>
        <div class="modal-body">
          <div class="col-sm-6">
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
              <label class="form-check-label" for="gridRadios1">
                Нет
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
              <label class="form-check-label" for="gridRadios2">
                Да
              </label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Назад</button>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#skinTypeModal">Далее</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="skinTypeModal" tabindex="-1" aria-labelledby="skinTypeModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Тип кожи</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
        </div>
        <div class="modal-body">
          <div class="col-sm-6">
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
              <label class="form-check-label" for="gridRadios1">
                Нормальная
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
              <label class="form-check-label" for="gridRadios1">
                Сухая
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
              <label class="form-check-label" for="gridRadios1">
                Жирная
              </label>
            </div>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
            <label class="form-check-label" for="gridRadios1">
              Комбинированная
            </label>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#acneModal">Назад</button>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#imperfectionsModal">Далее</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="imperfectionsModal" tabindex="-1" aria-labelledby="imperfectionsModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="imperfectionsModalLabel">Какие имеются несовершенства</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
        </div>
        <div class="modal-body">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="acneCheckbox">
            <label class="form-check-label" for="acneCheckbox">Акне</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="scarsCheckbox">
            <label class="form-check-label" for="scarsCheckbox">Рубцы</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="scarsCheckbox">
            <label class="form-check-label" for="scarsCheckbox">Пигментационные нарушения</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="scarsCheckbox">
            <label class="form-check-label" for="scarsCheckbox">Морщины и линии</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="scarsCheckbox">
            <label class="form-check-label" for="scarsCheckbox">Потеря упругости</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="scarsCheckbox">
            <label class="form-check-label" for="scarsCheckbox">Сухость</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="scarsCheckbox">
            <label class="form-check-label" for="scarsCheckbox">Жирность</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="scarsCheckbox">
            <label class="form-check-label" for="scarsCheckbox">Расширенные поры</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="scarsCheckbox">
            <label class="form-check-label" for="scarsCheckbox">Покраснения</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="scarsCheckbox">
            <label class="form-check-label" for="scarsCheckbox">Шелушение</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="scarsCheckbox">
            <label class="form-check-label" for="scarsCheckbox">Темные круги под глазами</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="scarsCheckbox">
            <label class="form-check-label" for="scarsCheckbox">Неровный тон кожи</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="scarsCheckbox">
            <label class="form-check-label" for="scarsCheckbox">Сосудистая сетка</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="scarsCheckbox">
            <label class="form-check-label" for="scarsCheckbox">Розацеа</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="scarsCheckbox">
            <label class="form-check-label" for="scarsCheckbox">Гиперпигментация после солнечного воздействия</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="scarsCheckbox">
            <label class="form-check-label" for="scarsCheckbox">Пост-воспалительная гиперпигментация</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="scarsCheckbox">
            <label class="form-check-label" for="scarsCheckbox">Неверное исчезновение цвета</label>
          </div>
          <!-- Добавьте другие несовершенства в том же формате -->
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Назад</button>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#skinTZoneTypeModal">Далее</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="skinTZoneTypeModal" tabindex="-1" aria-labelledby="skinTypeModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Как оцениваете состояние пор</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
        </div>
        <div class="modal-body">
          <div class="col-sm-6">
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
              <label class="form-check-label" for="gridRadios1">
                Не расширенные
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
              <label class="form-check-label" for="gridRadios1">
                Расширенные
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
              <label class="form-check-label" for="gridRadios1">
                Расширенные в T-зоне
              </label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#imperfectionsModal">Назад</button>
          <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#calcResultModal">Готово</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="calcResultModal" tabindex="-1" aria-labelledby="acneModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Анализ</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
        </div>
        <div class="modal-body">
        ВЫ ИМеете замечательную кожу
        </div>

      </div>
    </div>
  </div>
  </body>

</template>


<style>

</style>

<script>
import "@/static/discord.css";
export default {

}
</script>