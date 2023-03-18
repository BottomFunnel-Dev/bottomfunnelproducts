import React from "react";
import styles from "./cardFlex.module.css";

const cardFlex = {
  carddata: [
    {
      cardtitle: "Card Title",
      CardDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At id, libero amet voluptate dolore natus totam minima saepe ut nemo officia autem corporis alias expedita a accusantium, impedit eligendi iste adipisci. Nam voluptatum sed voluptatibus debitis, veritatis sequi. Dicta, consequatur.",
      cardIcon: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/cardhttps://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images",
    },
    {
      cardtitle: "Card Title",
      CardDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At id, libero amet voluptate dolore natus totam minima saepe ut nemo officia autem corporis alias expedita a accusantium, impedit eligendi iste adipisci. Nam voluptatum sed voluptatibus debitis, veritatis sequi. Dicta, consequatur.",
      cardIcon: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/cardhttps://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images",
    },
    {
      cardtitle: "Card Title",
      CardDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At id, libero amet voluptate dolore natus totam minima saepe ut nemo officia autem corporis alias expedita a accusantium, impedit eligendi iste adipisci. Nam voluptatum sed voluptatibus debitis, veritatis sequi. Dicta, consequatur.",
      cardIcon: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/cardhttps://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images",
    },
    {
      cardtitle: "Card Title",
      CardDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At id, libero amet voluptate dolore natus totam minima saepe ut nemo officia autem corporis alias expedita a accusantium, impedit eligendi iste adipisci. Nam voluptatum sed voluptatibus debitis, veritatis sequi. Dicta, consequatur.",
      cardIcon: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/cardhttps://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images",
    },
  ],
};

export const CardFlex = ({ cardflexContent }) => {
  return (
    <div className={styles.cardFlexmain}>
      {cardflexContent.carddata.map(() => (
        <div className={styles.cardFlexMain}></div>
      ))}
    </div>
  );
};
