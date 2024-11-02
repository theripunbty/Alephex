import { Address, U256, TokenPair } from '../../src/types';
import { Router } from '../../src/Router';

export class SwapMinOut {
  async execute(
    sender: Address,
    router: Router,
    pair: TokenPair,
    tokenInId: string,
    amountIn: U256,
    amountOutMin: U256,
    deadline: U256
  ): Promise<void> {
    await router.swapExactTokenForToken(pair, sender, tokenInId, amountIn, amountOutMin, sender, deadline);
  }
}
