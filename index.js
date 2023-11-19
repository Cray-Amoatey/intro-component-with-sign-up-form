const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateFisrtName();
  validateLastName();
  validateEmail();
  validatePassword();
});

const errorImage = document.querySelector(".error-image");
const errorMessage = document.querySelector(".error-message");

const setError = (inputElement, errorImage, errorMessage) => {
  inputElement.parentElement.classList.add("input-error");
  errorImage.style.display = "block";
  errorMessage.style.display = "block";
};

const setSucces = (inputElement, errorImage, errorMessage) => {
  inputElement.parentElement.classList.remove("input-error");
  inputElement.parentElement.classList.add("input-success");
  errorImage.style.display = "none";
  errorMessage.style.display = "none";
};

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const firstName = document.getElementById("firstname");

const validateFisrtName = () => {
  const firstnameValue = firstName.value.trim();
  const firstnameErrorImage = document.getElementById("firstNameErrorImage");
  const firstnameErrorMessage = document.querySelector(".firstname-error");

  if (firstnameValue === "" || firstnameValue.length < 2) {
    setError(firstName, firstnameErrorImage, firstnameErrorMessage);
  } else {
    setSucces(firstName, firstnameErrorImage, firstnameErrorMessage);
  }
};

const lastName = document.getElementById("lastname");

const validateLastName = () => {
  const lastnameValue = lastName.value.trim();
  const lastnameErrorImage = document.getElementById("lastNameErrorImage");
  const lastnameErrorMessage = document.querySelector(".lastname-error");

  if (lastnameValue === "" || lastnameValue.length < 2) {
    setError(lastName, lastnameErrorImage, lastnameErrorMessage);
  } else {
    setSucces(lastName, lastnameErrorImage, lastnameErrorMessage);
  }
};

const email = document.getElementById("email");

const validateEmail = () => {
  const emailErrorImage = document.getElementById("emailErrorImage");
  const emailErrorMessage = document.querySelector(".email-error");

  if (!isValidEmail(email.value)) {
    setError(email, emailErrorImage, emailErrorMessage);
  } else {
    setSucces(email, emailErrorImage, emailErrorMessage);
  }
};

const password = document.getElementById("password");

const validatePassword = () => {
  const passwordValue = password.value.trim();
  const passwordErrorImage = document.getElementById("passwordErrorImage");
  const passwordErrorMessage = document.querySelector(".password-error");

  if (passwordValue === "" || passwordValue.length < 8) {
    setError(password, passwordErrorImage, passwordErrorMessage);
  } else {
    setSucces(password, passwordErrorImage, passwordErrorMessage);
  }
};
