import React from 'react';
import styles from "./MultipleProducts.module.css";
import Link from "next/link";

export default function MultipleProducts() {

  
    return (
        <div className={styles.multipleProductssolution}>
          

            <div className={styles.multipleProductseLearning}>
                <div className={styles.multiProductsImageDiv}>
                    <img src='https://d3op2l77j7wnti.cloudfront.net/Images/ProductsPage/ProductsLogohttps://d3op2l77j7wnti.cloudfront.net/Animation.gif' alt='animation' />
                </div>

                <div className={styles.solright}>
                    <div className={styles.soltop}>

                        <div className={styles.funnelDesk}>
                            <Link href={"/funneldesk"}>
                                <div className={styles.multipleProductsai}>
                                    <img src="https://d3op2l77j7wnti.cloudfront.net/Images/ProductsPage/ProductsLogo/desk.png" alt='image' />
                                </div>
                                <p className={styles.multipleProductHeadings}> Bottomfunnel Desk </p>
                            </Link>
                        </div>


                        <div className={styles.team}>
                            <Link href={"/"}>
                                <div className={styles.multipleProductsai}>
                                    <img src="https://d3op2l77j7wnti.cloudfront.net/Images/ProductsPage/ProductsLogo/teams.png" alt='image' />
                                </div>
                            </Link>
                            <p> Bottomfunnel Team </p>
                        </div>

                        <div className={styles.service}>
                            <div className={styles.multipleProductsai}>
                                <img src="https://d3op2l77j7wnti.cloudfront.net/Images/ProductsPage/ProductsLogo/service.png" alt='image' />
                            </div>

                            <p> Bottomfunnel Service </p>
                        </div>
                    </div>


                    <div className={styles.solbotm}>
                        <div className={styles.market}>
                            <div className={styles.multipleProductsai}>
                                <img src="https://d3op2l77j7wnti.cloudfront.net/Images/ProductsPage/ProductsLogo/marketer.png" alt='image' />
                            </div>

                            <p> Bottomfunnel Marketer </p>
                        </div>

                        <div className={styles.team}>
                            <Link href={"/sales"}>
                                <div className={styles.multipleProductsai}>
                                    <img src="https://d3op2l77j7wnti.cloudfront.net/Images/ProductsPage/ProductsLogo/sales.png" alt='image' />
                                </div>

                                <p> Bottomfunnel Sales </p>
                            </Link>
                        </div>

                        <div className={styles.chat}>
                            <div className={styles.multipleProductsai}>
                                <img src="https://d3op2l77j7wnti.cloudfront.net/Images/ProductsPage/ProductsLogo/chat.png" alt='image' />
                            </div>

                            <p> Bottomfunnel Chat </p>
                        </div>
                    </div>

                    <div className={styles.solbotm1}>
                        <div className={styles.funnelDesk}>
                            <div className={styles.multipleProductsai}>
                                <img src="https://d3op2l77j7wnti.cloudfront.net/Images/ProductsPage/ProductsLogo/omnichannel.png" alt='image' />
                            </div>

                            <p> Bottomfunnel Omnichannel </p>
                        </div>

                        <div className={styles.funnelDesk}>
                            <div className={styles.multipleProductsai}>
                                <img src="https://d3op2l77j7wnti.cloudfront.net/Images/ProductsPage/ProductsLogo/contact.png" alt='image' />
                            </div>

                            <p> Bottomfunnel ContactCenter </p>
                        </div>

                        <div className={styles.funnelDesk}>
                            <div className={styles.multipleProductsai}>
                                <img src="https://d3op2l77j7wnti.cloudfront.net/Images/ProductsPage/ProductsLogo/customer sucess.png" alt='image' />
                            </div>
                            <p> Bottomfunnel CustomerSuccess </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
