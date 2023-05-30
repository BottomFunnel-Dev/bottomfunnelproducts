import React from "react";
import styles from "./FeaturesCardsLeft.module.css";
import Image from "next/image";

export const FeaturesCardsLeft = ({ cardsData, right }) => {
  return (
    <div className={styles.featuresCardsLeftContainer}>
      <ul>
        <li>{cardsData.title}</li>
      </ul>
      <p>{cardsData.description}</p>
      <div
        style={{
          background: right
            ? "linear-gradient(to right, #DEF0E6 90%, #fff 10%)"
            : "linear-gradient(to left, #DEF0E6 90%, #fff 10%)",
          alignSelf: right ? "flex-start" : "flex-end",
        }}
      >
        {cardsData.data.map(({ title, description, image }) => (
          <div key={title} className={styles.featuresCardsLeftCards}>
            <div>
              <h2>{title}</h2>
              <span>
                <Image
                  src={`https://d3op2l77j7wnti.cloudfront.net/Images/${image}`}
                  alt={image}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
              </span>
            </div>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
