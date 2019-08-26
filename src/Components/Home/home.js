import React from "react";
import "./home.css";

class Home extends React.Component {
    render() {
        return (
            <div className='home'>
                <div>
                    <main style={{marginTop: '64px'}}>
                   
                            <img alt= 'ManukaBees' src={require('../../Images/USbee.jpg')}/> 
                    </main> 
                </div>                               
                    <h2>Home</h2>
                        <p>Intro into the World of Beekeeping</p> 
            </div>
            
        ) 
    }
}

 

 

export default Home;