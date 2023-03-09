import styles from "./MediaAndEntertainmentSpotLight.module.css";
import Image from "next/image";
export const MediaAndEntertainmentSpotLight = () => {
    return (
        <div className={styles.MediaAndEntertainmentSpotLightParent}>
            <div className={styles.MediaAndEntertainmentSpotLightParentFirstChild}>

                <div>
                    <h1> Put the spotlight on customer
                        preferences
                    </h1>
                    <p>Be available on all of your customers’ preferred channels
                        including email, phone, live chat, social media, and mobilefirst messaging applications such as WhatsApp and Facebook
                        Messenger.</p>
                    <ul>
                        <li>Unify communication from multiple channels into a single
                            dashboard. Resolve customer issues with complete context and
                            create seamless experiences across channels</li>
                        <li> Leverage 650+ one-click integrations and flexible APIs to access
                            customer data right within Freshdesk and offer personalized
                            assistance
                        </li>
                        <li>
                            Give your customers VIP treatment by offering priority support
                            based on their subscriptions, and prior support interactions.
                        </li>
                    </ul>
                </div>
                <div>
                    <Image
                        src={"/Images/MediaAndEntertainment/Image1.webp"}
                        alt={"image"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }} />
                </div>
            </div>
            <div className={styles.MediaAndEntertainmentSpotLightParentsecChild}>
                <div>
                    <Image
                        src={"/Images/MediaAndEntertainment/Image2.webp"}
                        alt={"image"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }} />
                </div>
                <div>
                    <h1>Build loyalty with communities and
                        24x7 support
                    </h1>
                    <p>Launch AI-enabled chatbots, self-service portals, and user
                        communities to help customers find information instantly
                        without human intervention</p>
                    <ul>
                        <li>Enable customers to find answers on their own by publishing
                            FAQs, and solution articles</li>
                        <li>Offer automated resolutions to common issues including
                            altering subscription packages and troubleshooting payment
                            errors through conversational chatbots on your mobile app.</li>
                        <li>Build a thriving customer community by setting up discussion
                            boards and user forums.</li>
                    </ul>
                </div>
            </div>
            <div className={styles.MediaAndEntertainmentSpotLightParentthirdChild}>

                <div>
                    <h1>Control the bigger picture
                    </h1>
                    <p>Take a proactive approach by predicting customer needs
                        beforehand, tracking frustration signals, and analyzing trends
                        in tickets to improve customer experience and internal
                        workflows.</p>
                    <ul>
                        <li>Keep customers in the know by broadcasting product updates,
                            and network downtimes in advance</li>
                        <li>Track customer satisfaction by automating personalized surveys
                        </li>
                        <li>Detect customer frustration signals such as mouse trashing and
                            dead clicks and offer proactive assistance using Freshdesk help
                            widget</li>
                        <li>¥ Get complete visibility into team performance using live
                            dashboards, reports, and custom analytics.</li>
                    </ul>
                </div>
                <div>
                    <Image
                        src={"/Images/MediaAndEntertainment/Image3.webp"}
                        alt={"image"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }} />
                </div>
            </div>
            <div className={styles.MediaAndEntertainmentSpotLightParentFfourthChild}>
                <div>
                    <Image
                        src={"/Images/MediaAndEntertainment/Image4.webp"}
                        alt={"image"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }} />
                </div>
                <div>
                    <h1>Manage projects without losing
                        the plot
                    </h1>
                    <p>Whether you’re running an ad agency, a publication, or a
                        streaming service or industry, keep your clients and partners in
                        the loop with contextual collaboration.</p>
                    <ul>
                        <li>Enable different teams to collaborate on a media project or a
                            customer issue with complete transparency</li>
                        <li>Bring mass communication, content, audio or video streaming, and
                            digital asset management experts together for consultation using
                            Freshdesk Collaborators</li>
                        <li> Track progress under various stages of production and improve
                        accountability using service level agreements (SLAs).</li>
                </ul>
            </div>
        </div>

        </div >
    )
}