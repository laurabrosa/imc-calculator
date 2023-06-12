function ImcCalculator() {
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;

  const IMC = (Number(peso) / (Number(altura) * Number(altura))).toFixed(2);

  const IMCresult = document.getElementById("imc-result");

  if (IMC <= 18.5) {
    return (IMCresult.innerHTML = `Seu IMC é de ${IMC} kg/m2. Ele é classificado como Magreza.`);
  } else if (IMC > 18.5 && IMC <= 24.9) {
    return (IMCresult.innerHTML = `Seu IMC é de ${IMC} kg/m2. Ele é classificado como Normal.`);
  } else if (IMC > 24.9 && IMC <= 30) {
    return (IMCresult.innerHTML = `Seu IMC é de ${IMC} kg/m2. Ele é classificado como Sobrepeso.`);
  } else if (IMC > 30) {
    return (IMCresult.innerHTML = `Seu IMC é de ${IMC} kg/m2. Ele é classificado como Obesidade.`);
  }
}

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  ImcCalculator();
});
