
import styles from "./LineChatCompany.module.css"
import Image from "next/image"

export const LineChatCompany = () => {
    const lined = [{img:"/Images/LineChat/logoone.webp"},
    {img:"/Images/LineChat/logotwo.webp"},
    {img:"/Images/LineChat/logothree.webp"},
    {img:"/Images/LineChat/logofour.webp"},
    {img:"/Images/LineChat/logofive.webp"},
    {img:"/Images/LineChat/logosix.webp"}]
    return (
        <div className={styles.lineChatCompanyParent}>
            <h2>
                You're in good company
            </h2>
            <div className={styles.lineChatCompanyParentchild}>
                {lined.map((item) => {
                    return(
                        <div>
                        <Image
                            src={item.img}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
    
                        />
                    </div>
                    );
                })}
               
               
            </div>

        </div>
    )
}