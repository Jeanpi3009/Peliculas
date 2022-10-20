const peliculas = [  
    {
        nombre: "Cementerio Sin Lapidas Y Otras Historias",
        genero: "Literatura fantástica 19 de junio de 2007",
        img: "img/libro4.jpg",
        paginaVenta: "https://www.amazon.com/-/es/Neil-Gaiman/dp/8499181821",
    },
    {
        nombre: "Stephen King IT Eso",
        genero: "Novela, Terror, Thriller, Fantasía oscura 15 de septiembre de 1986",
        img: "img/libro5.jpg",
        paginaVenta: "https://articulo.mercadolibre.com.co/MCO-588678658-stephen-king-it-eso-original-_JM#position=2&search_layout=stack&type=item&tracking_id=f48798c3-a556-403d-9668-f387495fe981",
  
    },
    {
        nombre: "Gaston Leroux E Fantasma",
        genero: "Suspenso/Suspenso",
        img: "img/libro6.jpg",
        paginaVenta: "https://librerianacional.com/producto/el-fantasma-de-la-opera-381912",
    },
    {
        nombre: "El Día En Que Me Fui",
        genero: "7 de febrero de 2017",
        img: "img/libro7.jpg",
        paginaVenta: "https://www.amazon.com/-/es/Carles-Porta-ebook/dp/B01N9KN2ZI",
    },
    {
        nombre: "La Ladrona De Libros",
        genero: "Bélico/Acción",
        img: "img/libro8.jpg",
        paginaVenta: "https://www.amazon.es/ladrona-libros-BEST-SELLER/dp/8499088074",
    },
    {
        nombre: "Cincuenta Sombras De Grey",
        genero: "literatura romántico-erótica (+18)",
        img: "img/libro9.jpg",
        paginaVenta: "https://www.buscalibre.com.co/libro-cincuenta-sombras-de-grey/9788425348839/p/5954123",
    },
    {
        nombre: "Voces De Chernóbil",
        genero: "1997",
        img: "img/libro10.jpg",
        paginaVenta: "https://www.amazon.com/-/es/Dr-Robert-Gale/dp/1989728189",
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
  