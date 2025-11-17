const modal = document.getElementById("modal");
const closeBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");

setTimeout(() => {
  modal.style.display = "inline";
}, 1500);

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

consentForm.addEventListener("submit", (e) => {
  event.preventDefault();
  console.log("Form submitted");
});
