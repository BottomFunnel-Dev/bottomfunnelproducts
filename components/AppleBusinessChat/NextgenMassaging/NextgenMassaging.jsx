import React from "react";
import styles from "./NextgenMassaging.module.css";
import Image from "next/image";

export const NextgenMassaging = () => {
  const Nextd = [
    {
      img: "/Images/Applebusinesschat/image 24.webp",
      hd: "Apple Business Chat Integration: Be Available for Your Customers Anytime, Anywhere",
      li1: "Engage with your customers directly on Apple Messages for Business, providing them with a convenient and familiar channel to reach out to your business.",
      li2: "Respond to customer inquiries in real-time, offering prompt support and resolving their concerns efficiently to enhance customer satisfaction.",
      li3: "Utilize AI-powered chatbots to deliver personalized experiences, understanding customer preferences and providing tailored recommendations and assistance.",
    },
    {
      img: "/Images/Applebusinesschat/Frame.webp",
      hd: "Streamline Customer Interactions: Simplify Every Interaction with Bottom Funnel Chat",
      li1: "Simplify customer interactions by providing instant and accurate responses through AI chatbots, reducing customer effort and improving satisfaction.",
      li2: "Streamline processes with automated workflows, ensuring smooth and consistent interactions across multiple channels, saving time and resources.",
      li3: "Empower customers with self-service options, enabling them to find information, make purchases, or resolve issues independently, enhancing convenience and reducing dependency on support teams.",
    },
    {
      img: "/Images/Applebusinesschat/Frame (1).webp",
      hd: "Future-Proof Your Customer Service: Embrace Innovation with Bottom Funnel Chat",
      li1: "Stay ahead of the curve by implementing AI-powered chatbots and automation, providing cutting-edge customer service that adapts to evolving customer needs.",
      li2: "Future-proof your customer service strategy by offering seamless support across multiple channels, ensuring a consistent and personalized experience for customers.",
      li3: "Prepare your customer service for growth and change with scalable and flexible solutions that can easily adapt to increasing customer demands and emerging technologies.",
    },
    {
      img: "/Images/Applebusinesschat/image 25.webp",
      hd: "Efficiently Manage Multiple Business Hours with Bottom Funnel Chat",
      li1: "Easily configure and manage different operating hours for your business, ensuring that your customers receive timely support based on their local time zones.",
      li2: "Seamlessly switch between different business hours based on predefined schedules or specific events, allowing for efficient management of customer interactions across various time periods.",
      li3: "Receive instant alerts and notifications when business hours change, ensuring that your team is always informed and prepared to provide support during active hours while managing customer expectations during non-operating hours.",
    },
  ];
  return (
    <div>
      <div className={styles.NextgenMassagingmaindiv}>
        <div className={styles.NextgenMassagingmaindivheading}>
          <h2>Unleash the Power of Next-Gen Messaging with Bottom-Funnelchat</h2>
          <p>
          Connect with Your Customers Effortlessly, Just Like Messaging Friends and Family
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
