# Class: GebAdmin

This class extends the core `GEB` class with additional tools and contracts that are not used as often as other SAFE management tools.
Here you will find utils for contracts such as DSPause, ESM etc. These contracts are scattered across several repositories. Please refer to the smart contract documentation to learn more about them.

**IMPORTANT:** To avoid bloating the main [geb.js](https://www.npmjs.com/package/geb.js) package this class is only available in a [separate package](https://www.npmjs.com/package/@money-god/geb-admin).
Please install it like this:
```
npm install @money-god/geb-admin
```

And now you are ready to use the admin tools similar to the GEB class:

```typescript
import { ethers } from 'ethers'
import { GebAdmin } from "@money-god/geb-admin"

 const provider = new ethers.providers.JsonRpcProvider('http://kovan.infura.io/<API KEY>')
 const gebAdmin = new GebAdmin('kovan', provider)
```

## Constructors


\+ **new GebAdmin**(`network`: MultiCollateralGebDeployment, `provider`: GebProviderInterface | Provider): *[GebAdmin](gebadmin.md)*


*Defined in [packages/geb-admin/src/geb-admin.ts:53](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb-admin/src/geb-admin.ts#L53)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`network` | MultiCollateralGebDeployment | Either `'kovan'`, `'mainnet'` or an actual list of contract addresses. |
`provider` | GebProviderInterface &#124; Provider | Either a Ethers.js provider or a GEB provider. Support for Web3.js will be added in the future.  |

**Returns:** *[GebAdmin](gebadmin.md)*

## Properties

###  contracts

• **contracts**: *MultiCollateralContractApis*

*Inherited from [GebAdmin](gebadmin.md).[contracts](gebadmin.md#contracts)*

Defined in packages/geb/lib/geb.d.ts:69

Object containing all GEB core smart contract instances for direct level interactions. All of the
following contract objects are one-to-one API typed to the underlying smart contracts. Read-only
functions that do not change blockchain state return a promise of the return data. State modifying
function will synchronously return a pre-filled transaction request object:
```
{
  to: "0x123abc.."
  data: "0xabab234ab..."
}
```
This object follow the [TransactionRequest model of ethers.js](https://docs.ethers.io/v5/api/providers/types/#providers-TransactionRequest) (also similar to the
[model used by web.js](https://web3js.readthedocs.io/en/v1.3.0/web3-eth.html#id84)). The object can
be completed with properties such as ` from `, ` gasPrice `, ` gas ` (gas limit, web3.js ony) or
` gasLimit ` (gas limit, ethers.js only). The object can then be passed to the `sendTransaction` of
[ehters.js](https://docs.ethers.io/v5/api/signer/#Signer-sendTransaction) or
[web3.js](https://web3js.readthedocs.io/en/v1.3.0/web3-eth.html#sendtransaction)

 Example:
 ```typescript
 // Setup geb.js an ethers
 const provider = new ethers.providers.JsonRpcProvider('http://kovan.infura.io/<API KEY>')
 const wallet = new ethers.Wallet('<Private key>', provider)
 const geb = new Geb('kovan', provider)

 // Contract read function: fetch the debt ceiling
 const debtCeiling = await geb.contracts.safeEngine.globalDebtCeiling()

 // State changing function: manualy liquidate a SAFE
 const tx = geb.contracts.liquidationEngine.liquidateSAFE(ETH_A, '0x1234abc...')
 await wallet.sendTransaction(tx) // Send the Ethereum transaction
 ```

Currently the following contracts ae available in this property:
- SAFEEngine
- AccountingEngine
- TaxCollector
- LiquidationEngine
- OracleRelayer
- GlobalSettlement
- DebtAuctionHouse
- PostSettlementSurplusAuctionHouse
- SettlementSurplusAuctioneer
- GebSafeManager
- GetSafes
- BasicCollateralJoin
- CoinJoin
- Coin (System coin ERC20 contract)
- GebProxyRegistry
- IncreasingDiscountCollateralAuctionHouse
- Weth (ERC20)

For detailed information about the functions of each contract we recommend the smart contract
[code](https://github.com/reflexer-labs/geb) and [documentation](https://docs.reflexer.finance/)

___

###  contractsAdmin

• **contractsAdmin**: *AdminApis*

*Defined in [packages/geb-admin/src/geb-admin.ts:53](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb-admin/src/geb-admin.ts#L53)*

Object containing all GEB admin contracts instances for low level interactions.
It currently has the following contracts:
- MultiSigWallet
- DsProxy
- DsToken
- ProtocolTokenAuthority
- GebPollingEmitter
- GebPrintingPermissions
- DsDelegateRoles
- DsPause
- DsPauseProxy
- GovActions
- ESM
- TokenBurner
- FsmGovernanceInterface
- DsProxyFactory
- GebDeployPauseProxyActions
- DsProxy
- TxManager

## Methods

###  deployProxy

▸ **deployProxy**(): *object*

*Inherited from [GebAdmin](gebadmin.md).[deployProxy](gebadmin.md#deployproxy)*

Defined in packages/geb/lib/geb.d.ts:87

Deploy a new proxy owned by the sender.

**Returns:** *object*

* **chainId**? : *number*

* **data**? : *string*

* **from**? : *string*

* **gasLimit**? : *BigNumber*

* **gasPrice**? : *BigNumber*

* **nonce**? : *number*

* **to**? : *string*

* **value**? : *BigNumber*

___

###  getErc20Contract

▸ **getErc20Contract**(`tokenAddress`: string): *Erc20*

*Inherited from [GebAdmin](gebadmin.md).[getErc20Contract](gebadmin.md#geterc20contract)*

Defined in packages/geb/lib/geb.d.ts:122

Returns an object that can be used to interact with an ERC20 token.
Example:
```typescript
const USDCAddress = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
const USDC = geb.getErc20Contract(USDCAddress)

// Get 0xdefiisawesome's balance
const balance = USDC.balanceOf("0xdefiisawesome..")

// Send 1 USDC to 0xdefiisawesome (USDC is 6 decimals)
const tx = USDC.transfer("0xdefiisawesome..", "1000000")
await wallet.sendTransaction(tx)
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tokenAddress` | string | Token contract address |

**Returns:** *Erc20*

Erc20

___

###  getGebContract

▸ **getGebContract**‹**T**›(`gebContractClass`: GebContractAPIConstructorInterface‹T›, `address`: string): *T*

*Inherited from [GebAdmin](gebadmin.md).[getGebContract](gebadmin.md#static-getgebcontract)*

Defined in packages/geb/lib/geb.d.ts:172

Returns an instance of a specific GEB contract given a Geb contract API class at a specified address

```typescript
import { contracts } from "geb.js"
const safeEngine = geb.getGebContract(contracts.SafeEngine, "0xabcd123..")
const globalDebt = safeEngine.globalDebt()
```

**Type parameters:**

▪ **T**: *BaseContractAPI*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`gebContractClass` | GebContractAPIConstructorInterface‹T› | Class from contracts or adminContracts |
`address` | string | Contract address of the instance  |

**Returns:** *T*

___

###  getProxyAction

▸ **getProxyAction**(`ownerAddress`: string): *Promise‹GebProxyActions›*

*Inherited from [GebAdmin](gebadmin.md).[getProxyAction](gebadmin.md#getproxyaction)*

Defined in packages/geb/lib/geb.d.ts:83

Given an address, it returns a GebProxyActions object used to execute bundled operations.
Important: This requires that the address deployed a GEB proxy through the proxy registry contract. It will throw a `DOES_NOT_OWN_HAVE_PROXY` error if the address specified does not have a proxy. Use the [deployProxy](gebadmin.md#deployproxy) function to get a new proxy.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ownerAddress` | string | Externally owned user account aka Ethereum address that owns a GEB proxy.  |

**Returns:** *Promise‹GebProxyActions›*

___

###  getSafe

▸ **getSafe**(`idOrHandler`: string | number, `collateralType?`: string): *Promise‹Safe›*

*Inherited from [GebAdmin](gebadmin.md).[getSafe](gebadmin.md#getsafe)*

Defined in packages/geb/lib/geb.d.ts:92

Get the SAFE object given a `safeManager` id or a `safeEngine` handler address.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`idOrHandler` | string &#124; number | Safe Id or SAFE handler  |
`collateralType?` | string | - |

**Returns:** *Promise‹Safe›*

___

###  getSafeFromOwner

▸ **getSafeFromOwner**(`address`: string): *Promise‹Safe[]›*

*Inherited from [GebAdmin](gebadmin.md).[getSafeFromOwner](gebadmin.md#getsafefromowner)*

Defined in packages/geb/lib/geb.d.ts:103

Fetch the list of safes owned by an address. This function will fetch safes owned directly
through the safeManager and safes owned through the safe manager by a proxy. Safes owned
directly by the address at the safeEngine level won't appear here.

Note that this function will make a lot of network calls and is therefore very slow. For
front-ends we recommend using pre-indexed data from a source such as the geb-subgraph.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`address` | string |   |

**Returns:** *Promise‹Safe[]›*

___

###  gnosisSafeThreshold1SubmitTransaction

▸ **gnosisSafeThreshold1SubmitTransaction**(`sender`: string, `to`: string, `data`: string): *TransactionRequest*

*Defined in [packages/geb-admin/src/geb-admin.ts:203](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb-admin/src/geb-admin.ts#L203)*

Submit a transaction to a Gnosis Safe and directly execute it. Works only if the threshold on Gnosis Safe is 1.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sender` | string | Proposal submitter |
`to` | string | Proposal target (Usually ds-pause) |
`data` | string | Transaction data of the proposal  |

**Returns:** *TransactionRequest*

___

###  multiCall

▸ **multiCall**‹**O1**, **O2**, **O3**›(`calls`: [MulticallRequest‹O1›, MulticallRequest‹O2›, MulticallRequest‹O3›]): *Promise‹[O1, O2, O3]›*

*Inherited from [GebAdmin](gebadmin.md).[multiCall](gebadmin.md#multicall)*

Defined in packages/geb/lib/geb.d.ts:143

**Type parameters:**

▪ **O1**

▪ **O2**

▪ **O3**

**Parameters:**

Name | Type |
------ | ------ |
`calls` | [MulticallRequest‹O1›, MulticallRequest‹O2›, MulticallRequest‹O3›] |

**Returns:** *Promise‹[O1, O2, O3]›*

___

###  verifyWebScheduleCallcode

▸ **verifyWebScheduleCallcode**(`govFunctionAbi`: string, `params`: any[], `earliestExecutionTime`: number, `calldata`: string, `description?`: string): *Promise‹boolean›*

*Defined in [packages/geb-admin/src/geb-admin.ts:76](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb-admin/src/geb-admin.ts#L76)*

Verifies a transaction meant to schedule a proposal

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`govFunctionAbi` | string | Human readable ABI from gov actions or proxy of choice -> "setDelay(address,uint256)" |
`params` | any[] | Array containing function params |
`earliestExecutionTime` | number | - |
`calldata` | string | to verify |
`description?` | string | - |

**Returns:** *Promise‹boolean›*

Promise<TransactionRequest>

___

###  webExecuteProposal

▸ **webExecuteProposal**(`govFunctionAbi`: string, `params`: any[], `earliestExecutionTime`: number, `govAction`: string): *Promise‹TransactionRequest›*

*Defined in [packages/geb-admin/src/geb-admin.ts:100](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb-admin/src/geb-admin.ts#L100)*

Encodes a proposal execution in DSPause

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`govFunctionAbi` | string | - | Human readable ABI from gov actions or proxy of choice -> "setDelay(address,uint256)" |
`params` | any[] | - | Array containing function params |
`earliestExecutionTime` | number | - | - |
`govAction` | string | this.addresses.GEB_GOV_ACTIONS | - |

**Returns:** *Promise‹TransactionRequest›*

Promise<TransactionRequest>

___

###  webScheduleProposal

▸ **webScheduleProposal**(`govFunctionAbi`: string, `params`: any[], `earliestExecutionTime`: number, `description?`: string, `govAction`: string): *Promise‹object›*

*Defined in [packages/geb-admin/src/geb-admin.ts:124](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb-admin/src/geb-admin.ts#L124)*

Encodes a proposal scheduling tx for DSPause

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`govFunctionAbi` | string | - | Human readable ABI from gov actions or proxy of choice -> "setDelay(address,uint256)" |
`params` | any[] | - | Array containing function params |
`earliestExecutionTime` | number | - | - |
`description?` | string | - | - |
`govAction` | string | this.addresses.GEB_GOV_ACTIONS | - |

**Returns:** *Promise‹object›*

Promise<TransactionRequest>

___

###  webTestScheduleProposal

▸ **webTestScheduleProposal**(`govFunctionAbi`: string, `params`: any[], `earliestExecutionTime`: number, `description?`: string, `govAction`: string): *Promise‹void›*

*Defined in [packages/geb-admin/src/geb-admin.ts:172](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb-admin/src/geb-admin.ts#L172)*

Test the execution of a proposal that's about to be scheduled in DSPause

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`govFunctionAbi` | string | - | Human readable abi from gov actions or proxy of choice -> "setDelay(address,uint256)" |
`params` | any[] | - | Array containing function params |
`earliestExecutionTime` | number | - | - |
`description?` | string | - | - |
`govAction` | string | this.addresses.GEB_GOV_ACTIONS | - |

**Returns:** *Promise‹void›*

Promise<TransactionRequest>

___

### `Static` getGebContract

▸ **getGebContract**‹**T**›(`gebContractClass`: GebContractAPIConstructorInterface‹T›, `address`: string, `provider`: GebProviderInterface | Provider): *T*

*Inherited from [GebAdmin](gebadmin.md).[getGebContract](gebadmin.md#static-getgebcontract)*

Defined in packages/geb/lib/geb.d.ts:159

Returns an instance of a specific geb contract given a Geb contract API class constructor at a specified address

**Type parameters:**

▪ **T**: *BaseContractAPI*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`gebContractClass` | GebContractAPIConstructorInterface‹T› | Class from contracts or adminContracts |
`address` | string | Contract address of the instance |
`provider` | GebProviderInterface &#124; Provider | Either a Ethers.js provider or a Geb provider  |

**Returns:** *T*
