// GoogleBusinessMessageCustomer
import styles from "./GoogleBusinessMessageCustomer.module.css"
import Image from "next/image"
export const GoogleBusinessMessageCustomer = () => {
    return (
        <div className={styles.GoogleBusinessMessageCustomerParent}>
            <h1>Enable customers to reach you from where they already are
            </h1>
            <div className={styles.GoogleBusinessMessageCustomerOnlyChild}>
                <div className={styles.GoogleBusinessMessageCustomerOnlyChilddivone}>
                    <div className={styles.GoogleBusinessMessageCustomerOnlyChilddivonecontent}>
                        <h3>Manage all your brands and store locations from one
                            place</h3>
                        <p>Create product and location-specific profiles to manage all
                            customer conversations from Freshchat</p>
                        <p>With this native integration (built on Bottom Funnel Neo), you can
                        </p>
                        <ul>
                            <li>Enable customers to start a conversation with the nearest
                                branch of your business</li>
                            <li>Support customers as they search for your business on
                                Google Search or Maps</li>

                        </ul>
                    </div>
                    <div className={styles.GoogleBusinessMessageCustomerOnlyChilddivoneimage}>
                        <Image
                            src={"https://d3op2l77j7wnti.cloudfront.net/Images/GoogleBusiness/one.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                </div>
                <div className={styles.GoogleBusinessMessageCustomerOnlyChilddivone}>

                    <div className={styles.GoogleBusinessMessageCustomerOnlyChilddivoneimage}>
                        <Image
                            src={"https://d3op2l77j7wnti.cloudfront.net/Images/GoogleBusiness/two.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                    <div className={styles.GoogleBusinessMessageCustomerOnlyChilddivonecontent}>
                        <h3>Engage customers with contextual support</h3>
                        <p>Initiate helpful conversations with high-intent users
                            who discover your business through Google Search
                            and MapsÕ</p>
                        <p>Support your customers at every stage of their
                            journey, and start building long-lasting relationships
                            one conversation at a time.</p>

                    </div>
                </div>
                <div className={styles.GoogleBusinessMessageCustomerOnlyChilddivone}>
                    <div className={styles.GoogleBusinessMessageCustomerOnlyChilddivonecontent}>
                        <h3>Enable round-the-clock support with chatbots
                            and automation</h3>
                        <p>Handle rush hours with ease using AI-powered chatbots and
                            automation</p>
                        <p>With the Freshchat - Google s Business Messages integrationÆ
                            :</p>
                        <ul>
                            <li>Empower your live agents and chatbots to work together and
                                provide round-the-clock service on Google</li>
                            <li> Deflect repetitive questions and free-up your agent s time to
                                solve complex queriesÔs</li>
                            <li>Capture customer information using chatbots, and connect
                                them to your agents whenever needed.</li>
                        </ul>
                    </div>
                    <div className={styles.GoogleBusinessMessageCustomerOnlyChilddivoneimage}>
                        <Image
                            src={"https://d3op2l77j7wnti.cloudfront.net/Images/GoogleBusiness/three.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                </div>
            </div>

        </div>
    )
}