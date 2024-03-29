import React from "react";
import styles from "./SelfServiceContent.module.css";

export const SelfServiceContent = () => {
  const selfServicesContentCardsData = [
    {
      title: "Scale your content along with your product line",
      body: `Create your knowledge base for mulitple products and publish them to your customers on product-focused 
            pages, all from one place.`,
      image: "https://d3op2l77j7wnti.cloudfront.net/Images/SelfService/TwoThreeHead.webp",
      buttondetails: "Start free trial",
    },
    {
      title: "Customizee without coding",
      body: `Give your knowledge base page a complete makre-over, so that it adheres to the look and feel of your brand`,
      image: "https://d3op2l77j7wnti.cloudfront.net/Images/SelfService/OllySolution.webp",
      buttondetails: "See pricing",
    },
  ];

  return (
    <div className={styles.selfServicesContentParentDiv}>
      <div className={styles.selfServicesContentContentDiv}>
        {selfServicesContentCardsData.map(
          ({ title, body, image, buttondetails }, idx) => (
            <div key={idx}>
              <div>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p>{body}</p>
              <p className={styles.selfServicesContentContentButton}>
                {buttondetails}
              </p>
            </div>
          ),
        )}
      </div>
    </div>
  );
};
