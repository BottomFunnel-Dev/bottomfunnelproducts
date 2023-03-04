import styles from "./GuideToShopFySegments.module.css"
import Image from "next/image"
export const GuideToShopFySegments = () => {
    return (
        <div className={styles.GuideToShopFySegmentsParent}>
            <div className={styles.GuideToShopFySegmentsHeading}>
            <h1> Reach the right audience with Segments</h1>
            <p>Create audience segments based on their demographic, behaviour,
                order history, website journey, and more.</p>
            </div>
            <div className={styles.GuideToShopFySegmentsOnlyChild}>
                <div className={styles.GuideToShopFySegmentsOnlyChilddivone}>
                    <div>

                        <h3>Personalize customer experiences with Sopify based Segments </h3>
                        <Image
                            src={"/Images/GuideToShopFy/icon21.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "15%", height: "15%" }}

                        />
                        <hr />
                    </div>
                    <p>Segment buyers based on placed orders, items
                        in cart, abandoned cart, and more and set up
                        personalized campaigns for each segment.</p>
                </div>
                <div className={styles.GuideToShopFySegmentsOnlyChilddivtwo}>
                    <div>

                        <h3>Identify customers based
                            on their order history and
                            preferred products</h3>
                        <Image
                            src={"/Images/GuideToShopFy/icon22.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "15%", height: "15%" }}

                        />
                    </div>

                    <p>Use segments to identify your top-valued
                        customers based on their past purchases and
                        also know the products they re viewing next. Send them timely discounts and offers to nudge them into completing their purchase.</p>
                </div>
                <div className={styles.GuideToShopFySegmentsOnlyChilddivthree} >
                    <div>

                        <h3>Convert website visitors into payig cutomers</h3>
                        <Image
                            src={"/Images/GuideToShopFy/icon23.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "15%", height: "15%" }}

                        />
                    </div>

                    <p>Use segments to identify first-time website
                        visitors and catch their attention with timely
                        offers, customized discounts, and personalized
                        promotions</p>
                </div>
            </div>

        </div>
    )
}