import React, { createContext, useReducer, useContext, FunctionComponent } from 'react'

interface IReducers {
  [actiontype: string]: (state: any, action: any) => any;
}

interface IAction {
  type: string;
  [key: string]: any;
}

type AsyncAction = (dispatch: React.Dispatch<IAction>, state: unknown) => Promise<any> | void;

type Action = IAction | AsyncAction;

type AsyncDispatcher = (action: Action) => Promise<any> | void;

interface IGlobalStateProviderProps {
  initialGlobalState: unknown;
  reducers: IReducers;
}

const globalStateContext = createContext(undefined as unknown);
const dispatchStateContext = createContext(undefined as unknown);

const GlobalStateProvider: FunctionComponent<IGlobalStateProviderProps> = ({ children, initialGlobalState: defaultGlobalState, reducers }) => {
  const reducer = (state: unknown, action: IAction) => reducers[action.type](state, action)
  const [state, dispatch] = useReducer(
    reducer,
    defaultGlobalState
  );
  const asyncDispatcher: AsyncDispatcher = (action: Action) => {
    if (typeof action === 'function') {
      return action(dispatch, state)
    } else {
      return dispatch(action)
    }
  }
  return (
    <globalStateContext.Provider value={state}>
      <dispatchStateContext.Provider value={asyncDispatcher}>
        {children}
      </dispatchStateContext.Provider>
    </globalStateContext.Provider>
  );
};

export const useGlobalState = () => [
  useContext(globalStateContext),
  useContext(dispatchStateContext)
];

export default GlobalStateProvider