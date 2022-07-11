function execution() {
  const btnCalculator = document.getElementById("btnCalculator");
  btnCalculator.addEventListener("click", (e) => {
    e.preventDefault();
    const inputWeight = document.getElementById("inputWeight");
    const weight = inputWeight.value;

    const inputHeight = document.getElementById("inputHeight");
    const height = inputHeight.value;

    const imc = parseInt(Math.round(weight / height ** 2));

    const calc = document.getElementById("calc");

    if (imc < 18.5) {
      return (calc.textContent = `Bajo Peso: ${imc}`);
    } else if (imc <= 25) {
      return (calc.textContent = `Peso Normal: ${imc}`);
    } else if (imc <= 30) {
      return (calc.textContent = `Sobrepeso: ${imc}`);
    } else if (imc <= 35) {
      return (calc.textContent = `Obesidad Tipo 1: ${imc}`);
    } else if (imc <= 40) {
      return (calc.textContent = `Obesidad Tipo 2: ${imc}`);
    } else {
      return (calc.textContent = `Obesidad Tipo 3: ${imc}`);
    }
  });
}

execution();
