import styles from "./CustomBenefit.module.css";
import Image from "next/image"
export const CustomBenefit = () => {
    return (
         <div className={styles.customBenefitmain}>
            <h1 className={styles.customBenefitmainheading}>The benefits help you up employee and customer delight</h1>
            <div className={styles.customBenefitOnlyChild}>
                 <div className={styles.customBenefitImage}> 
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/customObject/custombenefit.png"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />
               </div> 
                <div style={{ marginLeft: "5%"}} className={styles.customBenefitlistdiv}>
                   <ul>
                    <li > <b>Agent</b> </li>
                    <p>Make every agent a superhero with complete context on the request on hand.
                    </p>
                    <li><b>Customer</b></li>
                    <p>Instill new confidence and delight in your customers with fast and efficient resolutions.
                    </p>
                    <li><b>Admin</b></li>
                    <p>
                        Feel Empowered to take growth decision with analytics and actionable insight.
                    </p>
                   </ul>
                </div>
            </div>
        </div>    
    )
}