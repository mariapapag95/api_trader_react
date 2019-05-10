import React, {Component} from 'react';
import StockChart from './Chart'

const url = `http://127.0.0.1:5000`

class Quote extends Component {

    state = {
        ticker: '',
        price: ''
    }

    priceHandler = event => {
        event.preventDefault();
        const endpoint = url+`/api/price/${this.state.ticker}`
        const promise = fetch (endpoint, {
          headers:{"Content-Type" : "application/json"}, 
          mode:"cors",
          method:"get"
        })
        promise.then (blob => blob.json()).then(json => {
            this.setState({'price':json.price})
        })
    }

    handleChange = (event) => {
        this.setState({
          [event.target.id]: event.target.value
        });
    }
   

    render () {
        return (
        <div>
            <div>
                <form>
                    <input 
                    className = "input" 
                    id = "ticker" 
                    onChange = {this.handleChange} 
                    placeholder="Stock symbol"
                    />
                    <br></br>
                    <button 
                    className = "button" 
                    onClick={this.priceHandler}
                    id="quote">
                    LOOK UP
                    </button>
                </form>
            </div>
            <div>
                <p>Stock Price: {this.state.price}</p>
                <div className="chart">
                <StockChart  ticker={this.state.ticker}/>
                </div>
            </div>
        </div>
        )
    }
}

export default Quote; 