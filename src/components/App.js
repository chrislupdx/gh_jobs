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
        <Route path="/:id" component={JobsByIdContainer} />
        <Route exact path="/" component={PdxGenJobListContainer} />
      </Switch>
    </Router>
  );
}
