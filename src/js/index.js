const btnSubmit = document.querySelector(".btn");
const thankYou = document.querySelector(".thank-you");
const rates = document.querySelectorAll(".itens");
const rating = document.getElementById("rating");

btnSubmit.addEventListener("click", () => {
  thankYou.classList.add("ativo");
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
