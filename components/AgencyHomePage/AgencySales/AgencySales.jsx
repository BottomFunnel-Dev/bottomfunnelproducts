import React from 'react'
import style from "./AgencySales.module.css";
import Image from 'next/image';

export const AgencySales = () => {
  return (
    <div>
         <div className={style.AgencySalesmaindiv}>
        <h1>Do all of this and more with Freshsales</h1>
        <div className={style.AgencySalesinnerdiv}>
        <div className={style.AgencySalescarddiv}>
                <h4>Service customers on the go</h4>
                <div className={style.AgencySalescarddivimage}>
                <Image
                    src={"/Images/Agencyhomepagephotos/logo1.png"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />
                    {/* <img src="Images/realestatesales/Documents-cuate.png" alt="image" /> */}
                </div>
                <p>Don’t let your laptop or desktop hold you back. Access all functionalities of an agency CRM from anywhere, any time with the Freshsales mobile app.</p>
            </div>
            <div className={style.AgencySalescarddiv}>
                <h4>Customize your CRM with integrations</h4>
                <div className={style.AgencySalescarddivimage}>
                <Image
                    src={"/Images/Agencyhomepagephotos/logo2.png"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}

                    />
                    {/* <img src="Images/realestatesales/Secure data-cuate.png" alt="image" /> */}
                </div>
                <p>Choose from a host of apps like Zapier, MailChimp, Segment, and Google Apps for work to integrate with your modern CRM.</p>
            </div>
            <div className={style.AgencySalescarddiv}>
                <h4>Qualify leads with lead scoring</h4>
                <div className={style.AgencySalescarddivimage}>
                <Image
                    src={"/Images/Agencyhomepagephotos/logo3.png"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}

                    />
                    {/* <img src="Images/realestatesales/Email campaign-cuate.png" alt="image" /> */}
                </div>
                <p>Rank your leads  With the help of positive and negative scoring signals depending on how they engage with your business. Go after leads that are more relevant for your agency and are more likely to convert into a customer.</p>
            </div>

        </div>
        
     
    </div>
    </div>
  )
}
