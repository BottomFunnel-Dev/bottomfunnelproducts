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
                    <img src='https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ProductsPage/Footer/MainHorizontalLogo.png' alt='image' />
                </div>

                <div className={styles.productsFooterSideButtons}>
                    <button className={styles.productsFooterCallToAction}>
                        Hire a Talent
                    </button>

                    <button className={styles.productsFooterCallToAction}>
                        Apply as a Talent
                    </button>

                    <button className={styles.productsFooterCallToActionLogin}>
                        Login
                    </button>
                </div>
            </div>

            <div className={styles.productsFooterContentMainDiv}>
                <div className={styles.productsFooterTagsDiv}>
                    <ul className={styles.productMainProductDivLink}>
                        <h5> SaaS Products </h5>
                        <Link className={styles.productFooterLinkTag} href={"/funneldesk"}>
                            <li>
                                BottomFunnel Desk
                            </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/bottomfunnel-chat"}>
                            <li>
                                BottomFunnel Chat
                            </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/sales"}>
                            <li>
                                BottomFunnel Sales
                            </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/marketer"}>
                            <li>
                                BottomFunnel Marketer
                            </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/bottomfunnelservice"}>
                            <li>
                                BottomFunnel Service
                            </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/bottomfunnelservice"}>
                            <li>
                                BottomFunnel Survey
                            </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/customersuccess"}>
                            <li>
                                BottomFunnel Customer Success
                            </li>
                        </Link>
                    </ul>

                    <ul className={styles.productMainProductDivLink}>

                        <h5> Platform </h5>

                        <Link className={styles.productFooterLinkTag} href={"/market-place"}>
                            <li>
                                Marketplace
                            </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/developers-portal"}>
                            <li>
                                Developer Portal
                            </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/customer-spotlight"}>
                            <li>
                                Customer Spotlight
                            </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/"}>
                            <li>
                                Customer Services
                            </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/"}>
                            <li>
                                IT Enterprise
                            </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/"}>
                            <li>
                                Engagement
                            </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/"}>
                            <li>
                                Olly AI
                            </li>
                        </Link>
                    </ul>

                    <ul className={styles.productMainProductDivLink}>
                        <h5> Company </h5>
                        <Link className={styles.productFooterLinkTag} href={"/about-us"}>
                            <li>
                                About us
                            </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/career"}>
                            <li> Careers </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/contact-us"}>
                            <li> Contact Us </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/our-development-process"}>
                            <li> Our Development Process </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/vetting-process"}>
                            <li> Vetting Process </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/engagement"}>
                            <li> Engagement Models </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/our-clients"}>
                            <li> Our Clients </li>
                        </Link>
                    </ul>


                    <ul className={styles.productMainProductDivLink}>
                        <h5> Features </h5>

                        <Link className={styles.productFooterLinkTag} href={"/analyticsoffeatures"}>
                            <li> Analytics </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/neoadmin-center"}>
                            <li> Neo Admin Center </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/collaboration"}>
                            <li> Collaboration </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/events-and-notifications"}>
                            <li> Events and Notification </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/unifiedcustomer"}>
                            <li> Unified Customer Record </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/messagingchannel"}>
                            <li> Messaging Channels </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/custom-object"}>
                            <li> Custom Objects </li>
                        </Link>
                    </ul>

                    <ul className={styles.productMainProductDivLink}>

                        <Link style={{ color: "black",textDecoration:"none" }} href={"https://service.bottomfunnel.net/"}>
                            <h5>Services </h5>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"https://service.bottomfunnel.net/web-development"}>
                            <li>
                                Web Development
                            </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"https://service.bottomfunnel.net/mobile-app-development"}>
                            <li>
                                Mobile App Development
                            </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"https://service.bottomfunnel.net/Digital-marketing"}>
                            <li>
                                Digital Marketing
                            </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"https://service.bottomfunnel.net/trending-technologies"}>
                            <li>
                                Trending Technologies
                            </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/"}>
                            <li>
                                Industries
                            </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/"}>
                            <li>
                                On Demand Solutions
                            </li>
                        </Link>
                    </ul>

                </div>

                <div className={styles.productFooterBottomDiv}>
                    <div className={styles.productFooterBottomDivContentDiv}>
                        <div className={styles.productsFooterSocialMediaLogos}>
                            <p>
                                Connect with us:
                            </p>
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

                    <div className={styles.productFooterBottomDivImagesDiv}>
                        <p> Download the apps now</p>
                        <div>
                            <img src='https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ProductsPage/Footer/PlayStore.png' alt='image' />
                            <img src='https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ProductsPage/Footer/AppStore.png' alt='image' />
                        </div>
                    </div>
                </div>

                <div className={styles.productFooterBottomContentDiv}>
                    <div className={styles.productFooterBottomDivHeading}>
                        <p>
                            ©2022 All rights reserved to the Bottom-Funnel Private Limited
                        </p>
                    </div>

                    <div className={styles.productFooterBottomDivPaymentImage}>
                        <p> We accept: </p>
                        <img src='https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ProductsPage/Footer/PaymentGroup.png' alt='image' />
                    </div>
                </div>
            </div>

        </div>
    );
};
