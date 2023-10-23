const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateFisrtName();
});

 const errorImage = document.querySelector(".error-image")
 
const setError = (inputElement) => {
  inputElement.parentElement.classList.add("input-error");
  errorImage.style.display = "block";
};

const setSucces = (inputElement) => {
  inputElement.parentElement.classList.remove("input-error");
    inputElement.parentElement.classList.add("input-success");
    errorImage.style.display = "none"
};

const firstName = document.getElementById("firstname");

const validateFisrtName = () => {
  const firstnameValue = firstName.value.trim();
  const firstnameError = document.querySelector(".first-error");

  if (firstnameValue === "" || firstnameValue.length < 2) {
    setError(firstName, firstnameError);
  } else {
    setSucces(firstName);
  }
};
