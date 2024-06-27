import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop({ unique: [true, 'Duplicate email entered'] })
  password: string;
}

export const userSchema = SchemaFactory.createForClass(User);
