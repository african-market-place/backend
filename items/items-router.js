const router = require("express").Router();
const authenticate = require("../auth/middleware/authenticate-middleware");
const Products = require("./items-model");

router.get("/", (req, res) => {
  Products.getProducts()
    .then(products => {
      res.status(201).json(products);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/addProducts", (req, res) => {
  Products.addProducts(req.body)
    .then(products => {
      res.status(201).json(products);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.put("/:id", authenticate, (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  Products.updateProducts(id, changes)
    .then(updateProducts => {
      res.status(201).json(updateProducts);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  Products.getProductsById(id)
    .then(product => {
      res.status(200).json(product);
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
