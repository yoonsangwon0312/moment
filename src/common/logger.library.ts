import { ConsoleLogger } from '@nestjs/common';
import { format } from 'winston';
const { createLogger, transports } = require('winston');
const { DailyRotateFile } = require('winston-daily-rotate-file');

export class LoggerLibrary extends ConsoleLogger {
    warn(message: string) {
        /* your implementation */
        logger.warn(message);
        super.warn(message);
    }
    error(message: string, trace: any) {
        /* your implementation */
        logger.error(message, trace);
        super.error(message);
    }
    debug(message: string) {
        /* your implementation */
        logger.debug(message);
        super.debug(message);
    }
}

const { combine, timestamp, printf, prettyPrint } = format;
const logFormat = printf((info) => {
    return `${info.timestamp} ${info.level}: ${info.message}`;
});
const logger = createLogger({
    format: combine(
        timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        logFormat,
        prettyPrint(),
    ),
    transports: [
        // error 레벨 로그를 저장할 파일 설정
        new transports.DailyRotateFile({
            level: 'error',
            datePattern: 'YYYY-MM-DD',
            dirname: 'logs/error', // error.log 파일은 /logs/error 하위에 저장
            filename: `%DATE%.error.log`,
            maxFiles: 30,
            zippedArchive: true,
        }),

        // warn 레벨 로그를 저장할 파일 설정
        new transports.DailyRotateFile({
            level: 'warn',
            datePattern: 'YYYY-MM-DD',
            dirname: 'logs/warn',
            filename: `%DATE%.warn.log`,
            maxFiles: 30,
            zippedArchive: true,
        }),

        // debug 레벨 로그를 저장할 파일 설정
        new transports.DailyRotateFile({
            level: 'debug',
            datePattern: 'YYYY-MM-DD',
            dirname: 'logs/debug',
            filename: `%DATE%.debug.log`,
            maxFiles: 30,
            zippedArchive: true,
        }),
    ],
});
