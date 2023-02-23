import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import prodnav from "./ProdNavbar.module.css";

import DropDown1 from "./DropDown1";
import DropDown2 from "./DropDown2";
import { DropDown3 } from "./DropDown3";
import Image from "next/image";
import DropDown5 from "./DropDown5";

export const ProdNavbar = ({ data }) => {
  const [dropdown, setDropdown] = useState("none");
  const [scroll, setScroll] = useState(false);

  function handleHover(input) {
    setDropdown(() => input);
  }

  const navBackground = () => {
    if (window.scrollY > 100) {
      setScroll(() => true);
    } else {
      setScroll(() => false);
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
      }}
    >
      <div className={prodnav.productsNavbarMain}>
        <div className={prodnav.deskLogo}>
          <span>
            <Image
              src={data.logo}
              alt={data.logo}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </span>
          <h5>{data.title}</h5>
        </div>
        <div className={prodnav.deskList} style={{ width: data.width }}>
          {data.productsList ? (
            <p
              onMouseEnter={() => handleHover("dropDown1")}
              onMouseLeave={() => handleHover("none")}
            >
              {data.productsList.title}
              <i
                class={
                  dropdown == "dropDown1"
                    ? "bi bi-chevron-up"
                    : "bi bi-chevron-down"
                }
              ></i>
            </p>
          ) : (
            <p
              onMouseEnter={() => handleHover("dropDown5")}
              onMouseLeave={() => handleHover("none")}
            >
              {data.list1.title}
              <i
                class={
                  dropdown == "dropDown5"
                    ? "bi bi-chevron-up"
                    : "bi bi-chevron-down"
                }
              ></i>
            </p>
          )}

          {data.list2 ? (
            <p
              onMouseEnter={() => handleHover("dropDown2")}
              onMouseLeave={() => handleHover("none")}
            >
              {data.list2.title}{" "}
              <i
                class={
                  dropdown == "dropDown2"
                    ? "bi bi-chevron-up"
                    : "bi bi-chevron-down"
                }
              ></i>
            </p>
          ) : null}

          <p>Pricing</p>

          {data.list3 ? (
            <p
              onMouseEnter={() => handleHover("dropDown3")}
              onMouseLeave={() => handleHover("none")}
            >
              {data.list3.title}{" "}
              <i
                class={
                  dropdown == "dropDown3"
                    ? "bi bi-chevron-up"
                    : "bi bi-chevron-down"
                }
              ></i>
            </p>
          ) : null}

          {data.list4 ? (
            <p
              onMouseEnter={() => handleHover("dropDown4")}
              onMouseLeave={() => handleHover("none")}
            >
              {data.list4.title}{" "}
              <i
                class={
                  dropdown == "dropDown4"
                    ? "bi bi-chevron-up"
                    : "bi bi-chevron-down"
                }
              ></i>
            </p>
          ) : null}
          <p>Sign In</p>
          <button>Free Trial</button>
        </div>
      </div>

      {/* service drop down section code start */}
      {dropdown == "dropDown1" ? (
        <DropDown1
          handleHover={handleHover}
          scroll={scroll}
          more={data.productsList.more}
          productDesk={data.productsList.products}
        />
      ) : null}

      {dropdown == "dropDown2" ? (
        <DropDown2
          handleHover={handleHover}
          scroll={scroll}
          more={data.list2.more}
          data={data.list2.products}
        />
      ) : null}

      {dropdown == "dropDown3" ? (
        <DropDown3
          handleHover={handleHover}
          scroll={scroll}
          more={data.list3.more}
          data={data.list3.products}
        />
      ) : null}

      {dropdown == "dropDown4" ? (
        <DropDown5
          handleHover={handleHover}
          scroll={scroll}
          ProdData={{
            data: data.list4.products,
            more: data.list4.more,
            hover: "dropDown4",
            scrollTop: scroll,
          }}
          postion={data.list4.position}
        />
      ) : null}

      {dropdown == "dropDown5" ? (
        <DropDown5
          handleHover={handleHover}
          scroll={scroll}
          ProdData={{
            data: data.list1.products,
            more: data.list1.more,
            hover: "dropDown5",
            scrollTop: scroll,
          }}
          postion={data.list1.position}
        />
      ) : null}
    </div>
  );
};
