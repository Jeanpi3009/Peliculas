const peliculas = [  
  {
      nombre: "La lista final",
      genero: "Accion",
      img: "img/SAC1.png",
      trailer: "https://youtu.be/El0rtJ71nQk",
  },
  {
      nombre: "Wanda Vision",
      genero: "Drama/Accion",
      img: "img/SAC2.png",
      trailer: "https://youtu.be/UuhqbcMNrME",

  },
  {
      nombre: "Rueda de tiempo",
      genero: "Drama",
      img: "img/SAC3.png",
      trailer: "https://youtu.be/qCtdOAAcekE",
  },
  {
      nombre: "Moon Kinhgt",
      genero: "Crimen/Drama/Accion",
      img: "img/SAC4.png",
      trailer: "https://youtu.be/0STDZqXCTxs",
  },
  {
      nombre: "Flash",
      genero: "Accion",
      img: "img/SAC5.png",
      trailer: "https://youtu.be/e8tPytUdSIo",
  },
  {
      nombre: "The boys",
      genero: "Ciencias Ficcion/Drama /Accion",
      img: "img/SAC6.png",
      trailer: "https://youtu.be/Bm-7-Ck0RJ4",
  },
  {
      nombre: "Boba fett",
      genero: "Supervivencia/Accion",
      img: "img/SAC7.png",
      trailer: "https://youtu.be/CDMo4xDbzjo",
  },
  {
    nombre: "Peacemaker",
    genero: "Comedia",
    img: "img/SAC8.png",
    trailer: "https://youtu.be/hdGQIi7rXJE",
},
{
  nombre: "Kenobi",
  genero: "Misterio/Sobrenatural",
  img: "img/SAC9.png",
  trailer: "https://youtu.be/OWp--PzCjVs",
}, 
{
  nombre: "Loki",
  genero: "Misterio/Sobrenatural",
  img: "img/SAC10.png",
  trailer: "https://youtu.be/KcBStos46EM",
}

];


console.log(peliculas);

///ejecutador de funciones
document.getElementById("icono").addEventListener("click", mostra_buscador);
document.getElementById("buscador").addEventListener("click", ocultar_buscador);
//declarando variables
const buscador = document.getElementById("buscador");
const portada = document.getElementById("portada");
const input = document.getElementById("buscar");


//funcion mostrar

function mostra_buscador(){
  // buscador.style.top="10.1%";
  buscador.style.top="17.8%";
  portada.style.display="block";
  input.focus();
}

//fincion ocultar

function ocultar_buscador(){
  buscador.style.top="-16.6%";
  portada.style.display="none";
  input.value = "";
}


//buscador de contenido

const inputs = document.getElementById("buscar");
const resultado = document.getElementById("peliculas");
const movies = document.getElementById("movies");
const filtro = () => {
  resultado.innerHTML = "";
  const texto = inputs.value.toUpperCase();
  if(texto){
  for (let pelicula of peliculas) {
      let nombre = pelicula.nombre.toUpperCase();
      if (nombre.indexOf(texto) !== -1) {
          resultado.innerHTML += `
        <div class="movie-card">
          <div class="movi">
             <div class="card-head">
                 <img src="${pelicula.img}" alt="" class="card-img">

                 <div class="card-overlay">

                    <div class="bookmark">
                        <i class="bi bi-bookmarks"></i>
                    </div>

                     <div class="rating">
                        <i class="bi bi-star"></i>
                         <span>8.0</span>
                    </div>

                  <div class="play">
                        <a href="${pelicula.trailer}" target="_blank"><i class="bi bi-collection-play"></i></a>
                  </div>

              </div>
            </div>

              <div class="card-body">
                    <h3 class="card-title">${pelicula.nombre}</h3>

                      <div class="card-info">
                          <span class="genre">${pelicula.genero}</span>
                          <span class="year">${pelicula.año}</span>
                      </div>
              </div>
          </div>
      </div>

          `;
      }
  }
  if (resultado.innerHTML === "") {
      resultado.innerHTML += `
      <div class="error">
          <i class="bi bi-emoji-dizzy"></i>
          <h3>No se encontro ${texto}</h3>
      </div>
          `;
   }
  } //
};

buscador.addEventListener("click", filtro);
input.addEventListener("keyup", filtro);
// filtro();
