const express = require("express");
const router = express.Router();

const { createPdt, deletePdt, updatePdt, getAllpdt } = require("../controller/projectController.js")

// Create
router.post("/", createPdt)


// Update
router.put("/find/:id", updatePdt)

// Delete
router.delete("/find/:id", deletePdt);

// Get All
router.get("/", getAllpdt);



module.exports = router

