import React, {Component} from 'react';
import Position from './Position'

const url = `http://127.0.0.1:5000`

class Holdings extends Component {

    state = {
        holdings: []
    }

    componentDidMount() {
        const api_key = window.sessionStorage.getItem('api_key')
        const endpoint = url+`/api/${api_key}/positions`
        const promise = fetch (endpoint, {
          headers:{"Content-Type" : "application/json"}, 
          mode:"cors",
          method:"get"
        })
        promise.then(blob => blob.json()).then(json => {
            this.setState(
                {holdings: json.positions})
        }) 
    }

    componentDidUpdate() {
        const api_key = window.sessionStorage.getItem('api_key')
        const endpoint = url+`/api/${api_key}/positions`
        const promise = fetch (endpoint, {
          headers:{"Content-Type" : "application/json"}, 
          mode:"cors",
          method:"get"
        })
        promise.then(blob => blob.json()).then(json => {
            this.setState(
                {holdings: json.positions})
        }) 
    }

    render () {
        let volume = this.state.holdings.map((element, i) => {
            return <Position hold={element.shares} key={i} />
        })
        let name = this.state.holdings.map((element, i) => {
            return <Position hold={element.ticker} key={i} />
        })
        return(
            <div>
            <table className="table">
                <tr>
                    <th>STOCK NAME</th>
                    <th>STOCK VOLUME</th> 
                </tr>
                <tr>
                    <td>{name}</td>
                    <td>{volume}</td>
                </tr>
            </table>
            </div>
        )
      }
    }

export default Holdings;