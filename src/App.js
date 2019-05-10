
import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import NavBar from './components/NavBar'
import Routes from './components/Routes'
import './App.css';


class App extends Component{
  constructor(props) {
    super(props);

    this.state ={
      isAuthenticated: false
    };
  }

  userHasAuthenticated = authenticated => {
    this.setState({isAuthenticated: authenticated});
  }

  render () {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    return (
      <BrowserRouter>
      <div>
        <div>
          <NavBar/>
        </div>
          <div className="body">
            <Routes childProps={childProps} />
          </div>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;