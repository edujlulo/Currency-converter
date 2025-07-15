const buttonCurrency1 = document.getElementById("button-currency1");
const buttonCurrency2 = document.getElementById("button-currency2");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

buttonCurrency1.addEventListener("click", function () {
  input1.value = parseFloat((input2.value * 0.8664760419374404).toFixed(2));
});

buttonCurrency2.addEventListener("click", function () {
  input2.value = parseFloat((input1.value * 1.1541).toFixed(2));
});
