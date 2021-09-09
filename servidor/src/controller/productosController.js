const productModel= require('../models/productos')

async function listarProductos(req,res){

    const result_productos=await productModel().listProduct();
    res.render('productos/list_productos',{result_productos})


}


async function listarProductosApi(req,res){

    const productos=await productModel().listProduct();
    res.status(200).json({productos})


}








async function cargarProductos(req,res){

    const data =req.body;

    await productModel().crearProduct(data);
    res.redirect('/productos/listarproductos')
    //res.render('productos/list_productos',{result_productos})


}




async function cargarProductosApi(req,res){

    const data =req.body;

    await productModel().crearProduct(data);
    res.status(200).json({
        succes:1,
        message:"agregado con exito"
    })


}







async function borrarProductos(req,res){

    const data =req.params.id;

    await productModel().eliminarProduct(data);
    res.redirect('/productos/listarproductos')


}



async function borrarProductosApi(req,res){

    const data =req.params.id;

    await productModel().eliminarProduct(data);
    res.status(200).json({
        succes:1,
        message:"eliminado con exito"
    })


}








async function cambiaProductos(req,res){


    const data =[
        req.body.nombre_producto,
        req.body.descri_producto,
        req.body.precio,
        req.params.id

        
    ]
     

    await productModel().modificaProduct(data);
    res.redirect('/productos/listarproductos')
    res.status(200).json({
        succes:1,
        message:"modificado con exito"
    })


}





async function cambiaProductosApi(req,res){


    const data =[
        req.body.nombre_producto,
        req.body.descri_producto,
        req.body.precio,
        req.params.id

        
    ]
     

    await productModel().modificaProduct(data);
}


module.exports={
    listarProductos,
    cargarProductos,
    borrarProductos,
    cambiaProductos,
    listarProductosApi,
    cargarProductosApi,
    borrarProductosApi,
    cambiaProductosApi
}