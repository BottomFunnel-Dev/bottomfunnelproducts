import React from "react";
import Image from "next/image";
import styles from "./SalesfooterMobileAppFeatures.module.css";

export default function SalesfooterMobileAppFeatures() {
  const features = [
    {
      image: "/Images/SalesfooterMobileApp/img1.png",
      hd: "Make more sales on the go",
      par: "In a mobile-first world, get all the CRM functionalities on your smartphone with the Freshsales mobile app for Android and iOS. Stay up-to-date on your deal s details, and access all your data even when offline. Schedule follow-up activities and update details as you walk into your next meeting.",
    },
    {
      image: "/Images/SalesfooterMobileApp/img2.png",
      hd: "Accurately track the outcome of your sales activities",
      par: "With the Freshsales mobile app, you can now create and track the outcome of all the sales activities and maintain a repository on the activities timeline. Be it a task, appointment, Skype call, or even a luncheon meeting, track activities related to the customer interaction and ensure that your CRM is up-to-date even while on the road. Use the Check-in feature to confirm your presence for an offline lunch meeting with a prospect, and keep your team in the loop.",
    },
    {
      image: "/Images/SalesfooterMobileApp/img3.png",
      hd: "Stay connected with push notifications",
      par: "Selling on the go is incomplete without real-time notifications. With push notifications, always be in the loop whenever you are assigned tasks, contacts, or deals. Get reminders for your next meeting(s), and never forget pending tasks. You can also configure your app to send alerts for select events to prevent a deluge of notifications. With notification cards right at the top of your home screen, take action on your alerts without having to switch to a separate section..",
    },
    {
        image: "/Images/SalesfooterMobileApp/img4.png",
        hd: "Play the numbers game; shorten your sales cycle",
        par: "Scrolling through an endless list of leads and deals to identify the right ones to contact can be strenuous. With key metrics on your mobile app, stay abreast of the latest contacts assigned to you. Use filters to narrow down to the right set of contacts and ensure that they do not slip through. Pay attention to the warmest deals and change the stages as and when the deal progresses to the next stage. Send emails or make calls at the right time, engage contextually and shorten your sales cycle.",
      },
      {
        image: "/Images/SalesfooterMobileApp/img5.png",
        hd: "Capture every detail to engage contextually",
        par: "Every interaction with a prospect is an opportunity to win more deals. Capture every detail from your interaction be it a requirement, a rough estimate, or compliance information to ensure nothing is left out when you return for a second meeting. Scan and upload documents using the phone camera. Jot down every detail even as your meeting is in progress, by adding notes in your mobile CRM..",
      },
      {
        image: "/Images/SalesfooterMobileApp/img6.png",
        hd: "Access data even when offline",
        par: "Search for relevant information anytime from your mobile, online or offline. Download and store your contact related information, create new records or sales activities, and sync them when you are back online. With the offline access, never let poor connectivity issues keep you from engaging with your contacts contextually, and win more deals.",
      },
  ];

  return (
    <div className={styles.SalesfooterMobileAppFeaturesMainDiv}>
      {features.map((item) => {
        return (
          <div className={styles.SalesfooterMobileAppFeaturesInnerDiv}>
            <div className={styles.SalesfooterMobileAppFeaturesImageDiv}>
              <Image
                src={item.image}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            <div className={styles.SalesfooterMobileAppFeaturesContentDiv}>
              <h2>{item.hd}</h2>
              <p>{item.par}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}