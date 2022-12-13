import { GebErrorTypes } from './errors'
import { GebProxyActions } from './proxy-action'
import { Geb } from './geb'

import * as utils from './utils'
import * as contracts from '@money-god/geb-contract-api'
import { GebEthersProvider } from '@money-god/geb-ethers-provider'
import {
    MultiCollateralContractList,
    ContractList,
    GebProviderInterface,
    MC_OPTIMISM_ADDRESSES,
    MC_LOCAL_ADDRESSES,
    KOVAN_ADDRESSES,
    MAINNET_ADDRESSES,
    TransactionRequest,
    BaseContractAPI,
    GebContractAPIConstructorInterface,
} from '@money-god/geb-contract-base'

export {
    Geb,
    GebErrorTypes,
    GebProxyActions,
    GebEthersProvider,
    utils,
    contracts,
    MC_OPTIMISM_ADDRESSES,
    MC_LOCAL_ADDRESSES,
    KOVAN_ADDRESSES,
    MAINNET_ADDRESSES,
    // Type & Interfaces
    MultiCollateralContractList,
    ContractList,
    TransactionRequest,
    GebProviderInterface,
    BaseContractAPI,
    GebContractAPIConstructorInterface,
}
