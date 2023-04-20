import React from "react";
import solnav from "./DropDown3.module.css";
import { useRouter } from "next/router";

export const DropDown3 = ({ handleHover, scroll, data, more }) => {
  const navigate = useRouter();

  return (
    <div
      onMouseEnter={() => handleHover("dropDown3")}
      onMouseLeave={() => handleHover("")}
      className={solnav.productSolutionsMainDiv}
      style={{ top: scroll ? "55px" : "120px" }}
    >
      <div
        className={solnav.productSolutionsListItems}
        style={{ width: "100%" }}
      >
        {data.map((item, i) => (
          <div
            key={i}
            onClick={() => handleHover("")}
            className={solnav.productSolutionsData}
          >
            <div
              onClick={() => handleHover("")}
              style={{ cursor: "default" }}
              className={solnav.dropdownthreeList}
            >
              <div>
                <h6 style={{ marginLeft: "3.5%", width: "50%" }}>
                  {item.dropContent}
                </h6>{" "}
                <span></span>
              </div>
              {item.list.map((elem) => (
                <p
                  onClick={() => navigate.push(elem.path)}
                  style={{ marginTop: "5%", fontSize: "14px", padding: "3%" }}
                >
                  {elem.title}
                </p>
              ))}
            </div>
          </div>
        ))}
        {more ? <button>View all industries</button> : null}
      </div>
    </div>
  );
};
