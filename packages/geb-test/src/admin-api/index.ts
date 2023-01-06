import { INFURA_GOERLI } from './../const'
import { testContractPresence } from './contracts'
import {
    //MC_MAINNET_ADDRESSES,
    MC_GOERLI_ADDRESSES,
} from '@money-god/geb-contract-base'
import { testsGebAdmin } from './geb-admin'

describe('Test contract admin API', async () => {
    // Goerli
    testContractPresence('goerli', INFURA_GOERLI)
    testsGebAdmin(INFURA_GOERLI, 'goerli', MC_GOERLI_ADDRESSES)

    // Mainnet
    //testMcContractPresence('mainnet', INFURA_MAINNET)
    //testsGebAdmin(MAKER_MAINNET_NODE, 'mainnet', MAINNET_ADDRESSES)
})
