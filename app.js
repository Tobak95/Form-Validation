const form = document.querySelector("form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const captcha = document.querySelector("#captcha");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("form submitted");
  checkInputs();
});

//username ... empty, lenght < 5
function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  const captchaValue = captcha.value.trim();
  //REGEX
  let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  //password regex -- contains pattern and compositions
  let passwordregex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

  console.log(passwordregex.test(""));

  if (usernameValue === "") {
    setError(username, "Username is required");
  } else if (usernameValue.length < 5) {
    setError(username, "Username must be at least 5 characters");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!emailregex.test(emailValue)) {
    setError(email, "Invalid email address");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (!passwordregex.test(passwordValue)) {
    setError(
      password,
      "uppercase,lowercase,special characters with a minimum length of 8"
    );
  } else {
    setSuccess(password);
  }

  if (password2Value === "") {
    setError(password2, "Password2 is required");
  } else if (password2Value !== passwordValue) {
    setError(password2, "Passwords do not match");
  } else {
    setSuccess(password2);
  }

  if (captchaValue === "") {
    setError(captcha, "Authentication Failed");
  } else {
    setSuccess(captcha);
  }
}

//displaying error messages
function setError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.textContent = message;
}

function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//captcha value
captcha.addEventListener("input", (e) => {
  const img = document.querySelector("img");
  const text = e.target.value;
  const blurValue = 20 - text.length * 2;
  img.style.filter = `blur(${blurValue}px)`;

  if (blurValue <= 0) {
    setSuccess(captcha);
  } else {
    setError(captcha, "Text is not long enough");
  }
});

//regex --- this a regular expression
//check strings composition -- when we write a rejex, we text a value
//A-Z a-z 0-9     LINE 24, 41 AND 49

//show and hide fonctionality

const showBtn = document.querySelector(".showBtn");
showBtn.addEventListener("click", () => {
  const inputType = password.type;

  if (inputType === "password") {
    password.type = "text";
    showBtn.textContent = "HIDE";
  } else {
    password.type = "password";
    showBtn.textContent = "SHOW";
  }
});

const showBtn2 = document.querySelector(".showBtn2");
showBtn2.addEventListener("click", () => {
  const inputType = password2.type;

  if (inputType === "password") {
    password2.type = "text";
    showBtn2.textContent = "HIDE";
  } else {
    password2console.log("Form submitted");
    showBtn2.textContent = "SHOW";
  }
});