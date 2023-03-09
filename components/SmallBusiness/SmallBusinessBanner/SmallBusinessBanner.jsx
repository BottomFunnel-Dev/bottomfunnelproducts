import styles from "./SmallBusinessBanner.module.css"
import Image from "next/image";
export const SmallBusinessBanner = () => {
    return (
        <div className={styles.SmallBusinessBannerParent}>
            <div className={styles.SmallBusinessBannerParentfirstchind}>
                <h1>Help desk software for small business </h1>
                <p className={styles.para}>Build Customers relationship taht fuel business growth using Freashdesk ,an instuitiv an daffordable help desk platform</p>
                <p>
                &#10004; Affordable  &#10004; Right-sized  &#10004;Automated
                </p>
                <button>GET STARTED FOR FREE</button>
            </div>
            <div className={styles.SmallBusinessBannerParentSecchild}>
                <Image
                    src={"/Images/Small-Business/banner.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />
            </div>
        </div>
    );
}