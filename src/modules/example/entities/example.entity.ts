import { ApiProperty } from '@nestjs/swagger'
import { test } from '@prisma/client'

export class ExampleEntity implements test {
  @ApiProperty()
  id: number
}
