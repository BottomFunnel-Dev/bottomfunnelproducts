import React, { useState } from "react";
import styles from "./SaasBloat.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
export default function SaasBloat({ onSwitch }) {
  const [headchange, setHeadchange] = useState(0);
  const [active, setActive] = useState(0);
  const [toggle, setToggle] = useState(0);
  const router = useRouter();

  const handletoggle = (ele) => {
    setToggle(ele);
  };
  return (
    <div className={styles.saasBloatMain}>
        <div className={styles.saasBloatheading}>
          <h2>All SaaS, No Bloat</h2>
        </div>
      <div className={styles.saasBloatpanel}>
        <div className={styles.saasBloatpanelright}>
          {onSwitch[headchange].content.map((e, idx) => {
            return (
              <div
                key={idx}
                onMouseOver={() => setActive(idx)}
                className={`logistic-box-${idx}`}
              >
                <div className={styles.contentIcon} 
                   onClick={() => router.push(e.path)}>
                  <h3> {e.title} </h3>
                  <i class="bi bi-arrow-right"></i>
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
