import {
  Assets,
  BorrowRateParams,
  BorrowRateState,
  Custody,
  Fees,
  OracleParams,
  PositionStats,
  PricingParams,
  Stats,
  TradeStats,
  Permissions,
  PriceStat,
  PriceStats,
} from "./types";

export class CustodyAccount {
  public tokenAccount: any;
  public decimals: number;
  public isStable: boolean;
  public oracle: OracleParams;
  public pricing: PricingParams;
  public permissions: Permissions;
  public fees: Fees;
  public borrowRate: BorrowRateParams;

  // dynamic variable;
  public assets: Assets;
  public collectedFees: Stats;
  public volumeStats: Stats;
  public tradeStats: TradeStats;
  public longPositions: PositionStats;
  public shortPositions: PositionStats;
  public borrowRateState: BorrowRateState;

  // bumps for address validatio;
  public bump: number;
  public tokenAccountBump: number;

  public address: any;

  constructor(custody: Custody, address: any) {

    this.tokenAccount = custody.tokenAccount;
    this.decimals = custody.decimals;
    this.isStable = custody.isStable;
    this.oracle = custody.oracle;
    this.pricing = custody.pricing;
    this.permissions = custody.permissions;
    this.fees = custody.fees;
    this.borrowRate = custody.borrowRate;

    console.log("custody assets", custody.assets);
    this.assets = custody.assets;
    this.collectedFees = custody.collectedFees;
    this.volumeStats = custody.volumeStats;
    this.tradeStats = custody.tradeStats;
    this.longPositions = custody.longPositions;
    this.shortPositions = custody.shortPositions;
    this.borrowRateState = custody.borrowRateState;

    this.bump = custody.bump;
    this.tokenAccountBump = custody.tokenAccountBump;

    this.address = address;
  }


  getCustodyLiquidity(stats: PriceStats): number {
    return 100
  }

  getCurrentWeight(stats: PriceStat, liquidity: number): number {
    let weight =
      (100 *
        stats.currentPrice *
        (Number(this.assets.owned) / 10 ** this.decimals)) /
      liquidity;

    return weight ? weight : 0;
  }

  getAmount(): number {
    return Number(this.assets.owned) / 10 ** this.decimals;
  }

  getAddFee(): number {
    return Number(this.fees.addLiquidity) / 100;
  }
  getUtilizationRate(): number {
    return Number(this.assets.owned) != 0
      ? 100 * Number(this.assets.locked.div(this.assets.owned))
      : 0;
  }
}
