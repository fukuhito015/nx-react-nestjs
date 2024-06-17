import { addNum } from '@common/lib'
import { Injectable } from '@nestjs/common'
@Injectable()
export class AppService {
  getData(): { message: string } {
    const sum = addNum(1, 2)
    console.log({ sum })
    return { message: 'Hello API' }
  }
}
