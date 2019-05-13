import React from 'react'
import {Route, Switch} from 'react-router-dom';
import Login from './Login'
import Quote from './Quote'
import Buy from './Buy'
import Sell from './Sell'
import Holdings from './Holdings'
import Trades from './Trades'
import UpdateBalance from './UpdateBalance'
import Welcome from './Welcome'
import Logout from './Logout'
import Home from './Home'


function Routes (props) {
    return (
        <div>
            <Switch>
                <Route exact path = '/' component = {Welcome}/>
                <Route path = '/login' component = {Login}/>
                <Route path = '/quote' component = {Quote}/>
                <Route path = '/buy' component = {Buy}/>
                <Route path = '/sell' component = {Sell}/>
                <Route path = '/holdings' component = {Holdings}/>
                <Route path = '/trades' component = {Trades}/>
                <Route path = '/updatebalance' component = {UpdateBalance}/>
                <Route path = '/logout' component = {Logout}/>
                <Route path = '/home' component = {Home}/>
            </Switch>
        </div>
    )
}

export default Routes;