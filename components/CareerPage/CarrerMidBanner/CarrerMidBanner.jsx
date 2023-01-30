import React from "react";
import career from "./CarrerMidBanner.module.css";

export const CarrerMidBanner = () => {
  return (
    <div className={career.carrerMidBannerContainer}>
      <h1>
        Join Our <span>Team</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui asperiores
        temporibus obcaecati illum officia, corrupti, officiis ducimus atque
        voluptatem dicta aliquam, esse porro error perferendis doloribus
        molestiae unde libero eius.
      </p>
      <button>Apply Now</button>
    </div>
  );
};
