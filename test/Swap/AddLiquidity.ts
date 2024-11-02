import { Address, U256, TokenPair, Token } from '../../src/types';
import { Router } from '../../src/Router';

export class AddLiquidity {
  async execute(
    sender: Address,
    router: Router,
    pair: TokenPair,
    amount0Desired: U256,
    amount1Desired: U256,
    amount0Min: U256,
    amount1Min: U256,
    deadline: U256
  ): Promise<void> {
    // Get the token instances
    const token0: Token = await Token.at(pair.token0);
    const token1: Token = await Token.at(pair.token1);

    // Approve router to spend tokens
    await token0.methods.approve(router.address, amount0Desired);
    await token1.methods.approve(router.address, amount1Desired);

    // Call addLiquidity with the correct parameter order
    await router.methods.addLiquidity(
      pair,
      amount0Desired,
      amount1Desired,
      amount0Min,
      amount1Min,
      deadline,
      { sender } // Pass sender in the transaction options
    );
  }
}
