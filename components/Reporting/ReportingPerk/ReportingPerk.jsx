import React from "react";
import styles from "./ReportingPerk.module.css";
import Image from "next/image";

export const ReportingPerk = () => {
  return (
    <div className={styles.ReportingPerkmain}>
      <h2>
        <b>Perks of advanced reporting and analytics</b>
      </h2>
      <div className={styles.ReportingPerkSection}>
        <div className={styles.ReportingPerkSectioninner}>
          <div className={styles.ReportingPerkSectioninnerdiv}>
            <div className={styles.ReportingPerkSectioninnerone}>
              <div className={styles.ReportingPerkoneimg}>
                <Image
                  src={"/Images/Reporting/iconone.png"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <h3>Search</h3>
              <p>
                Ask questions about your service desk data instantly using the
                Natural Language Querying engine that requires no trainingf
                Build custom visualizations, add filters, and even ask questions
                using a search bar.
              </p>
            </div>
            <div className={styles.ReportingPerkSectioninnerone}>
              <div className={styles.ReportingPerkoneimg}>
                <Image
                  src={"/Images/Reporting/icontwo.png"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <h3>Accurated Reports</h3>
              <p>
                Access curated reports for quickly sharing top-level data with
                the stakeholders. To personalize them, filter the relevant data,
                and generate the report in a format of your choice tabular, bar
                chart, or even graphical.r
              </p>
            </div>
          </div>
          <div className={styles.ReportingPerkSectioninnertwo}>
            <div className={styles.ReportingPerkoneimg}>
              <Image
                src={"/Images/Reporting/iconthree.png"}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <h3>Schedule Reports</h3>
            <p>
              Automate reports to be shared periodically with relevant
              stakeholdersf Schedule the emails with the data to be sent
              regularly, in a format of your choice.
            </p>
          </div>
        </div>

        <div className={styles.ReportingPerkSectionouter}>
          <div className={styles.ReportingFeaturessecondimg}>
            <Image
              src={"/Images/Reporting/fiveimg.png"}
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
};
