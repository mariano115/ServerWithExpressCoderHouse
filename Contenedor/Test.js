const { Contenedor } = require("./Contenedor.js");

//Creando set de pruebas
const contenedor = new Contenedor("productos");
const producto = {
  title: "Aspiradora",
  price: 23000,
  thumbnail: "https://s1.kaercher-media.com/products/11980820/main/1/d0.jpg",
};
const producto2 = {
  title: "Celular",
  price: 50000,
  thumbnail:
    "https://thumbs.dreamstime.com/b/maqueta-del-artilugio-tel%C3%A9fono-celular-104748796.jpg",
};

//Metodo para Probar las funcionalidades
(async () => {
  //Creo 2 Productos para el set de pruebas
  await contenedor.save(producto);
  await contenedor.save(producto2);

  //Prueba getById(2)
  await contenedor
    .getById(2)
    .then((res) => console.log("Resultado getById(2) :", res));

  //Prueba getById(4) Producto no existente (Correccion de Ejercicio)
  await contenedor
    .getById(4)
    .then((res) => console.log("Resultado getById(4) :", res));

  //Prueba getAll()
  await contenedor
    .getAll()
    .then((res) => console.log("Resultado getAll() :", res));

  //Prueba deleteById(2)
  await contenedor.deleteById(2);
  await contenedor
    .getById(2)
    .then((res) =>
      console.log(
        "Resultado getById(2) Para corroborar que el producto con id 2 ya no existe:",
        res
      )
    );

  //Prueba deleteAll()
  await contenedor.deleteAll();
  await contenedor
    .getAll()
    .then((res) =>
      console.log(
        "Resultado getAll() Para corroborar que se eliminaron todos los productos de la lista:",
        res
      )
    );
})();
