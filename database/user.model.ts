import { Schema, models, model, Document } from 'mongoose';

export interface IUser extends Document {
  
}

const UserSchema = new Schema({
  
})

const User = models.User || model('User', UserSchema);

export default User;