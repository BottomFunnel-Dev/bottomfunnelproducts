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
                    Single sign-on
                </h1>
                <p className={styles.neoAdminEnterpriseContent}>
                    Make logging into Freshworks accounts seamless for <br/>
                    your users by integrating popular identity providers such <br/>
                    as Okta, OneLogin, Azure AD, and more.The Neo admin <br/>
                    center supports various standard protocols like SAML,<br/>
                    OAuth2,ODIC, and JWT.
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
                    Two-factor authentication
                </h1>
                <p className={styles.neoAdminEnterpriseContent}>
                    Enforce 2FA for user login and enhance security.with<br/>
                    Combination such as password and phone/email- <br/>
                    based OTP, among others, 2FA introduces a new layer of <br/>
                    security, without hampering login simplicity.
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
                    Get a comprehensive report of user login activities<br/>
                    including a dedicated log of billing ctivities.With a tab<br/>
                    on all such activities within your accounts,monitor<br/>
                    suspicious attempts and nip threat actors in the bud.
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
