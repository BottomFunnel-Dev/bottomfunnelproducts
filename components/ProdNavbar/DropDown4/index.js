import React from "react";
import resource from "./DropDown4.module.css";
import Link from "next/link";

export const DropDown4 = ({ handleHover, scroll, data, more }) => {
  return (
    <div
      onMouseEnter={() => handleHover("dropDown4")}
      onMouseLeave={() => handleHover("")}
      className={resource.productResourceMainDiv}
      style={{ top: scroll ? "55px" : "120px" }}
    >
      <div
        className={resource.productResourceListItems}
        style={{ width: "100%" }}
      >
        {data.map((item, i) => (
          <div
            key={i}
            onClick={() => handleHover("")}
            className={resource.productResourceData}
          >
            <Link
              onClick={() => handleHover("")}
              href={item.path}
              className={resource.productlinkP}
            >
              <p>{item.dropContent}</p>
            </Link>
          </div>
        ))}
        {more ? <button>{more.title}</button> : null}
      </div>
    </div>
  );
};
