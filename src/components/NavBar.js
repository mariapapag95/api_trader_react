import React from 'react'
import {Link} from 'react-router-dom';

function NavBar(props) {
        return (
            <div className="navbar">
              <Link className="navlinks" to = '/'>API TRADER</Link>
              <Link className="navlinks" to = '/quote'>LOOK UP</Link>
              <Link className="navlinks" to = '/buy'>BUY</Link>
              <Link className="navlinks" to = '/sell'>SELL</Link>
              <Link className="navlinks" to = '/holdings'>HOLDINGS</Link>
              <Link className="navlinks" to = '/trades'>TRADES</Link>
              <Link className="navlinks" to = '/updatebalance'>UPDATE BALANCE</Link>
              <Link className="navlinks" to = '/logout'>LOGOUT</Link>
            </div>
        )
    }
export default NavBar;