import styles from "./GuideToShopFyMarketing.module.css"
import Image from "next/image"
export const GuideToShopFyMarketing = () => {
    return (
        <div className={styles.GuideToShopFyMarketingaPrent}>
            <h1>Automate marketing campaigns</h1>
            <p>Trigger the right message at the right time on channels of choice to increase engagement and promote your products </p>
            <div className={styles.GuideToShopFyMarketingfirstChild}>
                <div className={styles.GuideToShopFyMarketingfirstChilddivone}>
                    <div>

                        <h1>Email Campaigns</h1>
                        <Image
                            src={"/Images/GuideToShopFy/icon8.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "15%", height: "15%" }}

                        />

                    </div>

                    <p>Create, design, and deliver email campaigns to build better customer relationships and improve conversions.</p>

                </div>
                <div className={styles.GuideToShopFyMarketingfirstChilddivtwo}>
                    <div>

                        <h1>WhatsApp Campaigns </h1>
                        <Image
                            src={"/Images/GuideToShopFy/icon9.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "15%", height: "15%" }}

                        />
                    </div>

                    <p>send promotional messages, re-engage with cart abandoners, and offer support to customerswith WhatsApp campaigns.</p>
                </div>
                <div className={styles.GuideToShopFyMarketingfirstChilddivthree} >
                    <div>

                        <h1>SMS Campaigns </h1>
                        <Image
                            src={"/Images/GuideToShopFy/icon10.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "15%", height: "15%" }}

                        />
                    </div>

                    <p>Create SMS campaigns to keep
                        customers in the loop on new
                        offers, order updates, reminders,
                        and more. Preview your message
                        while crafting it and send test
                        messages to see how the
                        customer would receive it</p>
                </div>
                <div className={styles.GuideToShopFyMarketingfirstChilddivfour} >
                    <div>

                        <h1>Chat
                            Campaigns </h1>
                        <Image
                            src={"/Images/GuideToShopFy/icon11.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "15%", height: "15%" }}

                        />
                    </div>

                    <p>Run triggered or targetted
                        messages on your website to
                        engage with your audience at the
                        right time, promote products, and
                        accelerate conversion.</p>
                </div>
            </div>
            <div className={styles.GuideToShopFyMarketingfirstChild}>
                <div className={styles.GuideToShopFyMarketingfirstChilddivone}>
                    <div>

                        <h1>Personalize
                            emails with
                            Shopify
                            coupon codes</h1>
                        <Image
                            src={"/Images/GuideToShopFy/icon12.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "15%", height: "15%" }}

                        />

                    </div>

                    <p>Add Shopify coupon codes to
                        your email campaigns to recover
                        abandoned carts, drive repeated
                        purchases, and boost your
                        conversion rates</p>

                </div>
                <div className={styles.GuideToShopFyMarketingfirstChilddivtwo}>
                    <div>

                        <h1>Add recently
                            viewed items to
                            re engage
                            shoppers  </h1>
                        <Image
                            src={"/Images/GuideToShopFy/icon13.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "15%", height: "15%" }}

                        />
                    </div>

                    <p>Target the hottest leads via
                        emails, interest them with their
                        recently viewed products, and
                        redirect them to your website to
                        drive conversions</p>
                </div>
                <div className={styles.GuideToShopFyMarketingfirstChilddivthree} >
                    <div>

                        <h1>Bring cart
                            abandoners
                            back to the
                            website</h1>
                        <Image
                            src={"/Images/GuideToShopFy/icon14.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "15%", height: "15%" }}

                        />
                    </div>

                    <p>Reclaim abandoned carts by
                        sending them the right message
                        at the right time with enticing
                        offers and nudge your customers
                        to complete their purchase</p>
                </div>
                <div className={styles.GuideToShopFyMarketingfirstChilddivfour} >
                    <div>

                        <h1>Target website
                            visitors</h1>
                        <Image
                            src={"/Images/GuideToShopFy/icon15.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "15%", height: "15%" }}

                        />
                    </div>

                    <p>Engage with website visitors on
                        chat; target them with exclusive
                        offers and discounts personalized
                        for the products they are viewing.</p>
                </div>
            </div>




        </div>
    )
}