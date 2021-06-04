import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ChatRoom from './components/ChatRoom/ChatRoom';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/:roomId" component={ChatRoom} />
            
    </Switch>
</Router>
  );
}

export default App;
