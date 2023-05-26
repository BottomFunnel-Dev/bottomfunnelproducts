import React from "react";
import solnav from "./ProductSolutions.module.css";
import Link from "next/link";
import { productSolution } from "../../../Data/Navbar";
import { useRouter } from "next/router";
export const ProductSolutions = ({ solHoverIn, solHoverOut, scroll }) => {

  const router = useRouter();

  return (
    <div
      onMouseEnter={solHoverIn}
      onMouseLeave={solHoverOut}
      className={solnav.productSolutionsMainDiv}
      style={{ top: scroll ? "9%" : "18%" }}
    >
      <div
        className={solnav.productSolutionsListItems}
        style={{ width: "100%" }}
      >
        {productSolution.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              // navigate(`/${item.path}`);
              solHoverOut();
            }}
            className={solnav.productSolutionsData}
          >
            <Link
              onClick={solHoverOut}
              href={item.path}
              style={{ cursor: "default" }}
              className={solnav.productlinkP}
          >  
              <div>
                <h6 style={{ marginLeft: "3.5%", width: "50%", }}>
                  {item.dropContent}
                </h6>{" "}
               
              </div>
              
              <p style={{ fontSize: "14px", padding: "3%", }}>
                {item.productText1}
              </p>

              
              <p style={{ fontSize: "14px", padding: "3%",marginTop:"-15%" }}>
                {item.productText2}
              
              </p>
            </Link> 
          </div>
        ))}

       
      <button
      onClick={() => router.push("/all-industry")}
      >View all industries</button>
      </div>
    </div>
  );
};
