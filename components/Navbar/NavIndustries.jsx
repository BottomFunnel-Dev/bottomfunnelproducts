import React from "react";
import navstyle from "./navbar.module.css";
import industry from "./navIndustries.module.css";
import Link from "next/link";
import { industries, product3 } from "../../Data/Navbar";
export const NavIndustries = ({
  solHoverIn,
  solHoverOut,
  scroll,
  productMount,
}) => {
  return (
    <div
      onMouseEnter={solHoverIn}
      onMouseLeave={solHoverOut}
      className={industry.industryserviceVisible}
      style={{ top: scroll || productMount.navMount ? "60px" : "60px" }}
    >
      <div id={industry.ondemandsol} className={industry.indindustryContent}>
        <div className={industry.industryListItems}>
          {product3.map((item, i) => (
            <div
              key={i}
              onClick={() => {
                solHoverOut();
              }}
              className={industry.industryimageIconDivSection}
            >
              <div>
                <img
                  className={industry.industryiconDivSection}
                  src={item.navIcons}
                  alt=""
                />
              </div>
              <Link
                onClick={solHoverOut}
                href={item.path}
                className={industry.industrylinkP}
              >
                <p>{item.dropContent}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
    // </div>
  );
};
