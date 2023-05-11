import styles from "./ManagedserviceProviderSupport.module.css";
import Image from "next/image";
export const ManagedserviceProviderSupport = () => {
    return (
        <div className={styles.ManagedserviceProviderSupportParent}>
            <h1>
                Centralize and simplify support interactions with Bottom Funnel
            </h1>
            <p>
                Achieve faster and improved resolution rates by connecting your clients to the right agents and viewing all your support activities
                on one common dashboard using Bottom funnel desk Omnichannel.
            </p>
            <div className={styles.ManagedserviceProviderSupportParentOnlyChild}>
                <div>


                    <div>
                        <h1>Automate issue handling workflows
                            and simplify ticket assignment
                        </h1>
                        <p>
                            Set up individual workflows for different client processes.
                            Organize support tickets based on issue type and route them
                            to the right agent group for faster resolution.

                        </p>
                        <ul>
                            <li>
                                Configure business-specific conditions and utilize skill-based autorouting to enable ticket handling by specialized agents\
                            </li>
                            <li>
                                Create agent groups to have dedicated service reps working for
                                individual clients that your company caters to\
                            </li>
                            <li>
                                Get dynamic ticket field suggestions with the AI-powered auto
                                triage feature based on past tickets
                            </li>
                            <li>
                                View and track the progress of your client requests with automated
                                ticket updates.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Image
                            src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ManagedServiceProvider/Image1.webp"}
                            alt={"image"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>

                </div>









                <div>
                    <div>
                        <Image
                            src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ManagedServiceProvider/Image2.webp"}
                            alt={"image"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                    <div>
                        <h1>Optimize support on all
                            channels
                        </h1>
                        <p>
                            Choose a multi-channel support strategy and handle all
                            queries effortlessly from one tool.

                        </p>
                        <ul>
                            <li>
                                Support your clients on multiple channels, including email, social
                                media, phone, chat, and instant messaging from a single interface
                            </li>
                            <li>
                                Configure multiple mailboxes with unique email IDs to interact with
                                different MSP clients\
                            </li>
                            <li>
                                Deflect the number of support tickets using chatbots, with
                                conditions to hand off complex queries to agents
                            </li>
                            <li>
                                Utilize self-service as an effective channel by setting up dedicated
                                knowledge bases and customized web portals for multiple clients\
                            </li>
                        </ul>
                    </div>


                </div>














                <div>
                    <div>
                        <h1>Improve agent productivity
                            and manage your team
                            effectively
                        </h1>
                        <p>
                            Empower your team of agents to deliver impactful support
                            with smart automation in their daily activities. Powerful
                            integrations with 650+ apps on Bottom Funnel Marketplace
                            simplify complex processes such as contract management,
                            billing, and time tracking.

                        </p>
                        <ul>
                            <li>
                                Manage MSP service agents across time zones efficiently by
                                configuring SLAs and agent shift timings\                            </li>
                            <li>
                                Help your team perform better with agent-assist bots and canned
                                responses for common issues
                            </li>
                            <li>
                                Ease agent onboarding with an up-to-date internal knowledge
                                base and automated issue-specific solution articles
                            </li>
                            <li>
                                Monitor vital agent performance metrics and track the overall
                                operations of your team on intuitive dashboards.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Image
                            src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ManagedServiceProvider/Image3.webp"}
                            alt={"image"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>

                </div>



            </div>

        </div>
    );
}