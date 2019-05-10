import React, {Component} from 'react';

const url = `http://127.0.0.1:5000`

class Login extends Component {

    constructor(props) {
        super(props);
            this.state = {
                username:'',
                password:''
            }
    }

    notEmpty() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }
 
    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
    }
   
    handleSubmit = async event => {
        event.preventDefault();
    }

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
      }

    render () {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <input
                  autoFocus
                  id = "username"
                  className = "input" 
                  placeholder = "Username" 
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              <input
                  id = "password"
                  className = "input" 
                  placeholder = "Password" 
                  type = "password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <br>
                </br>
              <button
                className = "button" 
                disabled={!this.notEmpty()}
                onClick={()=>{
                    this.login(this.state.username, this.state.password)
                }}
                type="submit">
                Enter
              </button>
            </form>
          </div>
        )
    }
}

export default Login; 