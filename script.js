var logado = ''
var logadoTipo = ''
function ContagemDeEspacos(frase) {
    for (var i = 0; i < frase.length; i++) {
        if (frase[i] !== ' ') {
            return false
        }
    }
    return true
}

function cadastrarUsuario() {
    var nome 
    nome = document.getElementById('nome').value
    var senha 
    senha = document.getElementById('senha').value
    var email 
    email = document.getElementById('email').value
    var tipo
    var opcoes
    opcoes = document.getElementsByName("tipo")

    for (let i = 0; i < opcoes.length; i++) {
        if (opcoes[i].checked) {
            tipo = opcoes[i].value
        }
    }

    if (localStorage.getItem(nome)) {
        document.getElementById('mensagemCadastroLogin').style.color = "rgb(255, 107, 107)";
        document.getElementById('mensagemCadastroLogin').innerText = "Você já possui cadastro"
        return
    }
    var usuario = { senha: senha, email: email, tipo: tipo }
    
    localStorage.setItem(nome, JSON.stringify(usuario))
    document.getElementById('mensagemCadastroLogin').style.color = "rgb(92, 237, 115)"
    document.getElementById('mensagemCadastroLogin').innerText = "Cadastro feito"
}

function logarUsuario() {
    var usuarioLogin 
    usuarioLogin = document.getElementById('nomelogin').value
    var senhaLogin 
    senhaLogin = document.getElementById('senhalogin').value
    var emailogin 
    emailogin = document.getElementById('emailogin').value
    
    var armazenar = localStorage.getItem(usuarioLogin)
    
    if (!armazenar) {
        document.getElementById('mensagemCadastroLogin').style.color = "rgb(255, 107, 107)";
        document.getElementById('mensagemCadastroLogin').innerText = "Usuário não encontrado"
        return;
    }
    var dadosUsuario = JSON.parse(armazenar);

    if (dadosUsuario.senha === senhaLogin && dadosUsuario.email === emailogin) {
        document.getElementById('mensagemCadastroLogin').style.color = "rgb(92, 237, 115)";
        document.getElementById('mensagemCadastroLogin').innerText = "Login efetuado"
        logado = usuarioLogin
        logadoTipo = dadosUsuario.tipo
    } else {
        document.getElementById('mensagemCadastroLogin').style.color = "rgb(255, 107, 107)";
        document.getElementById('mensagemCadastroLogin').innerText = "Dados inválidos"
    }
}

function alternarLoginCadastro(selecao) {
    if (selecao == 1) { // login → cadastro
        document.getElementById("login").style.display = 'none'
        document.getElementById("cadastro").style.display = 'block'
    } else if (selecao == 2) { // cadastro → login
        document.getElementById("cadastro").style.display = 'none'
        document.getElementById("login").style.display = 'block'
    }
}

function enviarMensagem() {
    var mensagem = document.getElementById('mensagemTexto').value
    var mensagensContainer = document.getElementById('mensagens')
    
    var usuarioNaoVazio = logado.length > 0 && !ContagemDeEspacos(logado)

    if (usuarioNaoVazio && mensagem.length > 0) {
        var resposta = document.createElement('div');
        resposta.className = 'message';
        resposta.textContent = logado + ': ' + mensagem;
        mensagensContainer.appendChild(resposta);
   
        document.getElementById('mensagemTexto').value = ''
    } else if (!usuarioNaoVazio) {
        document.getElementById('mensagemComunidade').innerText = "Você precisa estar logado para poder publicar";
    }
}

function mostrarSecao(secao) {
    if (secao != 'CadastroLogin' && logado == '') {
        alert('Faça login para acessar BrickGames')
    } else if (secao == 'DevTools' && logadoTipo != 'desenvolvedor') {
        alert('Você não está logado como desenvolvedor')
    } else {
        var secoes = document.getElementsByClassName('content')
        for (var i = 0; i < secoes.length; i++) {
            secoes[i].style.display = 'none'
        }
        document.getElementById(secao).style.display = 'block'
    }
}

// TESTE //

function teste() {
    var nomeJogo = "The Casseb of Us 2: O Inimigo Agora é Outro"
    var precoJogo = 19.99
    var imagemJogo = "imagem"

    if (precoJogo == 0) {
        precoJogo = "Grátis"
    } else {
        precoJogo = parseFloat(precoJogo)
        precoJogo.toFixed(2)
        precoJogo = "R$" + precoJogo
    }

    document.getElementById("conteudoLoja").innerHTML +=
        "<div class='jogoCaixa' onclick='window.location.href = \"paginaJogo.html\"'>" +
            "<img src='" + imagemJogo + "' alt='holy cow sand under table'>" +
            "<div class='nomeJogo'>" + nomeJogo + "</div>" +
            "<div class='precoJogo'>" + precoJogo + "</div>" +
        "</div>"
}