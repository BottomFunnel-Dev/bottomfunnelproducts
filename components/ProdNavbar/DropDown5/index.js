import React from "react";
import styles from "./DropDown5.module.css";
import Link from "next/link";

export default function DropDown5({ handleHover, ProdData, postion }) {
  return (
    <div
      onMouseEnter={() => handleHover(ProdData.hover)}
      onMouseLeave={() => handleHover("")}
      className={styles.dropDownFiveMainDiv}
      style={{
        top: ProdData.scrollTop ? "55px" : "120px",
        left: postion.left ? postion.left : "none",
        right: postion.right ? postion.right : "none",
      }}
    >
      <div className={styles.dropDownFiveListItems} style={{ width: "100%" }}>
        {ProdData.data.map((item, i) => (
          <div
            key={i}
            onClick={() => handleHover("")}
            className={styles.dropDownFiveData}
          >
            <div
              onClick={() => handleHover("")}
              className={styles.productlinkP}
            >
              <Link
                onClick={handleHover}
                style={{ width: "75%" }}
                href={item.path}
              >
                <p style={{color:'black'}}>{item.dropContent}</p>
              </Link>
            </div>
          </div>
        ))}
        {ProdData.more ? (
          <Link
            onClick={() => handleHover("")}
            href={ProdData.more.path}
            className={styles.dropDownFivesAllFeaturesButton}
          >
            <button>{ProdData.more.title}</button>
          </Link>
        ) : null}
      </div>
    </div>
  );
}
