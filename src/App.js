import React, { Component } from 'react';
import './App.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import LoginComponent from './components/login.js';
import FeedComponent from './components/feed.js';
import HomeComponent from './components/home.js';
import CaneraComponent from './components/camera.js';
import GeolocationComponent from './components/geolocation.js';
import ProfileComponent from './components/profile.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav>
              <div className="nav-wrapper">
                <Link className="brand-logo left" to="/">Logo</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/">Home</Link></li>
                </ul>
              </div>
            </nav>


            <div className="row">
              <div className="container">
                <Route exact path="/" component={HomeComponent} />
                <Route path="/feed" component={FeedComponent} />
                <Route path="/login" component={LoginComponent} />
                <Route path="/camera" component={CaneraComponent} />
                <Route path="/map" component={GeolocationComponent} />
                <Route path="/profile" component={ProfileComponent} />
              </div>

              <div className="col s12" style={{ position: 'fixed', bottom: '0px', width: '100%', height: '60px', }}>
                <ul className="tabs">
                  <li className="tab col s3"><Link to="/feed">Feed</Link></li>
                  <li className="tab col s3"><Link to="/camera">Camera</Link></li>
                  <li className="tab col s3 disabled"><Link to="/map">Map</Link></li>
                  <li className="tab col s3"><Link to="/profile">Profile</Link></li>
                </ul>
              </div>

            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
