/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@reflexer-finance/geb-provider'
import { MulticallRequest } from '@reflexer-finance/geb-provider'
import { TransactionRequest } from '@reflexer-finance/geb-provider'
import { BytesLike } from '@ethersproject/bytes'
import { BigNumberish } from '@ethersproject/bignumber'
import { BigNumber } from '@ethersproject/bignumber'

export class EnglishCollateralAuctionHouse extends BaseContractAPI {
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

    AUCTION_TYPE(): Promise<string>
    AUCTION_TYPE(multicall: true): MulticallRequest<string>
    AUCTION_TYPE(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"AUCTION_TYPE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"}

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

    amountToRaise(id: BigNumberish): Promise<BigNumber>
    amountToRaise(
        id: BigNumberish,
        multicall: true
    ): MulticallRequest<BigNumber>
    amountToRaise(
        id: BigNumberish,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"amountToRaise","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [id], multicall)
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

    bidAmount(id: BigNumberish): Promise<BigNumber>
    bidAmount(id: BigNumberish, multicall: true): MulticallRequest<BigNumber>
    bidAmount(
        id: BigNumberish,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"bidAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [id], multicall)
    }

    bidDuration(): Promise<number>
    bidDuration(multicall: true): MulticallRequest<number>
    bidDuration(multicall?: true): Promise<number> | MulticallRequest<number> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"bidDuration","outputs":[{"internalType":"uint48","name":"","type":"uint48"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    bidIncrease(): Promise<BigNumber>
    bidIncrease(multicall: true): MulticallRequest<BigNumber>
    bidIncrease(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"bidIncrease","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    bidToMarketPriceRatio(): Promise<BigNumber>
    bidToMarketPriceRatio(multicall: true): MulticallRequest<BigNumber>
    bidToMarketPriceRatio(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"bidToMarketPriceRatio","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

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
        forgoneCollateralReceiver: string
        auctionIncomeRecipient: string
        amountToRaise: BigNumber
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
        forgoneCollateralReceiver: string
        auctionIncomeRecipient: string
        amountToRaise: BigNumber
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
              forgoneCollateralReceiver: string
              auctionIncomeRecipient: string
              amountToRaise: BigNumber
          }>
        | MulticallRequest<{
              bidAmount: BigNumber
              amountToSell: BigNumber
              highBidder: string
              bidExpiry: number
              auctionDeadline: number
              forgoneCollateralReceiver: string
              auctionIncomeRecipient: string
              amountToRaise: BigNumber
          }> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"bids","outputs":[{"internalType":"uint256","name":"bidAmount","type":"uint256"},{"internalType":"uint256","name":"amountToSell","type":"uint256"},{"internalType":"address","name":"highBidder","type":"address"},{"internalType":"uint48","name":"bidExpiry","type":"uint48"},{"internalType":"uint48","name":"auctionDeadline","type":"uint48"},{"internalType":"address","name":"forgoneCollateralReceiver","type":"address"},{"internalType":"address","name":"auctionIncomeRecipient","type":"address"},{"internalType":"uint256","name":"amountToRaise","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [uinteger], multicall)
    }

    collateralType(): Promise<string>
    collateralType(multicall: true): MulticallRequest<string>
    collateralType(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"collateralType","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    /**
     * Second auction phase: decrease the collateral amount you're willing to receive in        exchange for providing the same amount of coins as the winning bid
     * @param amountToBuy Amount of collateral to buy (must be smaller than the previous proposed amount) (wad)
     * @param id ID of the auction for which you want to submit a new amount of collateral to buy
     * @param rad New bid submitted; must be equal to the winning bid from the increaseBidSize phase (rad)
     */

    decreaseSoldAmount(
        id: BigNumberish,
        amountToBuy: BigNumberish,
        rad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amountToBuy","type":"uint256"},{"internalType":"uint256","name":"rad","type":"uint256"}],"name":"decreaseSoldAmount","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [id, amountToBuy, rad])
    }

    forgoneCollateralReceiver(id: BigNumberish): Promise<string>
    forgoneCollateralReceiver(
        id: BigNumberish,
        multicall: true
    ): MulticallRequest<string>
    forgoneCollateralReceiver(
        id: BigNumberish,
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"forgoneCollateralReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [id], multicall)
    }

    /**
     * First auction phase: submit a higher bid for the same amount of collateral
     * @param amountToBuy Amount of collateral to buy (wad)
     * @param id ID of the auction you want to submit the bid for
     * @param rad New bid submitted (rad)
     */

    increaseBidSize(
        id: BigNumberish,
        amountToBuy: BigNumberish,
        rad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amountToBuy","type":"uint256"},{"internalType":"uint256","name":"rad","type":"uint256"}],"name":"increaseBidSize","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [id, amountToBuy, rad])
    }

    liquidationEngine(): Promise<string>
    liquidationEngine(multicall: true): MulticallRequest<string>
    liquidationEngine(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"liquidationEngine","outputs":[{"internalType":"contract LiquidationEngineLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    /**
     * Modify oracle related integrations
     * @param data New address for the oracle contract
     * @param parameter The name of the oracle contract modified
     */

    modifyParameters(parameter: BytesLike, data: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"address","name":"data","type":"address"}],"name":"modifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [parameter, data])
    }

    oracleRelayer(): Promise<string>
    oracleRelayer(multicall: true): MulticallRequest<string>
    oracleRelayer(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"oracleRelayer","outputs":[{"internalType":"contract OracleRelayerLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    osm(): Promise<string>
    osm(multicall: true): MulticallRequest<string>
    osm(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"osm","outputs":[{"internalType":"contract OracleLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    remainingAmountToSell(id: BigNumberish): Promise<BigNumber>
    remainingAmountToSell(
        id: BigNumberish,
        multicall: true
    ): MulticallRequest<BigNumber>
    remainingAmountToSell(
        id: BigNumberish,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"remainingAmountToSell","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [id], multicall)
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
     * Start a new collateral auction
     * @param amountToRaise Total amount of coins to raise (rad)
     * @param amountToSell Total amount of collateral available to sell (wad)
     * @param auctionIncomeRecipient Who receives the amount raised in the auction
     * @param forgoneCollateralReceiver Who receives leftover collateral that is not auctioned
     * @param initialBid Initial bid size (usually zero in this implementation) (rad)
     */

    startAuction(
        forgoneCollateralReceiver: string,
        auctionIncomeRecipient: string,
        amountToRaise: BigNumberish,
        amountToSell: BigNumberish,
        initialBid: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"forgoneCollateralReceiver","type":"address"},{"internalType":"address","name":"auctionIncomeRecipient","type":"address"},{"internalType":"uint256","name":"amountToRaise","type":"uint256"},{"internalType":"uint256","name":"amountToSell","type":"uint256"},{"internalType":"uint256","name":"initialBid","type":"uint256"}],"name":"startAuction","outputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            forgoneCollateralReceiver,
            auctionIncomeRecipient,
            amountToRaise,
            amountToSell,
            initialBid,
        ])
    }

    /**
     * Terminate an auction prematurely (if it's still in the first phase).        Usually called by Global Settlement.
     * @param id ID of the auction to settle
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
