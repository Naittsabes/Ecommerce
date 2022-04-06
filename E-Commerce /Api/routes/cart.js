const Cart = require("../models/Product");
const {
  verifyToken,
  verifyTokenAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

// Create

router.post("/", async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Actualizar
router.put("/:id", verifyTokenAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete
router.delete("/:id", verifyTokenAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Producto eliminado");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Cart

router.get("/find/:userid", verifyTokenAuthorization, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });

    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get all products
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(500).json(carts);
  } catch {
    res.status(500).json(err);
  }
});

module.exports = router;
