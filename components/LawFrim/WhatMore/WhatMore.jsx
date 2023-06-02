import React from 'react'
import styles from "./WhatMore.module.css";
import Image from 'next/image';

export const WhatMore = () => {
    const data = [
        {
        img:"https://d3op2l77j7wnti.cloudfront.net/Images/lawfrimphotos/business-card 1.png",
        hd:"Tag Contacts",
        p:"Create unique labels and tags for your clarity. Once you tag a contact, run a search, and quickly populate everyone with a specific tag."
        },
        {
            img:"https://d3op2l77j7wnti.cloudfront.net/Images/lawfrimphotos/notepad.png",
            hd:"Notes and tasks",
            p:"All of your notes, tasks, and appointments related to prospects and clients appear along with the other primary information."
            },
            {
                img:"https://d3op2l77j7wnti.cloudfront.net/Images/lawfrimphotos/chat (6).png",
                hd:"Send instant messages",
                p:"SMS is faster than an email and yet less intrusive than a phone call. Freshsales allows you to SMS your clients from within the CRM."
                },
        
        ]  
  return (
    <div>
        <div className={styles.WhatMoremaindiv}>
            <div className={styles.WhatMoremaindivimage}>
            <Image
                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/lawfrimphotos/sideimage.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
            </div >
            <div className={styles.WhatMoremaindivcontent}>
            {data.map((e) => {
return (
<div className={styles.WhatMoremaindivcontentinner}>
                    <div className={styles.WhatMoremaindivcontentinnerimage}>  
                        <Image
                        src={e.img}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                    </div>
                    <div className={styles.WhatMoremaindivcontentinnercontent}>
                        <h6>
                           {e.hd}
                        </h6>
                        <p>{e.p}</p>
                    </div>
                </div>

    )
})}
                
               
            </div>
        </div>
    </div>
  )
}
