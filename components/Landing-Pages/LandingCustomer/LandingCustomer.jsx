import styles from "./LandingCustomer.module.css";
import Image from "next/image";
export const LandingCustomer = () => {
    return (
        <div className={styles.LandingCustomerParent}>
            <h1>Stay Connected with Your customers </h1>
            <div className={styles.LandingCustomerOnlyChild}>
                <div className={styles.LandingCustomerImage}>
                    <Image
                        src={"/Images/LandingPages/Customer.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
                <div className={styles.LandingCustomerContent}>
                    <dl>
                        <dt> Drive Business results</dt>
                        <dd>Build your brand on social media, engage better , earn cutomer trust </dd>
                        <hr />
                        <dt> Increase Productivity</dt>
                        <dd>take your visitor through a funnel of page to complete specific objective  </dd>
                        <hr />
                        <dt>Improved Customer experiences</dt>
                        <dd> Public your landing pages on your business domain or subdomain </dd>
                    </dl>
                </div>
            </div>
        </div>
    );
}