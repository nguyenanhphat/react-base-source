import React, { useEffect } from 'react';
import { reducer, saga } from 'states/home/index';
import { compose } from 'redux';
import { injectReducer, injectSaga } from 'core';
import { useDispatch } from 'react-redux';
import { exampleAction } from 'states/home/actions';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(exampleAction());
  }, [dispatch]);

  return (
    <div>
      Home component
    </div>
  );
}

const withReducer = injectReducer("home", reducer);
const withSaga = injectSaga("home", saga);
export default compose(
  withReducer,
  withSaga
)(Home);
