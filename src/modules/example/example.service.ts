import { PrismaService } from '@app/modules/prisma/prisma.service'
import { Injectable } from '@nestjs/common'

@Injectable()
export class ExampleService {
  constructor(private prisma: PrismaService) {}

  async get(): Promise<string> {
    try {
      const result = await this.prisma.$transaction(async (transaction) => {
        return await transaction.test.findMany()
      })
      console.log(result)
      return 'test'
    } catch (error) {
      console.log(error.stack)
      return 'error'
    }
  }
}
