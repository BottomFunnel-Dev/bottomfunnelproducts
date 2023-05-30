import Image from "next/image";
import React from "react";
import styles from "./bestSecurityRoof.module.css";

export const BestSecurityRoof = () => {
  return (
    <div className={styles.bestSecurityRoofContainer}>
      <h1>The Best Security for your Product all Under One Roof</h1>
      <div className={styles.customSSLCertificatesContainer}>
        <span>
          <Image
            src={"https://d3op2l77j7wnti.cloudfront.net/Images/funneldeskSecurity/bestSecurityRoof.webp"}
            alt="funneldeskSecurity/bestSecurityRoof.webp"
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />
        </span>
        <div>
          <h2>Ensure secure access with Custom SSL certificates</h2>
          <p>
            Encrypt your communication between web browers and web servers. All
            Freskdesk account come with an SSL certificate enabled by default.
          </p>
          <ul>
            <li>Set up your own support domain or vanity URL</li>
            <li>Get your custom SSL URL and running within 72 hours</li>
            <li>
              Add multiple portals to your Bottom funnel desk account with authenticated
              SSL certification
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.ipWhitelistingContainer}>
        <span>
          <Image
            src={"https://d3op2l77j7wnti.cloudfront.net/Images/funneldeskSecurity/ipWhitelisting.webp"}
            alt="funneldeskSecurity/ipWhitelisting.webp"
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />
        </span>
        <div>
          <h2>Manage customer and agent logins using IP Whitelisting</h2>
          <p>
            Restrict login access outside of work by whitelisting only office
            network addresses for agents and employees.
          </p>
          <p>
            Create exclusive access for agents to log in from anywhere by
            linking IP whitelisting to a virtual private network (VPN)
          </p>
          <p>
            Establish a login access system to regulate the entry of agents or
            agents and customers.
          </p>
        </div>
      </div>
    </div>
  );
};
