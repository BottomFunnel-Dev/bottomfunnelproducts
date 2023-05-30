
import styles from "./MediaAndEntertainmentBanner.module.css";
import Image from "next/image";
export const MediaAndEntertainmentBanner = () => {
    return (
        <div className={styles.MediaAndEntertainmentBannerParent}>
            <div className={styles.MediaAndEntertainmentBannerParentFirstChild}>
                <h1>Make customers the hero of
                    your story
                </h1>
                <p>Rich content is rapidly transforming customer expectations in
the media and entertainment industry. Stand out from the
competition by providing personalized customer experiences
and fast customer support.</p>
                <button>Sign Up For Free</button>
            </div>
            <div className={styles.MediaAndEntertainmentBannerParentSecChild}>
                <Image
                    src={"https://d3op2l77j7wnti.cloudfront.net/Images/MediaAndEntertainment/banner.webp"}
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