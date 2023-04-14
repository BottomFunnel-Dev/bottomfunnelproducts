import React from 'react';
import styles from "./RemoteSupportGuide.module.css";
import Image from 'next/image';

export const RemoteSupportGuide=()=>{
    const guide =[
        {
            img:"/Images/RemoteSupport/vector6.png",
            hd:"Podcast series on rethinking your CX strategy",
            par:"A custom curated podcast series with the customer experience guru Micah Solomon and global CX leaders to help you strategize your next move in this crisis! This series covers essential topics such as:",
            l1:"Adapting your contact center",
            l2:"Integrating AI in your customer service",
            l3:"Finding possibilities to grow during a crisis"
        },
        {
            img:"/Images/RemoteSupport/vector4.png",
            hd:"6 resources on scaling your remote support team",
            par:"A playlist of resources on how to set up and scale your remote support team! You can find articles that discuss various remote working essentials such as:",
            l1:"Onboarding and training your remote support team",
            l2:"Choosing the best remote working tool",
            l3:"Keeping your support team motivated and engaged while they work from home"
        },
        {
            img:"/Images/RemoteSupport/vector1.png",
            hd:"8 exclusive guides to strengthen your self-service",
            par:"Self-service becomes crucial as you try to go remote! It not only reduces the burden on your support team, but also helps customers find answers faster! Check out in-depth content on:",
            l1:"Writing the perfect knowledge base article",
            l2:"The mistakes to avoid in your self-service strategy",
            l3:"Measuring the impact of your self-service resources"
        },
        {
            img:"/Images/RemoteSupport/vector3.png",
            hd:"8 in depth articles on boosting customer experience",
            par:"Self-service becomes crucial as you try to go remote! It not only reduces the burden on your support team, but also helps customers find answers faster! Check out in-depth content on:",
            l1:"4 ways to identify CX painpoint",
            l2:"Quantifying customer experience",
            l3:"Creating an omnichannel customer experience"
        },
        {
            img:"/Images/RemoteSupport/vector2.png",
            hd:"6 resources to upgrade your live chat and social support strategy",
            par:"The significance of live chat and social media increases immensely when you're looking to adopt remote support! Here are a few resources to help you get a headstart:",
            l1:"Whitepaper on the evolution of live chat customer support",
            l2:"30 most important live chat support tips",
            l3:"Handling Twitter, Facebook and Instagram support"
        },
        {
            img:"/Images/RemoteSupport/vector5.png",
            hd:"7 resources on upskilling your customer support agents",
            par:"To help your support team navigate the new normal, it's important they upskill their existing knowledge and incopororate principles of remote support! Here's what you can find in this resource gallery:",
            l1:" Customer support glossary to get familiar with all things customer service",
            l2:"A course support agents can take to perfect the essentials of good customer service",
            l3:" Articles that discuss how to handle difficult customers and apologize effectively"
        }
    ]
    return(
        <div className={styles.RemoteSupportGuideMain}>
<div className={styles.RemoteSupportGuideHeader}>
<h2> <b> Adapt videos: Conversations with industry experts</b></h2>
<p>A series of interviews with different business leaders where they discuss ideas and experiences <br/>
on how to navigate the transition to remote customer support!</p>
</div>

<div className={styles.RemoteSupportGuidesection}>
{guide.map((item) => {
            return (
<div className={styles.RemoteSupportGuidediv}>
    <div className={styles.guideimages}>
    <Image
                    src={item.img}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  /> 
                </div>
                <div className={styles.RemoteSupportGuidedetails}>
                <h2>{item.hd}</h2>
                  <p>{item.par}</p>
                  <ul>
                    <li>{item.l1}</li>
                    <li>{item.l2}</li>
                    <li>{item.l3}</li>
                  </ul>
                 
                 <button className={styles.RemoteSupportGuideaccess}>ACCESS LIBRARY</button>
                  </div>
                </div>
            );})}
</div>

</div>
    )
}