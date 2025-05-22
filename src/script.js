let paises = [];

fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
    paises = data;
    mostrarPaises(paises); 
  });

  let campoBuscar = document.getElementById("buscar");
let contenedorResultado = document.getElementById("resultado");

campoBuscar.addEventListener("input", () => {
  let texto = campoBuscar.value.toLowerCase();
  contenedorResultado.innerHTML = "";

  let filtrados = paises.filter(p => 
    p.name.official.toLowerCase().includes(texto)
  );

  filtrados.forEach(pais => {
    let tarjeta = document.createElement("div");

    let titulo = document.createElement("h2");
    titulo.textContent = pais.name.official;

    let bandera = document.createElement("img");
    bandera.src = pais.flags.svg;
    bandera.alt = `Bandera de ${pais.name.official}`;
    bandera.width = 50;

    let region = document.createElement("p");
    region.textContent = `Región: ${pais.region}`;

    let poblacion = document.createElement("p");
    poblacion.textContent = `Población: ${pais.population.toLocaleString()}`;

    tarjeta.appendChild(titulo);
    tarjeta.appendChild(bandera);
    tarjeta.appendChild(region);
    tarjeta.appendChild(poblacion);

    contenedorResultado.appendChild(tarjeta);
  });
});
