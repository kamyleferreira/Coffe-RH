const form = document.getElementById("form");
const username = document.getElementById("username")
const birth = document.getElementById("birth");
const CPF = document.getElementById("CPF");
const telefone = document.getElementById("telefone");
const email = document.getElementById("email");
const login = document.getElementById("login");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
const indexLogin = document.getElementById("indexLogin")
const indexPassword = document.getElementById("indexPassword")


form.addEventListener("submit", (e) => {

  e.preventDefault();

});

//Script Página de Cadastro
function checkInputs() {

  // Primeiro campo e suas condições
  if (username.value === ""){
    setErrorFor(username, "O nome é obrigatório.");

  } else if (!/^[A-Za-z\s]+$/.test(username.value)){
    setErrorFor(username, "Por favor, insira somente letras.");

  } else {
    setSuccessFor(username);
  }

  // Segundo campo e suas condições
  if (birth.value === "") {
    setErrorFor(birth, "A data de nascimento é obrigatória.");

  } else {
    setSuccessFor(birth);
  }
  
  // terceiro campo e suas condições
  if (CPF.value === "") {
    setErrorFor(CPF, "O CPF é obrigatório.");

  } else if (!/^[0-9]+$/.test(CPF.value)){
    setErrorFor(CPF, "Por favor, insira somente números.");

  } else if (CPF.value.length !== 11){
    setErrorFor(CPF, "O CPF deve conter 11 digitos.");

  } else {
    setSuccessFor(CPF);
  }
  
  // Quarto campo e suas condições
  if (telefone.value === "") {
    setErrorFor(telefone, "O telefone é obrigatório");
    
  }  else if (!/^\(\+55\)\s\d{2}-\d{9}$/.test(telefone.value)){
    setErrorFor(telefone, "Por favor, insira no formato (+55) XX-XXXXXXXX.");
    
  } else {
    setSuccessFor(telefone);
  }
  
  // Quinto campo e suas condições
  if (email.value === "") {
    setErrorFor(email, "O email é obrigatório.");
    
  } else if (!checkEmail(email.value)) {
    setErrorFor(email, "Por favor, insira um email válido.");
    
  } else {
    setSuccessFor(email);
  }
  
  // Sexto campo e suas condições
  if (login.value === "") {
    setErrorFor(login, "O Login é obrigatório.");

  } else if (login.value.length !== 6){
    setErrorFor(login, "O Login deve conter 6 letras.");

  } else if (!/^[A-Za-z]+$/.test(login.value)){
    setErrorFor(login, "Por favor, insira somente letras.");

  } else {
    setSuccessFor(login);
  }
  
  // Setimo campo e suas condições
  if (password.value === "") {
    setErrorFor(password, "A senha é obrigatória.");

  } else if (password.value.length !== 8){
    setErrorFor(password, "A senha deve conter 8 letras.");
    
  } else if (!/^[A-Za-z]+$/.test(password.value)){
    setErrorFor(password, "Por favor, insira somente letras.");
    
  } else {
    setSuccessFor(password);
  }
  
  // Oitavo campo e suas condições
  if (passwordConfirmation.value === "") {
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
    
  } else if (passwordConfirmation.value !== password.value) {
    setErrorFor(passwordConfirmation, "As senhas não conferem.");
    
  } else {
    setSuccessFor(passwordConfirmation);
  }
  
  const formControls = form.querySelectorAll(".form-control");
  
  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });
  
  if (formIsValid) {
    setTimeout(function() {
    window.location.href = 'index.html';
    }, 1000);
    
    localStorage.setItem("birth", birth.value);
    localStorage.setItem("CPF", CPF.value);
    localStorage.setItem("telefone", telefone.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("login", login.value);
    localStorage.setItem("password", password.value);
    localStorage.setItem("passwordConfirmation", passwordConfirmation.value);
    localStorage.setItem("username", username.value);  
  }


}

function setErrorFor(input, message) {

  const formControl = input.parentElement;

  const small = formControl.querySelector("small");
  
  small.innerText = message;
  
  formControl.className = "form-control error";
}

function setSuccessFor(input) {

  const formControl = input.parentElement;
  
  formControl.className = "form-control success";
}
function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

//Script Página de Login
function matchInputs() {

    // Primeiro campo e suas condições
  if (indexLogin.value === "") {
    setErrorFor(indexLogin, "Esse campo é obrigatório.");
  }

  else if (indexLogin.value !== localStorage.getItem("login")) {
    setErrorFor(indexLogin, "Nenhum login associado. Realize seu cadastro.");
    
  } else {
    setSuccessFor(indexLogin);
  }
  
    // Segundo campo e suas condições
  if (indexPassword.value === "") {
    setErrorFor(indexPassword, "Esse campo é obrigatório");

  } else if (indexPassword.value !== localStorage.getItem("passwordConfirmation")) {
    setErrorFor(indexPassword, "Senha incorreta. Verifique sua senha.");
    
  } else {
    setSuccessFor(indexPassword);
  }

  const formControls = form.querySelectorAll(".form-control");
  
  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });
  
  if (formIsValid) {
    setTimeout(function() {
    window.location.href = 'servicos.html';
    }, 1000);
  }

}

// dark-mode
conteudo = document.querySelector("#toggle")
        
conteudo.addEventListener("click", () => {
mudarIcone()
darkMode()
});

function mudarIcone() {
    if (conteudo.innerHTML === '<i class="fa-solid fa-moon"></i>'){
    conteudo.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } 
    else{
    conteudo.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

function darkMode(){
    document.body.classList.toggle('dark-mode')
}

// Aumentar e diminuir fonte
const root = document.documentElement; 
const increaseFontButton = document.getElementById('increaseFont');
const decreaseFontButton = document.getElementById('decreaseFont');

function adjustFontSize(change) {

  const currentSize = parseFloat(getComputedStyle(root).fontSize);

  const newSize = currentSize + change;

  root.style.fontSize = `${newSize}px`;
}

increaseFontButton.addEventListener('click', () => adjustFontSize(1)); 
decreaseFontButton.addEventListener('click', () => adjustFontSize(-1)); 