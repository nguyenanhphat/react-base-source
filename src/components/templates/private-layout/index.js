import React from 'react';
import { Switch, Route } from 'react-router-dom';
import renderRoutes from 'routers/render';

const PrivateLayout = () => {
  return (
    <div>
      Private layout
      <Switch>
        {renderRoutes(true)}
        <Route path="*">
          <div>Page not found</div>
        </Route>
      </Switch>
    </div>
  )
};

export default PrivateLayout;
