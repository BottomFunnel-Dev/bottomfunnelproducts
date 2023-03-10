import React from "react";
import styles from "./setup.module.css";
import { contactcenter } from "./../../../Data/contactcenter";
import Image from "next/image";

export default function Setup() {
  return (
    <div className={styles.setup}>
      {contactcenter.map((item, index) => (
        <div
          style={{ flexDirection: item.directions ? "row" : "row-reverse" }}
          key={index}
          className={styles.setupContent}
        >
          <div className={styles.leftcontent}>
            <h2>{item.title}</h2>
            <ul>
              {item.desc.map((list, idx) => (
                <li key={idx}>{list}</li>
              ))}
            </ul>
            <p>
              Learn more <i class="bi bi-arrow-right"></i>
            </p>
          </div>
          <div className={styles.setupImage}>
              <lottie-player
                src={item.img}
                background="transparent"
                speed="1"
                loop
                autoplay
                >
            </lottie-player>
          </div>
        </div>
      ))}
    </div>
  );
}
