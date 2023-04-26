import styles from "./MarketPlaceFeature.module.css";
import Image from "next/image";

export const MarketPlaceFeature = () => {
    const data = [{img:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/MarketPlace/feature1.png",hd:"Atlassian Jira Plus",p:"Bottom Funnel offers Atlassian Jira Plus integration and customization services to optimize project management workflows."},
    {img:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/MarketPlace/feature2.png",hd:"Advanced automation",p:"Bottom Funnel offers advanced automation solutions to streamline business processes and improve efficiency. Contact us!"},
    {img:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/MarketPlace/feature3.png",hd:"Device42 for Bottom Funnel service",p:"Bottom Funnel offers seamless integrations with Bottom Funnel service to provide IT asset management and tracking capabilities."},
    {img:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/MarketPlace/feature4.png",hd:"Good Data for Bottom Funnel desk",p:"GoodData for Bottom Funnel desk is a powerful data analytics solution that helps businesses analyze. Contact us!"}]
    return (
        <div className={styles.MarketPlaceFeatureParent}>
            <h2>Featured apps</h2>
            <div className={styles.line}></div>
            <div className={styles.MarketPlaceFeatureChild}>
            {data.map((item) =>{
                return(
                    <div>
                        <div className={styles.MarketPlaceFeatureimg}>
                            <Image className="marketplaceSectionImage"
                                src={item.img}
                                alt={"img"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>
    
                        <h3>{item.hd}</h3>
                        <p>{item.p}</p>
                </div>  
                );
            })}
            </div>
            
        </div>
    );
};