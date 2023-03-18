import React from 'react';
import styles from "./CustomerTrust.module.css";

export const CustomerTrust = () => {
    return (
        <div className={styles.productsCustomerTrustParentDiv}>
            <h1>
                Trusted by 50K+ customers big and small
            </h1>

            <p>
                We are leading provider  of modern SaaS solutions that solve multiple,complex business problems to
                companies of sizes.Businesses from than 120 countries around the world use BottomFunnel products to delight
                their customers and employees every day.
            </p>

            <div className={styles.productsPartnersImagesDiv}>
                {/* <img src='https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ProductsPage/bluenile.jpg' alt='image' /> */}
                <img src='https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ProductsPage/fiverr.png' alt='image' />
                <img src='https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ProductsPage/Diechman.png' alt='image' />
                <img src='https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ProductsPage/bluenile.png' alt='image' />
                <img src='https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ProductsPage/klarna.png' alt='image' />
                <img src='https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ProductsPage/pearson.png' alt='image' />
                <img src='https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ProductsPage/scholler albert.png' alt='image' />
                <img src='https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ProductsPage/bridgestone.png' alt='image' />
            </div>
        </div>
    );
};
