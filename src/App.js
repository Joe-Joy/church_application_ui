import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import UserRegistration from "./components/UserRegistration";
function App() {
  return (
    <Router>
      <Container>
        <Switch>
          {/* <Header /> */}
          {/* <Route exact path="/UserRegistration" component={UserRegistration} /> */}
          {/* <Router exact path="/seatAllocation" component={SeatAllocation} /> */}
        </Switch>
      </Container>
      <UserRegistration/>
    </Router>
  );
}

export default App;
