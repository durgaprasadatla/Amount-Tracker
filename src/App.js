import './App.css';
import { Component } from 'react';
import Home from './Home';
import { BrowserRouter,Route } from 'react-router-dom';
import About from './About';
import Tracker from './Tracker';
import NavBar from './NavBar';
import Contact from './Contact';

 class App extends Component {
  render(){
    return (
      <div className="App">
          <BrowserRouter>
          <NavBar />
          <Route path='/home' component={Home} />
          <Route path='/about' component={About}/>
          <Route path='/tracker' component={Tracker}/>
          <Route path='/contact' component={Contact}></Route>
          </BrowserRouter>
      </div>
    );
  }
 
}

export default App;
