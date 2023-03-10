import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type LookupDocument = Lookup & Document;

@Schema()
export class Lookup {

    @Prop()
    lookup_id: number;

    // 1 = brand 2 = catagory
    @Prop()
    group_id: number;

    @Prop()
    name: string;
}

export const LookupSchema = SchemaFactory.createForClass(Lookup);