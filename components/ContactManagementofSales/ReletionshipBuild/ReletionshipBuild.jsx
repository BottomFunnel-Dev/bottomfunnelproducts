import React from 'react'
import styles from "./ReletionshipBuild.module.css";
import Image from 'next/image';


export const ReletionshipBuild = () => {
  return (
    <div>
         <div className={styles.ReletionshipBuildmaindiv}>
            <h2>Gain a 360 view of contacts and build stronger reletionships </h2>
            <hr/>
            <p>Get Complete details about the contacts in your database - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit tempora sapiente et reprehenderit neque dolor blanditiis exercitationem culpa, assumenda, aliquid aliquam labore quod corporis deserunt. Quia odio repellat nisi nostrum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam ab minima excepturi sunt fugiat, ipsa libero dolor accusamus. Placeat hic beatae dicta voluptatum dolores eum amet, nostrum deleniti. Labore, ipsum.</p>
              
              <div  className={styles.ReletionshipBuildmaindivimage}>
              <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/contactmanagementofsalesphotos/Contacts.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
                
              </div>

              <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolorem laudantium libero. Doloribus sunt, maxime vitae dolores officia possimus quos? Tempore consequuntur dolorum voluptatibus excepturi perspiciatis? Cum quos dicta dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ex quibusdam est ullam. Vitae sapiente ipsa veritatis, delectus odio a temporibus obcaecati excepturi hic? Non optio autem quidem quia delectus.</p>
        </div>
    </div>
  )
}
