import CategoryModel from "../models/CategoryModel.js";
import slugify from "slugify";

// create Category
export const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Category Name is Required" });
    }
    const existingCategory = await CategoryModel.findOne({ name });
    if (existingCategory) {
      return res.status(401).send({ message: "Category Allready exist" });
    }
    const category = await new CategoryModel({
      name,
      slug: slugify(name),
    }).save();
    res.status(200).send({
      success: true,
      message: "Category Added",
    });
  } catch (error) {
    console.log("error: ", error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Category",
    });
  }
};
// update category
export const updateCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const category = await CategoryModel.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "category upadated successfull",
      category,
    });
  } catch (error) {
    console.log("error: ", error);
    req.status(500).send({
      success: false,
      error,
      message: "error while updating the category",
    });
  }
};
// read category
export const CategoryController = async (req, res) => {
  try {
    const allCategories = await CategoryModel.find({});
    res.status(200).send({
      sccess: true,
      message: "categories are fatched",
      allCategories,
    });
  } catch (error) {
    console.log("error: ", error);
    res.status(500).send({
      success: false,
      error,
      message: "error while fatching the categories",
    });
  }
};
// get single Category
export const SingleCategoryController = async (req, res) => {
  try {
    const singleCategory = await CategoryModel.findOne({
      slug: req.params.slug,
    });
    res.status(200).send({
      sccess: true,
      message: "Single categories are fatched",
      singleCategory,
    });
  } catch (error) {
    console.log("error: ", error);
    res.status(500).send({
      success: false,
      error,
      message: "error while fatching the categories",
    });
  }
};

// delete Category
export const DeleteCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    await CategoryModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
    });
  } catch (error) {
    console.log("error: ", error);
    res.status(500).send({
      success: false,
      error,
      message: "error while fatching the categories",
    });
  }
};
