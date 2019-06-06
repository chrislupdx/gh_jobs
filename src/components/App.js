import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import PdxGenJobListContainer from '../containers/jobs/PdxGenJobListContainer';
import JobsByIdContainer from '../containers/jobs/JobsByIdContainer';

export default function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Switch>
        <Route path="/:id" component={JobsByIdContainer} />
        <Route exact path="/" component={PdxGenJobListContainer} />
      </Switch>
    </Router>
  );
}
