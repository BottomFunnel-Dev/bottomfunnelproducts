import React from "react";
import styles from "./setup.module.css";
import { contactcenter } from "./../../../Data/contactcenter";
import { BsArrowRight } from "react-icons/bs";
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
              Learn more <BsArrowRight />
            </p>
          </div>
          <div className={styles.setupImage}>
            <Image
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
              src={item.img}
              alt={item.img}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
