/***************************************************************************************************************************
 * @license                                                                                                                *
 * Copyright 2017 Coinbase, Inc.                                                                                           *
 *                                                                                                                         *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance          *
 * with the License. You may obtain a copy of the License at                                                               *
 *                                                                                                                         *
 * http://www.apache.org/licenses/LICENSE-2.0                                                                              *
 *                                                                                                                         *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on     *
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the                      *
 * License for the specific language governing permissions and limitations under the License.                              *
 ***************************************************************************************************************************/
import * as winston from 'winston';
export interface Logger {
    log(level: string, message: string, meta?: any): void;
    error(err: Error): void;
}
export declare function ConsoleLoggerFactory(options?: winston.ConsoleTransportOptions): Logger;
export declare const NullLogger: {
    log(_level: string, _message: string, _meta?: any): void;
    error(_err: Error): void;
};
/**
 * Utility function that acts exactly like ConsoleLogger, except that it runs any metadata through messageSanitizer first to blank out sensitive data
 */
export declare function SanitizedLoggerFactory(sensitiveKeys: string[], options?: winston.ConsoleTransportOptions): Logger;
