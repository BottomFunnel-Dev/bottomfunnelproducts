import React from "react";
import styles from "./KnowledgeManagementBanner.module.css";
import Image from "next/image";

export const KnowledgeManagementBanner = () => {
  return (
    <div className={styles.KnowledgeManagementBannermaindiv}>
      <div className={styles.KnowledgeManagementBannerbannerImage}>
        <Image
          src={"/Images/KnowledgeManagement/Group 1000006676.png"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className={styles.KnowledgeManagementBannermaindivinnercontent}>
        <h1>Deflect tickets and empower users with the knowledge base</h1>
        <p>
          
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          delectus magnam nostrum adipisci asperiores corrupti a nihil
          reiciendis enim odit aut atque eaque officiis reprehenderit, ab
          nesciunt sapiente veritatis cumque!
        </p>
        <button>Sign Up</button>
      </div>
    </div>
  );
};
