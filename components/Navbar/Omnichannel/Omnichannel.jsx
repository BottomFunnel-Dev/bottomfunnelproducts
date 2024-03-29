import React, { useState, useEffect } from "react";
// import  Link  from "next/Link";
import prodnav from "./Omnichannel.module.css";
import { ProductSolutions } from "./ProductSolutions";
import { ProductResources } from "./ProductResources";
import { ProductFeature } from "./ProductFeature";
import { ProductDesk } from "./ProductDesk";
import { useRouter } from "next/router";
import { IconContext } from "react-icons";
import { AiOutlineMenu } from "react-icons/ai";
import DropdownRespOC from "../responsiveDropdownOmnichannel/DropdownRespOC";

export const Omnichannel = ({ navproductredux }) => {
  const [ProductSolution, setProductSolution] = useState(false);
  const [productfeature, setproductFeature] = useState(false);
  const [productresource, setproductResource] = useState(false);
  const [productdesk, setproductDesk] = useState(false);
  const [productnavbar, setproductNabvar] = useState(false);
  const [navbar, setNabvar] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [mobres, setMobres] = useState(false);
  const router = useRouter();
  // const navproductredux = useSelector((state) => state.navbar);

  const skillProductHoverIn = () => {
    setproductNabvar(true);
  };

  const skillProductHoverOut = () => {
    setProductSolution(false);

    if (window.scrollY == 0) {
      setproductNabvar(false);
    }
  };

  const serHoverIn = () => {
    setproductService(true);
    setproductNabvar(true);
  };

  const serHoverOut = () => {
    setproductService(false);
    if (window.scrollY == 0) {
      setproductNabvar(false);
    }
  };

  const solHoverIn = () => {
    setProductSolution(true);
    setproductNabvar(true);
  };

  const solHoverOut = () => {
    setProductSolution(false);
    if (window.scrollY == 0) {
      setproductNabvar(false);
    }
  };

  const solResIn = () => {
    setproductResource(true);
    setproductNabvar(true);
  };

  const solResOut = () => {
    setproductResource(false);
    if (window.scrollY == 0) {
      setproductNabvar(false);
    }
  };

  const solDeskIn = () => {
    setproductDesk(true);
    setproductNabvar(true);
  };

  const solDeskOut = () => {
    setproductDesk(false);
    if (window.scrollY == 0) {
      setproductNabvar(false);
    }
  };
  const solFeaIn = () => {
    setproductFeature(true);
    setproductNabvar(true);
  };

  const solFeaOut = () => {
    setproductFeature(false);
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

  const handleMob = () => {
    mobres ? setMobres(false) : setMobres(true);
    console.log("working tree", mobres);
  };

  return (
    <div
      className={prodnav.omnichannelnavbar}
      style={{
        top: scroll ? "0" : "65px",
        background: scroll ? "white" : "transparent",
        transition: scroll ? "all 200ms linear" : "all 200ms linear",
      }}
    >
      <div className={prodnav.omnichannelLogo}>
        <img src="https://d3op2l77j7wnti.cloudfront.net/Images/Logos/funnel-desk/support-desk.png" />
        <h5>Bottom Funnel OmniChannel</h5>
      </div>

      <div id={prodnav.bar}>
          <label htmlFor="checkbox">
            <IconContext.Provider value={{ className: prodnav.bars }}>
              <AiOutlineMenu onClick={handleMob} />
            </IconContext.Provider>
          </label>
      </div>
      {!mobres && (
      <div className={prodnav.omnichannelList}>
        <li
          onMouseEnter={solDeskIn}
          onMouseLeave={solDeskOut}
          style={{ color: productnavbar ? "black" : navproductredux.color }}
        >
          Desk Products
          <img
            className={prodnav.omnichanneldownIcon}
            src="https://d3op2l77j7wnti.cloudfront.net/Images/Logos/downarrow.png"
            alt="image"
          />
        </li>

        <li
          onMouseEnter={solFeaIn}
          onMouseLeave={solFeaOut}
          style={{ color: productnavbar ? "black" : navproductredux.color }}
        >
          Features{" "}
          <img
            className={prodnav.omnichanneldownIcon}
            src="https://d3op2l77j7wnti.cloudfront.net/Images/Logos/downarrow.png"
            alt="image"
          />
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
          onMouseEnter={solHoverIn}
          onMouseLeave={solHoverOut}
          style={{ color: productnavbar ? "black" : navproductredux.color }}
        >
          Solutions{" "}
          <img
            className={prodnav.omnichanneldownIcon}
            src="https://d3op2l77j7wnti.cloudfront.net/Images/Logos/downarrow.png"
            alt="image"
          />
        </li>

        <li
          onMouseEnter={solResIn}
          onMouseLeave={solResOut}
          style={{ color: productnavbar ? "black" : navproductredux.color }}
        >
          Resources{" "}
          <img
            className={prodnav.omnichanneldownIcon}
            src="https://d3op2l77j7wnti.cloudfront.net/Images/Logos/downarrow.png"
            alt="image"
          />
        </li>
        <li>Sign In</li>
        <button>Free Trial</button>
      </div>
      )
    }

          {
            mobres && (
              <DropdownRespOC
              solHoverIn={solHoverIn}
              solHoverOut={solHoverOut}
              solResIn={solResIn}
              solResOut={solResOut}
              solFeaIn={solFeaIn}
              solFeaOut={solFeaOut}
              solDeskIn={solDeskIn}
              solDeskOut={solDeskOut}
              scroll={scroll}
              />
            )
          }
      {/* service drop down section code start */}

      {/* ProductSolutions drop down section code start */}
      {ProductSolution ? (
        <ProductSolutions
          solHoverIn={solHoverIn}
          solHoverOut={solHoverOut}
          scroll={scroll}
        />
      ) : null}

      {productresource ? (
        <ProductResources
          solResIn={solResIn}
          solResOut={solResOut}
          scroll={scroll}
        />
      ) : null}

      {productfeature ? (
        <ProductFeature
          solFeaIn={solFeaIn}
          solFeaOut={solFeaOut}
          scroll={scroll}
        />
      ) : null}

      {productdesk ? (
        <ProductDesk
          solDeskIn={solDeskIn}
          solDeskOut={solDeskOut}
          scroll={scroll}
        />
      ) : null}
    </div>
  );
};
