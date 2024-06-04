document
  .getElementById("my-button-open")
  .addEventListener("click", function () {
    document.getElementById("my-modal").classList.add("is-open");
  });

document
  .getElementById("modal-button-close")
  .addEventListener("click", function () {
    document.getElementById("my-modal").classList.remove("is-open");
  });

// document
//   .getElementById("my-down-button-open")
//   .addEventListener("click", function () {
//     document.getElementById("my-down-modal").classList.add("is-open");
//   });

// document
//   .getElementById("modal-down-button-close")
//   .addEventListener("click", function () {
//     document.getElementById("my-down-modal").classList.remove("is-open");
//   });

// document.addEventListener("DOMContentLoaded", function () {
//   const myButtonOpen = document.getElementById("my-button-open");
//   const myModal = document.getElementById("my-modal");
//   const modalButtonClose = document.getElementById("modal-button-close");

//   const myDownButtonOpen = document.getElementById("my-down-button-open");
//   const myDownModal = document.getElementById("my-down-modal");
//   const modalDownButtonClose = document.getElementById(
//     "modal-down-button-close"
//   );

//   if (myButtonOpen && myModal && modalButtonClose) {
//     myButtonOpen.addEventListener("click", function () {
//       myModal.classList.add("is-open");
//     });

//     modalButtonClose.addEventListener("click", function () {
//       myModal.classList.remove("is-open");
//     });
//   }

//   if (myDownButtonOpen && myDownModal && modalDownButtonClose) {
//     myDownButtonOpen.addEventListener("click", function () {
//       myDownModal.classList.add("is-open");
//     });

//     modalDownButtonClose.addEventListener("click", function () {
//       myDownModal.classList.remove("is-open");
//     });
//   }
// });
// Отримуємо елементи
const openButton = document.getElementById("my-down-button-open");
const modal = document.getElementById("my-down-modal");
const closeButton = document.getElementById("modal-down-button-close");
const form = modal.querySelector("form");
const sendButton = form.querySelector(".send-btn");
const inputs = form.querySelectorAll("input, textarea");
const checkbox = document.getElementById("user-privacy");

// Функція для відкриття модального вікна
function openModal() {
  modal.style.display = "block";
}

// Функція для закриття модального вікна
function closeModal() {
  modal.style.display = "none";
  form.reset(); // Очищуємо форму
  checkInputs(); // Перевіряємо інпути після очищення
}

// Функція для перевірки заповненості полів
function checkInputs() {
  let allFilled = true;
  inputs.forEach((input) => {
    if (input.type !== "checkbox" && input.value.trim() === "") {
      allFilled = false;
    }
  });
  sendButton.disabled = !allFilled || !checkbox.checked;
}

// Функція для показу сповіщення
function showAlert(message) {
  alert(message);
}

// Додаємо обробники подій
openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

// Перевірка інпутів при введенні
inputs.forEach((input) => {
  input.addEventListener("input", checkInputs);
});

// Перевірка чекбоксу при зміні
checkbox.addEventListener("change", checkInputs);

// Закриваємо модальне вікно при відправці форми
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Зупиняє стандартну відправку форми
  if (!sendButton.disabled) {
    closeModal();
  } else {
    showAlert("Please fill out all fields and accept the privacy policy.");
  }
});

// Закриття модального вікна при натисканні за його межами
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    closeModal();
  }
});

// Перевірка інпутів при завантаженні сторінки
checkInputs();

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".footer-form");
  const emailInput = document.querySelector(".footer-input");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Запобігаємо стандартній поведінці форми

    const email = emailInput.value.trim();

    if (validateEmail(email)) {
      // Виконайте дії при успішній перевірці email
      alert("Thank you for subscribing!");

      // Очищення поля введення після успішної підписки
      emailInput.value = "";
    } else {
      // Повідомлення користувачеві про некоректний email
      alert("Please enter a valid email address.");
    }
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});
