import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop({ unique: [true, 'Duplicate email entered'] })
  password: string;
}

export const userSchema = SchemaFactory.createForClass(User);
