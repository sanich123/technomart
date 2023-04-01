const feedbackButton = document.querySelector(".contacts-button");
const feedback = document.querySelector(".feedback");
const closeButtonFeedback = feedback.querySelector(".close-button-feedback");
const feedbackName = document.querySelector(".feedback-item-input");
const feedbackForm = document.querySelector(".feedback-form");

feedbackButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.add("feedback-show");
  feedbackName.focus();
});

closeButtonFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.remove("feedback-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedback.classList.contains("feedback-show")) {
      evt.preventDefault();
      feedback.classList.remove("feedback-show");
    }
  }
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackName.value) {
    evt.preventDefault();
    feedback.classList.toggle("feedback-error");
  }
});
