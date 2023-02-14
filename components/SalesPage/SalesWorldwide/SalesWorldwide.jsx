import React from 'react'
import style from "./SalesWorldwide.module.css";
import Image from 'next/image';


export const SalesWorldwide = () => {
  return (
    <div className={style.SalesWorldwideheading}>
        <h1>Trusted by businesses worldwide</h1>
        <div className={style.SalesWorldwideimagebox}>
            <div className={style.SalesWorldwideimage}>
            <Image
          src={"/Images/SalesPagePhotos/multichoice.webp"}
          alt={"/Images/SalesPagePhotos/multichoice.webp"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
                {/* <img src="/Images/SalesPagePhotos/multichoice.png" alt="logo" /> */}
            </div>
            <div className={style.SalesWorldwideimage}>
            <Image
          src={"/Images/SalesPagePhotos/brewdog.webp"}
          alt={"/Images/SalesPagePhotos/brewdog.webp"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
                {/* <img src="/Images/SalesPagePhotos/brewdog.png" alt="logo" /> */}
            </div>
            <div className={style.SalesWorldwideimage}>
            <Image
          src={"/Images/SalesPagePhotos/Bridge.webp"}
          alt={"/Images/SalesPagePhotos/Bridge.webp"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
                {/* <img src="/Images/SalesPagePhotos/Bridge.png" alt="logo" /> */}
            </div>
            <div className={style.SalesWorldwideimage}>
            <Image
          src={"/Images/SalesPagePhotos/fiverr.webp"}
          alt={"/Images/SalesPagePhotos/fiverr.webp"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
                {/* <img src="/Images/SalesPagePhotos/fiverr.png" alt="logo" /> */}
            </div>
            <div className={style.SalesWorldwideimage}>
            <Image
          src={"/Images/SalesPagePhotos/klarna.webp"}
          alt={"/Images/SalesPagePhotos/klarna.webp"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
                {/* <img src="/Images/SalesPagePhotos/klarna.png" alt="logo" /> */}
            </div>
            <div className={style.SalesWorldwideimage}>
            <Image
          src={"/Images/SalesPagePhotos/bluenile.webp"}
          alt={"/Images/SalesPagePhotos/bluenile.webp"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />

                {/* <img src="/Images/SalesPagePhotos/bluenile.png" alt="logo" /> */}
            </div>
            <div className={style.SalesWorldwideimage}>
            <Image
          src={"/Images/SalesPagePhotos/itv.webp"}
          alt={"/Images/SalesPagePhotos/itv.webp"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
                {/* <img src="/Images/SalesPagePhotos/itv.png" alt="logo" /> */}
            </div>
            <div className={style.SalesWorldwideimage}>
            <Image
          src={"/Images/SalesPagePhotos/travix.webp"}
          alt={"/Images/SalesPagePhotos/travix.webp"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
                {/* <img src="/Images/SalesPagePhotos/travix.png" alt="logo" /> */}
            </div>
        </div>

    </div>
  )
}
