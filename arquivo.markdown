/*======= PARA TELAS GRANDES ========*/

@media (max-width: 769px) {

    body {
        overflow-x: hidden;
        overflow-y: hidden;
    }

    /*======= NOME E DESCRIÇÃO DO PERSONAGEM ========*/

    h2.nome-personagem {
        font-size: 30px;
    }

    p.descricao-personagem {
        font-size: 18px;
        width: 340px;
    }

    /*======= LOGO ========*/

    i.logo > img.friday13-logo {
        width: 170px;
        right: 20px;
    }

    i.logo > img.halloween-logo {
        width: 370px;
    }

    i.logo > img.nightmare-logo {
        width: 360px;
    }

    i.logo > img.chainsaw-logo {
        width: 400px;
    }

    /*======= BOTÕES ========*/

    ul.botoes-personagens {
        position: fixed;
        bottom: 0;
        display: flex;
        align-items: flex-end;
        background: transparent;
        width: 100%;
        justify-content: center;
        padding-bottom: 60px;
        gap: 30px;
    }

    ul.botoes-personagens img {
        width: 85px;
    }

}


/*======= PARA TELAS PEQUENAS ========*/

@media (max-width: 425px) {

    body {
        overflow-x: hidden;
        overflow-y: hidden;
    }

    /* ======= CONTEÚDO ========*/

    #conteudo-jason {
        top: 70px;
    }

    #conteudo-michael {
        top: 80px;
    }

    #conteudo-freddy {
        top: 80px;
    }

    #conteudo-leather {
        top: 70px;
    }

    /*======= NOME E DESCRIÇÃO DO PERSONAGEM ========*/

    h2.nome-personagem {
        font-size: 20px;
    }

    p.descricao-personagem {
        font-size: 15px;
        width: 300px;
    }

    /*======= LOGO ========*/

    i.logo > img.friday13-logo {
        width: 120px;
        right: 15px;
        
    }

    i.logo > img.halloween-logo {
        width: 310px;
        bottom: 20px;
        right: auto;
    }

    i.logo > img.nightmare-logo {
        width: 250px;
        bottom: 20px;
        right: auto;
    }

    i.logo > img.chainsaw-logo {
        width: 310px;
        bottom: 160px;
        right: auto;
    }

    /*======= BOTÕES ========*/

    ul.botoes-personagens {
        gap: 15px;
    }

    ul.botoes-personagens img {
        width: 70px;
        position: relative;
        top: 40px;
        
    }

}