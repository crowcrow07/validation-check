// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.

let elInputUserName = document.querySelector("#username");
let elInputPassword = document.querySelector("#password");
let elInputPasswordRetype = document.querySelector("#password-retype");
let elFailureMessage = document.querySelector(".failure-message");
let elSuccessMessage = document.querySelector(".success-message");
let elMismatchMessage = document.querySelector(".mismatch-message");

elInputUserName.onkeyup = function () {
  if (isMoreThan4Length(elInputUserName.value)) {
    elSuccessMessage.classList.remove("hide");
    elFailureMessage.classList.add("hide");
  } else {
    elSuccessMessage.classList.add("hide");
    elFailureMessage.classList.remove("hide");
  }
};

elInputPasswordRetype.onkeyup = function () {
  if (isMatch(elInputPassword.value, elInputPasswordRetype.value)) {
    elMismatchMessage.classList.add("hide");
  } else {
    elMismatchMessage.classList.remove("hide");
  }
};

function isMoreThan4Length(value) {
  return value.length >= 4;
}

function isMatch(password1, password2) {
  return password1 === password2;
}
