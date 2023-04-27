import React from "react";
import styles from "./BusinessMassaging.module.css";
import Image from "next/image";

export const BusinessMassaging = () => {
  const Businessd = [
    {
      img: "/Images/Applebusinesschat/smartphone 1.webp ",
      hd: "All in one inbox",
      p: " Brings conversations from web, mobile, and social messengers into one inbox",
    },
    {
      img: "/Images/Applebusinesschat/smartphone 1 (1).webp",
      hd: "Integrate with your familiar apps",
      p: "Connects with payments, order management, or CRM tools for real-time conversations on order updates, refunds, and more",
    },
    {
      img: "/Images/Applebusinesschat/chat-bot 1.webp",
      hd: "Privacy and security",
      p: "Secure with OTP authentication, privacy modes, GDPR compliance",
    },
    {
      img: "/Images/Applebusinesschat/smartphone 1 (2).webp",
      hd: "Manage multiple business hours",
      p: "For your support teams working across different regions, times, or time zones.",
    },
    {
        img: "/Images/Applebusinesschat/smartphone 1 (3).webp",
        hd: "Support customers worldwide",
        p: "With our Live Translate feature. Also, our agent platform and customer messenger supports over 32 languages.",
      },
      {
        img: "/Images/Applebusinesschat/chat-bot 1 (1).webp",
        hd: "Control agent access",
        p: "With advanced Roles and Permissions. Create special privileges and profiles that specify what an agent can see and do.",
      },
  ];

  return (
    <div>
      <div className={styles.BusinessMassagingsingup}>
        <h2>Unlock the full power of Apple Messages for Business</h2>
        <button className={styles.BusinessMassagingsingupbutton}>
          Sign Up For Free
        </button>
      </div>
      <div className={styles.BusinessMassagingmaindiv}>
        <div className={styles.BusinessMassagingmaindivheading}>
          <h2>
            Bottom Funnel make businesses successful with Apple Business
            Messages
          </h2>
          <p>
            Offer contextual, digital-first experiences that your customers and
            agents will love.</p>
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
