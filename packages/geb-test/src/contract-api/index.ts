//import { GebEthersProvider } from '@money-god/geb-ethers-provider'
//import { ethers } from 'ethers'
//import { INFURA_GOERLI } from './../const'
//import { testsWithGenericGebProvider } from './generic-provider-test'
//import { testsMcWithGenericGebProvider } from './generic-provider-test'
//import { testsWithEthersProvider } from './ehters-provider-tests'
import { testsMcWithEthersProvider } from './ehters-provider-tests'
//import { testContractPresence } from './contracts'
import { testMcContractPresence } from './contracts'
import {
    MC_LOCAL_ADDRESSES,
    //MC_GOERLI_ADDRESSES,
} from 'mcgeb.js'
/*
describe('Test contract API', async () => {
    // Kovan
    const providerKovan = new ethers.providers.StaticJsonRpcProvider(
        MAKER_KOVAN_NODE
    )
    const gebProviderKovan = new GebEthersProvider(providerKovan)

    testsWithGenericGebProvider(gebProviderKovan, KOVAN_ADDRESSES, 'kovan')
    testsWithEthersProvider(KOVAN_ADDRESSES, MAKER_KOVAN_NODE, 'kovan')
    testContractPresence('kovan', MAKER_KOVAN_NODE)

    // Mainnet
    const providerMainnet = new ethers.providers.StaticJsonRpcProvider(
        MAKER_MAINNET_NODE
    )
    const gebProviderMainnet = new GebEthersProvider(providerMainnet)

    testsWithGenericGebProvider(
        gebProviderMainnet,
        MAINNET_ADDRESSES,
        'mainnet'
    )
    testsWithEthersProvider(MAINNET_ADDRESSES, MAKER_MAINNET_NODE, 'mainnet')
    testContractPresence('mainnet', MAKER_MAINNET_NODE)
})
*/

/*
describe('Test contract API', async () => {
    // Goerli
    const provider = new ethers.providers.StaticJsonRpcProvider(
        INFURA_GOERLI
    )
    const gebProvider = new GebEthersProvider(provider)

    testsMcWithGenericGebProvider(gebProvider, MC_GOERLI_ADDRESSES, 'goerli')
    testsMcWithEthersProvider(MC_GOERLI_ADDRESSES, INFURA_GOERLI, 'goerli')
    testMcContractPresence('goerli', INFURA_GOERLI)

    // Mainnet
    const providerMainnet = new ethers.providers.StaticJsonRpcProvider(
        MAKER_MAINNET_NODE
    )
    const gebProviderMainnet = new GebEthersProvider(providerMainnet)

    testsWithGenericGebProvider(
        gebProviderMainnet,
        MAINNET_ADDRESSES,
        'mainnet'
    )
    testsWithEthersProvider(MAINNET_ADDRESSES, MAKER_MAINNET_NODE, 'mainnet')
    testContractPresence('mainnet', MAKER_MAINNET_NODE)
})
*/

describe('Test mc contract API', async () => {
    // Local
    //const providerLocal = new ethers.providers.StaticJsonRpcProvider('http://127.0.0.1:8545')
    //const gebProviderLocal = new GebEthersProvider(providerLocal)
    //testsMcWithGenericGebProvider(gebProviderLocal, MC_LOCAL_ADDRESSES, 'local')
    testsMcWithEthersProvider(
        MC_LOCAL_ADDRESSES,
        'http://127.0.0.1:8545',
        'local'
    )
    testMcContractPresence('local', 'http://127.0.0.1:8545')

    /*
    // Kovan
    const providerKovan = new ethers.providers.StaticJsonRpcProvider(
        MAKER_KOVAN_NODE
    )
    const gebProviderKovan = new GebEthersProvider(providerKovan)

    testsWithGenericGebProvider(gebProviderKovan, KOVAN_ADDRESSES, 'kovan')
    testsWithEthersProvider(KOVAN_ADDRESSES, MAKER_KOVAN_NODE, 'kovan')
    testContractPresence('kovan', MAKER_KOVAN_NODE)

    // Mainnet
    const providerMainnet = new ethers.providers.StaticJsonRpcProvider(
        MAKER_MAINNET_NODE
    )
    const gebProviderMainnet = new GebEthersProvider(providerMainnet)

    testsWithGenericGebProvider(
        gebProviderMainnet,
        MAINNET_ADDRESSES,
        'mainnet'
    )

    testsWithEthersProvider(MAINNET_ADDRESSES, MAKER_MAINNET_NODE, 'mainnet')
    testContractPresence('mainnet', MAKER_MAINNET_NODE)
    */
})
