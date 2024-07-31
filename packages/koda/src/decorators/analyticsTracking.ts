import { gTagEvent, EventParams } from "src/configs/analytics";
import {
  createInjectDecorator,
  MakeData,
} from "src/decorators/createInjectDecorator";

export function gTagTracking<IProps, IStates>(
  getData: MakeData<IProps, IStates, EventParams>,
): any {
  const func = async (props: IProps, state: IStates, args: any[]) => {
    const data = await getData(props, state, args);
    gTagEvent(data);
  };
  return createInjectDecorator(func);
}
