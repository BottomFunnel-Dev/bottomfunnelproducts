import styles from "./GuideToShopFybots.module.css"
import Image from "next/image"
export const GuideToShopFybots = () => {
    return (
        <div className={styles.GuideToShopFybotsaPrent}>

            <div className={styles.GuideToShopFybotsHeading}>
            <h3>Automate queries with bots</h3>
            <p>Reduce first time response to customer queries with intelligent bots. Set up workflows to handle order and
                payment related queries; for advanced queries, the bot can assign the conversation to an agent</p>
            </div>
            
            <div className={styles.GuideToShopFybotsOnlyChild}>
                <div className={styles.GuideToShopFybotsOnlyChilddivone}>
                    <div>

                        
                        <Image
                            src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/GuideToShopFy/icon26.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "20%", height: "20%" }}

                        />
                        <h5>Set up bots with
                            ready made
                            templates </h5>

                    </div>

                    <p>Get started with bots that work for
                        you, based on industry and use
                        case. Modify the bot to meet your
                        needs, preview the changes, and
                        deploy it on your website with
                        ease</p>

                </div>
                <div className={styles.GuideToShopbotsOnlyChilddivtwo}>
                    <div>

                      
                        <Image
                            src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/GuideToShopFy/icon27.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "20%", height: "20%" }}

                        />
                         <h5>Resolve
                            queries faster
                            with FAQs </h5>
                    </div>
                   

                    <p>Speed up your resolution time
                        and deflect common queries with
                        FAQs. Create FAQ articles about
                        the topics your customers ask the
                        most and help them find answers
                        faster.</p>
                </div>
                
                <div className={styles.GuideToShopFybotsOnlyChilddivfour} >
                    <div>

                    
                        <Image
                            src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/GuideToShopFy/icon29.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "20%", height: "20%" }}

                        />
                            <h5>Set up
                            WISMO bots</h5>
                    </div>

                    <p>Set up chat bots to interact with
                        customers and trigger the right
                        action based on the customer’s
                        input. Customers can get faster
                        resolution for queries like WISMO,
                        order confirmation, shipping
                        details, and more</p>
                </div>
                
            </div>

        </div>
    )
}