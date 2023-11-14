const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateFisrtName();
  validateLastName();
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


