import React, {Component} from 'react';
import { Redirect } from 'react-router'

const url = `http://127.0.0.1:5000`

class Logout extends Component {

    constructor(props) {
        super(props);
            this.state = {
                username:'',
                password:'',
                redirect: false
            }
    }
   
    handleSubmit = async event => {
        event.preventDefault();
    }

    logout = (username,password) => {
        const endpoint = url+`/api/get_api_key`
        let creds = {"username":username, "password":password}
        const promise = fetch (endpoint, {
          headers:{"Content-Type" : "application/json"}, 
          body:JSON.stringify(creds),
          mode:"cors",
          method:"post"
        })
        promise.then (blob => blob.json()).then(json => {
          window.sessionStorage.setItem('api_key','')
          window.sessionStorage.setItem('username','')
        }).then(() => this.setState({ redirect: true }))
      }

    render () {
        const { redirect } = this.state;
     if (redirect) {
       return <Redirect to='/home'/>;
     }
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
              <button
                className = "button" 
                onClick={()=>{
                    this.logout(this.state.username, this.state.password)
                }}
                type="submit">
                LOGOUT
              </button>
            </form>
          </div>
        )
    }
}
export default Logout; 