import styles from "./MarketPlaceCollections.module.css"
import Image from "next/image"
export const MarketPlaceCollections = () => {
    return (
        <div className={styles.MarketPlaceCollectionsParent}>
            <h1>Collections to spark your productivity</h1>
            <div className={styles.MarketPlaceCollectionsParentchildone}>
                <div>
                    <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/MarketPlace/Collection1.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "80%" }}
                    />
                    <h3>Built by Bottom Funnel</h3>
                    <p>Powerful & feature-rich apps engineered by
                        Bottom Funnel</p>
                </div>
                
                <div>
                    <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/MarketPlace/Collection2.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "80%" }}
                    />
                    <h3>Top apps for E-commerce </h3>
                    <p>Provide superior support to your E-commerce
                        customers </p>
                </div>

                <div>
                    <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/MarketPlace/Collection3.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "80%" }}
                    />
                    <h3>Remote desktop support</h3>
                    <p>Easy & secure remote desktop support </p>
                </div>
            </div>

            <div className={styles.MarketPlaceCollectionsParentchildtwo}>
                <div>
                    <h2> Build and publish your app on Bottom funnel Marketplace </h2>
                    <p> Join a growing community of developers and start building. </p>
                    <button> VISIT OUR DEVELOPER PORTAL </button>
                </div>

                <div>
                    <h2> Join a growing community of developers and start building. </h2>
                    <p> Start a free trial now. No credit card required </p>
                    <button> VIEW ALL PRODUCTS </button>
                </div>
            </div>
        </div>
    );
};