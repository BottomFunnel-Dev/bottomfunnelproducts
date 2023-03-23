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

export const ServiceFooter = () => {
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

                        <h5> Bottom Funnel Service </h5>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                ITSM
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                ITOM
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                Features
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/pricing"}>
                            <li>
                                Pricing
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                Customers
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                Support
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                Resources
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/blogs"}>
                            <li>
                                Blog
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                Integration
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                API
                            </li>
                        </Link>
                    </ul>


                    <ul className={styles.deskMaindeskDivLink}>
                        <h5> Top Features </h5>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li> ITIL </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li> Service Desk Software </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li> Incident Mangement </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>Asset Management </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li> Problem Mangement </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li> Change Management </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li> Alert Management </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li> Project Management </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li> SaaS Management </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li> Release Management </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li> Service Catalog </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li> CMDB </li>
                        </Link>
                    </ul>

                    <ul className={styles.deskMaindeskDivLink}>

                        
                            <h5>Compare ITSM</h5>


                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                Service Now
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                Samanage
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                Sysaid
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                ManageEngine
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                BMC Remedy
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                Lvanti
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                Cherwell
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                Topdesk
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                Jira Service Management
                            </li>
                        </Link>

                        <Link className={styles.deskFooterLinkTag} href={"/"}>
                            <li>
                                HaloITSM
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
