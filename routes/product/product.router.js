const express = require('express');
const router = express.Router();
const ProductService = require('../../services/product.service')
const service = new ProductService();

router.get('/',(req,res)=>{
  const products = service.find();
  res.status(200).json(products);
});

router.get('/:id',(req,res)=>{
  const { id }= req.params;
  const product = service.findOne(id);
  if (product === undefined){
    res.status(404).json({
      message: 'product not found',
      id
    })
  }
  res.status(201).json(product);
});

router.post('/',(req,res)=>{
  const body = req.body;
  const nuevoProducto = service.create(body);
  res.status(201).json({
    message: 'creado',
    data: nuevoProducto
  });
})
router.patch('/:id',(req,res)=>{
  const {id} = req.params;
  const body = req.body;
  const product = service.update(id, body);
  res.status(200).json({
    message: 'actualizado',
    product
  });
})
router.delete('/:id',(req,res)=>{
  const {id} = req.params;
  const rta = service.delete(id);
  res.json({
    message: 'eliminado',
    rta
  });
})

module.exports = router;
