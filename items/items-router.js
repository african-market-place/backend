const router = require("express").Router();
const authenticate = require("../auth/middleware/authenticate-middleware");
const Products = require("./items-model");

router.get("/", authenticate, (req, res) => {
  Products.getProducts()
    .then(products => {
      res.status(201).json(products);
    })
    .catch(error => {
      res.status(500).json(err);
    });
});

router.post("/addProducts", authenticate, (req, res) => {
  Products.addProducts(req.body)
    .then(products => {
      res.status(201).json(products);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.delete("/:id", authenticate, (req, res) => {
  const id = req.params.id;

  Products.deleteProduct(id)
    .then(deletedProduct => {
      res.status(200).json({ message: "Product deleted" });
    })
    .catch(error => {
      res.status(500).json(err);
    });
});

module.exports = router;
