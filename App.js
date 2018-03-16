import React, { Component } from 'react';
import Login from './pages/login';
import Home from './pages/home';
import User from './pages/registeredUser';
import { BrowserRouter, Route } from 'react-router-dom';
import SignUp from './pages/signup';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ViewProfile from './pages/viewProfile';
import UpdateProfile from './pages/updateProfile';


// import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <div>

            <Route
              exact
              path="/"

              component={Home}
            />
            <Route

              path="/signup"

              component={SignUp}
            />

            <Route

              path="/login"

              component={Login}
            />

            <Route

              path="/home"

              component={Home}
            />
            <Route
              path="/registeredUser"

              component={User}
            />
             <Route
              path="/viewProfile"

              component={ViewProfile}
            />

             <Route
              path="/updateProfile"

              component={UpdateProfile}
            /> 

          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}
export default App;