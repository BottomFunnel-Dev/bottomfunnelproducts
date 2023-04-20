import React from "react";
import Image from "next/image";
import styles from "./CustomerServicesSectionOne.module.css";
export default function CustomerServicesSectionOne() {
  const data = [
    {
      text1: "Connect with customers the way they want",
      text2:
        "Phone, chat, email, SMS, What'sApp—talk to customers on the channels of their choice.",
    },
    {
      text1: "Make every agent a hero",
      text2:
        "With complete customer context on a unified record, agents can anticipate any need.",
    },
    {
      text1: "Scale rapidly. Spend responsibly.",
      text2:
        "Innovate with the freedom to launch only what you need when you need it.",
    },
  ];
  return (
    <div className={styles.CustomerServicesMainDiv}>
      <p style={{ fontSize: "24px", fontWeight: "600" ,textAlign:"center"}}>
        Now create, connect, and innovate as you wish to, Neo has got your back!
      </p>
      <div className={styles.CustomerServicesSectionDiv}>
        <div className={styles.CustomerServicesSectionContentDiv}>
          {data.map((item) => {
            return (
              <div className={styles.CustomerServicesContentBox}>
                <h4>{item.text1}</h4>
                <p>
                  {item.text2}
                </p>
              </div>
            );
          })}
        </div>

        <div className={styles.CustomerServicesSectionImageDiv}>
          <Image
            src={"/Images/CustomerServices/screen1.png"}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
