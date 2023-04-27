
import styles from "./JourneysWhy.module.css"
import Image from "next/image"

export const JourneysWhy = () => {
    const journeysd = [{img:"/Images/Journeys/iconone.webp",hd:"Contextual customized conversation",p:"Proactively reach out to provide contextual customer service"},
     {img:"/Images/Journeys/icontwo.webp",hd:"Be where your customers are",p:"Enagage with your customes through chat or bots on emails, WhatsApps , SMS , or social media ."},
     {img:"/Images/Journeys/iconthree.webp",hd:"Personlized engagement",p:"Personalize their experience based on thier behavior and interactions"},]
    return (
        <div className={styles.journeysWhyParent}>
            <div className={styles.journeysWhyHeading}>
                <h1>Why Journeys?</h1>
                <h6>Journeys are workflows to personilize angagement with your customers
                    and visitores their lifecycles
                </h6>
            </div>
            <div className={styles.journeysWhychild}>
                {journeysd.map((item) => {
                    return(
                        <div>
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
                        <h3>{item.hd}</h3>
                        <p>{item.p}</p>
                    </div>
                    );
                })}
               
               
            </div>

        </div>
    )
}