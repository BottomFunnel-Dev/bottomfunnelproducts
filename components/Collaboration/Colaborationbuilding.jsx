import Image from 'next/image'
import React from 'react'
import styles from "./Colaborationbuilding.module.css"


export const Colaborationbuilding = () => {

    const colaborationbuildingdata = [
       

        {
            htxt:"Focus more on tasks",
            stxt:"Share full context of what you are working on - support ticket, sales deal, service request and more - with teammates.",
            icon:"/Images/Collaboration/components/image 52.webp",

        },

        {
            htxt:"Forget switching tabs",
            stxt:"Stay on top of conversations without shuffling between Freshworks products and other team collaboration tools.",
            icon:"/Images/Collaboration/components/image 53.webp",

        },

        {
            htxt:"Build Customer trust",
            stxt:"Get help right where you are working with collaboration UI that's native to your favorite Freshworks Products. ",
            icon:"/Images/Collaboration/components/image 54.webp",

        },


    ]



  return (
    <div className={styles.colaborationbuildingmainboxes}>
    <h1>Building better ways to collaborate</h1>
    <p>Teams are most productive when collaboration tools mimic the way they work.
    Our integrations enables a context-driven, channel-agnostic, native collaboration experience.
    </p>
    <div className={styles.colaborationdatamappingbox}>{colaborationbuildingdata.map((e)=>{
        return (
            <div className={styles.colaborationdaataindibox}>
            <div className={styles.colaborationiconboxes}>
            <Image
          src={e.icon}
          alt={"images"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%", objectFit:"contain" }}
        />
            
            
            </div>

            <div className={styles.colaborationtxtbox}>
            <h4>{e.htxt}</h4>
            <p>{e.stxt}</p>
            
            </div>
            
            </div>
        )
    })}</div>
    </div>
  )
}
