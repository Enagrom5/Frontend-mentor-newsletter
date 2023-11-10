const button = document.querySelector(".button");
const formulaire = document.querySelector(".formulaire");
const afterSubmit = document.querySelector(".aftersubmit");
const img = document.querySelector("img");
const dismiss=document.createElement("button");

dismiss.classList.add("dismiss");
dismiss.innerText="Dismiss Message";
afterSubmit.appendChild(dismiss);

button.addEventListener("click", function () {
  event.preventDefault();
  afterSubmit.style.display = "flex";
  formulaire.style.display = "none";
  img.style.display="none"
  
});



