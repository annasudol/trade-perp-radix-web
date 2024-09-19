import ChartCandlestickIcon from "@carbon/icons-react/lib/ChartCandlestick";
import CircleDash from "@carbon/icons-react/lib/CircleDash";
import StoragePoolIcon from "@carbon/icons-react/lib/StoragePool";
import dynamic from "next/dynamic";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

import UserAdmin from "@carbon/icons-react/lib/UserAdmin";


export const Navbar = () => {
  return (
    <nav
      className={twMerge(
        "bg-zinc-900",
        "fixed",
        "flex",
        "h-14",
        "justify-between",
        "items-center",
        "left-0",
        "px-4",
        "right-0",
        "top-0",
        "z-20"
      )}
    >
      <Link className="hidden items-center space-x-2 md:flex" href="/">
        <CircleDash className="h-7 w-7 fill-white/80" />
        <div className="text-white">APP NAME</div>
      </Link>
    
      <div className="flex flex-row items-center">
        <p className="text-white">Connect to Testnet!</p>
        {/* <WalletMultiButtonDynamic className="bg-transparent" /> */}
      </div>
    </nav>
  );
};
