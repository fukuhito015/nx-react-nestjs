import { Module } from '@nestjs/common'

import { AppController } from '@backend/app/app.controller'
import { AppService } from '@backend/app/app.service'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
