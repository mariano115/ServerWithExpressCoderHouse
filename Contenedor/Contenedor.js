const fs = require("fs");

class Contenedor {
  constructor(nombre) {
    this.nombre = nombre;
  }

  save = async (producto) => {
    let productos;
    try {
      try {
        productos = JSON.parse(
          await fs.promises.readFile(`./${this.nombre}.txt`, "utf8")
        );
      } catch (error) {
        productos = [];
      }

      if (productos.length > 0) {
        producto.id = productos[productos.length - 1].id + 1;
      } else {
        producto.id = 1;
      }

      productos.push(producto);
      await fs.promises.writeFile(
        `./${this.nombre}.txt`,
        JSON.stringify(productos, null, 2)
      );
    } catch (error) {
      console.log(error);
    }
  };

  getById = async (id) => {
    try {
      let productos = JSON.parse(
        await fs.promises.readFile(`./${this.nombre}.txt`, "utf8")
      );
      const producto = productos.find((producto) => producto.id === id);
      if (producto) {
        return producto;
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  };

  getAll = async () => {
    return JSON.parse(
      await fs.promises.readFile(`./${this.nombre}.txt`, "utf8")
    );
  };

  deleteById = async (id) => {
    try {
      let productos = JSON.parse(
        await fs.promises.readFile(`./${this.nombre}.txt`, "utf8")
      );
      productos = productos.filter((producto) => producto.id !== id);
      await fs.promises.writeFile(
        `./${this.nombre}`,
        JSON.stringify(productos, null, 2)
      );
    } catch (error) {
      console.log("No se pudo eliminar el producto");
    }
  };

  deleteAll = async () => {
    try {
      await fs.promises.writeFile(
        `./${this.nombre}.txt`,
        JSON.stringify([], null, 2)
      );
      console.log("Los Productos fueron eliminados correctamente");
    } catch (error) {
      console.log("Hubo un error al eliminar los productos: " + error);
    }
  };
}

module.exports = {
  Contenedor,
};
