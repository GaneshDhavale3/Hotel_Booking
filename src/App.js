import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import About from './pages/About';
import Contact from './pages/Contact';
import Booknow from './pages/Booknow';
import { Booking } from './pages/Booking';
import { OTP } from './components/Otp';
import Delays from './components/Delays';
<<<<<<< HEAD
import Under from './pages/Under';
import Preloading from './components/Preloading';
=======
import Invoice from './pages/Invoice';
>>>>>>> 84a0ad36a7fd151ef7e9df447cac8452e5f90e43

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/rooms/" component={Rooms}/>
          <Route exact path="/booking/" component={Booking}/>
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route exact path="/booknow/:slug" component={Booknow} />
          <Route exact path="/otp" component={OTP} />
          <Route exact path="/delay" component={Delays} />
<<<<<<< HEAD
          <Route exact path="/under" component={Under} />
          <Route exact path="/preload" component={Preloading} />
=======
          <Route exact path="/invoice" component={Invoice} />
>>>>>>> 84a0ad36a7fd151ef7e9df447cac8452e5f90e43
          <Route component={Error}/>
          
        </Switch>
        
      </BrowserRouter>
    
    </div>
  );
}


export default App;
