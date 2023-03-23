import React from 'react';
import styles from "../DeskFooter/DeskFooter.module.css";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedin,
    FaYoutube,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import Link from "next/link";

export const ChatFooter = () => {
    return (
        <div className={styles.desksFooterParentDiv}>
            <div className={styles.desksFooterTopImagesMainDiv}>
                <div className={styles.deskFooterLogoDiv}>
                    <img src='https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ProductsPage/Footer/MainHorizontalLogo.png' alt='image' />
                </div>


                <div className={styles.desksFooterSideButtons}>
                    <button className={styles.desksFooterCallToAction}>
                        Hire a Talent
                    </button>

                    <button className={styles.desksFooterCallToAction}>
                        Apply as a Talent
                    </button>

                    <button className={styles.desksFooterCallToActionLogin}>
                        Login
                    </button>
                </div>
            </div>

            <div className={styles.desksFooterContentMainDiv}>
                <div className={styles.desksFooterTagsDiv}>
                    <ul className={styles.deskMaindeskDivLink}>
                        <h5>Bottom Funnel Products</h5>
                        <Link className={styles.deskFooterLinkTag} href={"/funneldesk"}>
                            <li>
                                Bottom Funnel Desk
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/bottomfunnel-chat"}>
                            <li>
                                Bottom Funnel Chat
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/sales"}>
                            <li>
                                Bottom Funnel Sales
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/marketer"}>
                            <li>
                                Bottom Funnel Marketer
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/bottomfunnelservice"}>
                            <li>
                                Bottom Funnel Service
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/bottomfunnelservice"}>
                            <li>
                                Bottom Funnel Survey
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/customersuccess"}>
                            <li>
                                Bottom Funnel Customer Success
                            </li>
                        </Link>
                    </ul>


                    <ul className={styles.deskMaindeskDivLink}>
                        <h5> Company </h5>
                        <Link className={styles.deskFooterLinkTag} href={"/about-us"}>
                            <li>
                                About us
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/career"}>
                            <li> Careers </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/contact-us"}>
                            <li> Contact Us </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/our-development-process"}>
                            <li> Our Development Process </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/vetting-process"}>
                            <li> Vetting Process </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/engagement"}>
                            <li> Engagement Models </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/our-clients"}>
                            <li> Our Clients </li>
                        </Link>

                        <br/>
                        <h6>Sales and Support</h6>
                        <li> <i class="bi bi-telephone"></i> +91 78776 80588</li>
                        <li> <i class="bi bi-telephone"></i> +91 82093 66227</li>
                        <li> <i class="bi bi-envelope"></i> Info@bottomfunnel.net</li>
                    </ul>

                    <ul className={styles.deskMaindeskDivLink}>

                        <h5> Bottom Funnel Chat </h5>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                Live Chat
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                Chatbot
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/pricing"}>
                            <li>
                                Pricing
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                Knowledge Base
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                API Documentation
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/blogs"}>
                            <li>
                                Blog
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                Product Updates
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                Learning Centre
                            </li>
                        </Link>

                        <br/>

                        <h5>Channels</h5>
                        
                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                WhatsApp integration
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                Apple business Messaging
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/instagram-dm"}>
                            <li>
                                Instagram Integration
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                SMS Integration
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                Facebook Messenger
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                Line Integration
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                Google Business Messages
                            </li>
                        </Link>


                    </ul>


                    <ul className={styles.deskMaindeskDivLink}>
                        <h5> Top Features </h5>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li> Campaigns </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li> Conversations </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li> Routing </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li> Self-Service </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li> Team Productivity </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li> Integration </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li> Mobile </li>
                        </Link>

                        <br/>
                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <h5>Solution</h5>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/bottomfunnelchat/solutions/contactresolution"}>
                            <li> Zero Contact Resolutions </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li> Provide Conveninent </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li> Customer Service </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li> Move from costly channels </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/bottomfunnelchat/solutions/enterprise"}>
                            <li> Enterprise </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li> SMB </li>
                        </Link>

                        
                    </ul>

                    <ul className={styles.deskMaindeskDivLink}>

                        
                            <h5>Compare</h5>
                       

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                Intercom
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                Drift
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                Zendesk Chat
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                Livechat
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                Olark
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                Zoho SalesIQ
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                Crisp
                            </li>
                        </Link>

                        <br/>
                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <h5>
                                Industry
                            </h5>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/funneldesk/solutions/retailandecommerce"}>
                            <li>
                                Retail and E-commerce
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/funneldesk/solutions/travel-and-hospitality"}>
                            <li>
                                Travel and Hospitality
                            </li>
                        </Link>

                        
                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                Financial Services
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                Education
                            </li>
                        </Link>

                    </ul>

                </div>

                <div className={styles.deskFooterBottomDiv}>
                    <div className={styles.deskFooterBottomDivContentDiv}>
                        <div className={styles.desksFooterSocialMediaLogos}>
                            <p>
                                Connect with us:
                            </p>
                            <div className={styles.desksfooterSocialMediaSection}>
                                <a
                                    target="_blank"
                                    href="https://www.facebook.com/profile.php?id=100075774771610"
                                >
                                    <IconContext.Provider value={{ className: styles.deskPagesocialIcons }}>
                                        <FaFacebookF />
                                    </IconContext.Provider>
                                </a>

                                <a target="_blank" href="https://twitter.com/BottomFunnel">
                                    <IconContext.Provider value={{ className: styles.deskPagesocialIcons }}>
                                        <FaTwitter />
                                    </IconContext.Provider>
                                </a>

                                <a
                                    target="_blank"
                                    href="https://www.linkedin.com/company/bottomfunnel/mycompany/verification/"
                                >
                                    <IconContext.Provider value={{ className: styles.deskPagesocialIcons }}>
                                        <FaLinkedin />
                                    </IconContext.Provider>
                                </a>

                                <a
                                    target="_blank"
                                    href="https://www.instagram.com/bottomfunnelmarketing/"
                                >
                                    <IconContext.Provider value={{ className: styles.deskPagesocialIcons }}>
                                        <AiFillInstagram />
                                    </IconContext.Provider>
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.youtube.com/channel/UC-zyghDYFUgRSUlKTadvJuQ"
                                >
                                    <IconContext.Provider value={{ className: styles.deskPagesocialIcons }}>
                                        <FaYoutube />
                                    </IconContext.Provider>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.deskFooterBottomDivImagesDiv}>
                        <p> Download the apps now</p>
                        <div>
                            <img src='https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ProductsPage/Footer/PlayStore.png' alt='image' />
                            <img src='https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ProductsPage/Footer/AppStore.png' alt='image' />
                        </div>
                    </div>
                </div>

                <div className={styles.deskFooterBottomContentDiv}>
                    <div className={styles.deskFooterBottomDivHeading}>
                        <p>
                            ©2022 All rights reserved to the Bottom-Funnel Private Limited
                        </p>
                    </div>

                    <div className={styles.deskFooterBottomDivPaymentImage}>
                        <p> We accept: </p>
                        <img src='https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ProductsPage/Footer/PaymentGroup.png' alt='image' />
                    </div>
                </div>
            </div>

        </div>
    );
};