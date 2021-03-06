import { Action } from '@ngrx/store';
import { LayoutActions } from '../actions';

export interface State {
  showSidenav: boolean;
}

const initialState: State = {
  showSidenav: false,
};

export function reducer(state: State = initialState, action: Action): State {
  const specificAction = action as LayoutActions.LayoutActionsUnion;

  switch (specificAction.type) {
    case LayoutActions.closeSidenav.type:
      return {
        showSidenav: false,
      };

    case LayoutActions.openSidenav.type:
      return {
        showSidenav: true,
      };

    default:
      return state;
  }
}

export const getShowSidenav = (state: State) => state.showSidenav;
