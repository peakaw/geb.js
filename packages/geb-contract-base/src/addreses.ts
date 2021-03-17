export type ContractKey =
    | 'ETH_FROM'
    | 'STARTING_BLOCK_NUMBER'
    | 'PROXY_DEPLOYER'
    | 'COIN_TYPE'
    | 'GOVERNANCE_TYPE'
    | 'MULTICALL'
    | 'FAUCET'
    | 'GEB_MULTISIG'
    | 'GEB_MULTISIG_PROXY'
    | 'GEB_DEPLOY'
    | 'GEB_PROT'
    | 'PROTOCOL_TOKEN_AUTHORITY'
    | 'GEB_PAUSE_AUTHORITY'
    | 'GEB_POLLING_EMITTER'
    | 'GEB_SAFE_ENGINE'
    | 'GEB_TAX_COLLECTOR'
    | 'GEB_LIQUIDATION_ENGINE'
    | 'GEB_ACCOUNTING_ENGINE'
    | 'GEB_COIN_JOIN'
    | 'GEB_SURPLUS_AUCTION_HOUSE'
    | 'GEB_DEBT_AUCTION_HOUSE'
    | 'GEB_PAUSE'
    | 'GEB_PAUSE_PROXY'
    | 'GEB_GOV_ACTIONS'
    | 'GEB_COIN'
    | 'GEB_ORACLE_RELAYER'
    | 'GEB_GLOBAL_SETTLEMENT'
    | 'GEB_STABILITY_FEE_TREASURY'
    | 'GEB_ESM'
    | 'GEB_ESM_TOKEN_BURNER'
    | 'PROXY_ACTIONS'
    | 'PROXY_ACTIONS_GLOBAL_SETTLEMENT'
    | 'SAFE_MANAGER'
    | 'GET_SAFES'
    | 'FSM_GOV_INTERFACE'
    | 'PROXY_FACTORY'
    | 'PROXY_REGISTRY'
    | 'ETH'
    | 'MEDIANIZER_ETH'
    | 'FEED_SECURITY_MODULE_ETH'
    | 'GEB_JOIN_ETH_A'
    | 'GEB_COLLATERAL_AUCTION_HOUSE_ETH_A'
    | 'PROXY_PAUSE_ACTIONS'
    | 'PROXY_PAUSE_SCHEDULE_ACTIONS'
    | 'PROXY_DEPLOYER'
    | 'UNISWAP_FACTORY'
    | 'UNISWAP_ROUTER'
    | 'GEB_DS_COMPARE'
    | 'GEB_TX_MANAGER'
    | 'GEB_RRFM_SETTER'
    | 'MEDIANIZER_RAI'
    | 'GEB_RRFM_CALCULATOR'
    | 'GEB_DUMMY_RRFM_CALCULATOR'
    | 'PROXY_ACTIONS_INCENTIVES'
    | 'SPOT_RAI'
    | 'SPOT_FEED_SECURITY_MODULE_RAI'
    | 'GEB_UNISWAP_SINGLE_KEEPER_FLASH_PROXY_ETH_A'
    | 'GEB_UNISWAP_MULTI_COLLATERAL_KEEPER_FLASH_PROXY'
    | 'GEB_COIN_UNISWAP_POOL'
    | 'GEB_INCENTIVES_MINER'
    | 'LEVERAGE_PROXY_ACTION'
    | 'PROXY_DEBT_AUCTION_ACTIONS'
    | 'PROXY_SURPLUS_AUCTION_ACTIONS'
    | 'GEB_SINGLE_CEILING_SETTER'
    | 'MERKLE_DISTRIBUTOR_FACTORY'
    | 'COLLATERAL_AUCTION_THROTTLER'
// This contract is not present in the changelogs contract.

export type ContractList = {
    [key in ContractKey]: string
}

export declare type GebDeployment =
    | 'mainnet'
    | 'kovan'
    | 'rinkeby'
    | ContractList

// prettier-ignore
export const KOVAN_ADDRESSES: ContractList = {
    "ETH_FROM": "0x7BCd5C864a0aC07EFee60a1A18f9d5c99Ff7fD4d",
    "STARTING_BLOCK_NUMBER": "23275958",
    "PROXY_DEPLOYER": "0x3D223a697b7ca376c8289431d4946ebD26CA80ae",
    "COIN_TYPE": "INDEX",
    "GOVERNANCE_TYPE": "MULTISIG-SAFE",
    "MULTICALL": "0x551283ecB1257B5aE0A4b2DFe42e06E5F29b8068",
    "FAUCET": "0x0000000000000000000000000000000000000000",
    "GEB_MULTISIG": "0x5CCFc908D9810E32DDC6B1Df1f24c67A2Cfcfd83",
    "GEB_MULTISIG_PROXY": "0xDcceA20B82f43BDDaa55dB54a40C031C9948e296",
    "GEB_DEPLOY": "0x5feC3771419d0D2A027854e41de62722d9182c1d",
    "GEB_PROT": "0x6e6eA84bb2fcE17AfCE8e1117DdC708142ef51c9",
    "PROTOCOL_TOKEN_AUTHORITY": "0xacB478e8e657fb1eF78Ad3dF3B537466642f9faD",
    "GEB_PAUSE_AUTHORITY": "0x68BE18B496Fb2472E4bD05dF8cC6d566C401be9B",
    "GEB_POLLING_EMITTER": "0x5Bc73aff8aADdD3A340a61DeaE885205088AAe68",
    "GEB_SAFE_ENGINE": "0x7f63fE955fFF8EA474d990f1Fc8979f2C650edbE",
    "GEB_TAX_COLLECTOR": "0xc1a94C5ad9FCD79b03F79B34d8C0B0C8192fdc16",
    "GEB_LIQUIDATION_ENGINE": "0x75A807a667FbcB303f46c0F8Ca45fdfEF8fdC9AC",
    "GEB_ACCOUNTING_ENGINE": "0x6073E8FE874B53732b5DdD469a2De4047f33C64B",
    "GEB_COIN_JOIN": "0x7d4fe9659D80970097E604727a2BA3F094B00758",
    "GEB_SURPLUS_AUCTION_HOUSE": "0xCdaA2ec0975eD41202E1078b21a4833E414f6379",
    "GEB_DEBT_AUCTION_HOUSE": "0x6AcE594C5A421E468c13715AD62A183200C320a6",
    "GEB_PAUSE": "0x2ef5240F19B45C02c6eb53211e034bD504Ea1f82",
    "GEB_PAUSE_PROXY": "0xe074d33128CecaA74ef137cF2ACAB353843e7821",
    "GEB_GOV_ACTIONS": "0xBCBE66dddE2810C469588ffcd723e0190f92E827",
    "GEB_COIN": "0x76b06a2f6dF6f0514e7BEC52a9AfB3f603b477CD",
    "GEB_ORACLE_RELAYER": "0xE5Ae4E49bEA485B5E5172EE6b1F99243cB15225c",
    "GEB_GLOBAL_SETTLEMENT": "0x59911838F26E4D41A8746DE2BAcb51ecDf323BA3",
    "GEB_STABILITY_FEE_TREASURY": "0xE8B3b96D632D7257639de137FB6aD191F0515c8d",
    "GEB_ESM": "0x28d6446ec239957184966B87b70059B208ae6F49",
    "GEB_ESM_TOKEN_BURNER": "0x41d4D7AB0a80864A59acc7A25b5e6bDD07E7FFB3",
    "GEB_RRFM_CALCULATOR": "0x12D5A83c4789859dF6617000bFcd5116962DD71F",
    "GEB_DUMMY_RRFM_CALCULATOR": "0x750f2b976F8e233AFcCDee2f8213996cB7D3D798",
    "GEB_RRFM_SETTER": "0x0641C280B21A31daf1518a91A68Ad396EcC6f2f0",
    "PROXY_ACTIONS": "0x938291470A786f73Ae69A4E67246E3396D1118eC",
    "PROXY_ACTIONS_INCENTIVES": "0x3D36CA69b16f31C8F5E4f391Df95Ef5eC4ab663f",
    "PROXY_ACTIONS_GLOBAL_SETTLEMENT": "0x771f6CA88935989A635981E42dE00B8cfa1258d0",
    "PROXY_DEBT_AUCTION_ACTIONS": "0xC31518D4fbA20E3618F6e7B24D1Bada43837Ed45",
    "PROXY_SURPLUS_AUCTION_ACTIONS": "0x7Ce3922988E84D3967ED7df1eF6FB789cc149Bd4",
    "SAFE_MANAGER": "0x807C8eCb73d9c8203d2b1369E678098B9370F2EA",
    "GET_SAFES": "0x702dcf4a8C3bBBd243477D5704fc45F2762D3826",
    "FSM_GOV_INTERFACE": "0x355DA9a2A54007A850e823651a29CFF8f0afdC02",
    "PROXY_FACTORY": "0xe11E3b391F7E8bC47247866aF32AF67Dd58Dc800",
    "PROXY_REGISTRY": "0x64A436ae831C1672AE81F674CAb8B6775df3475C",
    "MEDIANIZER_RAI": "0x82bEAd00751EFA3286c9Dd17e4Ea2570916B3944",
    "SPOT_RAI": "0xFDba7b009C096f2b38CdDfd746644bBAEdE06922",
    "SPOT_FEED_SECURITY_MODULE_RAI": "0x0000000000000000000000000000000000000000",
    "ETH": "0xd0A1E359811322d97991E03f863a0C30C2cF029C",
    "MEDIANIZER_ETH": "0xBe75d5da0E80Bb222eAbCB3d2001Af3318065338",
    "FEED_SECURITY_MODULE_ETH": "0x609CA6a043d9D4D483C58038cEE7F474727E5fFc",
    "GEB_JOIN_ETH_A": "0xad4AB4Cb7b8aDC45Bf2873507fC8700f3dFB9Dd3",
    "GEB_COLLATERAL_AUCTION_HOUSE_ETH_A": "0xbEDDdF02F9C55BdDD95C3CB67F77A9Ef426D7fC0",
    "GEB_UNISWAP_SINGLE_KEEPER_FLASH_PROXY_ETH_A": "0x9cC49b574070379B71817Aa34643CB78Ad90A932",
    "GEB_UNISWAP_MULTI_COLLATERAL_KEEPER_FLASH_PROXY": "0xe29fEfa1ECD4b1Ca55deC29A7EfDBc622998FD99",
    "PROXY_PAUSE_ACTIONS": "0xfbD93C8E9c428447ccb8fE386A8de1df2075c962",
    "PROXY_PAUSE_SCHEDULE_ACTIONS": "0xf8E243fEe1581A60c94Ec9Bf3fe9029eD30cb006",
    "GEB_INCENTIVES_MINER": "0xEB03d9ACdd445f7DfA914eE99aC73Bd6888677EC",
    "UNISWAP_FACTORY": "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
    "UNISWAP_ROUTER": "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    "GEB_DS_COMPARE": "0xde1766FE0D4A00f1C45875EB76D819E9A37585b1",
    "GEB_TX_MANAGER": "0x3876f196A072533A5262Af485c64Fa9B50951991",
    "GEB_COIN_UNISWAP_POOL": "0x052AE8b0F7E5c610937920e46ED265c2063Cb7B8",
    "GEB_SINGLE_CEILING_SETTER": "0x2747c5eE7692717EE2B284749bC1062BEAdab85d",
    "LEVERAGE_PROXY_ACTION": "0x0000000000000000000000000000000000000000",
    "MERKLE_DISTRIBUTOR_FACTORY": "0x11614138187314448fBbBA4c7094E4d5eA0dc1f7",
    "COLLATERAL_AUCTION_THROTTLER": "0x35E96743DaCe5a4541A9d1eF7da24c58c85516F1"
}

// prettier-ignore
export const MAINNET_ADDRESSES: ContractList = {
    "ETH_FROM": "0x7FAfc11677649DB6AbFEC127B4B776D585520ae1",
    "STARTING_BLOCK_NUMBER": "11848304",
    "PROXY_DEPLOYER": "0x631e38D6Dc0F4A26F6BE0d3d0E4ebA3d02033aB4",
    "COIN_TYPE": "INDEX",
    "GOVERNANCE_TYPE": "MULTISIG-SAFE",
    "MULTICALL": "0x51812e07497586ce025D798Bb44b6d11bBEe3a01",
    "FAUCET": "0x0000000000000000000000000000000000000000",
    "GEB_MULTISIG": "0x427A277eA53e25143B3b509C684aA4D0EB8bA01b",
    "GEB_MULTISIG_PROXY": "0x2695b1dC32899c07d177A287f006b6569216a5a1",
    "GEB_DEPLOY": "0x24AcC85528e6dd5B9C297fb8821522D36B1Ae09f",
    "GEB_PROT": "0x6243d8CEA23066d098a15582d81a598b4e8391F4",
    "PROTOCOL_TOKEN_AUTHORITY": "0xcb8479840A5576B1cafBb3FA7276e04Df122FDc7",
    "GEB_PAUSE_AUTHORITY": "0x1490a828957f1E23491c8d69273d684B15c6E25A",
    "GEB_POLLING_EMITTER": "0xf7Da963B88194a9bc6775e93d39c70c6e3f04f6F",
    "GEB_SAFE_ENGINE": "0xCC88a9d330da1133Df3A7bD823B95e52511A6962",
    "GEB_TAX_COLLECTOR": "0xcDB05aEda142a1B0D6044C09C64e4226c1a281EB",
    "GEB_LIQUIDATION_ENGINE": "0x27Efc6FFE79692E0521E7e27657cF228240A06c2",
    "GEB_ACCOUNTING_ENGINE": "0xcEe6Aa1aB47d0Fb0f24f51A3072EC16E20F90fcE",
    "GEB_COIN_JOIN": "0x0A5653CCa4DB1B6E265F47CAf6969e64f1CFdC45",
    "GEB_SURPLUS_AUCTION_HOUSE": "0xEeF4ea1A548417Df1e7f0f6Ab89494eED9e06B70",
    "GEB_DEBT_AUCTION_HOUSE": "0x1896adBE708bF91158748B3F33738Ba497A69e8f",
    "GEB_PAUSE": "0x2cDE6A1147B0EE61726b86d83Fd548401B1162c7",
    "GEB_PAUSE_PROXY": "0xa57A4e6170930ac547C147CdF26aE4682FA8262E",
    "GEB_GOV_ACTIONS": "0x0463bF18c2457B00402A7639fa1DFB7d60f659Ee",
    "GEB_COIN": "0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919",
    "GEB_ORACLE_RELAYER": "0x4ed9C0dCa0479bC64d8f4EB3007126D5791f7851",
    "GEB_GLOBAL_SETTLEMENT": "0x6368a4bA80fC780A9a0fEa547239C4635B97fD70",
    "GEB_STABILITY_FEE_TREASURY": "0x83533fdd3285f48204215E9CF38C785371258E76",
    "GEB_ESM": "0x7Cb548DF57eA728A33c4cb81698d03BC8B279eC6",
    "GEB_ESM_TOKEN_BURNER": "0xB10409FC293F987841964C4FcFEf887D9ece799B",
    "GEB_RRFM_CALCULATOR": "0xcFa37DcE6DFE80857c3B8DbA100b592775aE2688",
    "GEB_DUMMY_RRFM_CALCULATOR": "0x9F02ddBFb4B045Df83D45c4d644027FBD7d72A6D",
    "GEB_RRFM_SETTER": "0x005FaB4C9D1ef0f3E41CD27b26cF05680C3bF947",
    "PROXY_ACTIONS": "0x880CECbC56F48bCE5E0eF4070017C0a4270F64Ed",
    "PROXY_ACTIONS_INCENTIVES": "0x88A77b8Ff53329f88B8B6F9e29835FEc287349e0",
    "PROXY_ACTIONS_GLOBAL_SETTLEMENT": "0x17b5d9914194a08c7Ef14451BA15E8aE4f92Cb93",
    "PROXY_DEBT_AUCTION_ACTIONS": "0x8f29c9E54Ee8B1EFCEfae8d4709Ae176541E86c8",
    "PROXY_SURPLUS_AUCTION_ACTIONS": "0x6f0faAEa6767731ae14696F059248Ee403c59e3B",
    "SAFE_MANAGER": "0xEfe0B4cA532769a3AE758fD82E1426a03A94F185",
    "GET_SAFES": "0xdf4BC9aA98cC8eCd90Ba2BEe73aD4a1a9C8d202B",
    "FSM_GOV_INTERFACE": "0xe24F8B30fd28c90462c9BbC87A9A2a823636F533",
    "PROXY_FACTORY": "0xA26e15C895EFc0616177B7c1e7270A4C7D51C997",
    "PROXY_REGISTRY": "0x4678f0a6958e4D2Bc4F1BAF7Bc52E8F3564f3fE4",
    "MEDIANIZER_RAI": "0x12A5E1c81B10B264A575930aEae80681DDF595fe",
    "SPOT_RAI": "0x7235a0094eD56eB2Bd0de168d307C8990233645f",
    "SPOT_FEED_SECURITY_MODULE_RAI": "0x0000000000000000000000000000000000000000",
    "ETH": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    "MEDIANIZER_ETH": "0x6A4B575Ba61D2FB86ad0Ff5e5BE286960580E71A",
    "FEED_SECURITY_MODULE_ETH": "0xE6F5377DE93A361cd5531bdFbDf0f4b522E16B2B",
    "GEB_JOIN_ETH_A": "0x2D3cD7b81c93f188F3CB8aD87c8Acc73d6226e3A",
    "GEB_COLLATERAL_AUCTION_HOUSE_ETH_A": "0x6D2A73e16c255c1931730B776d96aAFF1909322E",
    "PROXY_PAUSE_ACTIONS": "0x27a54e99dE813CE2E41BAa7F44d1F19FBA22B36D",
    "PROXY_PAUSE_SCHEDULE_ACTIONS": "0x6a2714404Be6613A952A80266840ffe916194632",
    "GEB_INCENTIVES_MINER": "0xa706d4c39c315288113020f3e2D7e1095e912a20",
    "UNISWAP_FACTORY": "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
    "UNISWAP_ROUTER": "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    "GEB_DS_COMPARE": "0x10122261ff9520C590c0c3A679b7E3dFC8B09C64",
    "GEB_TX_MANAGER": "0xB7272627825D1cb633f705BC269F8e11126D7A25",
    "GEB_COIN_UNISWAP_POOL": "0x8aE720a71622e824F576b4A8C03031066548A3B1",
    "GEB_SINGLE_CEILING_SETTER": "0xB2df48A0C4A07031F538353AA35D7fFa24e25eC1",
    "LEVERAGE_PROXY_ACTION": "0x0000000000000000000000000000000000000000",
    "GEB_UNISWAP_SINGLE_KEEPER_FLASH_PROXY_ETH_A": "0x0000000000000000000000000000000000000000",
    "GEB_UNISWAP_MULTI_COLLATERAL_KEEPER_FLASH_PROXY": "0x0000000000000000000000000000000000000000",
    "MERKLE_DISTRIBUTOR_FACTORY": "0x0000000000000000000000000000000000000000",
    "COLLATERAL_AUCTION_THROTTLER": "0x0000000000000000000000000000000000000000",
}

// prettier-ignore
export const RINKEBY_ADDRESSES: ContractList = {
    "ETH_FROM": "0x230E277B1A6B36d56Da0F143Fe73ABdA7a926dbb",
    "STARTING_BLOCK_NUMBER": "7295635",
    "PROXY_DEPLOYER": "0xa49fE5Fd61Fbb5a856Ef5A119aAA982463Ca4EB2",
    "COIN_TYPE": "INDEX",
    "GOVERNANCE_TYPE": "MULTISIG-SAFE",
    "MULTICALL": "0xEb4E467137a4836Fa1AB026e079b1ce42F06E010",
    "FAUCET": "0x7EbcF11D7aD028d71c85169794D430B856962B90",
    "GEB_MULTISIG": "0xb148ff07894B6AE851Cd391AA463022953960477",
    "GEB_MULTISIG_PROXY": "0xf5130bcf18f17164CDC1d929913a64873E547944",
    "GEB_DEPLOY": "0x9F31e50f6d5D25B93b9d165573a169829b91766A",
    "GEB_PROT": "0x0000000000000000000000000000000000000000",
    "GEB_PAUSE_AUTHORITY": "0x4670e6CD07493D094654EB7010C6E32Fd95f638D",
    "GEB_POLLING_EMITTER": "0x41E7a13795CA812ac6BBF34560BB3E0B79E21F88",
    "GEB_SAFE_ENGINE": "0x18C5f335602C881EaA36d2a5A483186f61a7C087",
    "GEB_TAX_COLLECTOR": "0xee8C739357C71E2a8eaE1C659B659FFf407C4A33",
    "GEB_LIQUIDATION_ENGINE": "0xcC7fEfca00B8Ca8C9145C6fDe2c5CbBF85e55505",
    "GEB_ACCOUNTING_ENGINE": "0xeFB357401202EaE363673e2F6062D00750880dd5",
    "GEB_COIN_JOIN": "0x355033f612Eb1E70972f79E0B82E8789E9C49B5f",
    "GEB_SURPLUS_AUCTION_HOUSE": "0x822D7574C382Cb0Ed2ceEbEFEeD5a3716cD8ef68",
    "GEB_DEBT_AUCTION_HOUSE": "0x55F004bEA4dD46CF529fA0E1CB9F11c24CD768ce",
    "GEB_PAUSE": "0x63B5F3fc34F5c00F3dF5E9d0bC5677f8E2d8aa81",
    "GEB_PAUSE_PROXY": "0x91A49D98911D74e19b81d10AC31FAA0A798249C5",
    "GEB_GOV_ACTIONS": "0x37Df6a3fdB306AaD9fC99eB9E1f1069073913a3F",
    "GEB_COIN": "0x1C6f922b5a1b29329B2854789F784Bb849ff3b4b",
    "GEB_ORACLE_RELAYER": "0x550Aa609c94a3b08A4b473D9f3cc56527C769D7d",
    "GEB_GLOBAL_SETTLEMENT": "0xaEE64AB4c7Ef82084B364960a2DCF9D06f985F50",
    "GEB_STABILITY_FEE_TREASURY": "0x3e5925fc04283555ed8274Fdc5038f69A47891BE",
    "GEB_ESM": "0x0000000000000000000000000000000000000000",
    "GEB_RRFM_CALCULATOR": "0xB6F539EcC4baF3fF0EeaC2342bb608FbAABD0076",
    "GEB_RRFM_SETTER": "0xA58E1b2c04691D839D76455560B7412F425c62a9",
    "PROXY_ACTIONS": "0xde51B3430a2c910f49f4B4C9Ad5AC7cD988De8c3",
    "PROXY_ACTIONS_GLOBAL_SETTLEMENT": "0xA09EAe61bEE5cE3a9Ac9f0360144c8D3aBc27931",
    "SAFE_MANAGER": "0x3C65A7668535B0242844Dd3e27ff4B253F94B873",
    "GET_SAFES": "0xc4E8508348d81A20ADC7F0CA21A03a512D92D15a",
    "FSM_GOV_INTERFACE": "0x7A7AaAD445b6843a86204f5f1E017eD8F30c6116",
    "PROXY_FACTORY": "0x6Ea1f20E33dB81f3a16F6d8002F2389e147a886f",
    "PROXY_REGISTRY": "0x92EDB4F6c1AA2136DdfdE8EcB9c2A7c77d240B44",
    "MEDIANIZER_RAI": "0xC6370ff2620f447f2224E80BFf63748639daE154",
    "ETH": "0xc778417E063141139Fce010982780140Aa0cD5Ab",
    "MEDIANIZER_ETH": "0x6CdC1cEd3d6198cFf6B36e481Ba57b55285DB817",
    "FEED_SECURITY_MODULE_ETH": "0xdB0c9213FA09A48B51d75721df46f36e01774992",
    "GEB_JOIN_ETH_A": "0x3c6EA7AE33731a22917Bb26b00442BF197B871B5",
    "GEB_COLLATERAL_AUCTION_HOUSE_ETH_A": "0xFEF608E26eA13649ce19Ae8fF36927A77dd9a7be",
    "PROXY_PAUSE_ACTIONS": "0x32a0F030f44c48e1E2bF4C34FB4cAf68BAc2d6d8",
    "PROXY_PAUSE_SCHEDULE_ACTIONS": "0xcf8371C1B445035329C8F54d0B38EFD9913c4c44",
    "UNISWAP_FACTORY": "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
    "UNISWAP_ROUTER": "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    "GEB_DS_COMPARE": "0xE307656278c8118C2F106D3c50568B898fb1D388",
    "GEB_TX_MANAGER": "0xFb67D28206736CA16a56e949f7e6945aed6b774c",
    "GEB_DUMMY_RRFM_CALCULATOR": "0x0000000000000000000000000000000000000000",
    "PROTOCOL_TOKEN_AUTHORITY": "0x0000000000000000000000000000000000000000",
    "GEB_ESM_TOKEN_BURNER": "0x0000000000000000000000000000000000000000",
    "PROXY_ACTIONS_INCENTIVES": "0x0000000000000000000000000000000000000000",
    'SPOT_RAI': "0x0000000000000000000000000000000000000000",
    'SPOT_FEED_SECURITY_MODULE_RAI': "0x0000000000000000000000000000000000000000",
    'GEB_UNISWAP_SINGLE_KEEPER_FLASH_PROXY_ETH_A': "0x0000000000000000000000000000000000000000",
    'GEB_UNISWAP_MULTI_COLLATERAL_KEEPER_FLASH_PROXY': "0x0000000000000000000000000000000000000000",
    'GEB_COIN_UNISWAP_POOL': "0x0000000000000000000000000000000000000000",
    "LEVERAGE_PROXY_ACTION": "0x0000000000000000000000000000000000000000",
    "GEB_INCENTIVES_MINER": "0x0000000000000000000000000000000000000000",
    "GEB_SINGLE_CEILING_SETTER": "0x0000000000000000000000000000000000000000",
    "PROXY_DEBT_AUCTION_ACTIONS": "0x0000000000000000000000000000000000000000",
    "PROXY_SURPLUS_AUCTION_ACTIONS": "0x0000000000000000000000000000000000000000",
    "MERKLE_DISTRIBUTOR_FACTORY": "0x0000000000000000000000000000000000000000",
    "COLLATERAL_AUCTION_THROTTLER": "0x0000000000000000000000000000000000000000",
}

export const getAddressList = (network: GebDeployment): ContractList => {
    if (network === 'kovan') {
        return KOVAN_ADDRESSES
    } else if (network === 'mainnet') {
        return MAINNET_ADDRESSES
    } else if (network === 'rinkeby') {
        return RINKEBY_ADDRESSES
    } else {
        return network
    }
}
