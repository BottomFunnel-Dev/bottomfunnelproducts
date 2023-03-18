import React from 'react'
import styles from "./ScaleEfficiently.module.css"
import Image from 'next/image'

export const ScaleEfficiently = () => {
  return (
    <div>
           <div  className={styles.ScaleEfficientlymaindiv}>
        <div  className={styles.ScaleEfficientlymaindivheading}>
        <h2 >Scale efficiently with Freshchat’s digital-first customer service</h2>
</div>

<div className={styles.ScaleEfficientlymaindivcards } >
    
    <div className={styles.ScaleEfficientlymaindivcardsbox}>
     <h5>Reduce your agents’ workload</h5>
     <div className={styles.ScaleEfficientlymaindivcardsboximage}>
     <Image
                        src={"/Images/MoveFromCostlyChannal/Group.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     <p>Deflect and resolve up to 80% of incoming cases without agent intervention. Allow your team to focus on more meaningful work while drastically reducing resolution times for low-touch issues.</p>
    </div>
    <div className={styles.ScaleEfficientlymaindivcardsbox} >
     <h5>Digitize your IVR workflows</h5>
     <div className={styles.ScaleEfficientlymaindivcardsboximage}>
     <Image
                        src={"/Images/MoveFromCostlyChannal/Group (1).png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     <p>Serve customers via messaging with ease. Digitize your IVRs to pass on customers’ issues to the right chat queues for agents.</p>
    </div>
</div>
<div className={styles.ScaleEfficientlymaindivcards}>
    <div className={styles.ScaleEfficientlymaindivcardsbox}>
     <h5>Lower incoming requests with proactive support</h5>
     <div className={styles.ScaleEfficientlymaindivcardsboximage}>
     <Image
                        src={"/Images/MoveFromCostlyChannal/Group 1000006392.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
    <p>Reach out to customers before they reach you, with hyper-targeted campaigns. Bring down incoming requests by addressing their concerns proactively.</p>
    </div>
   

<div className={styles.ScaleEfficientlymaindivcardsbox}>
     <h5>Help your agents be more productive</h5>
     <div className={styles.ScaleEfficientlymaindivcardsboximage}>
     <Image
                        src={"/Images/MoveFromCostlyChannal/OBJECT.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
    <p>Access a suite of features that aid your agents’ productivity. Enable them to automate routine workflows and resolve issues with great speed and efficiency.</p>
    </div>
   
</div>

<div className={styles.ScaleEfficientlymaindivcards}>
    <div className={styles.ScaleEfficientlymaindivcardsbox}>
     <h5>Never leave a conversation incomplete</h5>
     <div className={styles.ScaleEfficientlymaindivcardsboximage}>
     <Image
                        src={"/Images/MoveFromCostlyChannal/Frame.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     <p>Long queues for live chat support can be frustrating for customers and hectic for agents. Use an asynchronous messaging solution that allows both to continue a conversation at their own pace.</p>
    </div>
   

<div className={styles.ScaleEfficientlymaindivcardsbox}>
     <h5>Handle high volumes with ease</h5>
     <div className={styles.ScaleEfficientlymaindivcardsboximage}>
     <Image
                        src={"/Images/MoveFromCostlyChannal/Layer_1.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     <p>Freshchat is easy to configure, deploy, and maintain - making it accessible for every business, not just the Fortune 500 companies. Effortlessly scale to support millions of daily requests without any increase in agent count.</p>
    </div>
   
</div>



      </div>
    </div>
  )
}
