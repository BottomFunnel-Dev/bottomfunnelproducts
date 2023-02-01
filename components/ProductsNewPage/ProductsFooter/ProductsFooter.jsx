import React from 'react';
import styles from "./ProductsFooter.module.css";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedin,
    FaYoutube,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import Link from "next/link";

export const ProductsFooter = () => {
    return (
        <div className={styles.productsFooterParentDiv}>
            <div className={styles.productsFooterTopImagesMainDiv}>
                <div className={styles.productFooterLogoDiv}>
                    <img src='/Images/ProductsPage/Footer/Funnel-logo.png' alt='image' />
                </div>

                <div className={styles.productsFooterSocialMediaLogos}>
                    <div className={styles.productsfooterSocialMediaSection}>
                        <a
                            target="_blank"
                            href="https://www.facebook.com/profile.php?id=100075774771610"
                        >
                            <IconContext.Provider value={{ className: styles.productPagesocialIcons }}>
                                <FaFacebookF />
                            </IconContext.Provider>
                        </a>

                        <a target="_blank" href="https://twitter.com/BottomFunnel">
                            <IconContext.Provider value={{ className: styles.productPagesocialIcons }}>
                                <FaTwitter />
                            </IconContext.Provider>
                        </a>

                        <a
                            target="_blank"
                            href="https://www.linkedin.com/company/bottomfunnel/mycompany/verification/"
                        >
                            <IconContext.Provider value={{ className: styles.productPagesocialIcons }}>
                                <FaLinkedin />
                            </IconContext.Provider>
                        </a>

                        <a
                            target="_blank"
                            href="https://www.instagram.com/bottomfunnelmarketing/"
                        >
                            <IconContext.Provider value={{ className: styles.productPagesocialIcons }}>
                                <AiFillInstagram />
                            </IconContext.Provider>
                        </a>
                        <a
                            target="_blank"
                            href="https://www.youtube.com/channel/UC-zyghDYFUgRSUlKTadvJuQ"
                        >
                            <IconContext.Provider value={{ className: styles.productPagesocialIcons }}>
                                <FaYoutube />
                            </IconContext.Provider>
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.productsFooterContentMainDiv}>
                <div className={styles.productsFooterTagsDiv}>
                    <ul className={styles.productMainProductDivLink}>
                        <h5> Products </h5>

                        <li>
                            BottomFunnel Desk
                        </li>

                        <li>
                            BottomFunnel Chat
                        </li>

                        <li>
                            BottomFunnel Sales
                        </li>

                        <li>
                            BottomFunnel Marketer
                        </li>

                        <li>
                            BottomFunnel Service
                        </li>

                        <li>
                            BottomFunnel Team
                        </li>

                        <li>
                            BottomFunnel Survey
                        </li>
                    </ul>

                    <ul className={styles.productMainProductDivLink}>

                        <h5> SAAS Services </h5>

                        <Link className={styles.productFooterLinkTag} href="/web-development">
                            <li>
                                Web Development
                            </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href="/mobile-app-development">
                            <li>
                                Mobile App Development
                            </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href="/Digital-marketing">
                            <li>
                                Digital Marketing
                            </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href="/">
                            <li>
                                Trending Technologies
                            </li>
                        </Link>
                    </ul>

                    <ul className={styles.productMainProductDivLink}>
                        <h5> On Demand Solution </h5>

                        <Link className={styles.productFooterLinkTag} href={"/"}>
                            <li>Real State Solutions</li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/"}>
                            <li>Beauty and salon solutions</li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/"}>
                            <li>Trading App Solutions</li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/"}>
                            <li>Grocery Delivery Solutions</li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/"}>
                            <li>OTT APP solutions</li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/"}>
                            <li>Online Payment App</li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/"}>
                            <li>Car Rental APP Solutions</li>
                        </Link>
                    </ul>

                    <ul className={styles.productMainProductDivLink}>
                        <h5> About </h5>
                        <Link className={styles.productFooterLinkTag} href={"/"}>
                            <li>
                                Company
                            </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/"}>
                            <li> Careers </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/"}>
                            <li> Privacy Policy </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/"}>
                            <li> Contact Us </li>
                        </Link>
                    </ul>

                </div>

                <div className={styles.productFooterBottomDiv}>
                    <div className={styles.productFooterBottomDivContentDiv}>
                        <h5>
                            ©2022 BottomFunnel. All rights reserved
                        </h5>
                    </div>

                    <div className={styles.productFooterBottomDivImagesDiv}>
                        <img src='/Images/ProductsPage/Footer/Google Play.png' alt='image' />
                        <img src='/Images/ProductsPage/Footer/Play Store.png' alt='image' />
                    </div>
                </div>
            </div>

        </div>
    );
};
