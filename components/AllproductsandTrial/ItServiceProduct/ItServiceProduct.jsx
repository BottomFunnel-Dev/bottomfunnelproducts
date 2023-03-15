import React from 'react'
import styles from "./ItServiceProduct.module.css"
import Image from 'next/image'

export const ItServiceProduct = () => {
  return (
    <div>
        
        <div className={styles.ItServiceProductmaindiv}>
            <div className={styles.ItServiceProductinnersecond}>
                <div>
                <h1>IT Service Products</h1>
                <p>Modernize IT, unify business teams, and realize fast time-to-value.</p>
                <button className={styles.ItServiceProductinnersecondbutton}>Demo</button>
                </div>
            </div>

            <div className={styles.ItServiceProductinnerthird}>
                

              

                <div  className={styles.ItServiceProductinnerthirdcards}>
                 <div className={styles.ItServiceProductinnerthirdcardslogo}>
                 <Image
          src={"/Images/Allproductsphotos/team.webp"}
          alt={""}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        /> 
                 </div>
                 <div className={styles.ItServiceProductinnerthirdcardscontent}>
                    <h3>Bottom Funnel Service for Business Teams </h3>
                    <p>Streamlines business processes across the whole organization.</p>
                    <div className={styles.ItServiceProductinnerthirdcardsbutton}>

                    <button  className={styles.ItServiceProductinnerthirdcardsbutton1e}>Free Trial</button>
                    <button className={styles.ItServiceProductinnerthirdcardsbutton2}> Sign Up</button>
                   
                    </div>
                 </div>
                </div>

                <div  className={styles.ItServiceProductinnerthirdcards}>
                 <div className={styles.ItServiceProductinnerthirdcardslogo}>
                 <Image
          src={"/Images/Allproductsphotos/service.webp"}
          alt={""}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        /> 
                 </div>
                 <div className={styles.ItServiceProductinnerthirdcardscontent}>
                    <h3>Bottom Funnel Service</h3>
                    <p>Right-size your IT and service management.</p>
                    <div className={styles.ItServiceProductinnerthirdcardsbutton}>

                    <button  className={styles.ItServiceProductinnerthirdcardsbutton1f}>Free Trial</button>
                    <button className={styles.ItServiceProductinnerthirdcardsbutton2a}> Sign Up</button>
                   
                    </div>
                 </div>
                </div>
            </div>
            </div>
    </div>
  )
}
