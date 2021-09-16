import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import UserLogin from "./components/UserLogin";
import SeatAllocation from "./components/SeatAllocation";
import Invoice from "./components/Invoice";
function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Header exact path="/" />
          <Route exact path="/UserLogin" component={UserLogin} />
          <Route exact path="/SeatAllocation" component={SeatAllocation} />
          <Route exact path="/Invoice" component={Invoice} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
