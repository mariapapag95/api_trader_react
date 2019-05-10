import React from 'react'
import {Route} from 'react-router-dom';
import Login from './Login'
import Quote from './Quote'
import Buy from './Buy'
import Sell from './Sell'
import Holdings from './Holdings'
import Trades from './Trades'
import UpdateBalance from './UpdateBalance'
import Welcome from './Welcome'


function Routes (props) {
    return (
        <div>
        <Route exact path = '/' component = {Welcome}/>
        <Route path = '/login' component = {Login}/>
        <Route path = '/quote' component = {Quote}/>
        <Route path = '/buy' component = {Buy}/>
        <Route path = '/sell' component = {Sell}/>
        <Route path = '/holdings' component = {Holdings}/>
        <Route path = '/trades' component = {Trades}/>
        <Route path = '/updatebalance' component = {UpdateBalance}/>
        </div>
    )
}

export default Routes;