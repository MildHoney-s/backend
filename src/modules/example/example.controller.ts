import { ExampleDto } from '@app/modules/example/dto/example.dto'
import { ExampleService } from '@app/modules/example/example.service'
import { Controller, Get } from '@nestjs/common'
import { ApiOkResponse } from '@nestjs/swagger'

@Controller()
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Get('')
  @ApiOkResponse({ type: ExampleDto })
  async get(): Promise<string> {
    return await this.exampleService.get()
  }
}
