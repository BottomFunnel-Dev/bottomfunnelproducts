import React from "react";
import { MediaCards } from "../MediaCards/MediaCards";
import awards from "./MediaSection.module.css";

export const MediaSection = () => {
  const cardsData = [
    {
      title: "Top Web App Developers & Development Companies India 2022",
      image: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/pressmediaPhotos/ndtv.png",
      date: "10-Oct-2022",
      link: "",
    },
    {
      title: "Top Web App Development Agency 2022",
      image: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/pressmediaPhotos/abc-news.png",
      date: "16-Oct-2022",
      link: "",
    },
    {
      title: "New Jaipur Statup Of Jaipur Open for Hiring",
      image: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/pressmediaPhotos/republic-bharat.png",
      date: "29-Oct-2022",
      link: "",
    },
  ];

  return (
    <div className={awards.mediaSectionMain}>
      <h1>Latest Media Coverage</h1>
      <div>
        {cardsData.map((elem, idx) => {
          return <MediaCards data={elem} key={idx} />;
        })}
      </div>
    </div>
  );
};
