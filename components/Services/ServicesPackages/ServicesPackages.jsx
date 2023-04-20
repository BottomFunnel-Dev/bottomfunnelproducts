import React from "react";
import styles from "./ServicesPackages.module.css";
import Image from "next/image";

export default function ServicesPackages() {
  const data = [{
    text1:"Basic",text2:"Complimentary 1:1 sessions on key product features."
  },{
    text1:"Silver",text2:"Quickly deploy your solution with assistance from our experts."
  },{
    text1:"Gold",text2:"Receive comprehensive  configuration guidance."
  },{
    text1:"Platinum",text2:"We'll dive deep into your use cases and build a solution to achieve your desired business outcomes."
  },{
    text1:"Enterprise",text2:"We'll design a custom onboarding package to meet your unique, enterprise-level requirements."
  }]
  return (
    <div className={styles.ServicesPackagesMainDiv}>
      <h2>Onboarding Packages</h2>
      <p>
        Designed to accelerate time to value with a proven methodology across
        thousand of go-lives.
      </p>
      <div className={styles.ServicesPackagesInnerDiv}>
      {data.map((item) => {
        return(
          <div className={styles.ServicesPackagesBox}>
          <h3>{item.text1}</h3>
          <p>{item.text2} 
          </p>
          <button className={styles.ServicesPackagesButton1}>
              Learn More 
              <div className={styles.ServicesPackagesArrowImage}>
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
          <div><button className={styles.ServicesPackagesButton}>
                   
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
