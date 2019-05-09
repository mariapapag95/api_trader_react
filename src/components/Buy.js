import React from 'react';

function Buy(props) {
    return (
        <div>
            <div>
                <form>
                    <input className = "input" id="ticker_symbol" placeholder="Stock symbol"/>
                    <input className = "input" id="volume" placeholder="Stock Volume"/>
                    <br></br>
                    <button className = "button" onClick = {props.clicked} id="quote">BUY STOCK</button>
                </form>
            </div>
            <div>
                <p>This is where the success message goes once the sale goes through (button is clicked)</p>
            </div>
        </div>
        )
    }    

export default Buy; 