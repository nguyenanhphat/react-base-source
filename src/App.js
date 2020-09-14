import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PrivateRoute } from 'components/atoms';
import { PrivateLayout } from 'components/templates';
import renderRoutes from 'routers/render';

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {renderRoutes()}
          <PrivateRoute>
            <PrivateLayout />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Router>
  );
}
export default App;
