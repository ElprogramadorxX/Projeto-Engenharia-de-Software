var logado = 'Desenvolvedor'

function anexarArquivo() {
    var arquivoInput = document.getElementById('arquivoJogo')
    var arquivo = arquivoInput.files[0];
    
    if (arquivo) {
        var mensagensContainer = document.getElementById('mensagensCodigos');
        var resposta = document.createElement('div')
        resposta.className = 'message';
        resposta.textContent = logado + ' anexou: ' + arquivo.name
        mensagensContainer.appendChild(resposta);
        arquivoInput.value = ''
    } else {
        alert("Você precisa selecionar um arquivo para anexar.")
    }
}
