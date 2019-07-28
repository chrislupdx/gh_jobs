import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import JobsByIdContainer from '../containers/jobs/JobsByIdContainer';
import KWContainer from '../containers/kwjobs/KWContainer';

export default function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Switch>
        <Route path="/:id" component={JobsByIdContainer} />
        <Route exact path="/" component={KWContainer} />
      </Switch>
    </Router>
  );
}
