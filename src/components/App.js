import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import JobsByIdContainer from '../containers/jobs/JobsByIdContainer';
import KWContainer from '../containers/kwjobs/KWContainer';
import { StyledLink } from '../styles';

export default function App() {
  return (
    <Router>
      <StyledLink to="/">Home</StyledLink>
      <Switch>
        <Route path="/:id" component={JobsByIdContainer} />
        <Route exact path="/" component={KWContainer} />
      </Switch>
    </Router>
  );
}
