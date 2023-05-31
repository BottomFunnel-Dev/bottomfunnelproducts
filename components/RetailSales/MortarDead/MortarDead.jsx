import React from 'react'
import style from "./MortarDead.module.css";
import Image from 'next/image';

export const MortarDead = () => {
    return (
        <div>
            <div className={style.MortarDeadmaindiv}>
                <div className={style.MortarDeadmaindivinner}>
                    <div>
                        <h2>Is brick-and-mortar dead?</h2>
                        <p>Retail business is in the middle of a major shift with established players in the online marketplace disrupting traditional brick-and-mortar stores. A comparison of e-commerce sales vs. retail sales from 2007-2016 reveals that e-commerce accounts for only 13% of retail sales, but grown from 5% a decade ago (Source: Internet Retailer, U.S. Commerce Dept.).</p>
                        <p> Although it appears that e-commerce players like Amazon and Alibaba are dominating the way people shop, physical retail is far from dead. But, it is in a profound need for digital transformation.</p>
                    </div>
                    
                    <div>
                        <Image
                            src={"https://d3op2l77j7wnti.cloudfront.net/Images/Travelagencysales/ststem.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>

                </div>
            </div>
        </div>
    )
}
