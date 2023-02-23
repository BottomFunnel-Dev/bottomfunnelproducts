import React from "react";
import styles from "./DropDown5.module.css";
import Link from "next/link";

export default function DropDown5({ handleHover, scroll, data, more }) {
  return (
    <div
      onMouseEnter={() => handleHover("dropDown5")}
      onMouseLeave={() => handleHover("")}
      className={styles.dropDownFiveMainDiv}
      style={{ top: scroll ? "55px" : "120px" }}
    >
      <div className={styles.dropDownFiveListItems} style={{ width: "100%" }}>
        {data.map((item, i) => (
          <div
            key={i}
            onClick={() => handleHover("")}
            className={styles.dropDownFiveData}
          >
            <Link
              onClick={() => handleHover("")}
              href={item.path}
              className={styles.productlinkP}
            >
              <p>{item.dropContent}</p>
            </Link>
          </div>
        ))}
        <Link
          onClick={() => handleHover("")}
          href={more.path}
          className={styles.dropDownFivesAllFeaturesButton}
        >
          {more ? <button>{more.title}</button> : null}
        </Link>
      </div>
    </div>
  );
}
