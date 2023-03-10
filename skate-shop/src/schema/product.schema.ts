import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ProductDocument = Product & Document;

@Schema()
export class Product {

    @Prop()
    image: string;

    @Prop()
    name: string;

    @Prop()
    discount: number;

    @Prop()
    brand: string;

    @Prop()
    description: string;

    @Prop()
    category: string;

    @Prop()
    price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);