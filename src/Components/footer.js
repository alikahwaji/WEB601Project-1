import React from "react";
import './footer.css';
class Footer extends React.Component {   
   
      render() {
        return (
            <footer className="footer navbar" >
              <p className="footer-address">
              Nelson region <br/> Contact: 027 dial bees
            
                </p> 
                <p className="footer-copyright">
                Copyright © {new Date().getFullYear()}
                </p>  
                  
        
            </footer>
        );
    }
}

export default Footer;