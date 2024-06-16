import { PrismaService } from '@app/modules/prisma/prisma.service'
import { Module } from '@nestjs/common'

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
