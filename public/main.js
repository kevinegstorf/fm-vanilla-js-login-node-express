document.getElementById("submit").addEventListener("click", () => {
  console.log("You finally clicked without jQuery");
});

myFunction = () => {
  const x = document.getElementsByClassName("toggle");
  const y = document.getElementsByClassName("login-form");
  x[1].classList.toggle("hide");
  x[0].classList.toggle("hide");
  x[0].classList.toggle("ease");
  y[0].classList.toggle("ease");
};


