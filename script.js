const button = document.querySelector('#button');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const subButton = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');

function clickedButton() {
  const email = inputEmail.value;
  const password = inputPassword.value;
  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
button.addEventListener('click', clickedButton);

subButton.disabled = true;

function agButton() {
  subButton.disabled = false;
}
agreement.addEventListener('click', agButton);
