import React from 'react';

function Quote(props) {
    return (
        <div>
            <div>
                <form>
                    <input className = "input" id="ticker_symbol" placeholder="Stock symbol"/>
                    <br></br>
                    <button className = "button" onClick = {props.clicked} id="quote">LOOKUP STOCK</button>
                </form>
            </div>
            <div>
                <p>This is where the stock info goes</p>
            </div>
        </div>
        )
    }    

export default Quote; 