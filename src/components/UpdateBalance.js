import React, {Component} from 'react';

const url = `http://127.0.0.1:5000`
const api_key = window.sessionStorage.getItem('api_key')

class UpdateBalance extends Component {

    state = {
        userBalance: '',
        amount: ''
    }

    componentDidMount() {
        const endpoint = url+`/api/${api_key}/balance`
        const promise = fetch (endpoint, {
            headers:{"Content-Type" : "application/json"}, 
            mode:"cors",
            method:"get"
        })
        promise.then (blob => blob.json()).then(json => {
            this.setState({'userBalance':json.balance})
        })
    }

    componentDidUpdate() {
        const endpoint = url+`/api/${api_key}/balance`
        const promise = fetch (endpoint, {
            headers:{"Content-Type" : "application/json"}, 
            mode:"cors",
            method:"get"
        })
        promise.then (blob => blob.json()).then(json => {
            this.setState({'userBalance':json.balance})
        })
    }

    deposit = event => {
        event.preventDefault();
        const endpoint = url+`/api/${api_key}/deposit`
        let creds = {"amount": Number(this.state.amount)}
        const promise = fetch (endpoint, {
          headers:{"Content-Type" : "application/json"}, 
          body:JSON.stringify(creds),
          mode:"cors",
          method:"put"
        })
        promise.then (blob => blob.json())
        }

    withdraw = event => {
        event.preventDefault();
        const endpoint = url+`/api/${api_key}/deposit`
        let creds = {"amount": (Number(this.state.amount) * Number(-1))}
        const promise = fetch (endpoint, {
          headers:{"Content-Type" : "application/json"}, 
          body:JSON.stringify(creds),
          mode:"cors",
          method:"put"
        })
        promise.then (blob => blob.json())
        }
    

    handleChange = (event) => {
        this.setState({
          [event.target.id]: event.target.value
        });
    }
   

    render () {
        return (
        <div>Your Balance: ${this.state.userBalance}
        <br></br><br></br>
            <form className="form">
                <input 
                  autoFocus
                  id = "amount"
                  className = "input" 
                  placeholder = "Dollar Amount" 
                  value = {this.state.amount}
                  onChange={this.handleChange}
                >
                </input>
                <br></br>
                <button 
                    className = "button"
                    onClick={this.deposit}
                    id="deposit">
                    DEPOSIT
                </button>
                <button 
                    className = "button"
                    onClick={this.withdraw}
                    id="withdraw">
                    WITHDRAW
                </button>
            </form>
        </div>
        )
    }
}

export default UpdateBalance; 