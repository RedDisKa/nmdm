import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import { ROUTES, ROUTE } from './constants/routes'
import { Page } from './Page';

interface Props {
  context?: {
    hostname: string
  }
}

function App({ context }: Props) {
  return (
    <div className="App">
      <Page context={context}>
        <Switch>
          {ROUTES.map((route, indx) => (
            <Route key={indx} {...route} />
          ))}
          <Redirect to={ROUTE.dashboard()} />
        </Switch>
        </Page>
    </div>
  );
}

export default App;
