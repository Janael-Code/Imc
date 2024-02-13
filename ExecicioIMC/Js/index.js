// Parar o envio do formulario capturando o evento de submit do formulario

const form = document.querySelector('#formulario');

form.addEventListener('submit', function (evento) {
  evento.preventDefault();
  const inputPeso = evento.target.querySelector('#peso');
  const inputAltura = evento.target.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {

    setResultado('Peso invalido', false);
    return;
  }
  if (!altura) {
    setResultado('Altura invalida', false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;
  setResultado(msg, true);

  
});

function getNivelImc(imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'sobrePeso', 'obesidade grau 1',
    'obesidade grau 2', 'obesidade grau 3'];

  if (imc >= 39.9  ) return nivel[5];
  if (imc >= 34.9 || imc <= 39.8) return nivel[4];
  if (imc >= 29.9 || imc <= 34.8) return nivel[3];
  if (imc >= 24.9 || imc <= 29.8) return nivel[2];
  if (imc >= 18.5 || imc <= 24.8) return nivel[1];
  if (imc <= 18.5) return nivel[0];
}


function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
 
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';
  const p = criaP();
  if (isValid) {

    p.classList.add("paragrafo-resultado")

  }else {
    p.classList.add("bad");
  }
  p.innerHTML = msg;
  resultado.appendChild(p);

};

function criaP() {
  const p = document.createElement('p');
  p.classList.add('paragrafo-resultado');
  return p;

};