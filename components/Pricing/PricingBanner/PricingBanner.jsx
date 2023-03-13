import styles from "./PricingBanner.module.css";


export const PricingBanner = () => {
    return (
        <div className={styles.PricingBannerParent}>
            <h1>Bottom Funnel Service Pricing</h1>
            <h4>Right-size Your IT Service Management</h4>
            <button>Sign Up For Free</button>
            <div className={styles.PricingBannerParentonlychild}>
               
                <button className={styles.PricingBannerParentbuttonborder}>Bottom Funnel Desk </button>
                <button className={styles.PricingBannerParentbuttonborder}>Bottom Funnel Chat </button>
                <button className={styles.PricingBannerParentbuttonborder}>Bottom Funnel Sales</button>
                <button className={styles.PricingBannerParentbuttonborder}>Bottom Funnel Services</button>
                <button className={styles.PricingBannerParentbuttonoborder}>Bottom Funnel Marketer</button>
                
               
            </div>
        </div>
    );
}