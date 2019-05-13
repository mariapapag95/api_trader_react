import React from 'react';
import Login from './Login'

function Welcome(props) {
    const username = window.sessionStorage.getItem('username')
    if (username !== '') {
        return (
            <div>
            <div className="welcome">
            Welcome 
            <br></br>
            </div>
            <div className="highlight">
            <br></br>{username}
            </div>
            </div>
            )
        } 
    else {
        return (
            <Login/>
        )
    }   
    }
    

export default Welcome; 