var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('productos', { title: 'Productos', productos:['macadamia','almendra','avellanas','pistacho','anacardos','cacahuetes','datiles','macadamia']});
});

router.get('/:producto', function(req, res, next) {
  var productInfo = {
    'macadamia': {
    precio: "7,23 euros/kg.", 
    name: 'macadamia',
    description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.', 
    origen: "Australia y China",
    grasas: "76 g",
    proteinas: '8 g',
    hidratos: '14g',
    beneficio:'antioxidante, vitamina B1, magnesio',},
    'almendra':{
      precio: "4.60 euros/kg.", 
      name: 'almendra',
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.', 
      origen: "U.S.A y España",
      grasas: "54 g ",
      proteinas: '18.7 g',
      hidratos: '5.3g',
      beneficio:'antioxidante, reduce el colesterol, mejora la memoria' ,     
    }
}
  res.render('info-producto', { title: 'Productos', producto:productInfo[req.params.producto]});
});


module.exports = router;