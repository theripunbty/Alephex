import { Address, U256, TokenPair } from '../../src/types';


export class Swap {
  async execute(
    tokenPair: TokenPair,
    sender: Address,
    to: Address,
    amount0In: U256,
    amount1In: U256,
    amount0Out: U256,
    amount1Out: U256
  ): Promise<void> {
    if (sender !== to) {
      // Logic to transfer ALPH for dust amount
    }
    await tokenPair.swap(sender, to, amount0In, amount1In, amount0Out, amount1Out);
  }
}
