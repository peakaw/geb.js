/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BigNumberish } from '@ethersproject/bignumber'

import { BigNumber } from '@ethersproject/bignumber'

import { BaseContractAPI } from '@reflexer-finance/geb-provider'
import { ERC20 } from '@reflexer-finance/geb-provider'

export class Weth<TX_OBJ>
    extends BaseContractAPI<TX_OBJ>
    implements ERC20<TX_OBJ> {
    name(): Promise<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    approve(guy: string, wad: BigNumberish): Promise<TX_OBJ> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}

        return this.chainProvider.ethSend(this.address, abi, [guy, wad])
    }

    totalSupply(): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    transferFrom(src: string, dst: string, wad: BigNumberish): Promise<TX_OBJ> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}

        return this.chainProvider.ethSend(this.address, abi, [src, dst, wad])
    }

    withdraw(wad: BigNumberish): Promise<TX_OBJ> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}

        return this.chainProvider.ethSend(this.address, abi, [wad])
    }

    decimals(): Promise<number> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    balanceOf(arg0: string): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [arg0])
    }

    symbol(): Promise<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    transfer(dst: string, wad: BigNumberish): Promise<TX_OBJ> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}

        return this.chainProvider.ethSend(this.address, abi, [dst, wad])
    }

    deposit(): Promise<TX_OBJ> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"}

        return this.chainProvider.ethSend(this.address, abi, [])
    }

    allowance(arg0: string, arg1: string): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [arg0, arg1])
    }
}
