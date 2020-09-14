let typeOptions = {
  0: "Λαχανικα",
  1: "Κρεατα",
  2: "Ψαρια",
  3: "Καβα",
  4: "'Α υλες",
  5: "'Β υλες",
  6: "Αναλωσιμα",
};
document.addEventListener("DOMContentLoaded", () => {
  typeOutput.innerHTML = `<i class="fas fa-arrow-circle-left"></i><br>Επιλεξτε ειδος`;
  amount.value = "";
});
const output = document.querySelector("span");
const expType = document.querySelector(".exp-type");
const typeOutput = document.querySelector(".type-output");
const amount = document.querySelector(".amount");
const typeSubmit = document.querySelector(".type-submit");
const amountSubmit = document.querySelector(".amount-submit");
const check = document.querySelector(".check");
const error = document.querySelector(".error");

amount.addEventListener("input", () => {
  amountSubmit.innerHTML = `${amount.value} €`;
  checkResult();
});

Object.keys(typeOptions).forEach((el, i) => {
  expType.innerHTML += `<li class='type-item'>${
    Object.values(typeOptions)[i]
  }</li>`;
});
expType.addEventListener("click", (e) => {
  if (e.target.classList.contains("type-item")) {
    typeSubmit.innerHTML = e.target.textContent;
    checkResult();
  }
});

function checkResult(){
  if (amount.value < 0 || amount.value>250) {
    check.style.display = "none";
    error.style.display = "inline-block";
  }
  else if (amountSubmit.innerHTML !== "" && typeSubmit.innerHTML !== "" & amount.value > 0 && amount.value<250) {
    error.style.display = "none";
    check.style.display = "block";
   
  }
}