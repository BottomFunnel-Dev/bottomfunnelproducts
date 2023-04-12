import React from "react";
import styles from "./CommunityHelp.module.css";
import Image from "next/image";

export default function CommunityHelp() {
  const Hdata = [
    {
      image: "/Images/community/Frame2.png",
      text1: "Developers' Corner",
      text2:
        "Are you a developer? Looking for a space to discuss platforms and APIs?",
    },
    {
      image: "/Images/community/Frame3.png",
      text1: "Academy",
      text2: "Learn and get certified as product experts through our Academy!",
    },
    {
      image: "/Images/community/Frame4.png",
      text1: "Support",
      text2:
        "Go through our Support channels to get technical & engineering help!",
    },
  ];
  return (
    <div>
      <div className={styles.CommunityHelpMainDiv}>
        <h2>Still looking for help?</h2>
        <div className="container">
          <div className="row">
            {Hdata.map((item) => {
              return (
                <div className="col-md-4">
                  <div className={styles.CommunityHelpContent}>
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
                    <h5>{item.text1}</h5>
                    <p>{item.text2}</p>
                    
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        
      </div>
    </div>
  );
}
