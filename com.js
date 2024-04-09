window.addEventListener('load', function(){
    console.log('El contenido ha cargado!');
    var imagenes = [];
    imagenes[0] = "WhatsApp Image 2024-04-06 at 8.52.27 AM.jpeg";
    imagenes[1] = "WhatsApp Image 2024-04-06 at 8.52.47 AM.jpeg";
    imagenes[2] = "WhatsApp Image 2024-04-06 at 8.53.04 AM (1).jpeg";
    imagenes[3] = "WhatsApp Image 2024-04-06 at 8.53.04 AM.jpeg";
    var indiceImagenes = 0;

    function cambiarImagenes() {
        var slider = document.getElementById('slider');
        if (slider) {
            slider.src = imagenes[indiceImagenes];
            if (indiceImagenes < 3) {
                indiceImagenes++;
            } else {
                indiceImagenes = 0;
            }
        }
    }

    setInterval(cambiarImagenes, 3000);
}); 

