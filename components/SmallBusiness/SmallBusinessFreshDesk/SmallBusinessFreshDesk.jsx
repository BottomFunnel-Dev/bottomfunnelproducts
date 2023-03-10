import styles from "./SmallBusinessFreshDesk.module.css";
import Image from "next/image";
export const SmallBusinessFreshDesk = () => {
    return (
        <div className={styles.SmallBusinessFreshDeskParent}>
            <h1>More reason why SMPs (And enterprises) love Freshdesk</h1>
            <div className={styles.SmallBusinessFreshDeskParentfirstChild}>
                <div>
                    <div>
                        <Image
                            src={"/Images/Small-Business/image1.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "10%", height: "10%" }}
                        />
                        <h5>Transparent</h5>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime debitis enim illo corrupti obcaecati </p>
                </div>


                <div>
                    <div>
                        <Image
                            src={"/Images/Small-Business/image1.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "10%", height: "10%" }}
                        />
                        <h5>Transparent</h5>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime debitis enim illo corrupti obcaecati </p>
                </div>


                <div>
                    <div>
                        <Image
                            src={"/Images/Small-Business/image1.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "10%", height: "10%" }}
                        />
                        <h5>Transparent</h5>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime debitis enim illo corrupti obcaecati </p>
                </div>
            </div>



            <div className={styles.SmallBusinessFreshDeskParentSecChild}>

                <div>
                    <div>
                        <Image
                            src={"/Images/Small-Business/image1.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "10%", height: "10%" }}
                        />
                        <h5>Transparent</h5>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime debitis enim illo corrupti obcaecati </p>
                </div>


                <div>
                    <div>
                        <Image
                            src={"/Images/Small-Business/image1.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "10%", height: "10%" }}
                        />
                        <h5>Transparent</h5>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime debitis enim illo corrupti obcaecati </p>
                </div>
            </div>
        </div>
    );
}