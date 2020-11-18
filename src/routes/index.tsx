import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import ResultsCar from '../pages/ResultsCar';
import CardOpened from '../pages/CardDetailsCar';
import Profile from '../pages/Profile';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/signin" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/" exact component={Home} />
    <Route path="/list" exact component={ResultsCar} />
    <Route path="/card-opened" exact component={CardOpened} />
    <Route path="/profile" exact component={Profile} />
  </Switch>
);

export default Routes;
