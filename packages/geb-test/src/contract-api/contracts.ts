import {
    MultiCollateralContractApis,
    ContractApis,
} from '@money-god/geb-contract-api'
import { GebEthersProvider } from '@money-god/geb-ethers-provider'
import { verifyContract } from '../utils'
import { ethers } from 'ethers'
import { GebDeployment } from '@money-god/geb-contract-base'
import { MultiCollateralGebDeployment } from '@money-god/geb-contract-base'

export const testContractPresence = (
    network: GebDeployment,
    ethNode: string
) => {
    describe(`Test that contracts are present at their expected address. Network ${network}`, () => {
        const provider = new GebEthersProvider(
            new ethers.providers.StaticJsonRpcProvider(ethNode)
        )
        const contractsApi = new ContractApis(network, provider)

        Object.values(contractsApi)
            // Skip this object since it's not a contract
            .filter((x) => x.constructor.name !== 'GebEthersProvider')
            .forEach((contract) =>
                it(`Check ${contract.constructor.name} contract address`, async () => {
                    await verifyContract(contract, ethNode)
                })
            )
    })
}
export const testMcContractPresence = (
    network: MultiCollateralGebDeployment,
    ethNode: string
) => {
    describe(`Test that contracts are present at their expected address. Network ${network}`, () => {
        const provider = new GebEthersProvider(
            new ethers.providers.StaticJsonRpcProvider(ethNode)
        )
        const contractsApi = new MultiCollateralContractApis(network, provider)

        Object.values(contractsApi)
            // Skip this object since it's not a contract
            .filter((x) => x.constructor.name !== 'GebEthersProvider')
            .forEach((contract) =>
                it(`Check ${contract.constructor.name} contract address`, async () => {
                    await verifyContract(contract, ethNode)
                })
            )
    })
}
