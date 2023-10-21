const inputControl = document.querySelector(".input-control");
const errorImage = inputControl.querySelector(".error-image");
const errorMessage = inputControl.querySelector(".error-message");

const setError = () => {
  errorImage.style.display = "block";
  errorMessage.style.display = "block";
  inputControl.classList.add("input-error");
};


const setSuccess = () => {
  errorImage.style.display = "none";
  errorMessage.style.display = "none";
  inputControl.classList.remove("input-error");
  inputControl.classList.add("input-success");
};


const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateFirstName();
});

const firstName = document.getElementById("firstname");

const validateFirstName = () => {
  const firstnameValue = firstName.value.trim();

  if (firstnameValue === "" && firstnameValue.length < 2) {
      setError();
    } else {
    setSuccess();
  }
};


