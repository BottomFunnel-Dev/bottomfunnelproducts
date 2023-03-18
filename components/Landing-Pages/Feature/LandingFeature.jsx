import styles from "./LandingFeature.module.css";
import Image from "next/image";
export const LandingFeature = () => {
    return (
        <div className={styles.landingFatureParent}>
            <h1>More Landing Pages feature to generate more leads </h1>
            <div className={styles.landingFatureOnlyChild}>
                <div className={styles.landingFatureImage}>
                    <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/LandingPages/Feature.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
                <div className={styles.landingFatureContent}>
                    <dl>
                        <dt> Desktop and Mobile responsive pages</dt>
                        <dd>Customize your pages for desktop and mobile device to improve visitor engagement on your LandingPages</dd>
                        <hr />
                        <dt> Create multi-step lamding pages</dt>
                        <dd>take your visitor through a funnel of page to complete specific objective  </dd>
                        <hr />
                        <dt>Choose a domain</dt>
                        <dd> Public your landing pages on your business domain or subdomain </dd>
                    </dl>
                </div>
            </div>
        </div>
    );
}