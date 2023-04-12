import React from "react";
import featurestyle from "./CustomerSuccessFeature.module.css";
import Link from "next/link";
import { customerSuccessFeatures } from "../../../Data/Navbar";

export const CustomerSuccessFeature = ({ solFeaIn, solFeaOut, scroll }) => {
  return (
    <div
      onMouseEnter={solFeaIn}
      onMouseLeave={solFeaOut}
      className={featurestyle.customerSuccessMainDiv}
      style={{ top: scroll ? "6.5%" : "15%" }}
    >
      <div
        className={featurestyle.customerSuccessListItems}
        style={{ width: "100%" }}
      >
        {customerSuccessFeatures.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              // navigate(`/${item.path}`);
              solFeaOut();
            }}
            className={featurestyle.customerSuccessData}
          >
            <Link
              onClick={solFeaOut}
              href={item.path}
              className={featurestyle.productlinkP}
            >
              <p>{item.dropContent}</p>
            </Link>
          </div>
        ))}
     
      </div>
    </div>
  );
};
