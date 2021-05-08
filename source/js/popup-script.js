let reviewButton = document.querySelector(".review-button");
let emotionsTextarea = document.querySelector(".emotions-textarea");
let popupFailure = document.querySelector(".popup-failure");
let popupFailureCloseButton = popupFailure.querySelector(".popup-failure__button")
let popupSuccess = document.querySelector(".popup-success");
let popupSuccessCloseButton = popupSuccess.querySelector(".popup-success__button");

reviewButton.addEventListener("click", function (evt) {
  if (!emotionsTextarea.value) {
    evt.preventDefault();
    popupFailure.classList.add("active");
  } else {
    evt.preventDefault();
    popupSuccess.classList.add("active");
  }
});

popupFailureCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupFailure.classList.remove("active");
});

popupSuccessCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupSuccess.classList.remove("active");
});
