import { Global, Module } from "@nestjs/common";
import { LoggerLibrary } from "./logger.library";

const modules = [];
const services = [];
const librarys = [LoggerLibrary];


@Global()
@Module({
  imports : [...modules],
  providers: [...services, ...librarys],
  exports: [...modules, ...services, ...librarys],
})

export class CommonModule {}