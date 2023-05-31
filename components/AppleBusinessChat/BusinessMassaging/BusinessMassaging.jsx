import React from "react";
import styles from "./BusinessMassaging.module.css";
import Image from "next/image";

export const BusinessMassaging = () => {
  const Businessd = [
    {
      img: "/Images/Applebusinesschat/smartphone 1.webp ",
      hd: "All in one inbox",
      p: "Streamline your customer communications with an all-in-one inbox, consolidating messages from various channels into a centralized platform for efficient management and response.",
    },
    {
      img: "/Images/Applebusinesschat/smartphone 1 (1).webp",
      hd: "Integrate with your familiar apps",
      p: "Seamlessly connect your existing tools and applications with Bottom Funnel, enabling smooth integration and enhancing workflow efficiency for a streamlined customer support experience.",
    },
    {
      img: "/Images/Applebusinesschat/chat-bot 1.webp",
      hd: "Privacy and security",
      p: "Rest assured with robust privacy and security measures in place, safeguarding customer data and ensuring compliance with industry regulations for complete peace of mind.",
    },
    {
      img: "/Images/Applebusinesschat/smartphone 1 (2).webp",
      hd: "Manage multiple business hours",
      p: "Effortlessly manage and customize business hours to align with your operational needs, ensuring efficient customer service round the clock.",
    },
    {
        img: "/Images/Applebusinesschat/smartphone 1 (3).webp",
        hd: "Support customers worldwide",
        p: "Deliver exceptional customer support to customers around the globe, breaking down geographical barriers and providing assistance across different time zones and languages.",
      },
      {
        img: "/Images/Applebusinesschat/chat-bot 1 (1).webp",
        hd: "Control agent access",
        p: "Effortlessly manage and control access for your agents, ensuring secure and authorized interactions with customers while maintaining data privacy and compliance.",
      },
  ];

  return (
    <div>
      <div className={styles.BusinessMassagingsingup}>
        <h2>Harness the Full Potential of Apple Messages for Business with Bottom Funnel Chat</h2>
        <button className={styles.BusinessMassagingsingupbutton}>
          Sign Up For Free
        </button>
      </div>
      <div className={styles.BusinessMassagingmaindiv}>
        <div className={styles.BusinessMassagingmaindivheading}>
          <h2>
          Drive Business Success with Bottom Funnel and Apple Business Messages
          </h2>
          <p>
          Unlock the potential of your business with the winning combination of Bottom Funnel and Apple Business Messages for seamless customer engagement and enhanced success.</p>
        </div>

        <div className={styles.BusinessMassagingmaindivcards}>
          {Businessd.map((item) => {
            return(
                <div className={styles.BusinessMassagingmaindivcardsbox}>
                <div className={styles.BusinessMassagingmaindivcardsboxinner}>
                  <div
                    className={styles.BusinessMassagingmaindivcardsboxinnerimage}
                  >
                    <div className={styles.BusinessMassagingmaindivcardsboximage}>
                      <Image
                        src={item.img}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  </div>
                  <h6>{item.hd}</h6>
                  <p>
                    {item.p}
                  </p>
                </div>
              </div>   
            );
          })}
        
        </div>
      
      </div>
    </div>
  );
};
