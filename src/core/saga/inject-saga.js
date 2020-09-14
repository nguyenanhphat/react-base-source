import React, { useContext, useEffect } from "react";
import { ReactReduxContext } from "react-redux";
import getInjectors from "./saga-injectors";
import { DAEMON } from "./constants";

export default (key, saga, mode = DAEMON) => WrappedComponent => {
  const EnhanceComponent = props => {
    const { store } = useContext(ReactReduxContext);
    const injectors = getInjectors(store);
    const { injectSaga, ejectSaga } = injectors;

    useEffect(() => {
      return () => {
        ejectSaga(key);
      };
    }, [ejectSaga]);

    injectSaga(key, { saga, mode });

    return (
      <WrappedComponent {...props} />
    );
  };
  return EnhanceComponent;
};