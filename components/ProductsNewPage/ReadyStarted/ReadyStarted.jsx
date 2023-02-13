import React from "react";
import styles from "./ReadyStarted.module.css";
import Image from "next/image";
const ReadyStarted = () => {
  return (
    <div className={styles.readyStartOuterDiv}>
      <div className={styles.textcontent}>
        <h2>Ready to get started</h2>
        <p>
          Join our community of 50.000+companies of all sizes who use Bottom
          Funnel mordern Products to make it fast and easy to delight thier
          customers and employees
        </p>
        <button>CONTACT SALES</button>
      </div>

      <div>
        <Image
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
          src="/Images/productsmainpage/Components/bottom.png"
          alt="Components/lifeimage1.png"
        />
      </div>
    </div>
  );
};

export default ReadyStarted;
