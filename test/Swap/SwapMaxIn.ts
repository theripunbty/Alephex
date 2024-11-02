import { Address, U256, TokenPair } from '../../src/types';
import { Router } from '../../src/Router';

export class SwapMaxIn {
  async execute(
    sender: Address,
    router: Router,
    pair: TokenPair,
    tokenInId: string,
    amountInMax: U256,
    amountOut: U256,
    deadline: U256
  ): Promise<void> {
    await router.swapTokenForExactToken(pair, sender, tokenInId, amountInMax, amountOut, sender, deadline);
  }
}
