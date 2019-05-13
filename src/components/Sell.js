import React, {Component} from 'react';
import Holdings from './Holdings'

const url = `http://127.0.0.1:5000`
const api_key = window.sessionStorage.getItem('api_key')

class Sell extends Component {

    state = {
        ticker: '',
        amount: '',
        price: '',
        sellPrice: '',
        userBalance: ''
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

    findPrice = event => {
        event.preventDefault();
        const endpoint = url+`/api/price/${this.state.ticker}`
        const promise = fetch (endpoint, {
          headers:{"Content-Type" : "application/json"}, 
          mode:"cors",
          method:"get"
        })
        promise.then (blob => blob.json()).then(json => {
            this.setState({'price':json.price})
            this.setState({'sellPrice':(Number(this.state.amount) * Number(this.state.price))})  
        })
    }

    sellStock = event => {
        event.preventDefault();
        const endpoint = url+`/api/${api_key}/sell`
        let creds = {"ticker": this.state.ticker, "amount":Number(this.state.amount)}
        const promise = fetch (endpoint, {
            headers:{"Content-Type" : "application/json"}, 
            body:JSON.stringify(creds),
            mode:"cors",
            method:"post"
        })
        promise.then (blob => blob.json()).then(json => {
            console.log(json)
            console.log(this.state.amount)
            console.log(this.state.ticker)
        })
    }


    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        })
    }
   

    render() {
        return (
            <div>
            <div>
                Your Balance: ${this.state.userBalance}
                <br></br><br></br>
            <form>
                <input 
                className = "input" 
                id = "ticker" 
                onChange = {this.handleChange} 
                placeholder="Stock symbol"
                />
                <input 
                className = "input" 
                id = "amount" 
                onChange = {this.handleChange} 
                placeholder="Volume"
                />
                <br></br>
                <button 
                className = "button" 
                onClick={this.findPrice}
                id="price">
                CHECK PRICE
                </button>
                <button 
                className = "button" 
                onClick={this.sellStock}
                id="sell">
                SELL
                </button>
            </form>
            <div>
                <p>
                    Sell price: {this.state.sellPrice}
                </p>
            </div>
        </div>
        <Holdings/>
        </div>
        );
    }
}

export default Sell;