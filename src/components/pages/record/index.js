import React, { useEffect } from 'react';
import { compose } from 'redux';
import { useDispatch } from 'react-redux';
import { injectReducer, injectSaga } from 'core';
import { recordReducer, recordSaga } from 'states/record/index';
import { recordAction } from 'states/record/actions';

function Record() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(recordAction());
  }, [dispatch]);

  return (
    <div>
      Record component
    </div>
  );
}

const withReducer = injectReducer("record", recordReducer);
const withSaga = injectSaga("record", recordSaga);
export default compose(
  withReducer, 
  withSaga
)(Record);
