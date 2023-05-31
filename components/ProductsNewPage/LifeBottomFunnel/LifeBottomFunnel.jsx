import React from "react";
import styles from "./LifeBottomFunnel.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const LifeBottomFunnel = () => {
  const router = useRouter();
  return (
    <div className={styles.lifeMainOuterDiv}>
      <div className={styles.lifeHeadingMainDiv}>
        <p>Welcome to Bottom Funnel</p>

        <h2>Work the way that works for you</h2>
      </div>

      <div className={styles.lifeImageMainDiv}>
        <div className={styles.lifeImageInnerDiv}>
          <Link href={"/awards"}>
            <div className={styles.lifeImageDiv}>
              <Image
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
                src="https://d3op2l77j7wnti.cloudfront.net/Images/productsmainpage/Components/lifeimage1.png"
                alt="Components/lifeimage1.png"
              />

            </div>
          </Link>

          <Link href={"/engagement"}>
            <div className={styles.lifeImageDiv} >
              <Image
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
                src="https://d3op2l77j7wnti.cloudfront.net/Images/productsmainpage/Components/model.png"
                alt="image"
              />
            </div>
          </Link>

          <Link href={"/our-team"}>
            <div className={styles.lifeImageDiv} >
              <Image
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
                src="https://d3op2l77j7wnti.cloudfront.net/Images/productsmainpage/Components/lifeimage.png"
                alt="image"
              />
            </div>
          </Link>
        </div>

         <a href="our-team">
        <div className={styles.lifeBottomContentDiv}>
          <button>See life at Bottom Funnel</button>
        </div>
        </a>
      </div>
    </div>
  );
};

export default LifeBottomFunnel;
