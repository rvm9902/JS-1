document.querySelector('.mudarTextoBotao').addEventListener('click', function() {
    const paragrafo = document.querySelector('.descricao');
    paragrafo.textContent = 'Texto alterado!';
});

DocumentTimeline.querySelector('.destacarBotao').addEventListener('click',function(){
    const tiitulo = document.querySelector('.titulo');
    tiitulo.classList.add('destaque');

});
