import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
// file imports
import Header from "./Header";
import Home from "./Home";
import Events from "./Events";
import Contacts from "./Contacts";
import EventDetails from "./EventDetails";
import LeaderBoard from "./LeaderBoard";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/events">
          <Events />
        </Route>
        <Route path="/events/:name">
          <EventDetails />
        </Route>
        <Route exact path="/contacts">
          <Contacts />
        </Route>
        <Route exact path="/leaderboard">
          <LeaderBoard />
        </Route>
      </BrowserRouter>
    </div>
  );
};
export default App;
