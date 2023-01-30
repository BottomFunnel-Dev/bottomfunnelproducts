import React from 'react'
import { useState } from 'react'
import styles from "./IceCreamDriverApp.module.css"


export const IceCreamDriverApp = () => {
    const [imageChange,setImageChange] =useState("Images/icecreamchanges/driver app/Profile.png")
    const handleImageChange = (imagepath) => {
      setImageChange(() => imagepath)
   
   }
  
   
  const icreacreamdriverappdata = [
      {
          image:"Images/icecreamchanges/driver app/Profile.png",
          icon:"Images/icecreamchanges/icons/prototyping-1.png",
          headertext:" Profile Management",
          paragraph:"Customize this Ice Cream Delivery App however you see fit with our powerful online app builder. You don’t need any design or coding experience You don’t need any design or coding experience You don’t need any design or coding experience",
      },
  
      {
          image:"Images/icecreamchanges/driver app/Earningreports.png",
          icon:"Images/icecreamchanges/icons/prototyping-2.png",
          headertext:"Earnings Analytics",
          paragraph:"Ice cream is important to many people. They use it for more than eating and as a source of dessert. Many people like ice cream in cooking, like pancakes or cupcakes. Ice cream also provides a cooling sensation and can help digestion.",
      },
  
      {
          image:"Images/icecreamchanges/driver app/Component 62.png",
          icon:"Images/icecreamchanges/icons/prototyping-4.png",
          headertext:"Daily Work Status",
          paragraph:"Less time spent in the ordering process means better user experience. Let your app users pay easily using multiple payment options so as to improve their overall app experience.You don’t need any design or coding experience You don’t.",
      },
  
      {
          image:"Images/icecreamchanges/driver app/ALertssettings.png",
          icon:"Images/icecreamchanges/icons/prototyping-3.png",
          headertext:" Alerts Settings",
          paragraph:"Better pricing doesn’t always have to be dropping your prices instantly. It’s somehow psychological in nature. There’s a subtle art to make it appear that you’re offering a better price without sacrificing your bottom-line."
  
        
      },
  ]
  
  
    return (
      <div className={styles.icecreamdriverappmainboxes}>
     
      <h2>Driver App</h2>
      <div className={styles.icecreamdriverappflexingbox}>
      <div className={styles.icecreamdriverappflexingboxleftbox}>
      <div className={styles.icecreamdeliveryappleftboxinsiderupperimage}>
      <img src={imageChange} alt='' />
      </div>
      </div>
      <div className={styles.icecreamdriverappflexingboxrightbox}>{icreacreamdriverappdata.map((e)=>{
          return (
              <div className={styles.icecreamdriverappindivisualbox}
              key={e.htxt} onMouseEnter={() => {
              
                  handleImageChange(e.image)
              }}
              
              >
              <div className={styles.icecreamdeliveryappindivisualboxforlogo}>
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
  