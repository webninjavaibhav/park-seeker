import { IParkState } from './Parks/parkReducer';
import { IThingsState } from './Things/thingReducer';
import { IEventsState } from './Events/eventReducer';

/**
 * RootReducer Interface
 */
export interface IRootReducerState {
  parks: IParkState;
  things: IThingsState;
  events: IEventsState;
}
