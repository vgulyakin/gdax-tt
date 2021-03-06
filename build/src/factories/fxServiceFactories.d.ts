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
import { Logger } from '../utils/Logger';
import YahooFinanceFXProvider from '../FXService/providers/YahooFXProvider';
import OpenExchangeProvider from '../FXService/providers/OpenExchangeProvider';
import { FXService } from '../FXService/FXService';
import CoinMarketCapProvider from '../FXService/providers/CoinMarketCapProvider';
/**
 * Create and return a new FXProvider.
 * @param provider {string} Allowed values are 'yahoo' and 'openexhangerates'. OpenExchangeRates requires the API key to
 * be specifies in the OPENEXCHANGERATE_KEY environment variable.
 * @param logger {Logger} An existing logger object.
 * @constructor
 */
export declare function FXProviderFactory(provider: string, logger: Logger): YahooFinanceFXProvider | OpenExchangeProvider | CoinMarketCapProvider;
/**
 * Generate an return an FXService provider with sane defaults. If no arguments are specified, Yahoo Finance is used
 * as the sole provider using a SimpleRateCalculator instance.
 *
 * The returned FXService has a default refresh interval of 10 minutes. By default, no currency pairs are set, so a
 * recommended pattern is to set them directly after receiving the FXService, i.e.
 *
 * ```
 *   const service = SimpleFXServiceFactory().addCurrencyePair({ from: 'USD', to: 'EUR'});
 * ```
 *
 * @param provider {string} Either 'yahoo', 'openexchangerates' or 'coinmarketcap'. For OER, the OPENEXCHANGE_KEY envar must be set
 * @param logger {Logger} If not specified a new ConsoleLogger will be created
 * @param refreshInterval {number} the period (in ms) to poll the underlying API for new prices
 */
export declare function SimpleFXServiceFactory(provider?: string, logger?: Logger, refreshInterval?: number): FXService;
