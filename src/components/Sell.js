import React, {Component} from 'react';

class Sell extends Component {
    state = {
        'holdings':['stock1 user holds','stock2 user holds','stock3 user holds','stock4 user holds','stock5 user holds',]
    }

    render() {
        const holdingsList = this.state.holdings.map(
            (element, i) => {
                return (
                    <div key={i} className = 'apiElement'>
                        <b>{element}</b>
                        <br></br>
                        <input className = "input" id="volume_sell" placeholder="Stock Volume to Sell"/>
                        <button className="button">SELL</button>
                        <br></br>
                        <br></br>
                    </div>)
                }
            )
        return (
            <div className="Sell">
                {holdingsList}
            </div>
        );
    }
}

export default Sell;