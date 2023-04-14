import React from 'react';
import styles from "./RemoteSupportExperts.module.css";
import Image from 'next/image';

export const RemoteSupportExperts=()=>{
    const cards =[
        {
            img:"/Images/RemoteSupport/human1.png",
            par:"Remote working best practices and strategies from a work-from-home veteran of 7 years"
        },
        {
            img:"/Images/RemoteSupport/human2.png",
            par:"Tips to set up a remote helpdesk from the manager of a 100-memberstrong support team"
        },
        {
            img:"/Images/RemoteSupport/human3.png",
            par:"Learn how to build a crisis communication plan from a PR veteran of 20 years"
        },
        {
            img:"/Images/RemoteSupport/human4.png",
            par:"Explore the advantages of moving to cloud with a customer support leaderfrom Freshworks"
        },
        {
            img:"/Images/RemoteSupport/human5.png",
            par:"Tips to strengthen your self-service strategy from a knowledge management thought leader"
        },
        {
            img:"/Images/RemoteSupport/human6.png",
            par:"The story of how Freshworks moved to remote support from our Senior Director of Support"
        },
        {
            img:"/Images/RemoteSupport/human7.png",
            par:"Tips to motivate your remote team from a seasoned customer success leader"
        },
        {
            img:"/Images/RemoteSupport/human8.png",
            par:"Tips to manage information in a time of crisis from a product marketing leader"
        },
        {
            img:"/Images/RemoteSupport/human9.png",
            par:"Expert tips on managing remote teams from a global community manager"
        },
        {
            img:"/Images/RemoteSupport/human10.png",
            par:"Tips to ensure data security for remote teams from the CIO of Freshworks"
        },
        {
            img:"/Images/RemoteSupport/human11.png",
            par:"How the ecommerce industry can adapt amidst the current crisis from the CEO of LateShipment"
        },
        {
            img:"/Images/RemoteSupport/human11.png",
            par:"How the ecommerce industry can adapt amidst the current crisis from the CEO of LateShipment"
        }
    ]
return(
    <div className={styles.RemoteSupportExpertsMain}>
<div className={styles.RemoteSupportExpertsHeader}>
<h2> <b> Adapt videos: Conversations with industry experts</b></h2>
<p>A series of interviews with different business leaders where they discuss ideas and experiences <br/>
on how to navigate the transition to remote customer support!</p>
</div>

<div className={styles.RemoteSupportExpertssection}>
{cards.map((item) => {
            return (
<div className={styles.RemoteSupportExpertsdiv}>
    <div className={styles.cardsimages}>
    <Image
                    src={item.img}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                  <p>{item.par}</p>
                  <div className={styles.RemoteSupportExpertsbottom}>
                    <a href="#">Read More</a>
                    <div className={styles.RemoteSupportExpertsicon}>
                    <Image
                    src={"/Images/RemoteSupport/icon.png"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                    </div>

                  </div>
                </div>
                
    </div>
            );})}
</div>

</div>
)}