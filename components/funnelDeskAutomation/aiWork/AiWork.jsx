import React from "react";
import styles from "./AiWork.module.css";
import Image from "next/image";

export const AiWork = () => {
  return (
    <div className={styles.aiWorkContainer}>
      <h1>Let AI do the heavy lifting</h1>
      <div>
        <div className={styles.aiWorkMain}>
          <div>
            <h2>Get rid of to-do lists</h2>
            <p>
              Automations scan through all your tickets every one hour to check
              if there's a need for an update or an alert. From following up
              with collaborators that you need inputs from, reminding you about
              pending work, to checking on customers. Bottom funnel desk automates all
              redundant work. You can be assured that no task slips through the
              cracks.
            </p>
          </div>
          <span>
          <lottie-player
                  src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Animation/Automation/three.json"}
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                  >
          </lottie-player>
          </span>
        </div>
      </div>
    </div>
  );
};
