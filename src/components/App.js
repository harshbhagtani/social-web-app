import React from 'react';
import { connect } from 'react-redux';
import { fetchpost } from '../actions/post';
import Home from './Home';
import Navbar from './Navbar';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import jwt_decode from 'jwt-decode';
import { authorizeuser } from '../actions/auth';
import Settings from './Settings';
import Userprofile from './Userprofile';
import { fetchuserfriends } from '../actions/friends';

const PrivateRoute = (privaterouteprops) => {
  const { isloggedin, path, component: Component } = privaterouteprops;

  return (
    <Route
      exact
      path={path}
      render={(props) => {
        if (isloggedin) return <Component {...props} />;
        else
          return (
            <Redirect
              to={{
                pathname: '/Login',
                state: {
                  from: props.location,
                },
              }}
            ></Redirect>
          );
      }}
    />
  );
};

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchpost());
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');

      const user = jwt_decode(token);
      console.log(user);

      this.props.dispatch(authorizeuser(user));
    }

    this.props.dispatch(fetchuserfriends());
  }

  render() {
    const { posts, auth } = this.props;
    console.log('PROPS', this.props);
    return (
      <Router>
        <Navbar />
        <div>
          <PrivateRoute
            exact
            path="/"
            component={Home}
            isloggedin={this.props.auth.isLoggedin}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path="/settings"
            component={Settings}
            isloggedin={this.props.auth.isLoggedin}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path="/user/:userid"
            component={Userprofile}
            isloggedin={this.props.auth.isLoggedin}
          ></PrivateRoute>
          {/*both ways correct */}
          {/* <Route exact path="/" component={Home}></Route>*/}
          <Route exact path="/Login" component={Login}></Route>
          <Route exact path="/Signup" component={Signup}></Route>
        </div>
      </Router>
    );
  }
}

function mapstatetoprops(state) {
  return {
    posts: state.posts,
    auth: state.auth,
  };
}

export default connect(mapstatetoprops)(App);
