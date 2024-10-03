let products = [
    { id: 1, name: "iPhone 12 Pro", price: 1099.99 },
    { id: 2, name: "Samsung Galaxy S21", price: 999.99 },
    { id: 3, name: "Sony PlayStation 5", price: 499.99 },
    { id: 4, name: "MacBook Pro 16", price: 2399.99 },
    { id: 5, name: "DJI Mavic Air 2", price: 799.99 },
  ];

  const getAllProduct = (req,res)=>{
    res.status(200).send(products)
  };


  const getProductsById = (req,res)=>{
    const filterProduct = products.filter((el)=>el.id == req.params.id)
    res.status(200).send(filterProduct[0])
};


const createNewProduct= (req,res)=>{
    const lastId = products[products.length - 1].id;
    const newProduct = { ...req.body, id: lastId + 1 };
    blogs.push(newProduct);
  
    res.status(201).send(newProduct);
  };
  
  const updateProduct = (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
  
    const isExistProduct = products.findIndex((el) => el.id === parseInt(id));
  
    if (isExistProduct === -1) {
      return res.status(404).json({ error: "Product not found!" });
    }
  
    products[isExistProduct].name = name || products[isExistProduct].name;
    products[isExistProduct].price =price || products[isExistProduct].price;
  
    res.status(200).json({
      message: "update Product was successfully.",
      data: products[isExistProduct],
    });
  };
  
  const deleteProduct = (req, res) => {
    const { id } = req.params;
  
    const isExistProduct = products.findIndex((el) => el.id === parseInt(id));
  
    if (isExistProduct === -1) {
      return res.status(404).json({ error: "Product not found!" });
    }
  
    products = products.filter((el) => el.id !== products[isExistProduct].id);
    console.log(products);
  
    res.status(204).end();
  };
  
  module.exports = {
    getAllProduct,
    getProductsById,
    createNewProduct,
    updateProduct,
    deleteProduct,
  };
  