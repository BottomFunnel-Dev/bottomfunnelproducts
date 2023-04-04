// import React from "react";
// import styles from "./SaasBloat.module.css";
// import Image from "next/image";

// export const SaasBloat = () => {


//   return (
//     <div className={styles.saasBloatMainDiv}>
        
//     </div>
//   );
// };

import React, { useState } from "react";
import styles from "./SaasBloat.module.css";
import Image from "next/image";
export default function SaasBloat({ onSwitch }) {
  const [headchange, setHeadchange] = useState(0);
  const [active, setActive] = useState(0);
  const [toggle, setToggle] = useState(0);

  const handletoggle = (ele) => {
    setToggle(ele);
  };
  return (
    <div className={styles.saasBloatMain}>

      <div className={styles.saasBloatpanel}>
    
        <div className={styles.saasBloatpanelright}>
          {onSwitch[headchange].content.map((e, idx) => {
            return (
              <div
                key={idx}
                onMouseOver={() => setActive(idx)}
                className={`logistic-box-${idx}`}
              >
                <div className={styles.contentIcon}>
                  
                  <h3> {e.title} </h3>
                </div>

                
                <p> {e.desc} </p>
              </div>
            );
          })}
        </div>

        <div 
          className={styles.saasBloatpanelleft}
          style={{
            background: `url(${onSwitch[headchange].content[active].background})`,

          }}
        >
            
          <div className={styles.saasBloatpanelImage}>
            <Image
              src={onSwitch[headchange].content[active].img}
              alt="img"
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" , objectFit:"contain"}}
            />
          </div>
         
        </div>
        
      </div>
     
    </div>
  );
}
