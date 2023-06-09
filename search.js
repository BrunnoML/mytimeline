// Função chamada quando o botão de pesquisa é clicado ou quando o usuário pressiona Enter
function realizarPesquisa() {
  var termoPesquisa = document.getElementById('search').value.toLowerCase();
  var eventos = document.querySelectorAll('.timeline-section li');

  for (var i = 0; i < eventos.length; i++) {
    var evento = eventos[i];
    var descricao = evento.textContent.toLowerCase();

    if (descricao.includes(termoPesquisa)) {
      evento.style.display = 'block';
    } else {
      evento.style.display = 'none';
    }
  }

  document.getElementById('search').value = '';
}

// Vincular a função de pesquisa ao evento de clique do botão de pesquisa
var botaoPesquisa = document.querySelector('.divSearch button');
botaoPesquisa.addEventListener('click', realizarPesquisa);

// Vincular a função de pesquisa ao evento de pressionar Enter no campo de pesquisa
var campoPesquisa = document.getElementById('search');
campoPesquisa.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    realizarPesquisa();
  }
});


