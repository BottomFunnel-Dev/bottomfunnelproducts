
import styles from "./LineChatCompany.module.css"
import Image from "next/image"

export const LineChatCompany = () => {
    return (
        <div className={styles.lineChatCompanyParent}>
            <h1>
                You're in good company
            </h1>
            <div className={styles.lineChatCompanyParentchild}>
                <div>
                    <Image
                        src={"/Images/LineChat/logoone.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
                <div>
                    <Image
                        src={"/Images/LineChat/logotwo.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
                <div>
                    <Image
                        src={"/Images/LineChat/logothree.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
                <div>
                    <Image
                        src={"/Images/LineChat/logofour.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
                <div>
                    <Image
                        src={"/Images/LineChat/logofive.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
                <div>
                    <Image
                        src={"/Images/LineChat/logosix.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
            </div>

        </div>
    )
}