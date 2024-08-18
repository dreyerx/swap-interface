import { ChainId } from 'dreyerxswap'
import MULTICALL_ABI from './abi.json'
import { multicall } from '../../dreyerx_addresses.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: multicall
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
