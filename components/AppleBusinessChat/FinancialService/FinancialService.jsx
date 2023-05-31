import React from 'react'
import styles from "./FinancialService.module.css"
import Image from 'next/image'

export const FinancialService = () => {
  return (
    <div>
         <div className={styles.FinancialServicemaindiv}>
        <div className={styles.FinancialServicemaindivcontent}>
            <h2> Learn how a leading US Financial Services company transforms its customer service with Messaging</h2>
        </div>
        <div className={styles.FinancialServicemaindivinner}>
            <div className={styles.FinancialServicemaindivinnerimage}>
            <Image
                        src={"/Images/Applebusinesschat/bgimg.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
            </div>
            <div className={styles.FinancialServicemaindivinnercard}>
            <div className={styles.FinancialServicemaindivinnercardimg}>
            <Image
                        src={"/Images/Applebusinesschat/Rectangle 1067621.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
            </div>
               
                
                
                <p>“We’re using Bottom Funnelchat to solve our customers’ needs with precision, and in real-time. It has ensured our customers receive prompt personalized experiences and has also brought in operational efficiencies that make assisted buying extremely scalable.”</p>
        
            <div className={styles.FinancialServicemaindivinnercardone}>
              <h6>Rajesh Magow </h6>
              <p>Co-Founder and CEO</p>
              <p>MakeMyTrip</p>
            </div>
            </div>
        </div>


        </div>

        <div className={styles.FinancialServicemaindivsecond}>
            <h2>Implement Apple Messages for Business in just five days and achieve a remarkable 60% reduction in costs, optimizing your customer service operations effectively and efficiently.</h2>
            <p>Unlock the power of Apple Messages for Business with seamless integration on our Pro and Enterprise plans. Set up and start leveraging this powerful messaging platform effortlessly.</p>
<button className={styles.FinancialServicemaindivsecondbutton}>Sign Up For Free</button>
        </div>
    </div>
  )
}
