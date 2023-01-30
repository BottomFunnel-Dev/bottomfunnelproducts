import React, { useState } from 'react'
import styles from "./RealEstateCustomer.module.css"

export const RealEstateCustomer = () => {

const [imageChange, setImageChange] = useState("Images/RealEstate/Customer App/Simple & Secure Login.png")

const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath)
    console.log(imagepath)
 }
   
const realstatecustomerdata = [
    {
        image:" Images/RealEstate/Customer App/Simple & Secure Login.png",
       htxt: "Simple & Secure Login",
        stxt:"It is a cross platform application which gives ease to customer of accessing it through both android and iOS",
    },
    {
        image:" Images/RealEstate/Customer App/User-friendly interface.png",
        htxt:"User-friendly interface",
        stxt: "It has easy to understand templates and customization app designs to give the customer comfort of use.",

    },

    {
        image:" Images/RealEstate/Customer App/Multiple Payment Options.png",
        htxt:"Multiple Payment Options",
        stxt:"Multiple payment gateways denote that a merchant provides several online payment gateways on a single website.It means that users can users can use an alternative payment method if any online payment gateway has a low success rate or is experiencing downtime.",

    },

    {
        image:" Images/RealEstate/Customer App/Easy To Search.png",
        htxt:"Easy To Search",
        stxt:"If you're haveing trouble thinking of new search terms, you can use search suggestions instead.These will usually appear as you're a great way to find new keywords you might not have tried.",
 
    },
]


  return (
    <div className={styles.realestatecustomerboxmain}>
    <div className={styles.realestatecustomerleftbox}>
    <div className={styles.realstatecustomerappleftboxsometextupper}>
    <h1>Customer Application</h1>
    </div>
    <div className={styles.realestatecustomermappingmainbox}>{realstatecustomerdata.map((e)=>{
        return (
            <div className={styles.realstatemapperindivisuallybox}
            key={e.htxt} onMouseEnter={() => {
          
                handleImageChange(e.image)
            }}
              
            ><h3>{e.htxt}</h3>
            <p>{e.stxt}</p>
            </div>
        )
    })}</div>
    </div>
    <div className={styles.realestatecustomerrightbox}>
    <div className={styles.realestatecustomerapprightboxformobile}>
    <img src={imageChange} alt="image" />
    </div>
    </div>
    </div>
  )
}
