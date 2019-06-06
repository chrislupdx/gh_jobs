import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PdxGenJobListContainer from '../containers/jobs/PdxGenJobListContainer';
import JobsByIdContainer from '../containers/jobs/JobsByIdContainer';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={PdxGenJobListContainer} />
        <Route path="/:id" component={JobsByIdContainer} />
      </Switch>
    </Router>
  );
}
