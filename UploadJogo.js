function previewImages(event) {
    const imagePreview = document.getElementById('imagePreview');
    imagePreview.innerHTML = ''; // Limpa o preview anterior
    const files = event.target.files;
    
    for (const file of files) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            imagePreview.appendChild(img);
        };
        
        reader.readAsDataURL(file); 
    }
}

// Função para enviar o formulário
function EnviarFormulario(event) {
    event.preventDefault();
    alert('Jogo enviado com sucesso!'); 
}

// Função para alternar entre o tema claro e escuro
function MudarTema() {
    document.body.classList.toggle('dark-theme'); 
    const isDark = document.body.classList.contains('dark-theme');
    const themeToggleButton = document.getElementById('themeToggle');
    themeToggleButton.textContent = isDark ? 'Modo Claro' : 'Modo Escuro'; 
}

// Eventos
document.getElementById('img').addEventListener('change', previewImages);
document.getElementById('uploadForm').addEventListener('submit', EnviarFormulario);
document.getElementById('themeToggle').addEventListener('click', MudarTema);