import React from "react";
import deskstyle from "./ServiceDesk.module.css";
import Link from "next/link";
import { serviceFeature } from "../../../Data/Navbar";

export const ServiceDesk = ({ serDeskIn, serDeskOut, scroll }) => {
  return (
    <div
      onMouseEnter={serDeskIn}
      onMouseLeave={serDeskOut}
      className={deskstyle.serviceDeskMainDiv}
      style={{ top: scroll ? "6.5%" : "15%" }}
    >
      <div className={deskstyle.serviceDeskListItems} style={{ width: "100%" }}>
        {serviceFeature.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              // navigate(`/${item.path}`);
              serDeskOut();
            }}
            className={deskstyle.productDeskData}
          >
            {/* <img src={item.navIcons} alt="Product logo" /> */}
            <Link
              onClick={serDeskOut}
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
