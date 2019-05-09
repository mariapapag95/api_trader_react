import React from 'react';

function Quote(props) {
    return (
        <div>
            <div>
                <form>
                    <input className = "input" id="ticker_symbol" placeholder="Stock symbol"/>
                    <input className = "input" id="volume" placeholder="Stock Volume"/>
                    <br></br>
                    <button className = "button" onClick = {props.clicked} id="quote">GET QUOTE</button>
                </form>
            </div>
            <div>
                <p>This is where the quote goes</p>
            </div>
        </div>
        )
    }    

export default Quote; 