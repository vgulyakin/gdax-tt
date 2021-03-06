"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
// Use this when one wants to iterate through the sides with proper types:
//   SIDES.forEach((side) => { ... });           // side is a Side
// instead of
//   ['buy', 'sell'].forEach((side) => { ... }); // side is a string
exports.SIDES = ['buy', 'sell'];
function isSide(s) {
    return s === 'buy' || s === 'sell';
}
exports.isSide = isSide;
/**
 * Given a string return the corresponding Side or throw.
 *
 * @param side the side as a string
 * @return the side as a Side
 * @throws if the input side cannot be converted to a Side
 */
function Side(side) {
    // Check for a undefined or null side even though it shouldn't be
    // one, since the market feeds may just pass in any value.
    const s = side ? side.toLowerCase() : '';
    switch (s) {
        case 'buy':
            return s;
        case 'sell':
            return s;
        default:
            throw new Error(`Cannot convert "${side}" to a Side`);
    }
}
exports.Side = Side;
//# sourceMappingURL=sides.js.map