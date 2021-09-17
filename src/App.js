import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import UserLogin from "./components/UserLogin/UserLogin";
import UserRegistration from "./components/UserRegistration/UserRegistration";
import SeatAllocation from "./components/SeatAllocation/SeatAllocation";
import Invoice from "./components/SeatAllocation/Invoice";
// import { Redirect } from 'react-router';
function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Header exact path="/" />
          <Route exact path="/UserLogin" component={UserLogin} />
          <Route exact path="/UserRegistration" component={UserRegistration} />
          <Route exact path="/SeatAllocation" component={SeatAllocation} />
          <Route exact path="/Invoice" component={Invoice} />
          {/* <Redirect from="*" to={"/SeatAllocation"} /> */}
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
