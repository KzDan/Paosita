const objetos = [
  "corazon.png",
  "ramo-de-flores.png",
  "Cereza.png",
  "mariposa (1).png",
  "moño.png"
];

function crearObjeto(x, y) {
  const obj = document.createElement('div');
  obj.classList.add('objeto');
  obj.style.backgroundImage = `url('${objetos[Math.floor(Math.random() * objetos.length)]}')`;
  obj.style.left = x + 'px';
  obj.style.top = y + 'px';
  obj.style.animationDuration = (Math.random() * 3 + 3) + 's';
  document.body.appendChild(obj);

  setTimeout(() => obj.remove(), 7000);
}

// Caída automática cada 50ms
setInterval(() => {
  const x = Math.random() * window.innerWidth;
  crearObjeto(x, -30);
}, 50);

// Eventos para escritorio (click y mousemove)
document.body.addEventListener('click', e => {
  crearObjeto(e.clientX, e.clientY);
});

document.body.addEventListener('mousemove', e => {
  if (Math.random() < 0.1) {
    crearObjeto(e.clientX, e.clientY);
  }
});

// Eventos táctiles para móviles
document.body.addEventListener('touchstart', e => {
  const touch = e.touches[0];
  crearObjeto(touch.clientX, touch.clientY);
});

document.body.addEventListener('touchmove', e => {
  const touch = e.touches[0];
  if (Math.random() < 0.5) {
    crearObjeto(touch.clientX, touch.clientY);
  }
});
