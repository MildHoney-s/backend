import { ExampleController } from '@app/modules/example/example.controller'
import { ExampleService } from '@app/modules/example/example.service'
import { PrismaModule } from '@app/modules/prisma/prisma.module'
import { Module } from '@nestjs/common'

@Module({
  imports: [PrismaModule],
  controllers: [ExampleController],
  providers: [ExampleService],
})
export class ExampleModule {}
