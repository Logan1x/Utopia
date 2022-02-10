console.log("Hello World");

const modal = document.getElementById("modal");
const modalBtn = document.querySelectorAll(".modalBtn");
const closeBtn = document.getElementById("closeModal");

modalBtnList = [...modalBtn];

modalBtn.forEach((item) => {
  item.addEventListener("click", function () {
    modal.classList.toggle("show-modal");
  });
});

closeBtn.addEventListener("click", function () {
  modal.classList.toggle("show-modal");
});
