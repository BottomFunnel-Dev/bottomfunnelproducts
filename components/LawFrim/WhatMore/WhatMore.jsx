import React from 'react'
import styles from "./WhatMore.module.css";
import Image from 'next/image';

export const WhatMore = () => {
  return (
    <div>
        <div className={styles.WhatMoremaindiv}>
            <div className={styles.WhatMoremaindivimage}>
            <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/lawfrimphotos/sideimage.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
            </div >
            <div className={styles.WhatMoremaindivcontent}>
                <div className={styles.WhatMoremaindivcontentinner}>
                    <div className={styles.WhatMoremaindivcontentinnerimage}>  
                        <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/lawfrimphotos/business-card 1.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                    </div>
                    <div className={styles.WhatMoremaindivcontentinnercontent}>
                        <h6>
                            Tag Contacts
                        </h6>
                        <p>Create unique labels and tags for your clarity. Once you tag a contact, run a search, and quickly populate everyone with a specific tag. </p>
                    </div>
                </div>

                <div className={styles.WhatMoremaindivcontentinner}>
                    <div className={styles.WhatMoremaindivcontentinnerimage}>  
                        <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/lawfrimphotos/notepad.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                    </div>
                    <div className={styles.WhatMoremaindivcontentinnercontent}>
                        <h6>
                        Notes and tasks
                        </h6>
                        <p>All of your notes, tasks, and appointments related to prospects and clients appear along with the other primary information.</p>
                    </div>
                </div>

                <div className={styles.WhatMoremaindivcontentinner}>
                    <div className={styles.WhatMoremaindivcontentinnerimage}>  
                        <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/lawfrimphotos/chat (6).png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                    </div>
                    <div className={styles.WhatMoremaindivcontentinnercontent}>
                        <h6>
                        Send instant messages
                        </h6>
                        <p>SMS is faster than an email and yet less intrusive than a phone call. Freshsales allows you to SMS your clients from within the CRM.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
