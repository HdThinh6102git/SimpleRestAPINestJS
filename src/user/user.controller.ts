import {
  Controller,
  Get,
  UseGuards,
} from '@nestjs/common';

import { JwtGuard } from '../auth/guard';
import { GetUser } from '../auth/decorator';
import { User } from '@prisma/client';
@Controller('users')
@UseGuards(JwtGuard)
export class UserController {
  @Get('profile')
  getProfile(@GetUser() user: User) {
    return user;
  }
}
