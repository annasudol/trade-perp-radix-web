import { TokenE } from "@/lib/Token";
import { useGlobalStore } from "@/stores/store";


interface Props {
  token: TokenE;
  onClick: () => void;
}

export function UserBalance(props: Props) {
  //TODO: update
  const publicKey: any = undefined;
  const userData = useGlobalStore((state) => state.userData);

  let balance = userData.tokenBalances[props.token];
  if (!publicKey) {
    return (
      <div className="flex flex-row space-x-1 font-medium text-white hover:cursor-pointer">
        <p>Connect Wallet</p>
      </div>
    );
  }
  if (balance) {
    return (
      <div
        className="flex flex-row space-x-1 font-medium text-white hover:cursor-pointer"
        onClick={props.onClick}
      >
        <p>{balance.toFixed(4)}</p>
        <p className="font-normal">{props.token}</p>
        <p className="text-zinc-400"> Balance</p>
      </div>
    );
  } else {
    return (
      <div className="flex flex-row space-x-1 font-medium text-white hover:cursor-pointer">
        <p>0</p>
        <p className="font-normal">{props.token}</p>
        <p className="text-zinc-400"> Balance</p>
      </div>
    );
  }
}
