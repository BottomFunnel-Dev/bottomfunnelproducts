import React from 'react'
import Image from 'next/image'
import styles from "./PopularFeatures.module.css"


export const PopularFeatures = () => {
  return (
    <div>
      <div className= {styles.PopularFeaturesmaindiv}>
      <h2> POPULAR FEATURES:</h2> 

        <div className= {styles.PopularFeatureinnerdiv}>
            <div className= {styles.PopularFeatureinnerbox}>
                <div className= {styles.PopularFeatureimagebox}>
                <Image
          src={"https://d3op2l77j7wnti.cloudfront.net/Images/bottomfunnelservicephotos/customer-service (1).webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
                </div>
                <div>
                    <h4>Help Desk & Ticketing</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolor sapiente rerum debitis cupiditate modi natus iste delectus ex eius vitae suscipit vel, impedit a, fugiat voluptatem, quis voluptates repellendus.</p>

                </div>
            </div>

            <div className= {styles.PopularFeatureinnerbox}>
                <div className= {styles.PopularFeatureimagebox}>
                <Image
          src={"https://d3op2l77j7wnti.cloudfront.net/Images/bottomfunnelservicephotos/customer-service (2).webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
                </div>
                <div>
                    <h4>Help Desk & Ticketing</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolor sapiente rerum debitis cupiditate modi natus iste delectus ex eius vitae suscipit vel, impedit a, fugiat voluptatem, quis voluptates repellendus.</p>

                </div>
            </div>

            <div className= {styles.PopularFeatureinnerbox}>
                <div className= {styles.PopularFeatureimagebox}>
                <Image
          src={"https://d3op2l77j7wnti.cloudfront.net/Images/bottomfunnelservicephotos/project-management.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
                </div>
                <div>
                    <h4>Help Desk & Ticketing</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolor sapiente rerum debitis cupiditate modi natus iste delectus ex eius vitae suscipit vel, impedit a, fugiat voluptatem, quis voluptates repellendus.</p>

                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
