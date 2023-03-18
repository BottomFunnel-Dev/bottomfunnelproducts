import styles from "./MarketPlaceBanner.module.css"
import Image from "next/image"
export const MarketPlaceBanner = () => {
    return (
        <div className={styles.MarketPlaceBannerParent}>
            
            <h1>Get more out of your
                <span className={styles.MarketPlaceBannerBotttomFunnel}> Bottom Funnels   </span> products</h1>

            <div className={styles.MarketPlaceBannerSearchdiv}>
                <div className={styles.MarketPlaceBannerCheckbox}>
                    <div className={styles.MarketPlaceBannerCheckboxone}>
                        <input type="checkbox" />
                        <p>Free apps</p>
                    </div>

                    <div className={styles.MarketPlaceBannerCheckboxtwo}>
                        <input type="checkbox" />
                        <p>Paid apps</p>
                    </div>
                </div>
                
                <div className={styles.MarketPlaceBannerWrap}>
                    <div className={styles.MarketPlaceBannerSearch}>
                        <input type="text" className={styles.MarketPlaceBannerSearchTerm} placeholder="Search Apps" />
                        <button type="submit" className={styles.MarketPlaceBannerSearchButton}>
                            <Image
                                src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/MarketPlace/Search.png"}
                                alt={"img"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "50%", height: "50%" }}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};