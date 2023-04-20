import React from "react";
import styles from "./CommunityUserNetwork.module.css";
import Image from "next/image";

export default function CommunityUserNetwork() {
  const UXdata = [
    { image: "/Images/community/Group1.png", text: "Dubai" },
    { image: "/Images/community/Group4.png", text: "New York" },
    { image: "/Images/community/Group2.png", text: "India" },
  ];
  return (
    <div className={styles.CommunityUserNetworkMainDiv}>
      <h2>Bottom Funnel User Network</h2>
      <p>Meet and interact with like-minded people</p>
      <div className="container">
        <div className="row">
            {UXdata.map((item) => {
              return (
                <div className="col-md-4">
                  <div className={styles.CommunityContent}>
               
                   
                      <div className={styles.Image}>
                        <Image
                          src={item.image}
                          alt={"image"}
                          width={"0"}
                          height={"0"}
                          sizes={"100vw"}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                      <h5>{item.text} User Network</h5>
                   
                      <div><button className={styles.CommunityUserNetworkButton}>Join Group</button></div>
                  </div>
                 
                </div>
              );
            })}
          
        </div>
      </div>
      
      <div><button className={styles.CommunityUserNetworkButton2}>View All</button></div>
                  
      
    </div>
  );
}
