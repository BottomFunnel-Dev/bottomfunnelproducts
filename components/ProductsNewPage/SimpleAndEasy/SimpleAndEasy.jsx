import React from 'react';
import styles from "./SimpleAndEasy.module.css";
import Link from "next/link";

export const SimpleAndEasy = () => {
    const simpleAndEasyCardsData = [
        {
            title: "Manage your business with us",
            body: "Purchase or try our system directly from our website and onboard in a matter of days, not months.",
            image: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ProductsPage/SimpleAndEasyImage1.png",
            link: "",
            buttondetails: "start free trial",
        },
        {
            title: "Choose your pricing plan",
            body: "Our pricing plans are both suited to modern business use cases and affordable for companies of any size.",
            image: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ProductsPage/SimpleAndEasyImage2.png",
            link: "/pricing",
            buttondetails: "See pricing",
        },
        {
            title: "Create Your Own Marketplace",
            body: `Develop your business strategy with ease, utilising low-code technology and access to over 1,100 custom apps on our marketplace.`,
            image: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ProductsPage/SimpleAndEasyImage3.png",
            link: "/market-place",
            buttondetails: "Visit marketplace",
        },
        {
            title: "Build team collaboration",
            body: `Use team collaboration software to increase team productivity and efficiency by utilising modern automation and collaboration tools, to achieve tangible results quickly.`,
            image: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ProductsPage/SimpleAndEasyImage4.png",
            link: "/collaboration",
            buttondetails: "Learn now",
        },
       
    ];


    return (
        <div className={styles.simpleAndEasyParentDiv}>
            <div className={styles.simpleAndEasyHeadingDiv}>
                <h2>
                    Our CRM tools make it easy to delight your customers.
                </h2>

                <p>
                   Bottom Funnel takes a novel approach to how businesses discover, engage with, and realise value from customer service software throughout their journey.
                </p>
            </div>

            <div className={styles.simpleAndEasyContentDiv}>
                {simpleAndEasyCardsData.map(({ title, body, image, buttondetails, link }, idx) => (
                    <div key={idx}>
                        <div>
                            <img src={image} alt={title} />
                        </div>
                        <h3>{title}</h3>
                        <p>{body}</p>
                        <Link href={link} style={{outline: "none", textDecoration: "none"}}>
                            <p className={styles.simpleAndEasyContentButton}>
                                {buttondetails}
                            </p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};
