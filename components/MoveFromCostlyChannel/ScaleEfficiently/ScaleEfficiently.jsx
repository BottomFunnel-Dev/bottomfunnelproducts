import React from 'react'
import styles from "./ScaleEfficiently.module.css"
import Image from 'next/image'

export const ScaleEfficiently = () => {
    const d = [{imgl:"/Images/MoveFromCostlyChannal/Group.png",hdl:"Reduce your agents’ workload",pl:"Deflect and resolve up to 80% of incoming cases without agent intervention. Allow your team to focus on more meaningful work while drastically reducing resolution times for low-touch issues."
    ,imgr:"/Images/MoveFromCostlyChannal/Group (1).png",hdr:"Digitize your IVR workflows",pr:"Serve customers via messaging with ease. Digitize your IVRs to pass on customers’ issues to the right chat queues for agents."},
    {imgl:"/Images/MoveFromCostlyChannal/Group 1000006392.png",hdl:"Lower incoming requests with proactive support",pl:"Reach out to customers before they reach you, with hyper-targeted campaigns. Bring down incoming requests by addressing their concerns proactively."
    ,imgr:"/Images/MoveFromCostlyChannal/OBJECT.png",hdr:"Help your agents be more productive",pr:"Access a suite of features that aid your agents’ productivity. Enable them to automate routine workflows and resolve issues with great speed and efficiency."},
    {imgl:"/Images/MoveFromCostlyChannal/Frame.png",hdl:"Never leave a conversation incomplete",pl:"Long queues for live chat support can be frustrating for customers and hectic for agents. Use an asynchronous messaging solution that allows both to continue a conversation at their own pace."
    ,imgr:"/Images/MoveFromCostlyChannal/Layer_1.png",hdr:"Handle high volumes with ease",pr:"Bottom funnel chat is easy to configure, deploy, and maintain - making it accessible for every business, not just the Fortune 500 companies. Effortlessly scale to support millions of daily requests without any increase in agent count."}]
  return (
    <div>
           <div  className={styles.ScaleEfficientlymaindiv}>
        <div  className={styles.ScaleEfficientlymaindivheading}>
        <h2 >Scale efficiently with Bottom funnel chat’s digital-first customer service</h2>
</div>

  {d.map((item) => {
    return(
<div className={styles.ScaleEfficientlymaindivcards } >
    <div className={styles.ScaleEfficientlymaindivcardsbox}>
     <h5> {item.hdl} </h5>
     <div className={styles.ScaleEfficientlymaindivcardsboximage}>
     <Image
                        src={item.imgl}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     <p>{item.pl}</p>
    </div>
    <div className={styles.ScaleEfficientlymaindivcardsbox} >
     <h5>{item.hdr}</h5>
     <div className={styles.ScaleEfficientlymaindivcardsboximage}>
     <Image
                        src={item.imgr}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
     </div>
     <p>{item.pr}</p>
    </div>
</div>
    );
  })}  



      </div>
    </div>
  )
}
