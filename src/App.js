import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from './Components/Navigation/Navigation';
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import NoteState from "./Context/notes/NoteState";
import Alert from "./Components/Alert";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";

const App = () => {
  return (
    <>
      <NoteState>
        <Router>
          <Navigation />
          <Alert message="This Application is under maintainance" />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/login">
                <Login/>
              </Route>
              <Route exact path="/signup">
                <Signup/>
              </Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  )
}
export default App;