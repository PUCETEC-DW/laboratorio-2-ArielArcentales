let paises = [];

fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
    paises = data;
    mostrarPaises(paises); 
  })
  .catch(error => {
    console.error("Error al obtener los datos:", error);
  });
