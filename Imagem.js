function Adicionar(event) {
    var fileta = event.target.files[0];
    var reader = new FileReader()

    reader.onload = function(e) {
        var img = document.getElementById('Adicionar');
        img.src = e.target.result;
        img.style.display = 'block';
    };

    if (fileta) {
        reader.readAsDataURL(fileta)
    }
}