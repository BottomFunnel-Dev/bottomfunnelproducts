import React, { useState, useEffect } from "react";
// import  Link  from "next/Link";
import prodnav from "./ServiceNavbar.module.css";
import { useRouter } from "next/router";
import { ServiceDesk } from "./ServiceDesk";
import { ServiceSolutions } from "./ServiceSolutions";

export const ServiceNavbar = ({ navproductredux }) => {
  const [serviceSolution, setServiceSolution] = useState(false);
  const [serviceDesk, setserviceDesk] = useState(false);
  const [productnavbar, setproductNabvar] = useState(false);
  const [navbar, setNabvar] = useState(false);
  const [scroll, setScroll] = useState(false);
  const router = useRouter();
  // const navproductredux = useSelector((state) => state.navbar);

  const skillProductHoverIn = () => {
    setproductNabvar(true);
  };

  const skillProductHoverOut = () => {
    // setProductSolution(false);

    if (window.scrollY == 0) {
      setproductNabvar(false);
    }
  };

  const serSolHoverIn = () => {
    setServiceSolution(true);
    setproductNabvar(true);
  };

  const serSolHoverOut = () => {
    setServiceSolution(false);
    if (window.scrollY == 0) {
      setproductNabvar(false);
    }
  };

  const serDeskIn = () => {
    setserviceDesk(true);
    setproductNabvar(true);
  };
  
  const serDeskOut = () => {
    setserviceDesk(false);
    if (window.scrollY == 0) {
      setproductNabvar(false);
    }
  };

  const navBackground = () => {
    if (window.scrollY > 100) {
      setNabvar(true);
      setScroll(true);
    } else {
      setNabvar(false);
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navBackground);
  });

  return (
    <div
      className={prodnav.productsnavbar}
      style={{
        top: scroll ? "0" : "65px",
        background: scroll ? "white" : "transparent",
        transition: scroll ? "all 200ms linear" : "all 200ms linear",
      }}
    >
      <div className={prodnav.deskLogo}>
        <img src="https://d3op2l77j7wnti.cloudfront.net/Images/navbar/product/Service.png" />
        <h5>Bottom Funnel Service</h5>
      </div>
      <div className={prodnav.serviceList}>
        <li
          onMouseEnter={serDeskIn}
          onMouseLeave={serDeskOut}
          style={{ color: productnavbar ? "black" : navproductredux.color }}
        >
          Features
          <img
            className={prodnav.deskdownIcon}
            src="https://d3op2l77j7wnti.cloudfront.net/Images/Logos/downarrow.png"
            alt="image"
          />
        </li>

        <li
          onClick={() => router.push("/")}
          style={{ color: productnavbar ? "black" : navproductredux.color }}
        >
          Integration{" "}
          
        </li>

        <li
          onClick={() => router.push("/pricing")}
          onMouseEnter={skillProductHoverIn}
          onMouseLeave={skillProductHoverOut}
          style={{ color: productnavbar ? "black" : navproductredux.color }}
        >
          Pricing
        </li>

        <li
          onMouseEnter={serSolHoverIn}
          onMouseLeave={serSolHoverOut}
          style={{ color: productnavbar ? "black" : navproductredux.color }}
        >
          Solutions{" "}
          <img
            className={prodnav.deskdownIcon}
            src="https://d3op2l77j7wnti.cloudfront.net/Images/Logos/downarrow.png"
            alt="image"
          />
        </li>

        <li>Sign In</li>
        <button>Free Trial</button>
      </div>

      {/* service drop down section code start */}

      {/* ProductSolutions drop down section code start */}
      {serviceSolution ? (
        <ServiceSolutions
          serSolHoverIn={serSolHoverIn}
          serSolHoverOut={serSolHoverOut}
          scroll={scroll}
        />
      ) : null}

      {serviceDesk ? (
        <ServiceDesk
          serDeskIn={serDeskIn}
          serDeskOut={serDeskOut}
          scroll={scroll}
        />
      ) : null}
    </div>
  );
};
