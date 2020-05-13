import React from 'react'
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import PostDetail from "./pages/postDetail";
import Navbar from './components/Navbar';


function App() { 
  return (
    <Router>
      <div className="container">
        <div className="row">
          <Navbar />
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/post/:id" component={PostDetail} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App
