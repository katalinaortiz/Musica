const canciones = [
    {
      nombre: 'Trabajo Duro',
      artista: 'La Princesa Y El Sapo',
      img: 'assets/images/Trabajo Duro.jpg',
      ruta: 'assets/images/music/Trabajo duro (De La Princesa y El Sapo  Video Oficial).mp3'
    },
    {
      nombre: 'Desde El Corazon',
      artista: 'Frozen',
      img: 'assets/images/Desde El Corazon.jfif',
      ruta: 'assets/images/music/Desde el Corazón (De Frozen 2).mp3'
    },
    {
      nombre: 'Cuando Empezare A Vivir',
      artista: 'Rapunzel',
      img: 'assets/images/Cuando Empezare A Vivir.jpg',
      ruta: 'assets/images/music/Cuándo empezaré a vivir  Enredados.mp3'
    },
    {
      nombre: 'Reparaciones',
      artista: 'Frozen',
      img: 'assets/images/Reparaciones.jpg',
      ruta: 'assets/images/music/Cast of Frozen - Reparaciones (De Frozen_ Una Aventura CongeladaCon letra).mp3'
    },
    {
      nombre: 'De Nada',
      artista: 'Moana',
      img: 'assets/images/De Nada.jpg',
      ruta: 'assets/images/music/Beto Castillo - De nada (De Moana_ un mar de aventurasCon letra).mp3'
    },
  ]
  
  let indiceActual = 0;
  
  const audio = document.getElementById('audio');
  const play = document.getElementById('play');
  const pause = document.getElementById('pause');
  const former = document.getElementById('former')
  const forward = document.getElementById('forward');
  const rewind = document.getElementById('rewind');
  const following = document.getElementById('following')
  const stop = document.getElementById('stop');
  const audioSource = document.getElementById("audioSource");
  const songName = document.getElementById("songName");
  const imagen = document.getElementById("img")
  const artista = document.getElementById('artist')
  
  // Cargar la primera canción
  cargarCancion(indiceActual);
  
  // Función para cargar una canción
  function cargarCancion(indice) {
    songName.textContent = canciones[indice].nombre;
    artista.textContent = canciones[indice].artista
    imagen.src = canciones[indice].img;
    audioSource.src = canciones[indice].ruta;
    audio.load();
  }
  
  // Eventos
  play.addEventListener('click', () => audio.play());
  
  pause.addEventListener('click', () => audio.pause());
  
  rewind.addEventListener('click', () => audio.currentTime = Math.max(0, audio.currentTime - 10));
  
  forward.addEventListener('click', () => audio.currentTime += 10);
  
  stop.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
  });
  
  // Cambiar a la siguiente canción al clickiar
  following.addEventListener('click', () => {
    indiceActual = (indiceActual + 1) % canciones.length; // Cambiar al siguiente índice
    cargarCancion(indiceActual); // Cargar la nueva canción
    audio.play(); // Reproducir automáticamente
  })
  
  // retroceder a la siguiente canción al clickiar
  former.addEventListener('click', () => {
    indiceActual = (indiceActual - 1 + canciones.length) % canciones.length; // Cambiar al índice anterior, con ajuste para el caso negativo
    cargarCancion(indiceActual); // Cargar la nueva canción
    audio.play(); // Reproducir automáticamente
  })
  
  // Cambiar a la siguiente canción al terminar
  audio.addEventListener('ended', () => {
    indiceActual = (indiceActual + 1) % canciones.length; // Cambiar al siguiente índice
    cargarCancion(indiceActual); // Cargar la nueva canción
    audio.play(); // Reproducir automáticamente
  });