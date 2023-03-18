import styles from "./LandingSolution.module.css"
import Image from "next/image"
export const LandingSolution = () => {
    return (
        <div className={styles.LandingSolutionParent}>
            <h1>Looking for an all-in-one sales and marketing ? try Bottom Funnel sales suite </h1>
            <Image
                src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/LandingPages/Solution.png"}
                alt={"img"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "50%", height: "50%" }}

            />
        </div>
    );
};