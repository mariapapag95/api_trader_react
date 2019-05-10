import React, {Component} from 'react';
import TradeOutput from './TradeOutput';

const url = `http://127.0.0.1:5000`

class Trades extends Component {

    state = {
        trades: []
    }

    componentDidMount() {
        const api_key = window.sessionStorage.getItem('api_key')
        const endpoint = url+`/api/${api_key}/trades`
        const promise = fetch (endpoint, {
          headers:{"Content-Type" : "application/json"}, 
          mode:"cors",
          method:"get"
        })
        promise.then(blob => blob.json()).then(json => {
            this.setState(
                {trades: json.trades})
        })
    }

    render () {
        let stock = this.state.trades.map((element, i) => {
            return <TradeOutput trade={element.ticker} key={i} />
        })
        let volume = this.state.trades.map((element, i) => {
            return <TradeOutput trade={element.volume} key={i} />
        })
        let price = this.state.trades.map((element, i) => {
            return <TradeOutput trade={element.price} key={i} />
        })
        let time = this.state.trades.map((element, i) => {
            return <TradeOutput trade={element.created_at} key={i} />
        })
        return(
            <div>
            <table className="table">
                <tr>
                    <th>STOCK NAME</th>
                    <th>STOCK VOLUME</th>
                    <th>STOCK PRICE</th>
                    <th>TIME</th>
                </tr>
                <tr>
                    <td>{stock}</td>
                    <td>{volume}</td>
                    <td>{price}</td>
                    <td>{time}</td>
                </tr>
            </table>
            </div>
        )
      }
    }

export default Trades;