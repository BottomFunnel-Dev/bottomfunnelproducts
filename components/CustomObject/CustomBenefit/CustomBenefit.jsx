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
                    <li > <b>Improved Efficiency</b> </li>
                    <p>Custom objects can greatly improve efficiency in a variety of industries. Custom objects are tailored to meet specific needs and can be designed to streamline processes and eliminate unnecessary steps.
                    </p>
                    <li><b>Reusability</b></li>
                    <p>By creating custom objects that can be used across multiple processes and applications, businesses can save time and resources by avoiding the need to recreate the same functionality repeatedly.
                    </p>
                    <li><b>Increased Flexibility</b></li>
                    <p>
                    Custom objects can offer a range of benefits for businesses, but one of the most significant is increased flexibility. With custom objects, businesses have the ability to create unique data structures that align with their specific needs and workflows.
                    </p>
                   </ul>
                </div>
            </div>
        </div>    
    )
}