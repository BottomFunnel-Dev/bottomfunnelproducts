import React from "react";
import styles from "./LandingBanner.module.css"
import Image from "next/image";
export const LandingBanner= () => {
    return (
 
        <div className={styles.LandingParent}>
            
            <div className={styles.Landingtwo}>
                <h1>Generate more leads and revenue with custom landing pages in minutes </h1>
                <hr className={styles.hr} style={{width:"80%"}}/>
                
               <p>An intuitive drag-and-drop builder and library of templates to your lead generation efforts to a whole new level-all within freshmarketer.</p>
                 <button>Start A Free Demo</button> 
            </div> 
            <div className={styles.Landingone}>
            <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/LandingPages/banner.png"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    
                />
            </div>
            
          
        </div>  
      
    );
}