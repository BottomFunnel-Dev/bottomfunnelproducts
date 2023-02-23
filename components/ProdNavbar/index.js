import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import prodnav from "./ProdNavbar.module.css";

import DropDown1 from "./DropDown1";
import DropDown2 from "./DropDown2";
import { DropDown3 } from "./DropDown3";
import { DropDown4 } from "./DropDown4";
import Image from "next/image";
import DropDown5 from "./DropDown5";

export const ProdNavbar = ({ data }) => {
  const navigate = useRouter();
  const [dropdown, setDropdown] = useState("none");
  const [productnavbar, setproductNabvar] = useState(false);
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
      <div className={prodnav.deskList}>
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

        <p
          onMouseEnter={() => handleHover("dropDown3")}
          onMouseLeave={() => handleHover("none")}
        >
          Solutions{" "}
          <i
            class={
              dropdown == "dropDown3"
                ? "bi bi-chevron-up"
                : "bi bi-chevron-down"
            }
          ></i>
        </p>

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
        <DropDown4
          handleHover={handleHover}
          scroll={scroll}
          more={data.list4.more}
          data={data.list4.products}
        />
      ) : null}

      {dropdown == "dropDown5" ? (
        <DropDown5
          handleHover={handleHover}
          scroll={scroll}
          more={data.list1.more}
          data={data.list1.products}
        />
      ) : null}
    </div>
  );
};
