import { GebEthersProvider } from '@money-god/geb-ethers-provider'
import { ethers } from 'ethers'
import { INFURA_GOERLI } from './../const'
//import { testsProxyActionWithGenericGebProvider } from './proxy-actions'
import { testsMcProxyActionWithGenericGebProvider } from './proxy-actions'
//import { testsGeb } from './geb'
import { testsMcGeb } from './geb'
import { MC_GOERLI_ADDRESSES } from 'mcgeb.js'
/*
describe('Test Geb', async () => {
    // Kovan
    const providerKovan = new ethers.providers.StaticJsonRpcProvider(
        MAKER_KOVAN_NODE
    )
    const gebProviderKovan = new GebEthersProvider(providerKovan)

    testsProxyActionWithGenericGebProvider(
        gebProviderKovan,
        KOVAN_ADDRESSES,
        'kovan'
    )
    testsGeb(gebProviderKovan, MAKER_KOVAN_NODE, 'kovan', KOVAN_ADDRESSES)

    // Mainnet
    const providerMainnet = new ethers.providers.StaticJsonRpcProvider(
        MAKER_MAINNET_NODE
    )
    const gebProviderMainnet = new GebEthersProvider(providerMainnet)
    testsProxyActionWithGenericGebProvider(
        gebProviderMainnet,
        MAINNET_ADDRESSES,
        'mainnet'
    )
    testsGeb(
        gebProviderMainnet,
        MAKER_MAINNET_NODE,
        'mainnet',
        MAINNET_ADDRESSES
    )

    // TODO: test against infura
    // testsGeb(gebProvider, INFURA_KOVAN)
})
*/
describe('Test Geb', async () => {
    // Kovan
    const provider = new ethers.providers.StaticJsonRpcProvider(INFURA_GOERLI)
    const gebProvider = new GebEthersProvider(provider)

    testsMcProxyActionWithGenericGebProvider(
        gebProvider,
        MC_GOERLI_ADDRESSES,
        'goerli'
    )
    testsMcGeb(gebProvider, INFURA_GOERLI, 'goerli', MC_GOERLI_ADDRESSES)

    /*
    // Mainnet
    const providerMainnet = new ethers.providers.StaticJsonRpcProvider(
        MAKER_MAINNET_NODE
    )
    const gebProviderMainnet = new GebEthersProvider(providerMainnet)
    testsProxyActionWithGenericGebProvider(
        gebProviderMainnet,
        MAINNET_ADDRESSES,
        'mainnet'
    )
    testsGeb(
        gebProviderMainnet,
        MAKER_MAINNET_NODE,
        'mainnet',
        MAINNET_ADDRESSES
    )

    // TODO: test against infura
    // testsGeb(gebProvider, INFURA_KOVAN)
    */
})
