import React from "react";
import featurestyle from "./ProductFeature.module.css";
import Link from "next/link";
import { productFeatures } from "../../../Data/Navbar";

export const ProductFeature = ({ solFeaIn, solFeaOut, scroll }) => {
  return (
    <div
      onMouseEnter={solFeaIn}
      onMouseLeave={solFeaOut}
      className={featurestyle.productFeatureMainDiv}
      style={{ top: scroll ? "9%" : "18%" }}
    >
      <div
        className={featurestyle.productFeatureListItems}
        style={{ width: "100%" }}
      >
        {productFeatures.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              // navigate(`/${item.path}`);
              solFeaOut();
            }}
            className={featurestyle.productFeatureData}
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
        <Link
          onClick={solFeaOut}
          href={"/funneldesk/features"}
          className={featurestyle.productFeaturesAllFeaturesButton}
        >
          <button>View all features</button>
        </Link>
      </div>
    </div>
  );
};
