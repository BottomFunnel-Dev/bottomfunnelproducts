import React from 'react'
import styles from "./ServiceProducts.module.css"
import Image from 'next/image'

export const ServiceProducts = () => {
  return (
    <div>
        <div className={styles.ServiceProductsmaindiv}>
            <div className={styles.ServiceProductsinnersecond}>
                <div>
                <h1>Customer Service Products</h1>
                <p> A powerful service and support solution, built for the needs of today, ready to scale for tomorrow.</p>
                <button className={styles.ServiceProductsinnersecondbutton}>Demo</button>
                </div>
            </div>

            <div className={styles.ServiceProductsinnerthird}>
                

                <div  className={styles.ServiceProductsinnerthirdcards}>
                 <div className={styles.ServiceProductsinnerthirdcardslogo}>
                 <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Allproductsphotos/chat.webp"}
          alt={""}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        /> 
                 </div>
                 <div className={styles.ServiceProductsinnerthirdcardscontent}>
                    <h3>Bottom Funnel Chat</h3>
                    <p>Delight your customers across support, sales and marketing</p>
                    <div className={styles.ServiceProductsinnerthirdcardsbutton}>

                    <button  className={styles.ServiceProductsinnerthirdcardsbutton1a}>Free Trial</button>
                    <button className={styles.ServiceProductsinnerthirdcardsbutton2}> Sign Up</button>
                   
                    </div>
                 </div>
                </div>

                <div  className={styles.ServiceProductsinnerthirdcards}>
                 <div className={styles.ServiceProductsinnerthirdcardslogo}>
                 <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Allproductsphotos/supportdesk.webp"}
          alt={""}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        /> 
                 </div>
                 <div className={styles.ServiceProductsinnerthirdcardscontent}>
                    <h3>Bottom Funnel Support Desk</h3>
                    <p>A comprehensive helpdesk for exceptional customer service. </p>
                    <div className={styles.ServiceProductsinnerthirdcardsbutton}>

                    <button  className={styles.ServiceProductsinnerthirdcardsbutton1}>Free Trial</button>
                    <button className={styles.ServiceProductsinnerthirdcardsbutton2}> Sign Up</button>
                   
                    </div>
                 </div>
                </div>

                <div  className={styles.ServiceProductsinnerthirdcards}>
                 <div className={styles.ServiceProductsinnerthirdcardslogo}>
                 <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Allproductsphotos/omnichannel.webp"}
          alt={""}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        /> 
                 </div>
                 <div className={styles.ServiceProductsinnerthirdcardscontent}>
                    <h3>Bottom Funnel Omnichannel</h3>
                    <p>Delight your customers with effortless omnichannel service.</p>
                    <div className={styles.ServiceProductsinnerthirdcardsbutton}>

                    <button  className={styles.ServiceProductsinnerthirdcardsbutton1}>Free Trial</button>
                    <button className={styles.ServiceProductsinnerthirdcardsbutton2}> Sign Up</button>
                   
                    </div>
                 </div>
                </div>
            </div>

            <div className={styles.ServiceProductsinnerthirdone}>
                <div className={styles.ServiceProductsinnerthirdoneinner}>
                <div  className={styles.ServiceProductsinnerthirdcards1}>
                 <div className={styles.ServiceProductsinnerthirdcardslogo}>
                 <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Allproductsphotos/contectcenter.webp"}
                    alt={""}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  /> 
                 </div>
                 <div className={styles.ServiceProductsinnerthirdcardscontent}>
                    <h3>Bottom Funnel Contact Center</h3>
                    <p>A reliable and smart call center solution for effortless customer experience. </p>
                    <div className={styles.ServiceProductsinnerthirdcardsbutton}>

                    <button  className={styles.ServiceProductsinnerthirdcardsbutton1}>Free Trial</button>
                    <button className={styles.ServiceProductsinnerthirdcardsbutton2}> Sign Up</button>
                   
                    </div>
                 </div>
                </div>

                <div  className={styles.ServiceProductsinnerthirdcards2}>
                 <div className={styles.ServiceProductsinnerthirdcardslogo}>
                 <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Allproductsphotos/customersucess.webp"}
                    alt={""}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  /> 
                 </div>
                 <div className={styles.ServiceProductsinnerthirdcardscontent}>
                    <h3>Bottom Funnel Customer Success</h3>
                    <p>Protect revenue,increase customer value, and strengthen customer relationships  </p>
                    <div className={styles.ServiceProductsinnerthirdcardsbutton}>

                    <button  className={styles.ServiceProductsinnerthirdcardsbutton1}>Free Trial</button>
                    <button className={styles.ServiceProductsinnerthirdcardsbutton2}> Sign Up</button>
                   
                    </div>
                 </div>
                </div>
                </div>

            </div>

        </div>
    </div>
  )
}
