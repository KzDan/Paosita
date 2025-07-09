const objetos = [
      "corazon.png",    // corazón
      "ramo-de-flores.png",    // flor
      "Cereza.png",    // cereza
      "mariposa (1).png",    // mariposa (puedes cambiar por otra url)
      "moño.png"     // moñito rosa
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

    // Caída automática controlada para no saturar
    setInterval(() => {
      const x = Math.random() * window.innerWidth;
      crearObjeto(x, -30);
    }, 50);

    // Añadir objeto en clic
    document.body.addEventListener('click', e => {
      crearObjeto(e.clientX, e.clientY);
    });

    // Añadir objeto en movimiento (reduce la probabilidad para no saturar)
    document.body.addEventListener('mousemove', e => {
      if (Math.random() < 0.7) { // 10% de probabilidades para crear objeto
        crearObjeto(e.clientX, e.clientY);
      }
    });