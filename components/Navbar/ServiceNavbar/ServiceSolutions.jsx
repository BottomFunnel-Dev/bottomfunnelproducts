import React from "react";
import deskstyle from "./ServiceSolutions.module.css";
import Link from "next/link";
import { serviceSolution } from "../../../Data/Navbar";

export const ServiceSolutions = ({ serSolHoverIn, serSolHoverOut, scroll }) => {
  return (
    <div
      onMouseEnter={serSolHoverIn}
      onMouseLeave={serSolHoverOut}
      className={deskstyle.serviceMainDiv}
      style={{ top: scroll ? "6.5%" : "15%" }}
    >
      <div className={deskstyle.serviceSolListItems} style={{ width: "100%" }}>
        {serviceSolution.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              // navigate(`/${item.path}`);
              serSolHoverOut();
            }}
            className={deskstyle.productDeskData}
          >
            {/* <img src={item.navIcons} alt="Product logo" /> */}
            <Link
              onClick={serSolHoverOut}
              style={{ width: "75%" ,textDecoration:"none"}}
              href={item.path}
              className={deskstyle.productlinkP}
              
            >
              <h6>{item.dropContent}</h6>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
