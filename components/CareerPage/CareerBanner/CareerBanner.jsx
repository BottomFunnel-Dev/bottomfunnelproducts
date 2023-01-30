import React from "react";
import career from "./CareerBanner.module.css";

export const CareerBanner = () => {
  return (
    <div className={career.careerBannerMain}>
      <div className={career.careerBannerImage}>
        <img src="/Images/careerPhotos/banner.png" alt="Career banner" />
      </div>

      <div className={career.careerBannerContent}>
        <h1>
          Work With the best In <span>Bottom Funnel</span>
        </h1>
        <hr />
        <p>
          Bottom Funnel is changing the way people think about their online
          presence. Our innovations are helping them to connect, build a
          reputation, and make a name for themselves in a world that's becoming
          more and more digital by the day. Join us and become part of our next
          big thing.
        </p>
        <button>Get Started</button>
      </div>
    </div>
  );
};
