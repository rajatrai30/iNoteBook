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

const App = () => {
  return (
    <>
      <NoteState>
        <Router>
          <Navigation />
          <Alert message="hello boys"/>
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  )
}
export default App;