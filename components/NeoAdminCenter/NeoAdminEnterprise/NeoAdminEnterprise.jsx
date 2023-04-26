import React from "react";
import styles from "./NeoAdminEnterprise.module.css";
import Image from "next/image";

export const NeoAdminEnterprise = () => {
  return (
     
    <div className={styles.neoAdminEnterpriseMainDiv}>
        <h1 className={styles.neoAdminEnterpriseHeading}>
        Security measures to protect admin centre
        </h1>
        <div className={styles.neoAdminEnterprisePassword}>
            <div className={styles.neoAdminEnterpriseImage}>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/neoAdmin/Group7.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    />
            </div>
            <div className={styles.neoAdminEnterpriseTextMain}>
                <h1>
                Data Encryption
                </h1>
                <p className={styles.neoAdminEnterpriseContent}>
                Protect your admin center  from cyber threats such as hacking and data breaches by encrypting your data. This not only helps to keep your business operations running smoothly but also safeguards your customers' personal information.
                </p>
                <p className={styles.neoAdminLink}>Learn More</p>
            </div>
        </div>
        <div className={styles.neoAdminEnterprisePassword1}>
            <div className={styles.neoAdminEnterpriseText1}>
                <h1>
                Access Control
                </h1>
                <p className={styles.neoAdminEnterpriseContent}>
                Tegrating popular identity providers such as Okta, OneLogin, Azure AD and more. The Neo admin center offers guaranteed support for standard protocols like SAML, OAuth2, ODIC, and JWT.
                </p>
                <p className={styles.neoAdminLink}>Learn More</p>
            </div>
            <div className={styles.neoAdminEnterpriseImage1}>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/neoAdmin/Group1.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    />
            </div>
        </div>
        <div className={styles.neoAdminEnterprisePassword}>
            <div className={styles.neoAdminEnterpriseImage3}>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/neoAdmin/Frame1.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    />
            </div>
            <div className={styles.neoAdminEnterpriseText}>
                <h1>
                Network Security
                </h1>
                <p className={styles.neoAdminEnterpriseContent}>
                By incorporating multiple forms of 2FA such as password and phone/email-based OTP, the security level is heightened without diminishing the ease of login.
                </p>
                <p className={styles.neoAdminLink}>Learn More</p>
            </div>
        </div>
        <div className={styles.neoAdminEnterprisePassword1}>
            <div className={styles.neoAdminEnterpriseText1}>
                <h1>
                    Audit Logs
                </h1>
                <p className={styles.neoAdminEnterpriseContent}>
                Get a report that includes a dedicated log of billing activities, along with user login information. Keep tabs on any suspicious actions occurring in your accounts and swiftly eliminate threats.
                </p>
                <p className={styles.neoAdminLink}>Learn More</p>
            </div>
            <div className={styles.neoAdminEnterpriseImage1}>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/neoAdmin/Frame2.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    />
            </div>
        </div>
    </div>

  );
};
