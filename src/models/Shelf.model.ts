import { Schema, model, SchemaDefinitionProperty } from "mongoose";
import { Shelf } from "../types";
import { Shelf_Availability } from "../types";
import AvailabilityModel from "./Availability.model";
import ProductModel, { ProductSchema } from "./Product_model";
export const LocationSchema = new Schema<Shelf>({
    availability: {
        type: Schema.Types.ObjectId,
        ref: "Availability",
        name: AvailabilityModel.name
    },
    level: {
        type: String,
        maxlength: 10,
        required: true
    },
    products: [{
        type: Schema.Types.ObjectId,
        name: ProductModel.name,
        ref: "Product"
    }]
}, {
    versionKey: false,
    timestamps: true
})

const LocationModel = model("Location", LocationSchema);

export default LocationModel;