import styles from "./GuideToShopFySegments.module.css"
import Image from "next/image"
export const GuideToShopFySegments = () => {
    return (
        <div className={styles.GuideToShopFySegmentsParent}>
            <div className={styles.GuideToShopFySegmentsHeading}>
            <h3> Reach the right audience with Segments</h3>
            <p className={styles.para}> Create audience segments based on their demographic, behaviour,
                order history, website journey, and more.</p>
            </div>
            <div className={styles.GuideToShopFySegmentsOnlyChild}>
                <div className={styles.GuideToShopFySegmentsOnlyChilddivone}>
                    <div>

                        
                        <Image
                            src={"https://d3op2l77j7wnti.cloudfront.net/Images/GuideToShopFy/icon21.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "20%", height: "20%" }}

                        />
                        <h5>Personalize customer experiences with Sopify based Segments </h5>
                        <hr />
                    </div>
                    <p  className={styles.para}> Segment buyers based on placed orders, items
                        in cart, abandoned cart, and more and set up
                        personalized campaigns for each segment.</p>
                </div>
                <div className={styles.GuideToShopFySegmentsOnlyChilddivtwo}>
                    <div>

                      
                        <Image
                            src={"https://d3op2l77j7wnti.cloudfront.net/Images/GuideToShopFy/icon22.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "20%", height: "20%" }}

                        />
                          <h5>Identify customers based
                            on their order history and
                            preferred products</h5>
                    </div>

                    <p  className={styles.para}>Use segments to identify your top-valued
                        customers based on their past purchases and
                        also know the products they re viewing next. Send them timely discounts and offers to nudge them into completing their purchase.</p>
                </div>
                <div className={styles.GuideToShopFySegmentsOnlyChilddivthree} >
                    <div>

                       
                        <Image
                            src={"https://d3op2l77j7wnti.cloudfront.net/Images/GuideToShopFy/icon23.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "20%", height: "20%" }}

                        />
                         <h5>Convert website visitors into payig cutomers</h5>
                    </div>

                    <p  className={styles.para}>Use segments to identify first-time website
                        visitors and catch their attention with timely
                        offers, customized discounts, and personalized
                        promotions</p>
                </div>
            </div>

        </div>
    )
}