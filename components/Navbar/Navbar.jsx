import React, { useState } from "react";
import navstyle from "./navbar.module.css";
import Link from "next/link";
import { IconContext } from "react-icons";
import { AiOutlineMenu } from "react-icons/ai";
import { WhoWeAre } from "./WhoWeAre";


import { useEffect } from "react";
import { NavServices } from "./NavServices";
import { NavIndustries } from "./NavIndustries";
import { Products } from "./Products";
import DropdownResp from "./responsiveDropdown/DropdownResp";
import { useRouter } from "next/router";
import { Platform } from "./Platform";
import { Resource } from "./Resource";
import { ContactMainOther } from "../Contact/Contact";

const Navbar = ({ navredux, productMount }) => {
  const [aboutH, setAboutH] = useState(false);
  const [solution, setSolution] = useState(false);
  const [service, setService] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [product, setProduct] = useState(false);
  const [platform, setPlatform] = useState(false);
  const [resource, setResource] = useState(false);
  const [navbar, setNabvar] = useState(false);
  const [mobres, setMobres] = useState(false);
  const router = useRouter();

  const skillHoverIn = () => {
    setSkill(true);

    setNabvar(true);
  };

  const skillHoverOut = () => {
    setSolution(false);

    setSkill(false);
    if (window.scrollY == 0) {
      setNabvar(false);
    }
  };

  const solHoverIn = () => {
    setSolution(true);
    setNabvar(true);
  };

  const solHoverOut = () => {
    setSolution(false);
    if (window.scrollY == 0) {
      setNabvar(false);
    }
  };
  const productHoverIn = () => {
    setProduct(true);
    setNabvar(true);
  };

  const productHoverOut = () => {
    setProduct(false);
    if (window.scrollY == 0) {
      setNabvar(false);
    }
  };
  const platformHoverIn = () => {
    setPlatform(true);
    setNabvar(true);
  };

  const platformHoverOut = () => {
    setPlatform(false);
    if (window.scrollY == 0) {
      setNabvar(false);
    }
  };

  const resHoverIn = () => {
    setResource(true);
    setNabvar(true);
  };

  const resHoverOut = () => {
    setResource(false);
    if (window.scrollY == 0) {
      setNabvar(false);
    }
  };

  const serHoverIn = () => {
    setService(true);
    setNabvar(true);
  };

  const serHoverOut = () => {
    setService(false);
    if (window.scrollY == 0) {
      setNabvar(false);
    }
  };

  const homeHoverIn = () => {
    setAboutH(true);
    setNabvar(true);
  };

  const homeHoverOut = () => {
    setAboutH(false);
    if (window.scrollY === 0) {
      setNabvar(false);
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
    <>
      <div>

        <nav
          className={
            navbar
              ? `${navstyle.navbarSection} ${navstyle.active}`
              : navstyle.navbarSection
          }
          style={{
            top:
              scroll || productMount.navMount || productMount.salesnavMount
                ? "0"
                : "30px",
            position:
              productMount.navMount || productMount.salesnavMount
                ? "static"
                : "fixed",
            transition:
              scroll && (productMount.navMount || productMount.salesnavMount)
                ? "all .5s ease-in"
                : "all .5 ease-out",
          }}
        >


          <div className={navstyle.logoSection}>
            {!productMount.navMount && (
              <ContactMainOther
                // bgcolor={!navbar ? "red" : "yellow"}
                textcolor={!navbar ? navredux.color : "white"}
              />
            )}

            {/* <Link href="/" className={navstyle.logoText}> */}
            <img onClick={() => router.push("/")}
              src={
                navredux.logo && !navbar
                  ? "https://d3op2l77j7wnti.cloudfront.net/Images/navbar/whitelogobottom.png"
                  : "https://d3op2l77j7wnti.cloudfront.net/Images/navbar/blacklogo.png"
              }
              alt="image"
            />
            {/* </Link> */}
          </div>

          <div id={navstyle.bar}>
            <label htmlFor="checkbox">
              <IconContext.Provider value={{ className: navstyle.bars }} >
                <AiOutlineMenu onClick={handleMob} />
              </IconContext.Provider>
            </label>
          </div>

          {/* {!mobres && ( */}
            <div className={navstyle.dropdownBar} >
              <div className={navstyle.mobLists}>
                <li
                  onMouseEnter={homeHoverIn}
                  onMouseLeave={homeHoverOut}
                  style={{ color: navbar ? "black" : navredux.color }}
                >
                  <p> About </p>
                  <i
                    className={aboutH ? "bi bi-chevron-up" : "bi bi-chevron-down"}
                  ></i>
                </li>

                <li
                  onMouseEnter={solHoverIn}
                  onMouseLeave={solHoverOut}
                  style={{ color: navbar ? "black" : navredux.color }}
                >
                  <p>Features</p>
                  <i
                    className={
                      solution ? "bi bi-chevron-up" : "bi bi-chevron-down"
                    }
                  ></i>
                </li>

                <li
                  onMouseEnter={productHoverIn}
                  onMouseLeave={productHoverOut}
                  style={{ color: navbar ? "black" : navredux.color }}
                >
                  <p>Products</p>
                  <i
                    className={
                      product ? "bi bi-chevron-up" : "bi bi-chevron-down"
                    }
                  ></i>
                </li>

                <li
                  onMouseEnter={platformHoverIn}
                  onMouseLeave={platformHoverOut}
                  style={{ color: navbar ? "black" : navredux.color }}
                >
                  <p>Platform</p>
                  <i
                    className={
                      platform ? "bi bi-chevron-up" : "bi bi-chevron-down"
                    }
                  ></i>
                </li>

                <li
                  onMouseEnter={resHoverIn}
                  onMouseLeave={resHoverOut}
                  style={{ color: navbar ? "black" : navredux.color }}
                >
                  <p>Resources</p>
                  <i
                    className={
                      resource ? "bi bi-chevron-up" : "bi bi-chevron-down"
                    }
                  ></i>
                </li>

                <li
                  onClick={() => router.push("/pricing")}
                  style={{ color: navbar ? "black" : navredux.color }}
                >
                  Pricing
                </li>

                <li style={{ color: navbar ? "black" : navredux.color }}>
                  Support
                </li>
              </div>

              <button
                className={navstyle.callToAction}
                style={{
                  color: scroll ? "white" : "#ef4c23",
                  background: scroll ? "#ef4c23" : "white",
                  border: "none"
                }}
                onClick={() => router.push("/allproducts")}
              >
                Free Trial
              </button>

              <a target="_blank" href="https://service.bottomfunnel.net/">
                <button style={{ border: "none" }}
                  className={`${navstyle.callToAction} ${navstyle.buttonGradientAnimation}`}
                // onClick={() => router.push("https://service.bottomfunnel.net/")}
                >
                  Services
                </button>
              </a>
            </div>
          {/* )
          } */}

          {
            mobres && (
              <DropdownResp
                homeHoverIn={homeHoverIn}
                homeHoverOut={homeHoverOut}
                resHoverIn={resHoverIn}
                resHoverOut={resHoverOut}
                solHoverIn={solHoverIn}
                solHoverOut={solHoverOut}
                scroll={scroll}
                productMount={productMount}
                productHoverIn={productHoverIn}
                productHoverOut={productHoverOut}
                platformHoverIn={platformHoverIn}
                platformHoverOut={platformHoverOut}
              />
            )
          }
        </nav >

        {/* about drop down section code start */}
        {
          aboutH ? (
            <WhoWeAre
              homeHoverIn={homeHoverIn}
              homeHoverOut={homeHoverOut}
              scroll={scroll}
              productMount={productMount}
            />
          ) : null
        }
        {/* about drop down section code end */}

        {/* solutions drop down section code start */}
        {
          solution ? (
            <NavIndustries
              solHoverIn={solHoverIn}
              solHoverOut={solHoverOut}
              scroll={scroll}
              productMount={productMount}
            />
          ) : null
        }

        {/* product drop down section code start */}

        {
          product ? (
            <Products
              productHoverIn={productHoverIn}
              productHoverOut={productHoverOut}
              scroll={scroll}
              productMount={productMount}
            />
          ) : null
        }

        {
          platform ? (
            <Platform
              platformHoverIn={platformHoverIn}
              platformHoverOut={platformHoverOut}
              scroll={scroll}
              productMount={productMount}
            />
          ) : null
        }

        {
          resource ? (
            <Resource
              resHoverIn={resHoverIn}
              resHoverOut={resHoverOut}
              scroll={scroll}
              productMount={productMount}
            />
          ) : null
        }
      </div >
    </>
  );
};

export default Navbar;
