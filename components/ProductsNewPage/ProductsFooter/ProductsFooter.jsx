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
                    <img src='/Images/ProductsPage/Footer/MainHorizontalLogo.png' alt='image' />
                </div>


                {/* <div className={styles.productsFooterSocialMediaLogos}>
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
                </div> */}

                <div className={styles.productsFooterSideButtons}>
                    <button
                        className={styles.productsFooterCallToAction}
                    // onClick={() => router.push("/hire-new-talent")}
                    >
                        Hire a Talent
                    </button>

                    <button
                        className={styles.productsFooterCallToAction}
                    // onClick={() => router.push("/Apply-new-talent")}
                    >
                        Apply as a Talent
                    </button>

                    <button
                        className={styles.productsFooterCallToActionLogin}
                    // onClick={() => router.push("/Apply-new-talent")}
                    >
                        Login
                    </button>

                    {/* <div className={styles.productsfooterSocialMediaSection}>
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
                    </div> */}
                </div>
            </div>

            <div className={styles.productsFooterContentMainDiv}>
                <div className={styles.productsFooterTagsDiv}>
                    <ul className={styles.productMainProductDivLink}>
                        <h5> SaaS Products </h5>
                        <Link className={styles.productFooterLinkTag} href={"/"}>
                            <li>
                                BottomFunnel Desk
                            </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/"}>
                            <li>
                                BottomFunnel Chat
                            </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/"}>
                            <li>
                                BottomFunnel Sales
                            </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/"}>
                            <li>
                                BottomFunnel Marketer
                            </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/"}>
                            <li>
                                BottomFunnel Service
                            </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/"}>
                            <li>
                                BottomFunnel Team
                            </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/"}>
                            <li>
                                BottomFunnel Survey
                            </li>
                        </Link>
                    </ul>

                    <ul className={styles.productMainProductDivLink}>

                        <h5> Platform </h5>

                        <Link className={styles.productFooterLinkTag} href={"/"}>
                            <li>
                                Marketplace
                            </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/"}>
                            <li>
                                Developer Portal
                            </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/"}>
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

                        <h5> SaaS Services </h5>

                        <Link className={styles.productFooterLinkTag} href={"/web-development"}>
                            <li>
                                Web Development
                            </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/mobile-app-development"}>
                            <li>
                                Mobile App Development
                            </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/Digital-marketing"}>
                            <li>
                                Digital Marketing
                            </li>
                        </Link>

                        <Link className={styles.productFooterLinkTag} href={"/"}>
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
                            <img src='/Images/ProductsPage/Footer/PlayStore.png' alt='image' />
                            <img src='/Images/ProductsPage/Footer/AppStore.png' alt='image' />
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
                        <img src='/Images/ProductsPage/Footer/PaymentGroup.png' alt='image' />
                    </div>
                </div>
            </div>

        </div>
    );
};
