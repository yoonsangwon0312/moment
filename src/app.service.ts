import { Injectable } from '@nestjs/common';
import { LoggerLibrary } from './common/logger.library';

@Injectable()
export class AppService {
  constructor(private logger: LoggerLibrary) {}

  getHello() {
    try {
      throw new Error ('ErrorTest')
      return 'Hello World!';
    } catch (err) {
      this.logger.error(err, 'Appservice/getHello');
    }
  }
}
