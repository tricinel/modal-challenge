/* eslint-disable no-console */
import { colors } from '../tokens';
import type { Colors } from '../tokens/colors';

type LogLevel = 'info' | 'warn' | 'error' | 'log';

const colorKeyMap = {
  log: 'neutral',
  info: 'confirmation',
  warn: 'information',
  error: 'destructive'
};

function styledConsoleLog(message: string, level: LogLevel): void {
  const bg = colors[`${colorKeyMap[level]}-400` as keyof Colors];
  console.log(
    `%c${level.toUpperCase()}: ${message}`,
    `display:block; background-color: ${bg}; color: ${colors['white-100']}; padding: 8px;`
  );
}

function log(message: string): void {
  styledConsoleLog(message, 'log');
}

function info(message: string): void {
  styledConsoleLog(message, 'info');
}

function warn(message: string): void {
  styledConsoleLog(message, 'warn');
}

function error(message: string): void {
  styledConsoleLog(message, 'error');
}

const logger = { warn, info, error, log };

export default logger;
