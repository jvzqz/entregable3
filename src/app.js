import ProductManager from "./ProductManager";
import express from 'express';

const app = express ()

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.get('/products', (req,res)=>{
    res.send("Hola mundo")
})

app.listen(8080,()=>console.log('Server levantado en el puerto 8080')) 
