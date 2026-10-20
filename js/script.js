"use strict";

// Готовые ссылки на элементы страницы.
const input = document.querySelector("#task-input");
const preview = document.querySelector("#task-preview");
const form = document.querySelector("#task-form");
const list = document.querySelector("#task-list");
const message = document.querySelector("#message");
const clearButton = document.querySelector("#clear-button");
const helpButton = document.querySelector("#help-button");
const helpText = document.querySelector("#help-text");

// ГОТОВЫЙ ПРИМЕР: событие click показывает или скрывает подсказку.
helpButton.addEventListener("click", () => {
  helpText.hidden = !helpText.hidden;
});

// ЗАДАНИЕ 1. Событие input: показывайте введённый текст в предпросмотре.
input.addEventListener("input", () => {
  // TODO 1. Присвойте preview.textContent значение input.value.
  // TODO 2. Если input.value.trim() === "", покажите подсказку:
  //         "Здесь появится ваша задача".
  preview.textContent = input.value;
  if(input.value.trim() === ""){
    preview.textContent = "Здесь появится ваша задача";
  }
});

// ЗАДАНИЕ 2. Событие submit: добавьте задачу в список.
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Готово: страница не перезагружается.
  preview.textContent = input.value.trim();

  if (preview.textContent === "") {
    message.textContent = "Введите название задачи.";
    return;
  }

  // TODO 3. Создайте li: const item = document.createElement("li");
  const item = document.createElement("li");

  // TODO 4. Присвойте item.className = "task-item";
item.className = "task-item";
  // TODO 5. Запишите title в item.textContent.
  item.textContent = preview.textContent;

  // TODO 6. Добавьте item в list через list.append(item).
  list.append(item);
  // TODO 7. Очистите поле: input.value = "";
  input.value = "";
   list.replaceChildren;
  // TODO 8. Верните исходный текст в preview.textContent.
preview.textContent = "Здесь появится ваша задача";

  // TODO 9. Выведите сообщение: "Задача добавлена!".
   message.textContent = "Задача добавлена!";
});

// ЗАДАНИЕ 3. Событие click: очистите список задач.
clearButton.addEventListener("click", () => {
  // TODO 10. Удалите элементы списка: list.replaceChildren();
  list.replaceChildren();
  // TODO 11. Покажите сообщение: "Список очищен.".
  message.textContent = "Список очищен";

});
