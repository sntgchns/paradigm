(document.onload = function() {
    const titulo = document.querySelector('.title h1'),
    subtitulo = document.querySelector('.title h3');
    titulo.style.filter = 'blur(11px)';
    titulo.style.transition = 'filter 3s cubic-bezier(0.4, 0, 0.2, 1)';
    subtitulo.style.filter = 'blur(11px)';
    subtitulo.style.transition = 'filter 3s cubic-bezier(0.4, 0, 0.2, 1)';

    function quitarBlur() {
    titulo.style.filter = 'blur(0px)';
    setTimeout(function() {
        subtitulo.style.filter = 'blur(0px)';
    }, 1000);
    }

    setTimeout(quitarBlur, 1000);

})();