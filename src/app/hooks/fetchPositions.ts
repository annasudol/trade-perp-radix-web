import { CustodyAccount } from "@/lib/CustodyAccount";
import { PositionAccount } from "@/lib/PositionAccount";
import { Position } from "@/lib/types";

interface Pending {
  status: "pending";
}

interface Failure {
  status: "failure";
  error: Error;
}

interface Success {
  status: "success";
  data: Record<string, PositionAccount>;
}

interface FetchPosition {
  account: Position;
  publicKey: any;
}

export type PositionRequest = Pending | Failure | Success;

export async function getPositionData(
  custodyInfos: Record<string, CustodyAccount>
): Promise<PositionRequest> {
  // let { perpetual_program } = await getPerpetualProgramAndProvider();

  // // @ts-ignore
  // let fetchedPositions: FetchPosition[] =
  //   await perpetual_program.account.position.all();

  // let positionInfos: Record<string, PositionAccount> = fetchedPositions.reduce(
  //   (acc: Record<string, PositionAccount>, position: FetchPosition) => (
  //     (acc[position.publicKey.toString()] = new PositionAccount(
  //       position.account,
  //       position.publicKey,
  //       custodyInfos
  //     )),
  //     acc
  //   ),
  //   {}
  // );

  return {
    status: "success",
    data: {},
  };
}
