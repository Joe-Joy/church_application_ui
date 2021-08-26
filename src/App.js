import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import UserRegistration from "./components/UserRegistration";
import SeatAllocation from "./components/SeatAllocation";
function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Header exact path="/" />
          <Route exact path="/UserRegistration" component={UserRegistration} />
          <Route exact path="/SeatAllocation" component={SeatAllocation} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
