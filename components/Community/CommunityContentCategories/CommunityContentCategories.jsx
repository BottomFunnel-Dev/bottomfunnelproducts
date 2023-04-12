import React from "react";
import styles from "./CommunityContentCategories.module.css";
import Image from "next/image";

export default function CommunityContentCategories() {
  const data = [
    {
      img: "/Images/community/Rectangle1.png",
      heading: "Community Central",
      text1: 132,
      text2: 661,
    },
    {
      img: "/Images/community/Rectangle2.png",
      heading: "Customer experience",
      text1: 4258,
      text2: 10996,
    },
    {
      img: "/Images/community/Rectangle3.png",
      heading: "Employee Experience",
      text1: 1760,
      text2: 4834,
    },
    {
      img: "/Images/community/Rectangle4.png",
      heading: "Sales and marketing",
      text1: 138,
      text2: 234,
    },
    {
      img: "/Images/community/Rectangle5.png",
      text1: 7,
      heading: "Platform & Integrations",
      text2: 7,
    },
    {
      img: "/Images/community/Rectangle6.png",
      text1: 33,
      heading: "Free Tools",
      text2: 44,
    },
    {
      img: "/Images/community/Rectangle7.png",
      text1: 15,
      heading: "The Community Collective",
      text2: 18,
    },
    {
      img: "/Images/community/Rectangle8.png",
      text1: 32,
      heading: "Bottom Funnel Academy",
      text2: 702,
    },
    {
      img: "/Images/community/Rectangle9.png",
      text1: 254,
      heading: "Interest Areas",
      text2: 222,
    },
  ];
  return (
    <div className={styles.CommunityContentCategoriesMainDiv}>
      <h2>Content categories</h2>

      <div className="container">
        <div className="row my-4 mx-2">
          {data.map((item) => {
            return (
              <div className="col-md-4 my-3">
                <div className={styles.communityBox}>
                  <div className={styles.Image}>
                    <Image
                      src={item.img}
                      alt={"image"}
                      width={"0"}
                      height={"0"}
                      sizes={"100vw"}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div className={styles.Content}>
                    <h5>{item.heading}</h5>
                    <p>
                      <span>{item.text1} topics</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>{item.text2} replies</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
