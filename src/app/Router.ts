import { TokenPair } from './types';

export class Router {
  static ErrorCodes = {
    InsufficientOutputAmount: 9,
    InsufficientInputAmount: 10,
    Expired: 12,
    InsufficientToken0Amount: 13,
    InsufficientToken1Amount: 14,
  };

  async addLiquidity(
  ): Promise<void> {
    // Implementation here
  }

  async removeLiquidity(): Promise<void> {
    // Implementation here
  }         
}
export type { TokenPair };

