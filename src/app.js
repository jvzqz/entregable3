const ProductManager = require("./ProductManager");
const express = require("express");

const manager = new ProductManager();

const app = express ()

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.get("/products", async (req, res) => {
    try {
      const { limit } = req.query;
      let data;

      if (!limit) {
        data = await  manager.getProducts();
      } else {
        data = await manager.getProducts().slice(0, limit);
      }
      res.json(data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
  

  app.get("/products/:pid", async (req, res) => {
    try {
      const productId = req.params.pid;
      const productos = await manager.getProducts();
      const productoFilter = productos.filter(
        (product) => product.id == productId
      );
      
      if (productoFilter.length) {
        res.send(productoFilter);
      } else {    
        res.send({error: "Producto no encontrado"});
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

app.listen(8080,()=>console.log('Server levantado en el puerto 8080')) 

