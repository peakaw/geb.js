import { BigNumberish, BigNumber, FixedNumber } from '@ethersproject/bignumber'

// === Constants ===

/**
 * byte32 value for the "ETH-A" collateral
 */
const ETH_A =
    '0x4554482d41000000000000000000000000000000000000000000000000000000'

/**
 * byte32 value for the "ETH-B" collateral
 */
const ETH_B =
    '0x4554482d42000000000000000000000000000000000000000000000000000000'

/**
 * byte32 value for the "ETH-C" collateral
 */
const ETH_C =
    '0x4554482d43000000000000000000000000000000000000000000000000000000'

/**
 * byte32 value for the "WSTETH-A" collateral
 */
const WSTETH_A =
    '0x5753544554482d41000000000000000000000000000000000000000000000000'

/**
 * byte32 value for the "WSTETH-B" collateral
 */
const WSTETH_B =
    '0x5753544554482d42000000000000000000000000000000000000000000000000'

/**
 * byte32 value for the "RETH-A" collateral
 */
const RETH_A =
    '0x524554482d410000000000000000000000000000000000000000000000000000'

/**
 * byte32 value for the "RETH-B" collateral
 */
const RETH_B =
    '0x524554482d420000000000000000000000000000000000000000000000000000'

/**
 * byte32 value for the "RAI-A" collateral
 */
const RAI_A =
    '0x5241492d41000000000000000000000000000000000000000000000000000000'

/**
 * 0x0 address or burn address
 */
const NULL_ADDRESS = '0x0000000000000000000000000000000000000000'

/**
 * Constant 10^18
 */
const WAD = BigNumber.from('1000000000000000000')

/**
 * Constant 10^27
 */
const RAY = BigNumber.from('1000000000000000000000000000')

/**
 * Constant 10^45
 */
const RAD = BigNumber.from('1000000000000000000000000000000000000000000000')

// ==== Utils functions ===

/**
 * Return a fixed number object from a RAD
 * @param  {BigNumberish} rad
 */
const radToFixed = (rad: BigNumberish) => {
    return FixedNumber.fromValue(BigNumber.from(rad), 45, 'fixed256x45')
}

/**
 * Return a fixed number object from a RAD
 * @param  {BigNumberish} rad
 */
const rayToFixed = (ray: BigNumberish) => {
    return FixedNumber.fromValue(BigNumber.from(ray), 27, 'fixed256x27')
}

/**
 * Return a fixed number object from a RAD
 * @param  {BigNumberish} wad
 */
const wadToFixed = (wad: BigNumberish) => {
    return FixedNumber.fromValue(BigNumber.from(wad), 18, 'fixed256x18')
}

/**
 * Multiply by the power of 10 !! Precision loss if shift < 0 !!
 * @param val Value to convert
 * @param shift Number of places to shift the decimal
 */
const decimalShift = (val: BigNumberish, shift: number) => {
    if (shift > 0) {
        return BigNumber.from(val).mul(BigNumber.from(10).pow(shift))
    } else if (shift < 0) {
        return BigNumber.from(val).div(BigNumber.from(10).pow(Math.abs(shift)))
    } else {
        BigNumber.from(val)
    }

    return BigNumber.from(val)
}

/**
 * Given any kind of error object from an Ethereum RPC, this Will look for an error string from a Solidity require statement. Returns null if not found.
 * @param  {any} RPC error object of any kind
 * @returns string
 */
const getRequireString = (error: any): string | null => {
    // Stringify to object
    let str: string
    try {
        str = JSON.stringify(error)
    } catch {
        return null
    }
    // Search for the require error string selector 0x08c379a0
    const hexerrorArray = str.match(/0x08c379a0[0-9a-fA-F]*/g)

    if (hexerrorArray) {
        // Convert from hex to UTF-8 string
        return decodeURIComponent(
            hexerrorArray[0].slice(12).replace(/[0-9a-f]{2}/g, '%$&')
        )
            .replace(/\0/g, '')
            .slice(2)
    } else {
        return null
    }
}

export {
    // Constants
    ETH_A,
    ETH_B,
    ETH_C,
    WSTETH_A,
    WSTETH_B,
    RETH_A,
    RETH_B,
    RAI_A,
    NULL_ADDRESS,
    WAD,
    RAY,
    RAD,
    //Utils
    wadToFixed,
    rayToFixed,
    radToFixed,
    decimalShift,
    getRequireString,
}
