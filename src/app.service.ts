import { Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserSchema, User, UserModel } from 'schemas/users.schema';

@Injectable()
export class AppService {
  constructor(@InjectModel('User') private userModel: Model<User>) {
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findById(user): Promise<User> {
    return await this.userModel.findById(user.id);
  }

  async deleteUser(user): Promise<User> {
    return await this.userModel.findOneAndDelete({ _id: user.id }).exec();
  }

  async createUser(user: UserModel): Promise<User> {
    return await this.userModel.create(user);
  }

  async update(user: UserModel): Promise<User> {
    return await this.userModel.findOneAndUpdate(user.id, user).exec();
  }

}
