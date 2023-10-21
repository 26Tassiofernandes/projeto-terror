const botoes = document.querySelectorAll('.botao')
const personagem = document.querySelectorAll('.personagem')

botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        const btn_selecionado = document.querySelector('.botao.selecionado');
        btn_selecionado.classList.remove('selecionado');
        botao.classList.add('selecionado');

        const personagem_selecionado = document.querySelector('.personagem.selecionado')
        personagem_selecionado.classList.remove('selecionado')

        personagem[indice].classList.add('selecionado');

    });
});
