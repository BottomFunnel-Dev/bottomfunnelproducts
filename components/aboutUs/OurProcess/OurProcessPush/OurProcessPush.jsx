import React from "react";
import styles from "./OurProcessPush.module.css";

export const OurProcessPush = () => {
  const cardsData = [
    {
      title: "What we do best",
      body: "Bottom Funnel specializes in providing cutting-edge IT solutions and services, including on-demand app development, custom software development, digital marketing, and collaboration tools. We have a proven track record of delivering outstanding results for clients across a wide range of industries, and we're dedicated to staying ahead of the curve with the latest technologies and best practices.",
    },
    {
      title: "How we started",
      body: " Bottom Funnel was founded by a team of experienced IT professionals with a passion for innovation and excellence. We saw a need for a company that could provide customized solutions tailored to the unique needs of each client, and we set out to create a company that would do just that. ",
    },
    {
      title: "What our goal",
      body: " At Bottom Funnel, our goal is simple - to help our clients achieve their goals with the best-in-class solutions and services. We're committed to delivering exceptional results and exceeding our client's expectations, and we're constantly striving to improve and innovate in everything we do. Whether you're a startup looking to launch a new product or an established enterprise in need of cutting-edge IT solutions, we're here to help you succeed. ",
    },
  ];

  return (
    <div className={styles.OurProcessPushmain}>
      <p>PUSH YOUR BUSINESS WITH US!</p>
      <h1>
        We Help You With Our <span>Best In Class</span>
      </h1>
      <p className={styles.innovatoraboutusptag}>
      At Bottom Funnel, we're committed to helping our clients achieve their goals with the best-in-class solutions and services. Our team of experts brings a wealth of experience and knowledge to every project, leveraging the latest technologies and best practices to deliver exceptional results.
Points:

      </p>
      <div>
        {cardsData.map(({ title, body }, idx) => {
          return (
            <div>
              <h1>{idx + 1}</h1>
              <div>
                <h1>{title}</h1>
                <p>{body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
