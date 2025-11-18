const modal = document.getElementById("modal");
const closeBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");
const declineBtn = document.getElementById("decline-btn");
const choiceBtnModal = document.getElementById("modal-choice-btns");

//Display the modal
setTimeout(() => {
  modal.style.display = "inline";
}, 1500);

//Close the modal x
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

/*reverse*/

declineBtn.addEventListener("mouseover", () => {
  choiceBtnModal.classList.toggle("reverse");
});

//Consent form
consentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const consentFormData = new FormData(consentForm);
  const userName = consentFormData.get("name");

  document.getElementById(
    "modal-text"
  ).innerHTML = `<div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
</div>`;

  consentForm.style.display = "none";

  setTimeout(() => {
    document.getElementById("uploadText").textContent = `Making the sale...`;
  }, 1500);

  setTimeout(() => {
    document.getElementById(
      "modal-inner"
    ).innerHTML = `Thanks <span class="modal-display-name">${userName} </span>, you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="devil-gif">
        <img src="images/devil-robot.gif">
    </div>`;

    closeBtn.disabled = false;
  }, 3000);
});
