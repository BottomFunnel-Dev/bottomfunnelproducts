import React from 'react'
import style from "./Communication.module.css";
import Image from 'next/image';

export const Communication = () => {
  return (
    <div>
      <div className={style.Communicationmaindiv}>
        <h3>Engage in contextual communication with your customers. Earn more loyalty. Improve overall customer experience. Choose Bottom-Funnel CRM.</h3>
        <div className={style.Communicationmaindivimage}>
          <Image
            src={"https://d3op2l77j7wnti.cloudfront.net/Images/financesalesimage/banner (2).webp"}
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
};
