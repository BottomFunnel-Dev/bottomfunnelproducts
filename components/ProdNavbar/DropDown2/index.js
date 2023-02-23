import React from "react";
import featurestyle from "./DropDown2.module.css";
import Link from "next/link";

export default function DropDown2({ handleHover, scroll, data, more }) {
  return (
    <div
      onMouseEnter={() => handleHover("dropDown2")}
      onMouseLeave={() => handleHover("")}
      className={featurestyle.productFeatureMainDiv}
      style={{ top: scroll ? "55px" : "120px" }}
    >
      <div
        className={featurestyle.productFeatureListItems}
        style={{ width: "100%" }}
      >
        {data.map((item, i) => (
          <div
            key={i}
            onClick={() => handleHover("")}
            className={featurestyle.productFeatureData}
          >
            <Link
              onClick={() => handleHover("")}
              href={item.path}
              className={featurestyle.productlinkP}
            >
              <p>{item.dropContent}</p>
            </Link>
          </div>
        ))}
        <Link
          onClick={() => handleHover("")}
          href={"/funneldesk/features"}
          className={featurestyle.productFeaturesAllFeaturesButton}
        >
          {more ? <button>{more.title}</button> : null}
        </Link>
      </div>
    </div>
  );
}
