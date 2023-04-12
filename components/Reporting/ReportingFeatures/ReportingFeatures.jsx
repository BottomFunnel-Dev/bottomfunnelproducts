import styles from "./ReportingFeatures.module.css";
import Image from "next/image";
export const ReportingFeatures = () => {
  return (
    <div>
      <button className={styles.ReportingFeaturesbtn}>All Features</button>
      <div className={styles.ReportingFeaturessection}>
        <div className={styles.ReportingFeaturesone}>
          <h2>Measure service desk performance</h2>
          <div className={styles.ReportingFeaturesoneimg}>
            <Image
              src={"/Images/Reporting/oneimg.png"}
              alt={"image"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <p>
            Drive service desk efficiency by identifying bottlenecks and keeping
            track of key performance indicators (KPIs) with pre-defined reports
            for incidents, changes, and assets. </p>
            <ul>
              <li>
                {" "}
                Stay on top of SLAs by organizing the insights you discover into
                tailored reports.{" "}
              </li>
              <li>
                Easily identify and resolve issues, and plan your investments by
                viewing the real-time data as presentations, and share the
                reports by various filters or formats of your choice.
              </li>
            </ul>
         
        </div>
        <div className={styles.ReportingFeaturestwo}>
          <h2>Gain insights into all modules</h2>
          <div className={styles.ReportingFeaturestwoimg}>
            <Image
              src={"/Images/Reporting/twoimg.png"}
              alt={"image"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <p>
            Leverage reports based on different impacts, groups, types,
            associations, or even department to pinpoint areas of improvement</p>
            <ul>
              <li> Keep tab of its performance with periodic checkse</li>
              <li>
                {" "}
                Review report data to track the health of all associated
                incidents, problems, or changes and minimize risks or
                disruptions to the business
              </li>
              <li>
                Make quick, informed decisions with accurate data across all
                modules in the service desk
              </li>
            </ul>
          
        </div>
    </div>

    <div className={styles.ReportingFeaturessectiontwo}>
    <div className={styles.ReportingFeaturesthree}>
          <h2>Visualize reports for greater visibility</h2>
          <p>Provide clarity into the data you want to see or present by using the data visualization engine</p>
<ul>
  <li>With automatic recommendations as well as the option to use Smartboards to browse interactive 
visualizations, view or present the analytics you require for greater understanding</li>
<li>Easily break down insights, plan better, and improve your service desk performance</li>
</ul>

        </div>
        <div className={styles.ReportingFeaturesthreeimg}>
            <Image
              src={"/Images/Reporting/threeimg.png"}
              alt={"image"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>

        <div className={styles.ReportingFeaturessectiontwo} id={styles.ReportingFeaturessectiontwopart}>
        <div className={styles.ReportingFeaturesfourimg}>
            <Image
              src={"/Images/Reporting/fourimg.png"}
              alt={"image"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
    <div className={styles.ReportingFeaturesfour}>
          <h2>Ask Freddy in plain English to get your service metrics</h2>
          <p>Build extensive reports easily with Ask Freddy, our home-grown AI platformf Ask Freddy uses Natural Language 
Processing (NLP) to understand your query and fetch the data you need instantaneouslyf This data can then be 
added to an existing report with just one clickf Freddy also shows the filters applied to fetch this data, so you 
can make changes/configurations for deeper granularity.
</p>
        </div>
        </div>
    </div>
  );
};
