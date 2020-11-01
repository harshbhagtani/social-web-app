import React from 'react';
import { connect } from 'react-redux';
import { fetchpost } from '../actions/post';
import Home from './Home';
import Navbar from './Navbar';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './Login';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchpost());
  }

  render() {
    console.log(this.props);
    const { posts, auth } = this.props;
    console.log('PROPS', this.props);
    return (
      <Router>
        <Navbar />
        <div>
          <Route
            exact
            path="/"
            render={(props) => {
              return <Home {...props} />;
            }}
          ></Route>
          {/*both ways correct */}
          {/* <Route exact path="/" component={Home}></Route>*/}
          <Route exact path="/Login" component={Login}></Route>
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
