function iniciarDescarga() {
    let progressBar = document.getElementById("progress-bar");
    let width = 0;
    
    let interval = setInterval(function () {
      if (width >= 100) {
        clearInterval(interval);
        progressBar.innerHTML = "Descarga completa";
      } else {
        width++;
        progressBar.style.width = width + "%";
        progressBar.innerHTML = width + "%";
      }
    }, 50); // Velocidad de la descarga
  }

  // Agregar un evento al botón para iniciar la descarga
  document.getElementById("start-download").addEventListener("click", iniciarDescarga);




  // Función para abrir la imagen Scary Jump
  function abrirScaryJump() {
    $.fancybox.open({
      src: '#scaryImage',
      type: 'inline',
      opts: {
        afterClose: function () {
          // Función que se ejecuta después de cerrar la imagen
        }
      }
    });
  }

  // Agregar un evento al botón para abrir la imagen Scary Jump
  document.getElementById("start-download").addEventListener("click", abrirScaryJump);