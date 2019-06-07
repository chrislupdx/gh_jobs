import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import PdxGenJobListContainer from '../containers/jobs/PdxGenJobListContainer';
import JobsByIdContainer from '../containers/jobs/JobsByIdContainer';
import KWContainer from '../containers/kwjobs/KWContainer';

export default function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/search">Search By Keyword</Link>
      <Switch>
        <Route exact path="/search" component={KWContainer} />
        <Route path="/:id" component={JobsByIdContainer} />
        <Route exact path="/" component={PdxGenJobListContainer} />
      </Switch>
    </Router>
  );
}
