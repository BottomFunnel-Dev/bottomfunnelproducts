import React, { useState } from 'react'
import styles from "./TaxiBookingAdminpannel.module.css"

export const TaxiBookingAdminpannel = () => {

    const [imageChange, setImageChange] = useState("Images/Taxibooking/Adminscreens/Driver management.png")


    const handleImageChange = (imagepath) => {
      setImageChange(() => imagepath)
      console.log(imagepath)
   }
  
    const adminpanneltaxibookingdata= [

        {
            images:"Images/Taxibooking/Adminscreens/Driver management.png",
            icon:"Images/Taxibooking/icons/Component 132.png",
            htxt:"Dashboard",
            stxt:"The taxi booking applications are a solution to several problems like reducing the waiting time on the road, looking out for cabs under the sun, and several other things.,",
        },
       
        
        {
            images:"Images/Taxibooking/Adminscreens/Driver management.png",
            icon:"Images/Taxibooking/icons/Component 133.png",
            htxt:"Driver Management",
            stxt:"Mobile app development companies are playing a vital role in catering to this ever evolving technology needs of new-age smartphone users. Taxi app development specialization .",
        },

        {
            images:"Images/Taxibooking/Adminscreens/Reports & analytics.png",
            icon:"Images/Taxibooking/icons/Group 340228.png",
            htxt:"Reports",
            stxt:"These traditional days are gone where we go physical for the taxi booking and all. However, the new different ways of booking a taxi have come in. The application stores.",
        },


        {
            images:"Images/Taxibooking/Adminscreens/Cashback Map1600.png",
            icon:"Images/Taxibooking/icons/Component 134.png",
            htxt:"Customer Management",
            stxt:"A Taxi booking app development is a strong application that ought to have the option to work well on all devices and platforms. One must be extremely cautious about the.",
        },


        

    ]


  return (
    <div className={styles.adminpanneltaxibookingonlutxt}>
    
    <h1><span className={styles.specialcolor}>Admin Pannel</span></h1>
    <div className={styles.taxibookingadminpannelmainboxes}>
    <div className={styles.taxibookingappadminpannelleftbox}>
    <div className={styles.taxibookingadminpannelleftboximagesize}><img src={imageChange} alt='images' /></div>
  
    </div>

   
<div className={styles.taxibookingappadminpannelrightbox}>
    {adminpanneltaxibookingdata.map((e)=>{
        return (
            <div className={styles.taxibookingappadminpannelindivi}
            key={e.htxt} onMouseEnter={() => {
          
                handleImageChange(e.images)
            }}
            
        
            >
            
            <div className={styles.taxibookingappadminpannelindivilogo}><img src={e.icon} alt="images" /></div>
            <div className={styles.taxibookingappadminpannelindivifortxt}>
            <h4>{e.htxt}</h4>
            <p>{e.stxt}</p>
            </div>
            
            
            </div>
        )
    })}</div>
    
    </div>
    </div>

  )
}
