import React from 'react'
import facebook from './facebook.png';
import twitter from './twitter.png';
import linkedin from './linkedin.png';
import instagram from './instagram.png';

const Footer = () => {
  return (
    <div class='footer'>
        <div class='sb-footer'>    
            <br/>
            <div class='sub-footer-below'>
                <div class='sb-footer-coopyright'>
                    <p>
                        @{new Date().getFullYear()} Documentary. Project Made By.
                    </p>
                </div>
                <div class='sb-footer-below-links'>
                    <a href=' ' class='a2'><div><p>Sara|Bayan|Fatma</p></div></a>
                    <a href=' ' class='a2'><div><p>Softwere Engineering Department</p></div></a>
                </div>
            </div> 

            
             <div>
                <ul class="fofo">
                    <li><img class='img1' alt="" src={facebook}/></li>
                    <li><img class='img1' alt="" src={twitter}/></li>
                    <li><img class='img1' alt="" src={linkedin}/></li>
                    <li><img class='img1' alt="" src={instagram}/></li>
                </ul>
             </div>

        </div>
    </div>
  )
}

export default Footer