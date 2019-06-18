import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUserActions'
import DestinationsContainer from './containers/DestinationsContainer';
import MyDestinationsContainer from './containers/MyDestinationsContainer'
import NavigationBar from './containers/NavBarContainer'
import { NoMatch } from './components/NoMatch'
import { Layout } from './components/Layout'
import { Jumbotron } from './components/Jumbotron';

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/api/v1/destinations" component={DestinationsContainer} />
              <Route path={`/api/v1/users/:currentUserId/destinations`} component={MyDestinationsContainer} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
};

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}


export default connect(mapStateToProps, { getCurrentUser })(App)
























