import React from "react";
import styles from "./JourneyBanner.module.css"

export const JourneyBanner= () => {
    return (
 
        <div className={styles.journeyParent}>
            <div className={styles.journeyone}>
            <lottie-player 
            src="/Animation/animationjsonfile.json"
            background="transparent"
            speed="1"
            loop
            autoplay
           
            >

            </lottie-player>
            </div>
            <div className={styles.journeytwo}>
                <h1>Automate Your <span style={{color:"#EF5122"}}> e-commerce marketing</span> campaigns across channels </h1>
                <hr className={styles.hr} style={{width:"80%"}}/>
                
               <p>Engage with customers at every stage of the buying cycle through personalized,multichannel journeys</p>
                 <button>Explore Now</button> 
            </div> 
            
          
        </div>  
      
    );
}