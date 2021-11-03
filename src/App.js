import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./common/Header";
import CardList from "./home/CardList";
import User from "./user/User";
import NotFound from "./common/NotFound";

function App() {
  /*
    TODO: There is no need to add a <Router >, it is in index.js.
    The <CardList /> component should be shown when the user is on the index path.
    The <User /> component should be shown when the user is on the following path:
    /users/:userId
    Display <NotFound /> when appropriate
  */
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={CardList} />

        <Route path="/users/:userId" component={User} />

        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
}

export default App;