function tocaSom (idElementosAudio) {
    document.querySelector(idElementosAudio).play();
}

const listaDeTeclas = document.querySelectorAll(' .tecla');

//para

for (let contador = 0; contador <listaDeTeclas.length;contador++) {

const tecla = listaDeTeclas[contador];
const instrumento = tecla.classeList[1];
const idAudio = '#som_${instrumento}';//template string

tecla.onlick = function () {
tocaSom(idAudio);
}

tecla.onkeydown = function (evento){
    console.log(evento.code)

    if (evento.code = 'Space') {
        tecla.classList.add('ativa');
    }
}


tecla.onkeyup = function ()
