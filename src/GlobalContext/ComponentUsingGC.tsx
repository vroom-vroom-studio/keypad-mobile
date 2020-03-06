import React, { useMemo } from "react";
import { Store } from "./Store";
import { T } from "./Reducers";

export default () => {
  const { state, dispatch } = React.useContext(Store);

  return useMemo(() => {
    const toggle = () => dispatch({ type: T.toggleBool });
    console.log("Render B");
    return (
      <>
        <div>{state.bool.toString()}</div>
        <button onClick={toggle}>toggle</button>
      </>
    );
  }, [dispatch, state.bool]);
};
