import { Test, TestingModule } from '@nestjs/testing'

import { AppController } from '@backend/app/app.controller'
import { AppService } from '@backend/app/app.service'

describe('AppController', () => {
  let app: TestingModule

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile()
  })

  describe('getData', () => {
    it('should return "Hello API"', () => {
      const appController = app.get<AppController>(AppController)
      expect(appController.getData()).toEqual({ message: 'Hello API' })
    })
  })
})
