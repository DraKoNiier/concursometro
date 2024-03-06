// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}

//CONTATO AREA - INICIO//

function abrirWhatsapp() {
  var nome = document.getElementById("nome").value;
  var telefone = document.getElementById("telefone").value;
  var email = document.getElementById("email").value;
  var msg = document.getElementById("msg").value;
  var url = "https://wa.me/5583987318413?text=" // Seu numero
    + "*Formulário de Contato*" + "%0a" // Mensagem personalizada
    + "%0a" // Quebra de linha
    + "*Nome*: " + nome + "%0a" // Dados do formulário
    + "*Telefone*: " + telefone + "%0a"
    + "*E-mail*: " + email + "%0a"
    + "*Mensagem*: " + msg;
  window.open(url, '_blank').focus();
}

//CONTATO AREA - FIM//
