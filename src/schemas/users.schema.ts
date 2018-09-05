import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

var Schema = mongoose.Schema;

export const UserSchema = Schema({
    id: String,
    name: String,
    username: String,
    email: String,
    city: String,
    street: String,
    suite: String,
    phone: String
});

export interface User extends Document {
    id: String,
    name: String,
    username: String,
    email: String,
    city: String,
    street: String,
    suite: String,
    phone: String
}

export class UserModel implements User {
    id: String
    name: String
    username: String
    email: String
    city: String
    street: String
    suite: String
    phone: String
};


