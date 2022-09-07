const express = require("express");
const { Contenedor } = require("./Contenedor/Contenedor");

const app = express();
const PORT = process.env.PORT || 8080;
let instanciaContenedor;

/* Creating a server and listening on port 8080. */
const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
  instanciaContenedor = new Contenedor("productos");
});

/* Listening for errors on the server. */
server.on("error", (error) => console.log(`Error en servidor ${error}`));

/* A route that returns all the products from the database. */
app.get("/productos", async (req, res) => {
  res.send(await instanciaContenedor.getAll());
});

/* A route that returns a random product from the database. */
app.get("/productoRandom", async (req, res) => {
  const productos = await instanciaContenedor.getAll();
  const productoRandom =
    productos[Math.floor(Math.random() * productos.length)];
  res.send(productoRandom);
});
