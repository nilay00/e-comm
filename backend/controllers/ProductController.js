import slugify from "slugify";
import ProductModel from "../models/ProductModel.js";
import fs from "fs";
export const CreateProductController = async (req, res) => {
  try {
    const { name, slug, description, price, category, qty, shipping } =
      req.fields;
    const { photo } = req.files;
    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is Required" });
      case !description:
        return res.status(500).send({ error: "Description is Required" });

      case !price:
        return res.status(500).send({ error: "Price is Required" });

      case !category:
        return res.status(500).send({ error: "Category is Required" });

      case !qty:
        return res.status(500).send({ error: "Quantity is Required" });
      case !photo && photo.size > 1000000:
        return res
          .status(500)
          .send({ error: "Image is Required and Size should Be 1MB" });
    }

    const products = new ProductModel({ ...req.fields, slug: slugify(name) });
    if (photo) {
      products.photo.data = fs.readFileSync(photo.path);
      products.photo.contentType = photo.type;
    }
    await products.save();
    res.status(200).send({
      success: true,
      message: "Product has been Created",
      products,
    });
  } catch (error) {
    console.log("error: ", error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Product Creating",
    });
  }
};
