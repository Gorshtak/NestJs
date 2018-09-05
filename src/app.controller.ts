import { Get, Controller, Delete, Param, Post, Logger, Req, Body, Put, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from 'schemas/users.schema';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async findAll(): Promise<User[]> {
    return this.appService.findAll();
  }

  @Get(':id')
  async findById(@Param() id): Promise<User> {
    return this.appService.findById(id);
  }

  @Delete(':id')
  async deleteUser(@Param() id): Promise<User> {
    return this.appService.deleteUser(id);
  }

  @Put()
  async update(@Body() user): Promise<User> {
    return this.appService.update(user);
  }

  @Post()
  async createUser(@Body() user): Promise<User> {
    return this.appService.createUser(user);
  }


}
