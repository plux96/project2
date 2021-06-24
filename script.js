"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

const modalToggle = function () {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++) {
  console.log(
    btnOpenModal[i].addEventListener("click", function () {
      console.log(`Click ${i}`);
      modal.classList.toggle("hidden");
      overlay.classList.toggle("hidden");
    })
  );
}

btnCloseModal.addEventListener("click", modalToggle);

overlay.addEventListener("click", modalToggle);

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    modalToggle();
  }
});
