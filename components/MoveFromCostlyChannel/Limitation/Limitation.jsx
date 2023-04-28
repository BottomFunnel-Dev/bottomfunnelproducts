import React from 'react'
import styles from "./Limitation.module.css"
import Image from 'next/image'

export const Limitation = () => {
    const listd = [{hd:" Criteria" , p1:"Channels",p2:"Conversation history",p3:"Cross-device continuity",p4:"Availability",p5:"Deflection through self-service"},
    {hd:"Live chat" , p1:"Limited to web and in-app",p2:"Not preserved",p3:"No",p4:"Synchronous",p5:"Not possible"},
    {hd:"Messaging" , p1:"Also supports messaging apps",p2:"Preserved",p3:"Yes",p4:"Asynchronous",p5:"Possible"}]
  return (
    <div>
        <div className={styles.Limitationmaundivheading}>
            <h2>Overcome the limitations of live chat with messaging</h2>
        </div>
    <div className={styles.Limitationmaundiv}>
        {listd.map((item) => {
            return(
                <div className={styles.Limitationmaundivinner}>
                <h6>{item.hd} </h6>
                <p> {item.p1}</p>
                <p> {item.p2}</p>
                <p> {item.p3}</p>
                <p> {item.p4}</p>
                <p> {item.p5}</p>
               
            </div>
            );
        })}
       

    </div>
    </div>
  )
}
