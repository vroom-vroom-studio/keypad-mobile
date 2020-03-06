export const T = {
  addCounter: "ADD_COUNTER",
  subCounter: "SUB_COUNTER",
  toggleBool: "TOGGLE_BOOL"
};

export default {
  [T.addCounter]: (state, action) => ({
    ...state,
    counter: state.counter + action.payload
  }),
  [T.subCounter]: (state, action) => ({
    ...state,
    counter: state.counter - action.payload
  }),
  [T.toggleBool]: state => ({
    ...state,
    bool: !state.bool
  })
};
