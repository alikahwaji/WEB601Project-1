import React from "react";
import "./home.css";

class Home extends React.Component {
    render() {
        return (
            <div className='home'>
                <div>
                    <main style={{marginTop: '68px'}}>                   
                            <img alt= 'beekeeper' src={require('../../Images/beekeeper.jpg')}/> 
                    </main> 
                </div> 
                <div className='title'>                              
                    <h2>Home</h2>
                        <p>Intro into the World of Beekeeping</p> 
                </div>
            </div>
            
        ) 
    }
}

 

 

export default Home;