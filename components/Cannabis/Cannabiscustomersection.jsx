import React from 'react'
import { useState } from 'react'
import styles from "./Cannabiancustomer.module.css"

export const Cannabiscustomersection = () => {
    
  const [imageChange,setImageChange] =useState("Images/newcannabispage/Customer screens/Component 116.png")
  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath)
 
 }
 
 
 
    
const canabiescustomerappdata = [
    {
        image:"Images/newcannabispage/Customer screens/sign up.png",
        icon:"Images/newcannabispage/icons/image 15.png",
        headertext:"Easy app onboarding",
        paragraph:"Customize this Cannabis  App however you see fit with our powerful online app builder. You don’t need any design or coding experience",
    },

    {
        image:"Images/newcannabispage/Customer screens/Component 116.png",
        icon:"Images/newcannabispage/icons/image 16.png",
        headertext:"Browse By Categories",
        paragraph:"Cannabies is important to many people. They use it for more than eating and as a source of dessert. Many people like ice cream in cooking, like pancakes or cupcakes. Ice cream also provides a cooling sensation and can help digestion.",
    },

    {
        image:"Images/newcannabispage/Customer screens/messages.png",
        icon:"Images/newcannabispage/icons/image 18.png",
        headertext:"In App Chat",
        paragraph:"Less time spent in the ordering process means better user experience. Let your app users pay easily using multiple payment options so as to improve their overall app experience.",
    },

    {
        image:"Images/newcannabispage/Customer screens/order tracking.png",
        icon:"Images/newcannabispage/icons/image 17.png",
        headertext:"Track Order",
        paragraph:"Better pricing doesn’t always have to be dropping your prices instantly. It’s somehow psychological in nature. There’s a subtle art to make it appear that you’re offering a better price without sacrificing your bottom-line."

      
    },
]


  return (
    <div className={styles.cannbiescustomerappmainboxes}>
   
    <h2>Customer App</h2>
    <div className={styles.cannbiesdeliveryappflexingbox}>
    <div className={styles.cannabiesdeliveryappflexingboxleftbox}>
    <div className={styles.cannabiesdeliveryappleftboxinsiderupperimage}>
    <img src={imageChange} alt='' />
    </div>
    </div>
    <div className={styles.cannbiesdeliveryappflexingboxrightbox}>{canabiescustomerappdata.map((e)=>{
        return (
            <div className={styles.cannabiesdeliveryappindivisualbox}
            key={e.htxt} onMouseEnter={() => {
            
                handleImageChange(e.image)
            }}
            
            >
            <div className={styles.cannbiesdeliveryappindivisualboxforlogo}>
            <img src={e.icon} alt='' />
            </div>
            <div className={styles.icecreamdeliveryappindivisualboxfortext}>
            <h4>{e.headertext}</h4>
            <p>{e.paragraph}</p>
            </div>
            
            </div>
        )
    })}</div>
    
    
    </div>
    </div>
  )
}
