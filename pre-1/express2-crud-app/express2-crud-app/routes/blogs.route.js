const { Router } = require("express");
const {
    getAllProduct,
    getProductsById,
    createNewProduct,
    updateProduct,
    deleteProduct,
} = require("../controllers");
const router = Router();

router.get("/product", getAllProduct,);

router.get("/product/:id", getProductsById,);

router.post("/product", createNewProduct,);

router.patch("/product/:id", updateProduct,);


router.delete("/product/:id", deleteProduct);

module.exports = router;
