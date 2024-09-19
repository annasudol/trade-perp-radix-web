import { RadixIconCircle } from "@/components/Icons/RadixIconCircle";
import { UsdcIconCircle } from "@/components/Icons/UsdcIconCircle";


export enum TokenE {
  XRD = "SOL",
  USDC = "USDC",
  USDT = "USDT",
  TEST = "Test",
}
export const TOKEN_LIST = [
  TokenE.XRD,
  TokenE.USDC,
  TokenE.USDT,
  TokenE.TEST,
];

export function asToken(tokenStr: string): TokenE {
  switch (tokenStr) {
    case "XRD":
      return TokenE.XRD;
    case "USDC":
      return TokenE.USDC;
    case "USDT":
      return TokenE.USDT;
    case "Test":
      return TokenE.TEST;
    default:
      throw new Error("Not a valid token string");
  }
}

export function getTokenLabel(token: TokenE) {
  switch (token) {
    case TokenE.XRD:
      return "Radix";
    case TokenE.USDC:
      return "UDC Coin";
    case TokenE.USDT:
      return "USDT";
    case TokenE.TEST:
      return "Test Token";
  }
}

export function getSymbol(token: TokenE) {
  switch (token) {
    case TokenE.XRD:
      return "XRDUSD";
    case TokenE.USDC:
      return "USDCUSD";
    case TokenE.USDT:
      return "USDTUSD";
    case TokenE.TEST:
      return "LTCUSD";
  }
}

export function getTokenIcon(token: TokenE) {
  switch (token) {
    case TokenE.XRD:
      return <RadixIconCircle />;
    case TokenE.USDC:
      return <UsdcIconCircle />;
      default :
      return <RadixIconCircle />;
  }
}

export function getTokenId(token: TokenE) {
  switch (token) {
    case TokenE.XRD:
      return "radix";
    case TokenE.USDC:
      return "usd-coin";
    case TokenE.USDT:
      return "tether";
  }
}
