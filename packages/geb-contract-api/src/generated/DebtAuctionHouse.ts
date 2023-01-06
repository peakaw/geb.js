/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@money-god/geb-contract-base'
import { MulticallRequest } from '@money-god/geb-contract-base'
import { TransactionRequest } from '@money-god/geb-contract-base'
import { BytesLike } from '@ethersproject/bytes'
import { BigNumberish } from '@ethersproject/bignumber'
import { BigNumber } from '@ethersproject/bignumber'

export class DebtAuctionHouse extends BaseContractAPI {
    AUCTION_HOUSE_TYPE(): Promise<string>
    AUCTION_HOUSE_TYPE(multicall: true): MulticallRequest<string>
    AUCTION_HOUSE_TYPE(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"AUCTION_HOUSE_TYPE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    accountingEngine(): Promise<string>
    accountingEngine(multicall: true): MulticallRequest<string>
    accountingEngine(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"accountingEngine","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    activeDebtAuctions(): Promise<BigNumber>
    activeDebtAuctions(multicall: true): MulticallRequest<BigNumber>
    activeDebtAuctions(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"activeDebtAuctions","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    /**
     * Add auth to an account
     * @param account Account to add auth to
     */

    addAuthorization(account: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [account])
    }

    amountSoldIncrease(): Promise<BigNumber>
    amountSoldIncrease(multicall: true): MulticallRequest<BigNumber>
    amountSoldIncrease(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"amountSoldIncrease","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    auctionsStarted(): Promise<BigNumber>
    auctionsStarted(multicall: true): MulticallRequest<BigNumber>
    auctionsStarted(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"auctionsStarted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    authorizedAccounts(address: string): Promise<BigNumber>
    authorizedAccounts(
        address: string,
        multicall: true
    ): MulticallRequest<BigNumber>
    authorizedAccounts(
        address: string,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"authorizedAccounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [address], multicall)
    }

    bidDecrease(): Promise<BigNumber>
    bidDecrease(multicall: true): MulticallRequest<BigNumber>
    bidDecrease(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"bidDecrease","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    bidDuration(): Promise<number>
    bidDuration(multicall: true): MulticallRequest<number>
    bidDuration(multicall?: true): Promise<number> | MulticallRequest<number> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"bidDuration","outputs":[{"internalType":"uint48","name":"","type":"uint48"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    bids(
        uinteger: BigNumberish
    ): Promise<{
        bidAmount: BigNumber
        amountToSell: BigNumber
        highBidder: string
        bidExpiry: number
        auctionDeadline: number
    }>
    bids(
        uinteger: BigNumberish,
        multicall: true
    ): MulticallRequest<{
        bidAmount: BigNumber
        amountToSell: BigNumber
        highBidder: string
        bidExpiry: number
        auctionDeadline: number
    }>
    bids(
        uinteger: BigNumberish,
        multicall?: true
    ):
        | Promise<{
              bidAmount: BigNumber
              amountToSell: BigNumber
              highBidder: string
              bidExpiry: number
              auctionDeadline: number
          }>
        | MulticallRequest<{
              bidAmount: BigNumber
              amountToSell: BigNumber
              highBidder: string
              bidExpiry: number
              auctionDeadline: number
          }> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"bids","outputs":[{"internalType":"uint256","name":"bidAmount","type":"uint256"},{"internalType":"uint256","name":"amountToSell","type":"uint256"},{"internalType":"address","name":"highBidder","type":"address"},{"internalType":"uint48","name":"bidExpiry","type":"uint48"},{"internalType":"uint48","name":"auctionDeadline","type":"uint48"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [uinteger], multicall)
    }

    contractEnabled(): Promise<BigNumber>
    contractEnabled(multicall: true): MulticallRequest<BigNumber>
    contractEnabled(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"contractEnabled","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    /**
     * Decrease the protocol token amount you're willing to receive in        exchange for providing the same amount of system coins being raised by the auction
     * @param amountToBuy Amount of protocol tokens to buy (must be smaller than the previous proposed amount) (wad)
     * @param bid New system coin bid (must always equal the total amount raised by the auction) (rad)
     * @param id ID of the auction for which you want to submit a new bid
     */

    decreaseSoldAmount(
        id: BigNumberish,
        amountToBuy: BigNumberish,
        bid: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amountToBuy","type":"uint256"},{"internalType":"uint256","name":"bid","type":"uint256"}],"name":"decreaseSoldAmount","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [id, amountToBuy, bid])
    }

    /**
     * Disable the auction house (usually called by the AccountingEngine)
     */

    disableContract(): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"disableContract","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [])
    }

    /**
     * Change addresses of integrated contracts
     * @param addr New contract address
     * @param parameter The name of the oracle contract modified
     */

    modifyParameters__Bytes32Address(
        parameter: BytesLike,
        addr: string
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"address","name":"addr","type":"address"}],"name":"modifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [parameter, addr])
    }

    /**
     * Modify auction parameters
     * @param data New value for the parameter
     * @param parameter The name of the parameter modified
     */

    modifyParameters__Bytes32Uint256(
        parameter: BytesLike,
        data: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"uint256","name":"data","type":"uint256"}],"name":"modifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [parameter, data])
    }

    protocolToken(): Promise<string>
    protocolToken(multicall: true): MulticallRequest<string>
    protocolToken(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"protocolToken","outputs":[{"internalType":"contract TokenLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    /**
     * Remove auth from an account
     * @param account Account to remove auth from
     */

    removeAuthorization(account: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [account])
    }

    /**
     * Restart an auction if no bids were submitted for it
     * @param id ID of the auction to restart
     */

    restartAuction(id: BigNumberish): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"restartAuction","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [id])
    }

    safeEngine(): Promise<string>
    safeEngine(multicall: true): MulticallRequest<string>
    safeEngine(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"safeEngine","outputs":[{"internalType":"contract SAFEEngineLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    /**
     * Settle/finish an auction
     * @param id ID of the auction to settle
     */

    settleAuction(id: BigNumberish): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"settleAuction","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [id])
    }

    /**
     * Start a new debt auction
     * @param amountToSell Amount of protocol tokens to sell (wad)
     * @param incomeReceiver Who receives the auction proceeds
     * @param initialBid Initial bid size (rad)
     */

    startAuction(
        incomeReceiver: string,
        amountToSell: BigNumberish,
        initialBid: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"incomeReceiver","type":"address"},{"internalType":"uint256","name":"amountToSell","type":"uint256"},{"internalType":"uint256","name":"initialBid","type":"uint256"}],"name":"startAuction","outputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            incomeReceiver,
            amountToSell,
            initialBid,
        ])
    }

    /**
     * Terminate an auction prematurely.
     * @param id ID of the auction to terminate
     */

    terminateAuctionPrematurely(id: BigNumberish): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"terminateAuctionPrematurely","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [id])
    }

    totalAuctionLength(): Promise<number>
    totalAuctionLength(multicall: true): MulticallRequest<number>
    totalAuctionLength(
        multicall?: true
    ): Promise<number> | MulticallRequest<number> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"totalAuctionLength","outputs":[{"internalType":"uint48","name":"","type":"uint48"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }
}
