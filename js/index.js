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

document
  .getElementById("my-down-button-open")
  .addEventListener("click", function () {
    document.getElementById("my-down-modal").classList.add("is-open");
  });

document
  .getElementById("modal-down-button-close")
  .addEventListener("click", function () {
    document.getElementById("my-down-modal").classList.remove("is-open");
  });

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
