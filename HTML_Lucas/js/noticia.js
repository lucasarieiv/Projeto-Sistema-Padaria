
var titulo = document.getElementById('titulo');
elMsg = document.getElementById('feedback');

function checkTitle(min) {
  if (titulo.value.length < min) {
    elMsg.textContent = 'O Titulo Precisa Ter mais de 5 Caracteres';
  } else {
    elMsg.innerHTML = '';
  }
}

titulo.addEventListener('blur', function() {
  checkTitle(5)
}, false);
