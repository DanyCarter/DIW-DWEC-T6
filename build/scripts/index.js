document.addEventListener('DOMContentLoaded', function(){
  iniciarApp();
});

function iniciarApp() {
 
  crearGaleria();

}

function crearGaleria() {
  const galery = document.querySelector('.galeriaImagenes');

  for(let i = 1; i <= 6; i++ ) {
      const imagen = document.createElement('picture');
      imagen.innerHTML = `
        <source srcset="/build/assets/img/pequeñas${i}.jpg" type="image/jpg">
        <source srcset="/build/assets/img/pequeñas${i}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="/build/assets/img/pequeñas${i}.jpg" alt="imagen galeria">
      `;
      imagen.onclick = function() {
          Imagen(i);
      }

      galery.appendChild(imagen);
  }
}  

function Imagen(id) {

  const currentScrollPosition = window.scrollY;

  const imagen = document.createElement('picture');
  imagen.innerHTML = `
    <source srcset="/build/assets/imgs/grande/${id}.jpg" type="image/jpg">
    <source srcset="/build/assets/imgs/grande/${id}.webp" type="image/webp">
    <img loading="lazy" src="/build/assets/imgs/grande/${id}.jpg" alt="imagen galeria">
  `;

  const contenedorImagen = document.createElement('div');
  contenedorImagen.classList.add('imagen-grande');
  contenedorImagen.appendChild(imagen);

  const overlay = document.createElement('div');
  overlay.appendChild(contenedorImagen);
  overlay.classList.add('overlay');
  overlay.onclick = function() {
    const body = document.querySelector('body');
    body.classList.remove('stay-body');
    overlay.remove();

    window.scrollTo(0, currentScrollPosition);
  };

  const cerrarModal = document.createElement('p');
  cerrarModal.textContent = 'X';
  cerrarModal.classList.add('button-close');
  cerrarModal.onclick = function() {
    const body = document.querySelector('body');
    body.classList.remove('stay-body');
    overlay.remove();

    window.scrollTo(0, currentScrollPosition);
  };
  overlay.appendChild(cerrarModal);

  const body = document.querySelector('body');
  body.appendChild(overlay);
  body.classList.add('stay-body');
}