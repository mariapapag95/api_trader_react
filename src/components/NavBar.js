import React from 'react'
import {Link} from 'react-router-dom';

function NavBar(props) {
        return (
            <div className="navbar">
              <Link className="navlinks" to = '/'>API Trader</Link>
              <Link className="navlinks" to = '/lookup'>LOOKUP</Link>
              <Link className="navlinks" to = '/quote'>QUOTE</Link>
              <Link className="navlinks" to = '/buy'>BUY</Link>
              <Link className="navlinks" to = '/sell'>SELL</Link>
            </div>
        )
    }
export default NavBar