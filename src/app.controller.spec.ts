import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModel, UserSchema } from './schemas/users.schema';

describe('AppController', () => {
  let appService: AppService;
  let appController: AppController;

  beforeEach(() => {
    appService = new AppService({
      id: String,
      name: String,
      username: String,
      email: String,
      city: String,
      street: String,
      suite: String,
      phone: String
    });
    appController = new AppController(appService);
  });

  describe('findAll', () => {
    it('should return array of Users', async () => {

      const result = ['taaest'];
      jest.spyOn(appService, 'findAll').mockImplementation(() => result);

      expect(await appController.findAll()).toBe(result);
    });
  });

  describe('findById', () => {
    it('should return User for given ID', async () => {

      const result = ['test'];
      jest.spyOn(appService, 'findById').mockImplementation(() => result);

      expect(await appController.findById({})).toBe(result);
    });
  });

  describe('deleteUser', () => {
    it('should delete User for given ID', async () => {

      const result = ['test'];
      jest.spyOn(appService, 'deleteUser').mockImplementation(() => result);

      expect(await appController.deleteUser({})).toBe(result);
    });
  });

  describe('createUser', () => {
    it('create new User', async () => {

      const result = ['test'];
      jest.spyOn(appService, 'createUser').mockImplementation(() => result);

      expect(await appController.createUser({})).toBe(result);
    });
  });

  describe('update', () => {
    it('update User', async () => {

      const result = ['test'];
      jest.spyOn(appService, 'update').mockImplementation(() => result);

      expect(await appController.update({})).toBe(result);
    });
  });

});

