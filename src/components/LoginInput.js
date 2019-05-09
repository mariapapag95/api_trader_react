import React from 'react'

function LoginInput (props) {
    return (
        <div className="LoginInput">
            <h2>LOGIN</h2>
            <form onSubmit={props.handleSubmit}>
                <input 
                className = "input" 
                id = "username" 
                placeholder = "Username" 
                value={props.state.username}
                onChange={props.handleChange}
                />
                <input 
                className = "input" 
                id = "password" 
                type = "password" 
                placeholder = "Password"
                value={props.state.password}
                onChange={props.handleChange}
                />
                <br>
                </br>
                <button 
                onClick ={props.clicked} 
                className = "button" 
                type = "submit"
                disabled={!props.validateForm()}>
                Enter
                </button>
            </form>
            <p>The button submits the user input and if it's confirmed in the database, redirects user to welcome page</p>
        </div>
    )
}

export default LoginInput;