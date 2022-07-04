import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';

@Controller('v1')
export class AppController {
  @Get('compte/:id')
  async checkBalance(@Param('id') id: number): Promise<any> {
    switch (id) {
      case 1:
        return {
          Compte: 1,
          Solde: 5000,
        };
        break;

      case 2:
        return {
          Compte: 2,
          Solde: 250000,
        };
        break;

      default:
        throw new NotFoundException();
    }
  }

  @Post('send/:amount/to/:compte')
  async send(@Param('amount') amount: number, @Param('compte') compte: number) {
    if (compte !== 1 && compte !== 2) throw new NotFoundException();
    switch (compte) {
      case 1:
        return {
          Compte: 1,
          Solde: 5000 + amount,
        };
        break;

      case 2:
        return {
          Compte: 2,
          Solde: 250000 + amount,
        };
        break;

      default:
        throw new NotFoundException();
    }
  }
}
