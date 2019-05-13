import React from 'react'
import {Link} from 'react-router-dom';

function Home(props) {
        return (
            <div>
                You have been logged out
                <br>
                </br>
                <br></br>
                <br></br>
                <br></br>
              <Link className="button" to = '/login'>LOGIN</Link>
            </div>
        )
    }
export default Home;