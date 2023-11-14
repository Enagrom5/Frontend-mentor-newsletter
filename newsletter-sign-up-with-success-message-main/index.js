const button = document.querySelector(".button");
const formulaire = document.querySelector(".formulaire");
const afterSubmit = document.querySelector(".aftersubmit");
const img = document.querySelector("img");
const dismiss = document.createElement("button");
const email = document.querySelector("input");
const label = document.querySelector("label");

dismiss.classList.add("dismiss");
dismiss.innerText = "Dismiss Message";
afterSubmit.appendChild(dismiss);

button.addEventListener("click", function () {
  event.preventDefault();
  afterSubmit.style.display = "flex";
  formulaire.style.display = "none";
  img.style.display = "none";
});
email.addEventListener("change", function (e) {
  email.value = e.target.value;
  if (email.value.includes("#") === true) {
    const error=document.createElement("p");
    label.appendChild(error);
    error.innerText="Valid email required";
    error.classList.add("error")
    email.style.backgroundColor = "rgba(255, 99, 71, 0.564)";
    email.style.color="white"
  }
 
});

