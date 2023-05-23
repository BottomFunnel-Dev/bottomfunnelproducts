import React from "react";
import styles from "./setup.module.css";
import { contactcenter } from "./../../../Data/contactcenter";
import Image from "next/image";

export default function Setup() {
  return (
    <div className={styles.setup}>
      {contactcenter.map((item, index) => (
        <div
          // style={{ flexDirection: item.directions ? "row" : "row-reverse" }}
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
            <Image
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
              src={item.img}
              alt="Image"
            />
              {/* <lottie-player
                src={item.img}
                background="transparent"
                speed="1"
                loop
                autoplay
                >
            </lottie-player> */}
          </div>
        </div>
      ))}
      
      <div className={styles.setupContent}>
          <div className={styles.leftcontent}>
            <h2>Continue the conversation on any channel</h2>
            <ul>
              <li>
                 Bottomfunnel Contact Center is a part of the Bottomfunnel Ominichannel- a leader in effortless conversations.
              </li>
              <li>
                 Make calls within Bottomfunnel and convert a call to a ticket with a single click.
              </li>
              <li>
                Continue the conversation across any channel with every customer.
              </li>
            </ul>
            <p>
              Learn more <i class="bi bi-arrow-right"></i>
            </p>
          </div>
          <div className={styles.setupImage}>
              <lottie-player
                src={"https://d3op2l77j7wnti.cloudfront.net/Animation/contactCenter/three.json"}
                background="transparent"
                speed="1"
                loop
                autoplay
                >
            </lottie-player>
          </div>
        </div>
    </div>
  );
}
