import React from "react";
import styles from "./NextgenMassaging.module.css";
import Image from "next/image";

export const NextgenMassaging = () => {
  const Nextd = [
    {
      img: "/Images/Applebusinesschat/image 24.webp",
      hd: "Be available for your customers on Apple Messages for Business",
      li1: "Let customers reach out to you on their preferred device and app.",
      li2: "Empower your agents and bots to work together.",
      li3: " Offer exceptional service on Business Messages, with Bottom Funnel chat.",
    },
    {
      img: "/Images/Applebusinesschat/Frame.webp",
      hd: "Simplify every customer interaction",
      li1: "Enable your customers to get all the help they need in one place.",
      li2: "Let your customers schedule appointments or meetings without having to leave the app.",
      li3: "Offer instant, secure payment options with Apple Pay",
    },
    {
      img: "/Images/Applebusinesschat/Frame (1).webp",
      hd: "Future proof your customer service",
      li1: "An effortless messaging experience for your customers and context-driven interactions for your team.",
      li2: "Deliver great digital service experiences that your customers expect.",
      li3: "The future of messaging is mobile — be there to welcome your customers on Apple Messages for Business.",
    },
    {
      img: "/Images/Applebusinesschat/image 25.webp",
      hd: "Manage multiple business hours",
      li1: "Deflect repetitive, transactional service requests with AI-powered bots.",
      li2: "Your agents can now focus oncomplex interactions that require a human touch.",
      li3: "Deliver seamless customer experiences with intuitive hand-off from bots to human agents.",
    },
  ];
  return (
    <div>
      <div className={styles.NextgenMassagingmaindiv}>
        <div className={styles.NextgenMassagingmaindivheading}>
          <h2>The next-gen messaging experience</h2>
          <p>
            Let your customers message you as easily as they message their
            friends and family
          </p>
        </div>
      </div>

      <div className={styles.NextgenMassagingmaindivcards}>
        {Nextd.map((item) => {
          return (
            <div className={styles.NextgenMassagingmaindivcardsbox}>
              <h5>{item.hd}</h5>
              <div className={styles.NextgenMassagingmaindivcardsboximage}>
                <Image
                  src={item.img}
                  alt={"img"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <ul>
                <li>{item.li1}</li>
                <li>{item.li2}</li>
                <li>{item.li3}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
