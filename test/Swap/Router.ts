import { Address, U256 } from '../../src/types';
import { TokenPair } from './TokenPair';

export class Router {
  // Events
  AddLP(sender: Address, tokenPair: TokenPair, amount0: U256, amount1: U256, liquidity: U256): void {
    // Emit AddLP event (implementation needed for your specific event emission)
    console.log(`AddLP: ${sender}, ${tokenPair}, ${amount0}, ${amount1}, ${liquidity}`);
  }

  RemoveLP(sender: Address, tokenPair: string, liquidity: U256): void {
    // Emit RemoveLP event (implementation needed for your specific event emission)
    console.log(`RemoveLP: ${sender}, ${tokenPair}, ${liquidity}`);
  }

  // Error Codes
  static ErrorCodes = {
    InsufficientOutputAmount: 9,
    InsufficientInputAmount: 10,
    Expired: 12,
    InsufficientToken0Amount: 13,
    InsufficientToken1Amount: 14,
  };

  // Add Liquidity
  async addLiquidity(
    tokenPair: TokenPair,
    sender: Address,
    amount0Desired: U256,
    amount1Desired: U256,
    amount0Min: U256,
    amount1Min: U256,
    deadline: U256
  ): Promise<void> {
    // Check deadline
    if (Number(deadline) < Math.floor(Date.now() / 1000)) {
      throw new Error(String(Router.ErrorCodes.Expired));
    }

    const [reserve0, reserve1] = await tokenPair.getReserves();
    const [amount0, amount1] = this.addLiquidityCalculation(reserve0, reserve1, amount0Desired, amount1Desired, amount0Min, amount1Min);
    const liquidity = await tokenPair.mint(sender, amount0, amount1);
    this.AddLP(sender, tokenPair, amount0, amount1, liquidity);
  }

  private addLiquidityCalculation(
    reserve0: U256,
    reserve1: U256,
    amount0Desired: U256,
    amount1Desired: U256,
    amount0Min: U256,
    amount1Min: U256
  ): [U256, U256] {
    if (Number(reserve0) === 0 && Number(reserve1) === 0) {
      return [amount0Desired, amount1Desired];
    }
    const amount1Optimal = (Number(amount0Desired) * Number(reserve1)) / Number(reserve0);
    if (amount1Optimal <= Number(amount1Desired)) {
      if (amount1Optimal < Number(amount1Min)) throw new Error(String(Router.ErrorCodes.InsufficientToken1Amount));
      return [amount0Desired, String(amount1Optimal)];
    }
    const amount0Optimal = (Number(amount1Desired) * Number(reserve0)) / Number(reserve1);
    if (amount0Optimal < Number(amount0Min) || amount0Optimal > Number(amount0Desired)) throw new Error(String(Router.ErrorCodes.InsufficientToken0Amount));
    return [String(amount0Optimal), amount1Desired];
  }

  // Remove Liquidity
  async removeLiquidity(
    tokenPairId: string,
    sender: Address,
    liquidity: U256,
    amount0Min: U256,
    amount1Min: U256,
    deadline: U256
  ): Promise<void> {
    if (Number(deadline) < Math.floor(Date.now() / 1000)) {
      throw new Error(String(Router.ErrorCodes.Expired));
    }
    const tokenPair = await this.createTokenPair(tokenPairId); // Correctly instantiate the TokenPair
    const amount0 = await tokenPair.burn(sender, liquidity); // Correct method name
    if (Number(amount0) < Number(amount0Min)) throw new Error(String(Router.ErrorCodes.InsufficientToken0Amount));
    this.RemoveLP(sender, tokenPairId, amount0.toString());
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async createTokenPair(_tokenPairId: string): Promise<TokenPair> {
    // Correctly implement the method to create a TokenPair instance
    // This is a placeholder for the actual implementation
    // Assuming tokenPairId is used to create a TokenPair instance
    // For demonstration, let's assume we have a method to create a TokenPair instance
    const tokenPair = new TokenPair(); // Assuming TokenPair constructor does not take any parameters
    return tokenPair;
    // This method would return a TokenPair instance
    // throw new Error('Method not implemented.'); // This line should be replaced with actual implementation
  }

  // Swap Functions
  async swapExactTokenForToken(
    tokenPair: TokenPair,
    sender: Address,
    tokenInId: string,
    amountIn: U256,
    amountOutMin: U256,
    to: Address,
    deadline: U256
  ): Promise<void> {
    if (Number(deadline) < Math.floor(Date.now() / 1000)) {
      throw new Error(String(Router.ErrorCodes.Expired));
    }

    const [reserveIn, reserveOut] = await this.getReserveInAndReserveOut(tokenPair, tokenInId);
    const amountInExcludeFee = Number(amountIn) * 997; // Assuming the fee is 0.3%
    const amountOut = (amountInExcludeFee * Number(reserveOut)) / (amountInExcludeFee + 1000 * Number(reserveIn));
    if (Number(amountOut) < Number(amountOutMin)) throw new Error(String(Router.ErrorCodes.InsufficientOutputAmount));
    await this.swap(tokenPair, sender, to, tokenInId, String(amountIn), String(amountOut));
  }

  async swapTokenForExactToken(
    tokenPair: TokenPair,
    sender: Address,
    tokenInId: string,
    amountInMax: U256,
    amountOut: U256,
    to: Address,
    deadline: U256
  ): Promise<void> {
    if (Number(deadline) < Math.floor(Date.now() / 1000)) {
      throw new Error(String(Router.ErrorCodes.Expired));
    }
    const [reserveIn, reserveOut] = await this.getReserveInAndReserveOut(tokenPair, tokenInId);
    const amountIn = (Number(reserveIn) * Number(amountOut) * 1000) / ((Number(reserveOut) - Number(amountOut)) * 997) + 1;
    if (amountIn > Number(amountInMax)) throw new Error(String(Router.ErrorCodes.InsufficientInputAmount));
    await this.swap(tokenPair, sender, to, tokenInId, String(amountIn), amountOut);
  }

  private async getReserveInAndReserveOut(tokenPair: TokenPair, tokenInId: string): Promise<[U256, U256]> {
    const [reserve0, reserve1] = await tokenPair.getReserves();
    const [token0Id] = await tokenPair.getTokenPair();
    return tokenInId === token0Id ? [reserve0, reserve1] : [reserve1, reserve0];
  }

  private async swap(tokenPair: TokenPair, sender: Address, to: Address, tokenInId: string, amountIn: U256, amountOut: U256): Promise<void> {
    const [token0Id] = await tokenPair.getTokenPair();
    if (tokenInId === token0Id) {
      await tokenPair.swap(sender, to, String(amountIn), String(amountOut), tokenInId);
    } else {
      await tokenPair.swap(sender, to, String(amountIn), String(amountOut), tokenInId);
    }
  }
}
