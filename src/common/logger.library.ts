import { Logger } from '@nestjs/common';
import winston from 'winston';
import winstonDaily from 'winston-daily-rotate-file';

export class LoggerLibrary extends Logger {
    log(message: string) {
        /* your implementation */
        logger.info(message);
        super.log(message);
    }
    error(message: string, trace: any) {
        /* your implementation */
        logger.error(message, trace);
        super.error(message);
    }
    warn(message: string) {
        /* your implementation */
        logger.warn(message);
        super.warn(message);
    }
    debug(message: string) {
        /* your implementation */
        logger.debug(message);
        super.debug(message);
    }
    verbose(message: string) {
        /* your implementation */
        logger.verbose(message);
        super.verbose(message);
    }
}

const { combine, timestamp, printf, prettyPrint } = winston.format;
const logFormat = printf((info) => {
    return `${info.timestamp} ${info.level}: ${info.message}`;
});
const logger = winston.createLogger({
    format: combine(
        timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        logFormat,
        prettyPrint(),
    ),
    transports: [
        // info 레벨 로그를 저장할 파일 설정
        // new winstonDaily({
        //     level: 'info',
        //     datePattern: 'YYYY-MM-DD',
        //     dirname: 'logs',
        //     filename: `%DATE%.log`,
        //     maxFiles: 30, // 30일치 로그 파일 저장
        //     zippedArchive: true,
        // }),
        // error 레벨 로그를 저장할 파일 설정
        new winstonDaily({
            level: 'error',
            datePattern: 'YYYY-MM-DD',
            dirname: 'logs/error', // error.log 파일은 /logs/error 하위에 저장
            filename: `%DATE%.error.log`,
            maxFiles: 30,
            zippedArchive: true,
        }),
    ],
});
