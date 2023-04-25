import styles from "./MarketPlaceCollections.module.css"
import Image from "next/image"
export const MarketPlaceCollections = () => {
 const Collectionsdata = [
        {img:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/MarketPlace/Collection1.webp",hd:"Built by Bottom Funnel",p:"High-quality and reliable results."},
        {img:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/MarketPlace/Collection2.webp",hd:"Top apps for E-commerce",p:"Get your shop online with Bottom Funnel's e-commerce solution."},
        {img:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/MarketPlace/Collection3.webp",hd:"Remote desktop support",p:"Offer the best technical support with our remote desktop support."}]

        const Collectionsdata2 = [{heading:"Create Your Own Marketplace with Bottom Funnel",p:"Publish your mobile app with our marketplace",btn:"VISIT OUR DEVELOPER PORTAL"},
        {heading:"Join a growing community of developers",p:"Let’s start with building something new with like-minded community",btn:"VIEW ALL PRODUCTS"}]
    return (
        <div className={styles.MarketPlaceCollectionsParent}>
            <h2>Collections to spark your productivity</h2>
            <div className={styles.MarketPlaceCollectionsParentchildone}>
            {Collectionsdata.map((item)=>{
            return( <div>
                <Image
                    src={item.img}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "80%" }}
                />
                <h3>{item.hd}</h3>
                <p>{item.p}</p>
            </div>);
            })}
            </div>

            <div className={styles.MarketPlaceCollectionsParentchildtwo}>
                {Collectionsdata2.map((item)=>{
                    return(
                 <div>
                    <h2>{item.heading}</h2>
                    <p> {item.p}</p>
                    <button>{item.btn}</button>
                </div>
                    );
                })}
                

                
            </div>
        </div>
    );
}