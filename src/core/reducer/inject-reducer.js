import React, { useContext } from "react";
import { object } from "prop-types";
import { ReactReduxContext } from 'react-redux';


const withReducer = (key, reducer) => WrappedComponent => {
  const EnhanceComponent = props => {
    const { store } = useContext(ReactReduxContext);
    store.injectReducer(key, reducer);
    return (
      <WrappedComponent {...props} />
    );
  };

  EnhanceComponent.contextTypes = {
    store: object
  };
  return EnhanceComponent;
};

export default withReducer;
