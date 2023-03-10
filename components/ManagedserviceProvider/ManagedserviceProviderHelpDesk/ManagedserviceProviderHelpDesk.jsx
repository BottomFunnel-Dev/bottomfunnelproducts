import styles from "./ManagedserviceProviderHelpDesk.module.css";
import Image from "next/image";
export const ManagedserviceProviderHelpDesk = () => {
    return (
        <div className={styles.ManagedserviceProviderHelpDeskparent}>
            <h1>
                Why do Managed Service Providers need a unified help desk?
            </h1>
            <p>
                In an era of cloud-based solutions and growing business automation, close to 55% of businesses engage Managed Service
                Providers(MSPs) to transform their companies digitally. The rapid growth in the MSP sector also indicates the need for specialized
                teams to handle the IT support operations of businesses spanning different industries. Segmenting your client base and being
                available across multiple channels to resolve their problems gives you a competitive edge in the booming MSP landscape
            </p>


            <div className={styles.ManagedserviceProviderHelpDeskparentOnlyChild}>
                <div>
                    <h4>Meet customers on their
                        preferred channels</h4>
                    <div>
                        <Image
                            src={"/Images/ManagedServiceProvider/HelpDesk1.webp"}
                            alt={"image"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                    <p>Apart from emails, MSP clients now
                        have more ways of interacting wit5
                        your team, including phone calls,
                        chat, or a web portal. A help desk
                        allows a good channel mix and
                        allows you to respond to requests on
                        every channel from one screen.</p>
                </div>
                <div>
                    <h4>Set up customized accounts
                        for every client
                    </h4>
                    <div>
                        <Image
                            src={"/Images/ManagedServiceProvider/HelpDesk2.webp"}
                            alt={"image"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                    <p>Each MSP client has unique needs
                        that demand specialized technical
                        skills. Individual account instances
                        within your help desk allow you to
                        have dedicated agent groups to
                        service specific client requests.</p>
                </div>
                <div>
                    <h4>Enhance operational efficiency
                        of your support team</h4>
                    <div>
                        <Image
                            src={"/Images/ManagedServiceProvider/HelpDesk3.webp"}
                            alt={"image"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                    <p>When all your support operations
                        are unified in a single interface, you
                        can categorize and route the
                        incoming tickets to agents
                        specifically trained to handle certain
                        issues for better issue resolution and
                        a positive customer experience</p>
                </div>
            </div>
        </div>
    )
}