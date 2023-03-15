import React from "react";
import styles from "./OurDevProcess.module.css";
import Image from "next/image";


export const OurDevProcess = () => {
  return (
    <div className={styles.ourDevProcessContainer}>
      <div>
        <h1>
          The Most Intelligently Integrated End-to-End{" "}
          <span>Development Process</span>
        </h1>
        <div>
          <p>
            Our end-to-end development process follows a methodical design and construction process, from continuous integration to testing, to deployment. This is what separates us from your typical development pros who will piece together bits of software that do not fit together.We are a global agency, with a mission to create products that exceed your expectations by integrating our expertise in every step of development process.Tailored for the rapidly changing dynamics of emerging markets and new technologies, our services help you stay ahead of the competition. Our goal is to give our customers the best products at an affordable price.
          </p>

          <div>
           
            <Image
            src={"/Images/ourDevPhotos/flowchart.webp"}
            alt={"chartimage"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
