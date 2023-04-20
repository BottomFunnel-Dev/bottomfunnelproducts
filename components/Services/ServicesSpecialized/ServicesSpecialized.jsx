import React from "react";
import styles from "./ServicesSpecialized.module.css";
import Image from "next/image";

export default function ServicesSpecialized() {
  const data = [{
    text1:"Managed Services",text2:"Lean on a BottomFunnelworks product expert to take care of your system administration. Includes a monthly bucket of hours for configuration, best practice sharing, training, and more. 1:1 sessions on key product features."
  },{
    text1:"Optimization Services",text2:"Our expert will work in lockstep with your team to analyze your existing configuration, design, and build an improved solution."
  },{
    text1:"Bottom Funnel Services",text2:"The Bottom Funnel chat offering involves end-toend bots implementation, including advisory services, configuration, and training."
  },{text1:"Admin Coaching",text2:"Strengthen your product knowledge with our expert-led interactive training tailored to your business needs."
},{
  text1:"Premium Support",text2:"Back your customer and employee service platform with personalized support from the get-go with 24/7 edicated assistance from our product experts​."
},{text1:"Health Assessment",text2:"A comprehensive review of your existing setup to help you to understand the current state and proactively identify areas for improvement."
},{
    text1:"Premier Advisory Services",text2:"An all-in-one offering tailored for Enterprise organizations to meet their strategic & operational objectives using BottomFunnelworks products."
  },{text1:"Orchestration (Bottom Funnel Services-Only)",text2:"Technical solutioning and configuration assistance to fully integrated custom workflows with the BottomFunnelservice Orchestration module."
}]
  return (
    <div className={styles.ServicesSpecializedMainDiv}>
      <h2>Specialized services</h2>
      <p>
      Packages to support your needs throughout your entire customer journey.
      </p>
      <div className={styles.ServicesSpecializedInnerDiv}>
      {data.map((item) => {
        return(
          <div className={styles.ServicesSpecializedBox}>
          <h3>{item.text1}</h3>
          <p>{item.text2} 
          </p>
          <button className={styles.ServicesSpecializedButton1}>
              Learn More 
              <div className={styles.ServicesSpecializedArrowImage}>
            <Image
          src={"/Images/services_resources/Arrow.png"}
          alt={"img"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        /></div>
            </button>
         
          <div>
           
          </div>
          <div>
          <div><button className={styles.ServicesSpecializedButton}>
                   
              Get in touch
            </button> </div>
          </div>
        </div>
        );
      })}
      
      </div>
    </div>
    
    
  );
}
