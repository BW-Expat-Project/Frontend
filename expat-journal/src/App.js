import React from 'react';
import {Route, Link, Switch} from "react-router-dom"
import './App.css';
import HomePage from './components/HomePage';
import PrivateRoute from './components/utils/PrivateRoute';

function App() {
  return (
    <div className="App">
      <nav>
        <h1>Expat Journal</h1>
        {sessionStorage.getItem("token") ? (
          <>
            <Link to="user/" >Home</Link>
            <Link to="user/dashboard/:user" >Profile</Link>
            <Link to="/" >Logout</Link>
          </>

        ) : (
          <>
            <Link to="/" >Home</Link>
            <Link to="/signUp" >Sign Up</Link>
            <Link to="/login" >Login</Link>
          </>
        )}
      </nav>
      <div>
        
      <Switch>

      {/* <PrivateRoute path="user/dashboard/:user" component={Dashboard} /> */}
      <PrivateRoute path="user/" component={HomePage} />

      {/* <Route>
      <Login />
      </Route>

      <Route>
      <SignUp/>
      </Route> */}

      <Route path="/" >
      <HomePage />
      </Route>
      </Switch>
      </div>
    </div>
  );
}

export default App;
