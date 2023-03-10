import React from "react";
import styles from "./GuideToShopFyBanner.module.css"
import Image from "next/image";
export const GuideToShopFyBanner= () => {
    return (
 
        <div className={styles.GuideToShopFyBannerParent}>
             <div className={styles.GuideToShopFyBannertwo}>
                <h1>Set ip Bottom Funnel Maketer For Your Shopify store </h1>
                <hr className={styles.hr} style={{width:"80%"}}/>
                
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum architecto autem dolorem ea consectetur unde quae, vero praesentium obcaecati impedit necessitatibus, quo officia et mollitia! Obcaecati quas animi dolorem nesciunt.</p>
                 <button>Strart A Free Demo</button> 
            </div> 
            
            
            <div className={styles.GuideToShopFyBannerone}>
            <Image
                    src={"/Images/GuideToShopFy/Banner.png"}
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