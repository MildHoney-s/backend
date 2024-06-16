import { CustomHttpExceptionFilter } from '@app/common/middlewares/http.middleware'
import { ExampleModule } from '@app/modules/example/example.module'
import { PrismaModule } from '@app/modules/prisma/prisma.module'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_FILTER } from '@nestjs/core'

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, ExampleModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: CustomHttpExceptionFilter,
    },
  ],
})
export class AppModule {}
