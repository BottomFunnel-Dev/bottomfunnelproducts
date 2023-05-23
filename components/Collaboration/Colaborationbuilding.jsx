import Image from 'next/image'
import React from 'react'
import styles from "./Colaborationbuilding.module.css"


export const Colaborationbuilding = () => {

    const colaborationbuildingdata = [
       

        {
            htxt:"Prioritize tasks",
            stxt:"Collaborate with your colleagues to gain an understanding of the entire scope of your project, including support tickets, sales transactions, service requests, and other tasks.",
            icon:"https://d3op2l77j7wnti.cloudfront.net/Images/Collaboration/components/image 52.webp",

        },

        {
            htxt:"Forgo the habit of tab switching",
            stxt:"Maintain constant vigil over conversations to stay up-to-date without switching between the Bottom Funnel products and other team collaboration tools.",
            icon:"https://d3op2l77j7wnti.cloudfront.net/Images/Collaboration/components/image 53.webp",

        },

        {
            htxt:"Utilize the tools you favor",
            stxt:"Right where you are working, access the collaboration UI that's native to your favorite Bottom Funnel  products for assistance.   ",
            icon:"https://d3op2l77j7wnti.cloudfront.net/Images/Collaboration/components/image 54.webp",

        },


    ]

  return (
    <div className={styles.colaborationbuildingmainboxes}>
    <h1>Fostering collaboration through innovation</h1>
    <p>To be at their most productive, teams should have a native, channel-agnostic, and context-driven collaboration experience similar to how they work.</p>
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
