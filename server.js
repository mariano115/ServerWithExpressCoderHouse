const express = require("express");
const { Contenedor } = require("./Contenedor/Contenedor");

const app = express();
const PORT = 8080;
let instanciaContenedor;

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
  instanciaContenedor = new Contenedor("productos");
});

server.on("error", (error) => console.log(`Error en servidor ${error}`));

app.get("/productos", async (req, res) => {
  res.send(await instanciaContenedor.getAll());
});

app.get("/productoRandom", async (req, res) => {
  let productos = await instanciaContenedor.getAll();
  let productoRandom = productos[Math.floor(Math.random() * productos.length)];
  res.send(productoRandom);
});
