import { Schema, model } from "mongoose";
import { Product } from "../types";

export const ProductSchema = new Schema<Product>(
    {

    },
    { timestamps: true, versionKey: false }
)

const ProductModel = model("Product", ProductSchema);

export default ProductModel;