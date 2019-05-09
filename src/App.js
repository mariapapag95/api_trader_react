
import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './components/Login'
import Lookup from './components/Lookup'
import Quote from './components/Quote'
import Buy from './components/Buy'
import Sell from './components/Sell'
import Welcome from './components/Welcome'
import NavBar from './components/NavBar'
import './App.css';

//const url = `http://127.0.0.1:5000`

class App extends Component{

  clickUpdate = (event) => {
    //event.preventDefault()
    //const symbol = document.getElementById("ticker").value
  }

  /*
  login = (username,password) => {
    const endpoint = url+`/api/get_api_key`
    let creds = {"username":username, "password":password}
    const promise = fetch (endpoint, {
      headers:{"Content-Type" : "application/json"}, 
      body:JSON.stringify(creds),
      mode:"cors",
      method:"post"
    })
    promise.then (blob => blob.json()).then(json => {
      window.sessionStorage.setItem('api_key',json.api_key)
      window.sessionStorage.setItem('username',json.username)
    })
  }*/

  render () {
    return (
      <BrowserRouter>
      <div>
        <div>
          <NavBar/>
        </div>
          <div className="body">
            <Route exact path = '/' component = {Welcome}/>
            <Route path = '/login' render = {() => <Login func={this.login}/>}/>
            <Route path = '/lookup' component = {Lookup}/>
            <Route path = '/quote' component = {Quote}/>
            <Route path = '/buy' component = {Buy}/>
            <Route path = '/sell' component = {Sell}/>
          </div>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;