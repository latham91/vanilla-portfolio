const contactBtn = document.querySelector(".btn-contact");
const modal = document.querySelector(".modal-bg");
const closeBtn = document.querySelector(".btn-close");
const modalSend = document.querySelector(".btn-send");

contactBtn.addEventListener("click", () => {
  modal.classList.remove("modal-hidden");
  modal.classList.add("modal-visible");
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("modal-hidden");
  modal.classList.remove("modal-visible");
});

modalSend.addEventListener("click", () => {
  alert("Message sent!");
  modal.classList.add("modal-hidden");
  modal.classList.remove("modal-visible");
});
