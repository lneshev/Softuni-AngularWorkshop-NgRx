import { IAppState } from "../../store";
import { IState, reducer } from "./reducer";

export interface IAppUserState extends IAppState {
    user: { list: IState }
}

export const reducers = {
    list: reducer
}