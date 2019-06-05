import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PdxGenJobListContainer from '../containers/jobs/PdxGenJobListContainer';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={PdxGenJobListContainer} />
      </Switch>
    </Router>
  );
}
