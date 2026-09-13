import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';

import { TicketsModule } from './tickets/tickets.module.js';


@Module({
  imports: [
    TicketsModule,
  ],

})
export class AppModule {}
