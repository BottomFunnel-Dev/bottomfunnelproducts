import React from 'react';
import styles from "./SimpleAndEasy.module.css";
import Link from "next/link";

export const SimpleAndEasy = () => {
    const simpleAndEasyCardsData = [
        {
            title: "Get up and running with no barriers",
            body: "Try or purchase our system directly from our website, and onboard in a matter of days, not months.",
            image: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ProductsPage/SimpleAndEasyImage1.png",
            link: "",
            buttondetails: "start free trial",
        },
        {
            title: "Choosing your pricing plan",
            body: "Our pricing plans are for modern business use cases and affordable for organizations of all sizes.",
            image: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ProductsPage/SimpleAndEasyImage2.png",
            link: "/pricing",
            buttondetails: "See pricing",
        },
        {
            title: "Build and customize as you go",
            body: `Extend and tailor experience to meet your unique business needs, with low-code development and over
            1,100 custom apps made available on our marketplace.`,
            image: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ProductsPage/SimpleAndEasyImage3.png",
            link: "/market-place",
            buttondetails: "Visit marketplace",
        },
        {
            title: "Create value, fast",
            body: `Accelerate your team's productivity and efficiency with modern automation and collaboraiton tools,
            to get tangible results in no time.`,
            image: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ProductsPage/SimpleAndEasyImage4.png",
            link: "/collaboration",
            buttondetails: "Learn now",
        },
       
    ];


    return (
        <div className={styles.simpleAndEasyParentDiv}>
            <div className={styles.simpleAndEasyHeadingDiv}>
                <h1>
                    Frictionless,simple, easy
                </h1>

                <p>
                    Bottom Funnel makes it fast and easy for businesses to delight their customers and employees.
                </p>

                <p>
                    We take a fresh approach to how businesses discover, engage with, and realize value from software
                    throughout their journey.
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
