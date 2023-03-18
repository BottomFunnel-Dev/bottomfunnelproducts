import styles from "./LandingBrand.module.css"
import Image from "next/image"
export const LandingBrand = () => {
    return (
        <div className={styles.LandingBrandParent}>
            <h1>Engage with customer and increase brand awarness on social media </h1>
            <div className={styles.Landingstrip} ></div>
            <div className={styles.LandingBrandChild}>
                <div>Choose from pre_designed templete </div>
                <div> Simplify design with the drag-and-drop builder</div>
                <div>Find perfect images to complete your page</div>
            </div>
            <div className={styles.LandingBrandfilterChild}>
              <div className={styles.LandingBrandButtons}>
                <button>Popular</button>
                <button>Filters</button>
              </div>
              <div className={styles.LandingBrandPhotos}>
                <div className={styles.LandingBrandPhotosfirstdiv}>
                    <div><Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/LandingPages/Rectangleone.png"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    
                /></div>
                    <div><Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/LandingPages/Rectangletwo.png"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    
                /></div>
                    <div><Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/LandingPages/Rectanglethree.png"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    
                /></div>
                    <div><Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/LandingPages/Rectanglefour.png"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    
                /></div>
                </div>
                <div className={styles.LandingBrandPhotossecdiv}>
                    <div><Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/LandingPages/Rectangleonefive.png"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    
                /></div>
                    <div><Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/LandingPages/Rectangleonesix.png"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    
                /></div>
                    <div><Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/LandingPages/Rectangleoneseven.png"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    
                /></div>
                    <div><Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/LandingPages/Rectangleoneeigth.png"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    
                /></div>
                </div>
              </div>
            </div>
        </div>
    )
}