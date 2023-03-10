
import styles from "./ManagedserviceProviderBanner.module.css";
import Image from "next/image";
export const ManagedserviceProviderBanner = () => {
    return (
        <div className={styles.ManagedserviceProviderBannerParent}>
            <div className={styles.ManagedserviceProviderBannerParentFirstChild}>
                <h1>Effortless support for multiple
                    clients across channels
                </h1>
                <p>Manage complex IT requirements and infrastructure queries
                    via email, call, chat, or support portals with omnichannel
                    support software.</p>
                <button>Request For Demo</button>
            </div>
            <div className={styles.ManagedserviceProviderBannerParentSecChild}>
                <Image
                    src={"/Images/ManagedServiceProvider/banner.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />
            </div>
        </div>
    )
}