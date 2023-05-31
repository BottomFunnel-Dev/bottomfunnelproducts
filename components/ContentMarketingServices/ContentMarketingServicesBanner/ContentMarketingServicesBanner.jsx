
import styles from "./ContentMarketingServicesBanner.module.css";
import Image from "next/image";
export const ContentMarketingServicesBanner = () => {
    return (
        <div className={styles.ContentMarketingserviceParent}>
            <div className={styles.ContentMarketingserviceParentFirstChild}>
                <h1>Link Building Services Company
                </h1>
                <p>As a link building services company, we help brands create growth-driven link building
                    strategies. This enables brands to draw great backlinks from high DA websites and reach
                    the right audience. Increase your search engine ranking with our white hat link building
                    services via blogger outreach, resource link building, brand mentions and infographic
                    submission. Our link building strategy can boost your website's overall SEO performance
                    with our experts’ high-quality link building</p>
           <button>Check Link SEO Pricing</button>
            </div>
            <div className={styles.ContentMarketingserviceParentSecChild}>
            <Image
          src={"https://d3op2l77j7wnti.cloudfront.net/Images/ContentMarketingServices/banner.webp"}
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