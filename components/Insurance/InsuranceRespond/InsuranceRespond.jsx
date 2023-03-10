import React from "react";
import styles from "./InsuranceRespond.module.css"
import Image from "next/image";
export const InsuranceRespond = () => {
    return (
        <div className={styles.InsuranceRespondParent}>

            <div className={styles.InsuranceRespondParentfirstchild}>
                <div>

                    <h1>
                        Respond quickly by
                        streamlining customer data
                    </h1>
                    <p>
                        Access all your customer details in a single, omnichannel help
                        desk without switching between multiple systems to fetch
                        data related to the industry.
                    </p>
                    <ul>
                        <li>
                            Email, instant messaging, phone, or social media - no matter what
                            the channel is, respond to customers from a unified view of all
                            interactions
                        </li>
                        <li>
                            Instant access to historical customer data from a single,
                            centralized location
                        </li>
                        <li>
                            Integrate with 650+ apps or build your custom apps to easily
                            access background info such as ERP, payment processing, and
                            claims history on customer profiles within the same ticket.
                        </li>
                    </ul>
                </div>
                <div  className={styles.InsuranceRespondParentimage} >

                    <Image
                        src={"/Images/Insurance/Image1.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
            </div>




            <div className={styles.InsuranceRespondParentsecchild}>
                <div className={styles.InsuranceRespondParentimage}>

                    <Image
                        src={"/Images/Insurance/Image2.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
                <div>

                    <h1>
                        Automate complex tasks with workflows
                        and RPAs
                    </h1>
                    <p>
                        Insurance processing involves a lot of manual work for agents,
                        from onboarding a customer to performing due diligence on
                        claims. Automate these tasks with workflows and agent-assist
                        RPA bots.
                    </p>
                    <ul>
                        <li>
                            Deploy agent-facing RPA bots to automate complex backend
                            processes such as document perusal, claims processing, risk
                            analysis, and background verification
                        </li>
                        <li>
                            Create support workflows that get triggered on SLAs, keywords,
                            request types, and escalations
                        </li>
                        <li>
                            Enable agents to save time by replying with relevant canned
                            responses and support articles suggested by the agent-assist
                            bot.
                        </li>
                    </ul>
                </div>

            </div>


            <div className={styles.InsuranceRespondParentthirdchild}>
                <div>

                    <h1>
                        Improve customer loyalty by
                        personalizing support
                    </h1>
                    <p>
                        Bring a positive impact to your customer lifetime value by
                        tailoring your recommendations and services to their
                        preferences.
                    </p>
                    <ul>
                        <li>
                            Analyze support interactions to gain actionable insights that can
                            help with personalizing insurance solutions/plans
                        </li>
                        <li>
                            Get comprehensive reports of ticket trends to determine gaps in
                            the customer experience
                        </li>
                        <li>
                            Enable CSAT reviews for every ticket and embed personalized
                            surveys from within Bottom Funnel to find out ways to fine-tune
                            your support.
                        </li>
                    </ul>
                </div>
                <div className={styles.InsuranceRespondParentimage}>

                    <Image
                        src={"/Images/Insurance/Image3.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
            </div>




            <div className={styles.InsuranceRespondParentfourthchild}>
                <div className={styles.InsuranceRespondParentimage}>

                    <Image
                        src={"/Images/Insurance/Image4.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
                <div>

                    <h1>
                        Digitize legacy support with live
                        chat and self-service
                    </h1>
                    <p>
                        Handle 1 1 conversations seamlessly by enabling live chat on
                        your website, on social media, and IM platforms. Deflect
                        simpler customer issues completely with a self service portal
                        and chatbots
                    </p>
                    <ul>
                        <li>
                            Deploy live chat to guide new customers through the onboarding
                            process
                        </li>
                        <li>
                            Deploy AI-enabled chatbots to trigger intent-driven conversations
                            and respond to common queries or engage with website visitors
                            24/7
                        </li>
                        <li>
                            Publish a self service portal with solution articles and FAQ sections
                            to deflect common customer questions about insurance
                            processing.
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    )
}