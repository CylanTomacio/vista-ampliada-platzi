//Constantes principales
const seccionPrincipal = document.querySelector('.MaterialView');//Obtenemos la sección principal
const videoReproductor = document.querySelector('.MaterialView-video-item');//Obtenemos el contenedor del video
//Íconos
const iconoExpandir = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">  <image id="image0" width="24" height="24" x="0" y="0"
href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN
RQfmCx0DIQPOuhZsAAAAT0lEQVQ4y+2QIRLAIAwEd/g0Mkh+XHkVNdASwFGRlZfbmSQQ/AwVd1KH
dckV9FFUpKnQK099SQVIAFxbR7Yt5eVK9g7zVLBR7L/VnQSnuAGcuVKz7paItAAAACV0RVh0ZGF0
ZTpjcmVhdGUAMjAyMi0xMS0yOVQwMjozMzowMyswMTowMALTn8QAAAAldEVYdGRhdGU6bW9kaWZ5
ADIwMjItMTEtMjlUMDI6MzM6MDMrMDE6MDBzjid4AAAAAElFTkSuQmCC" />
</svg>`;//SVG del ícono para expandir
const iconoEncoger = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">  <image id="image0" width="24" height="24" x="0" y="0"
href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN
RQfmCx0DHQ7D+BMuAAAAc0lEQVQ4y2NgGAW0Bf+Z/htgFTf4z4Rdg/D/D/+zMESz/n/4L4zLDuP/
b//nooik/n//3wKfs1C0YFPO+D+aQRdFxJjBmSGRcSEDw/94hvkMexnOosheZmKgDPw3/v/2fw5p
PshBEcGnheRgJTniRgH1AAC4vEYQD1eOXQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0xMS0yOVQw
MjoyOToxNCswMTowMN1y7t0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMTEtMjlUMDI6Mjk6MTQr
MDE6MDCsL1ZhAAAAAElFTkSuQmCC" />
</svg>`;//SVG del ícono para encoger

if (seccionPrincipal && videoReproductor) {//Validamos que existan las secciones principales
    const cajaComentarios = document.querySelector('.MaterialView-community');//Obtenemos la caja de comentarios
    const barraControlReproductor = document.querySelector('.vjs-control-bar');//Obtenemos la barra de control
    const botonAmpliarVista = document.createElement('button');//Creamos el botón que usaremos para cambiar la vista ampliada
    let estadoVista = false;//Validamos el estado de la vista

    function ampliarVista () {
        if (!estadoVista) {
            //Lo siguiente modifica los estilos para poder ocultar y ampliar la vista del video
            seccionPrincipal.style.display = 'block';
            videoReproductor.style.maxWidth = '100vw';
            cajaComentarios.classList.add('vjs-hidden');
            estadoVista = true;
            botonAmpliarVista.innerHTML = iconoEncoger;//Cambiamos el ícono
        } else {
            //Lo siguiente modifica los estilos para poder mostrar de nuevo la caja de comentarios
            seccionPrincipal.style.display = '';
            videoReproductor.style.maxWidth = '';
            cajaComentarios.classList.remove('vjs-hidden');
            estadoVista = false;
            botonAmpliarVista.innerHTML = iconoExpandir;//Cambiamos el ícono
        }
    }

    botonAmpliarVista.classList.add('vjs-button');
    botonAmpliarVista.setAttribute('type', 'button');
    botonAmpliarVista.style.cursor = 'pointer';
    botonAmpliarVista.innerHTML = iconoExpandir;
    botonAmpliarVista.addEventListener('click', ampliarVista);
    barraControlReproductor.appendChild(botonAmpliarVista);
}