# Class: GebProxyActions

Convenience class to call functions from [GebProxyActions](https://github.com/reflexer-labs/geb-proxy-actions/blob/master/src/GebProxyActions.sol) through a proxy contract registered in the [GebProxyRegistry](https://github.com/reflexer-labs/geb-proxy-registry/blob/master/src/GebProxyRegistry.sol). These actions bundle multiple actions in one (e.g: open a safe + lock some ETH + draw some system coins).

## Constructors


\+ **new GebProxyActions**(`proxyAddress`: string, `network`: MultiCollateralGebDeployment, `chainProvider`: GebProviderInterface): *[GebProxyActions](gebproxyactions.md)*

*Defined in [packages/geb/src/proxy-action.ts:85](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`proxyAddress` | string |
`network` | MultiCollateralGebDeployment |
`chainProvider` | GebProviderInterface |

**Returns:** *[GebProxyActions](gebproxyactions.md)*

## Properties

###  proxy

• **proxy**: *DsProxy*

*Defined in [packages/geb/src/proxy-action.ts:34](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L34)*

Underlying proxy object. Can be use to make custom calls to the proxy using `proxy.execute()` function.
For the details of each function

___

###  proxyActionCoreAddress

• **proxyActionCoreAddress**: *string*

*Defined in [packages/geb/src/proxy-action.ts:39](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L39)*

Address of the base proxy actions contract.

___

###  proxyActionDebtAuctionAddress

• **proxyActionDebtAuctionAddress**: *string*

*Defined in [packages/geb/src/proxy-action.ts:59](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L59)*

Address of the proxy actions contract for debt auctions.

___

###  proxyActionGlobalSettlementAddress

• **proxyActionGlobalSettlementAddress**: *string*

*Defined in [packages/geb/src/proxy-action.ts:44](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L44)*

Address of the proxy actions contract for global settlement.

___

###  proxyActionIncentiveAddress

• **proxyActionIncentiveAddress**: *string*

*Defined in [packages/geb/src/proxy-action.ts:49](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L49)*

Address of the proxy actions contract for Uniswap LP share staking.

___

###  proxyActionLeverageAddress

• **proxyActionLeverageAddress**: *string*

*Defined in [packages/geb/src/proxy-action.ts:54](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L54)*

Address of the proxy actions contract used for leverage with flash loans.

___

###  proxyActionSaviourAddress

• **proxyActionSaviourAddress**: *string*

*Defined in [packages/geb/src/proxy-action.ts:74](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L74)*

Address of the proxy actions contract for surplus auctions.

___

###  proxyActionSurplusAuctionAddress

• **proxyActionSurplusAuctionAddress**: *string*

*Defined in [packages/geb/src/proxy-action.ts:64](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L64)*

Address of the proxy actions contract for surplus auctions.

___

###  proxyAddress

• **proxyAddress**: *string*

*Defined in [packages/geb/src/proxy-action.ts:91](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L91)*

Address of the underlying proxy

## Methods

###  allowSAFE

▸ **allowSAFE**(`safe`: BigNumberish, `usr`: string, `ok`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:176](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L176)*

**Parameters:**

Name | Type |
------ | ------ |
`safe` | BigNumberish |
`usr` | string |
`ok` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  approveSAFEModification

▸ **approveSAFEModification**(`obj`: string, `usr`: string): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:191](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L191)*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | string |
`usr` | string |

**Returns:** *TransactionRequest*

___

###  coinJoin_join

▸ **coinJoin_join**(`apt`: string, `safeHandler`: string, `wad`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:197](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L197)*

**Parameters:**

Name | Type |
------ | ------ |
`apt` | string |
`safeHandler` | string |
`wad` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  debtAuctionDecreaseSoldAmount

▸ **debtAuctionDecreaseSoldAmount**(`amountToBuy`: BigNumberish, `auctionId`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:1386](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L1386)*

**Parameters:**

Name | Type |
------ | ------ |
`amountToBuy` | BigNumberish |
`auctionId` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  debtAuctionSettleAuction

▸ **debtAuctionSettleAuction**(`auctionId`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:1400](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L1400)*

**Parameters:**

Name | Type |
------ | ------ |
`auctionId` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  debtAuctionStartAndDecreaseSoldAmount

▸ **debtAuctionStartAndDecreaseSoldAmount**(`amountToBuy`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:1374](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L1374)*

**Parameters:**

Name | Type |
------ | ------ |
`amountToBuy` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  denySAFEModification

▸ **denySAFEModification**(`obj`: string, `usr`: string): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:207](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L207)*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | string |
`usr` | string |

**Returns:** *TransactionRequest*

___

###  deposit

▸ **deposit**(`collateralSpecific`: boolean, `saviour`: string, `token`: string, `safe`: BigNumberish, `tokenAmount`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:1559](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L1559)*

**Parameters:**

Name | Type |
------ | ------ |
`collateralSpecific` | boolean |
`saviour` | string |
`token` | string |
`safe` | BigNumberish |
`tokenAmount` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  enterSystem

▸ **enterSystem**(`src`: string, `safe`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:213](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L213)*

**Parameters:**

Name | Type |
------ | ------ |
`src` | string |
`safe` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  exitAllCoin

▸ **exitAllCoin**(): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:1410](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L1410)*

**Returns:** *TransactionRequest*

___

###  exitCoin

▸ **exitCoin**(`amount`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:1418](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L1418)*

**Parameters:**

Name | Type |
------ | ------ |
`amount` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  exitETH

▸ **exitETH**(`safe`: BigNumberish, `collateralType`: string, `wad`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:223](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L223)*

**Parameters:**

Name | Type |
------ | ------ |
`safe` | BigNumberish |
`collateralType` | string |
`wad` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  exitMine

▸ **exitMine**(`campaignAddress`: string): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:901](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L901)*

**Parameters:**

Name | Type |
------ | ------ |
`campaignAddress` | string |

**Returns:** *TransactionRequest*

___

###  exitTokenCollateral

▸ **exitTokenCollateral**(`collateralJoin`: string, `safe`: BigNumberish, `amt`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:238](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L238)*

**Parameters:**

Name | Type |
------ | ------ |
`collateralJoin` | string |
`safe` | BigNumberish |
`amt` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  flashDeleverage

▸ **flashDeleverage**(`uniswapV2Pair`: string, `callbackProxy`: string, `collateralType`: BytesLike, `safe`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:1231](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L1231)*

**Parameters:**

Name | Type |
------ | ------ |
`uniswapV2Pair` | string |
`callbackProxy` | string |
`collateralType` | BytesLike |
`safe` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  flashDeleverageFreeETH

▸ **flashDeleverageFreeETH**(`uniswapV2Pair`: string, `callbackProxy`: string, `collateralType`: BytesLike, `safe`: BigNumberish, `amountToFree`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:1254](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L1254)*

**Parameters:**

Name | Type |
------ | ------ |
`uniswapV2Pair` | string |
`callbackProxy` | string |
`collateralType` | BytesLike |
`safe` | BigNumberish |
`amountToFree` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  flashLeverage

▸ **flashLeverage**(`uniswapV2Pair`: string, `callbackProxy`: string, `collateralType`: BytesLike, `safe`: BigNumberish, `leverage`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:1279](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L1279)*

**Parameters:**

Name | Type |
------ | ------ |
`uniswapV2Pair` | string |
`callbackProxy` | string |
`collateralType` | BytesLike |
`safe` | BigNumberish |
`leverage` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  freeETH

▸ **freeETH**(`safe`: BigNumberish, `collateralType`: string, `wad`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:253](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L253)*

**Parameters:**

Name | Type |
------ | ------ |
`safe` | BigNumberish |
`collateralType` | string |
`wad` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  freeTokenCollateral

▸ **freeTokenCollateral**(`collateralJoin`: string, `safe`: BigNumberish, `amt`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:268](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L268)*

**Parameters:**

Name | Type |
------ | ------ |
`collateralJoin` | string |
`safe` | BigNumberish |
`amt` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  freeTokenCollateralGlobalSettlement

▸ **freeTokenCollateralGlobalSettlement**(`collateralJoin`: string, `safe`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:839](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L839)*

**Parameters:**

Name | Type |
------ | ------ |
`collateralJoin` | string |
`safe` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  generateDebt

▸ **generateDebt**(`safe`: BigNumberish, `wad`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:283](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L283)*

**Parameters:**

Name | Type |
------ | ------ |
`safe` | BigNumberish |
`wad` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  generateDebtAndProtectSAFE

▸ **generateDebtAndProtectSAFE**(`safe`: BigNumberish, `wad`: BigNumberish, `saviour`: string): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:295](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L295)*

**Parameters:**

Name | Type |
------ | ------ |
`safe` | BigNumberish |
`wad` | BigNumberish |
`saviour` | string |

**Returns:** *TransactionRequest*

___

###  getReserves

▸ **getReserves**(`saviour`: string, `safe`: BigNumberish, `dst`: string): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:1733](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L1733)*

**Parameters:**

Name | Type |
------ | ------ |
`saviour` | string |
`safe` | BigNumberish |
`dst` | string |

**Returns:** *TransactionRequest*

___

###  getReservesAndUncover

▸ **getReservesAndUncover**(`saviour`: string, `safe`: BigNumberish, `dst`: string): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:1743](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L1743)*

**Parameters:**

Name | Type |
------ | ------ |
`saviour` | string |
`safe` | BigNumberish |
`dst` | string |

**Returns:** *TransactionRequest*

___

###  getRewards

▸ **getRewards**(`campaignAddress`: string): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:1174](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L1174)*

**Parameters:**

Name | Type |
------ | ------ |
`campaignAddress` | string |

**Returns:** *TransactionRequest*

___

###  lockETH

▸ **lockETH**(`ethValue`: BigNumberish, `collateralType`: BytesLike, `safe`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:313](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L313)*

**Parameters:**

Name | Type |
------ | ------ |
`ethValue` | BigNumberish |
`collateralType` | BytesLike |
`safe` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  lockETHAndGenerateDebt

▸ **lockETHAndGenerateDebt**(`ethValue`: BigNumberish, `collateralType`: BytesLike, `safe`: BigNumberish, `deltaWad`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:330](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L330)*

**Parameters:**

Name | Type |
------ | ------ |
`ethValue` | BigNumberish |
`collateralType` | BytesLike |
`safe` | BigNumberish |
`deltaWad` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  lockETHLeverage

▸ **lockETHLeverage**(`ethValue`: BigNumberish, `uniswapV2Pair`: string, `callbackProxy`: string, `collateralType`: BytesLike, `safe`: BigNumberish, `leverage`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:1304](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L1304)*

**Parameters:**

Name | Type |
------ | ------ |
`ethValue` | BigNumberish |
`uniswapV2Pair` | string |
`callbackProxy` | string |
`collateralType` | BytesLike |
`safe` | BigNumberish |
`leverage` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  lockTokenCollateral

▸ **lockTokenCollateral**(`collateralJoin`: string, `safe`: BigNumberish, `amt`: BigNumberish, `transferFrom`: boolean): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:351](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L351)*

**Parameters:**

Name | Type |
------ | ------ |
`collateralJoin` | string |
`safe` | BigNumberish |
`amt` | BigNumberish |
`transferFrom` | boolean |

**Returns:** *TransactionRequest*

___

###  lockTokenCollateralAndGenerateDebt

▸ **lockTokenCollateralAndGenerateDebt**(`collateralJoin`: string, `safe`: BigNumberish, `collateralAmount`: BigNumberish, `deltaWad`: BigNumberish, `transferFrom`: boolean): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:368](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L368)*

**Parameters:**

Name | Type |
------ | ------ |
`collateralJoin` | string |
`safe` | BigNumberish |
`collateralAmount` | BigNumberish |
`deltaWad` | BigNumberish |
`transferFrom` | boolean |

**Returns:** *TransactionRequest*

___

###  lockTokenCollateralGenerateDebtAndProtectSAFE

▸ **lockTokenCollateralGenerateDebtAndProtectSAFE**(`collateralJoin`: string, `safe`: BigNumberish, `collateralAmount`: BigNumberish, `deltaWad`: BigNumberish, `transferFrom`: boolean, `saviour`: string): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:389](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L389)*

**Parameters:**

Name | Type |
------ | ------ |
`collateralJoin` | string |
`safe` | BigNumberish |
`collateralAmount` | BigNumberish |
`deltaWad` | BigNumberish |
`transferFrom` | boolean |
`saviour` | string |

**Returns:** *TransactionRequest*

___

###  makeCollateralBag

▸ **makeCollateralBag**(`collateralJoin`: string): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:413](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L413)*

**Parameters:**

Name | Type |
------ | ------ |
`collateralJoin` | string |

**Returns:** *TransactionRequest*

___

###  migrateCampaign

▸ **migrateCampaign**(`oldCampaignAddress`: string, `newCampaignAddress`: string): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:1217](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L1217)*

**Parameters:**

Name | Type |
------ | ------ |
`oldCampaignAddress` | string |
`newCampaignAddress` | string |

**Returns:** *TransactionRequest*

___

###  modifySAFECollateralization

▸ **modifySAFECollateralization**(`safe`: BigNumberish, `deltaCollateral`: BigNumberish, `deltaDebt`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:419](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L419)*

**Parameters:**

Name | Type |
------ | ------ |
`safe` | BigNumberish |
`deltaCollateral` | BigNumberish |
`deltaDebt` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  moveSAFE

▸ **moveSAFE**(`safeSrc`: BigNumberish, `safeDst`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:434](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L434)*

**Parameters:**

Name | Type |
------ | ------ |
`safeSrc` | BigNumberish |
`safeDst` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  openLockETHAndGenerateDebt

▸ **openLockETHAndGenerateDebt**(`ethValue`: BigNumberish, `collateralType`: BytesLike, `deltaWad`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:444](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L444)*

**Parameters:**

Name | Type |
------ | ------ |
`ethValue` | BigNumberish |
`collateralType` | BytesLike |
`deltaWad` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  openLockETHGenerateDebtAndProtectSAFE

▸ **openLockETHGenerateDebtAndProtectSAFE**(`ethValue`: BigNumberish, `collateralType`: BytesLike, `deltaWad`: BigNumberish, `saviour`: string): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:464](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L464)*

**Parameters:**

Name | Type |
------ | ------ |
`ethValue` | BigNumberish |
`collateralType` | BytesLike |
`deltaWad` | BigNumberish |
`saviour` | string |

**Returns:** *TransactionRequest*

___

###  openLockETHLeverage

▸ **openLockETHLeverage**(`ethValue`: BigNumberish, `uniswapV2Pair`: string, `callbackProxy`: string, `collateralType`: BytesLike, `leverage`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:1331](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L1331)*

**Parameters:**

Name | Type |
------ | ------ |
`ethValue` | BigNumberish |
`uniswapV2Pair` | string |
`callbackProxy` | string |
`collateralType` | BytesLike |
`leverage` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  openLockGNTAndGenerateDebt

▸ **openLockGNTAndGenerateDebt**(`gntJoin`: string, `collateralType`: BytesLike, `collateralAmount`: BigNumberish, `deltaWad`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:487](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L487)*

**Parameters:**

Name | Type |
------ | ------ |
`gntJoin` | string |
`collateralType` | BytesLike |
`collateralAmount` | BigNumberish |
`deltaWad` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  openLockGNTGenerateDebtAndProtectSAFE

▸ **openLockGNTGenerateDebtAndProtectSAFE**(`gntJoin`: string, `collateralType`: BytesLike, `collateralAmount`: BigNumberish, `deltaWad`: BigNumberish, `saviour`: string): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:506](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L506)*

**Parameters:**

Name | Type |
------ | ------ |
`gntJoin` | string |
`collateralType` | BytesLike |
`collateralAmount` | BigNumberish |
`deltaWad` | BigNumberish |
`saviour` | string |

**Returns:** *TransactionRequest*

___

###  openLockTokenCollateralAndGenerateDebt

▸ **openLockTokenCollateralAndGenerateDebt**(`collateralJoin`: string, `collateralType`: BytesLike, `collateralAmount`: BigNumberish, `deltaWad`: BigNumberish, `transferFrom`: boolean): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:528](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L528)*

**Parameters:**

Name | Type |
------ | ------ |
`collateralJoin` | string |
`collateralType` | BytesLike |
`collateralAmount` | BigNumberish |
`deltaWad` | BigNumberish |
`transferFrom` | boolean |

**Returns:** *TransactionRequest*

___

###  openLockTokenCollateralGenerateDebtAndProtectSAFE

▸ **openLockTokenCollateralGenerateDebtAndProtectSAFE**(`collateralJoin`: string, `collateralType`: BytesLike, `collateralAmount`: BigNumberish, `deltaWad`: BigNumberish, `transferFrom`: boolean, `saviour`: string): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:549](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L549)*

**Parameters:**

Name | Type |
------ | ------ |
`collateralJoin` | string |
`collateralType` | BytesLike |
`collateralAmount` | BigNumberish |
`deltaWad` | BigNumberish |
`transferFrom` | boolean |
`saviour` | string |

**Returns:** *TransactionRequest*

___

###  openSAFE

▸ **openSAFE**(`collateralType`: BytesLike, `usr`: string): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:573](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L573)*

**Parameters:**

Name | Type |
------ | ------ |
`collateralType` | BytesLike |
`usr` | string |

**Returns:** *TransactionRequest*

___

###  prepareCoinsForRedeemingGlobalSettlement

▸ **prepareCoinsForRedeemingGlobalSettlement**(`wad`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:827](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L827)*

**Parameters:**

Name | Type |
------ | ------ |
`wad` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  protectSAFE

▸ **protectSAFE**(`saviour`: string, `safe`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:1532](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L1532)*

**Parameters:**

Name | Type |
------ | ------ |
`saviour` | string |
`safe` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  protectSAFEDeposit

▸ **protectSAFEDeposit**(`collateralSpecific`: boolean, `saviour`: string, `token`: string, `safe`: BigNumberish, `tokenAmount`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:1642](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L1642)*

**Parameters:**

Name | Type |
------ | ------ |
`collateralSpecific` | boolean |
`saviour` | string |
`token` | string |
`safe` | BigNumberish |
`tokenAmount` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  quitSystem

▸ **quitSystem**(`safe`: BigNumberish, `dst`: string): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:583](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L583)*

**Parameters:**

Name | Type |
------ | ------ |
`safe` | BigNumberish |
`dst` | string |

**Returns:** *TransactionRequest*

___

###  redeemETHGlobalSettlement

▸ **redeemETHGlobalSettlement**(`ethJoin`: string, `collateralType`: BytesLike, `wad`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:853](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L853)*

**Parameters:**

Name | Type |
------ | ------ |
`ethJoin` | string |
`collateralType` | BytesLike |
`wad` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  redeemTokenCollateralGlobalSettlement

▸ **redeemTokenCollateralGlobalSettlement**(`collateralJoin`: string, `collateralType`: BytesLike, `wad`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:868](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L868)*

**Parameters:**

Name | Type |
------ | ------ |
`collateralJoin` | string |
`collateralType` | BytesLike |
`wad` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  repayAllDebt

▸ **repayAllDebt**(`safe`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:593](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L593)*

**Parameters:**

Name | Type |
------ | ------ |
`safe` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  repayAllDebtAndFreeETH

▸ **repayAllDebtAndFreeETH**(`collateralType`: string, `safe`: BigNumberish, `collateralWad`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:603](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L603)*

**Parameters:**

Name | Type |
------ | ------ |
`collateralType` | string |
`safe` | BigNumberish |
`collateralWad` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  repayAllDebtAndFreeTokenCollateral

▸ **repayAllDebtAndFreeTokenCollateral**(`collateralJoin`: string, `safe`: BigNumberish, `collateralAmount`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:619](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L619)*

**Parameters:**

Name | Type |
------ | ------ |
`collateralJoin` | string |
`safe` | BigNumberish |
`collateralAmount` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  repayDebt

▸ **repayDebt**(`safe`: BigNumberish, `wad`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:635](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L635)*

**Parameters:**

Name | Type |
------ | ------ |
`safe` | BigNumberish |
`wad` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  repayDebtAndFreeETH

▸ **repayDebtAndFreeETH**(`collateralType`: string, `safe`: BigNumberish, `collateralWad`: BigNumberish, `deltaWad`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:646](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L646)*

**Parameters:**

Name | Type |
------ | ------ |
`collateralType` | string |
`safe` | BigNumberish |
`collateralWad` | BigNumberish |
`deltaWad` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  repayDebtAndFreeTokenCollateral

▸ **repayDebtAndFreeTokenCollateral**(`collateralJoin`: string, `safe`: BigNumberish, `collateralAmount`: BigNumberish, `deltaWad`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:664](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L664)*

**Parameters:**

Name | Type |
------ | ------ |
`collateralJoin` | string |
`safe` | BigNumberish |
`collateralAmount` | BigNumberish |
`deltaWad` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  safeLockETH

▸ **safeLockETH**(`ethValue`: BigNumberish, `collateralType`: string, `safe`: BigNumberish, `owner`: string): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:682](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L682)*

**Parameters:**

Name | Type |
------ | ------ |
`ethValue` | BigNumberish |
`collateralType` | string |
`safe` | BigNumberish |
`owner` | string |

**Returns:** *TransactionRequest*

___

###  safeLockTokenCollateral

▸ **safeLockTokenCollateral**(`collateralJoin`: string, `safe`: BigNumberish, `amt`: BigNumberish, `transferFrom`: boolean, `owner`: string): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:699](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L699)*

**Parameters:**

Name | Type |
------ | ------ |
`collateralJoin` | string |
`safe` | BigNumberish |
`amt` | BigNumberish |
`transferFrom` | boolean |
`owner` | string |

**Returns:** *TransactionRequest*

___

###  safeRepayAllDebt

▸ **safeRepayAllDebt**(`safe`: BigNumberish, `owner`: string): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:718](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L718)*

**Parameters:**

Name | Type |
------ | ------ |
`safe` | BigNumberish |
`owner` | string |

**Returns:** *TransactionRequest*

___

###  safeRepayDebt

▸ **safeRepayDebt**(`safe`: BigNumberish, `wad`: BigNumberish, `owner`: string): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:729](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L729)*

**Parameters:**

Name | Type |
------ | ------ |
`safe` | BigNumberish |
`wad` | BigNumberish |
`owner` | string |

**Returns:** *TransactionRequest*

___

###  stakeInMine

▸ **stakeInMine**(`wad`: BigNumberish, `campaignAddress`: string): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:1108](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L1108)*

**Parameters:**

Name | Type |
------ | ------ |
`wad` | BigNumberish |
`campaignAddress` | string |

**Returns:** *TransactionRequest*

___

###  surplusIncreaseBidSize

▸ **surplusIncreaseBidSize**(`bidSize`: BigNumberish, `auctionId`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:1438](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L1438)*

**Parameters:**

Name | Type |
------ | ------ |
`bidSize` | BigNumberish |
`auctionId` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  surplusSettleAuction

▸ **surplusSettleAuction**(`auctionId`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:1451](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L1451)*

**Parameters:**

Name | Type |
------ | ------ |
`auctionId` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  surplusStartAndIncreaseBidSize

▸ **surplusStartAndIncreaseBidSize**(`bidSize`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:1429](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L1429)*

**Parameters:**

Name | Type |
------ | ------ |
`bidSize` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  tokenCollateralJoin_join

▸ **tokenCollateralJoin_join**(`apt`: string, `safe`: string, `amt`: BigNumberish, `transferFrom`: boolean): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:745](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L745)*

**Parameters:**

Name | Type |
------ | ------ |
`apt` | string |
`safe` | string |
`amt` | BigNumberish |
`transferFrom` | boolean |

**Returns:** *TransactionRequest*

___

###  transfer

▸ **transfer**(`collateral`: string, `dst`: string, `amt`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:761](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L761)*

**Parameters:**

Name | Type |
------ | ------ |
`collateral` | string |
`dst` | string |
`amt` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  transferCollateral

▸ **transferCollateral**(`safe`: BigNumberish, `dst`: string, `wad`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:771](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L771)*

**Parameters:**

Name | Type |
------ | ------ |
`safe` | BigNumberish |
`dst` | string |
`wad` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  transferInternalCoins

▸ **transferInternalCoins**(`safe`: BigNumberish, `dst`: string, `rad`: BigNumberish): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:786](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L786)*

**Parameters:**

Name | Type |
------ | ------ |
`safe` | BigNumberish |
`dst` | string |
`rad` | BigNumberish |

**Returns:** *TransactionRequest*

___

###  transferSAFEOwnership

▸ **transferSAFEOwnership**(`safe`: BigNumberish, `usr`: string): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:801](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L801)*

**Parameters:**

Name | Type |
------ | ------ |
`safe` | BigNumberish |
`usr` | string |

**Returns:** *TransactionRequest*

___

###  transferSAFEOwnershipToProxy

▸ **transferSAFEOwnershipToProxy**(`safe`: BigNumberish, `dst`: string): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:811](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L811)*

**Parameters:**

Name | Type |
------ | ------ |
`safe` | BigNumberish |
`dst` | string |

**Returns:** *TransactionRequest*

___

###  transferTokensToCaller

▸ **transferTokensToCaller**(`tokens`: string[]): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:1526](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L1526)*

**Parameters:**

Name | Type |
------ | ------ |
`tokens` | string[] |

**Returns:** *TransactionRequest*

___

###  uniswapV2Call

▸ **uniswapV2Call**(`_sender`: string, `_amount0`: BigNumberish, `_amount1`: BigNumberish, `_data`: BytesLike): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:1356](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L1356)*

**Parameters:**

Name | Type |
------ | ------ |
`_sender` | string |
`_amount0` | BigNumberish |
`_amount1` | BigNumberish |
`_data` | BytesLike |

**Returns:** *TransactionRequest*

___

###  withdraw

▸ **withdraw**(`collateralSpecific`: boolean, `saviour`: string, `safe`: BigNumberish, `tokenAmount`: BigNumberish, `dst`: string): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:1601](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L1601)*

**Parameters:**

Name | Type |
------ | ------ |
`collateralSpecific` | boolean |
`saviour` | string |
`safe` | BigNumberish |
`tokenAmount` | BigNumberish |
`dst` | string |

**Returns:** *TransactionRequest*

___

###  withdrawAndHarvest

▸ **withdrawAndHarvest**(`value`: BigNumberish, `campaignAddress`: string): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:1117](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L1117)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | BigNumberish |
`campaignAddress` | string |

**Returns:** *TransactionRequest*

___

###  withdrawFromMine

▸ **withdrawFromMine**(`value`: BigNumberish, `campaignAddress`: string): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:1144](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L1144)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | BigNumberish |
`campaignAddress` | string |

**Returns:** *TransactionRequest*

___

###  withdrawProtectSAFEDeposit

▸ **withdrawProtectSAFEDeposit**(`withdrawCollateralSpecific`: boolean, `depositCollateralSpecific`: boolean, `withdrawSaviour`: string, `depositSaviour`: string, `depositToken`: string, `safe`: BigNumberish, `withdrawTokenAmount`: BigNumberish, `depositTokenAmount`: BigNumberish, `withdrawDst`: string): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:1706](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L1706)*

**Parameters:**

Name | Type |
------ | ------ |
`withdrawCollateralSpecific` | boolean |
`depositCollateralSpecific` | boolean |
`withdrawSaviour` | string |
`depositSaviour` | string |
`depositToken` | string |
`safe` | BigNumberish |
`withdrawTokenAmount` | BigNumberish |
`depositTokenAmount` | BigNumberish |
`withdrawDst` | string |

**Returns:** *TransactionRequest*

___

###  withdrawUncoverSAFE

▸ **withdrawUncoverSAFE**(`collateralSpecific`: boolean, `saviour`: string, `token`: string, `safe`: BigNumberish, `tokenAmount`: BigNumberish, `dst`: string): *TransactionRequest*

*Defined in [packages/geb/src/proxy-action.ts:1685](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/proxy-action.ts#L1685)*

**Parameters:**

Name | Type |
------ | ------ |
`collateralSpecific` | boolean |
`saviour` | string |
`token` | string |
`safe` | BigNumberish |
`tokenAmount` | BigNumberish |
`dst` | string |

**Returns:** *TransactionRequest*
