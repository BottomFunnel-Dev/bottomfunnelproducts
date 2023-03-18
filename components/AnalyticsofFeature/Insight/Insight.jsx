import React from 'react'
import styles from "./Insight.module.css"
import Image from 'next/image'

export const Insight = () => {
  return (
    <div>
        <div className={styles.Insightmaindiv}>
            <h2>Power-packed features to help with business insights</h2>

            <div className={styles.Insightinnerdiv}>
                <div className={styles.Insightinnerdivbox}>
                  <div className={styles.Insightinnerdivboxcontent}>
                    <h4>Create reports tailored for your business</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi perspiciatis molestiae ipsa. Corrupti, eius illo. Neque asperiores tempore, laboriosam itaque necessitatibus ut quam similique voluptatibus molestias animi, ullam modi sapiente?</p>
                  </div>
                  <div className={styles.Insightinnerdivimagebox}>
                    <div className={styles.Insightinnerdivimage}>
                  <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Analyticsoffeatureimage/screen1.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
        </div>
                  </div>
                </div>
                <div className={styles.Insightinnerdivbox1}>
                  <div className={styles.Insightinnerdivboxcontent1}>
                    <h4>Customize, as you please </h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi perspiciatis molestiae ipsa. Corrupti, eius illo. Neque asperiores tempore, laboriosam itaque necessitatibus ut quam similique voluptatibus molestias animi, ullam modi sapiente?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique laboriosam impedit tenetur sequi accusamus rem officiis. Earum natus, culpa, obcaecati velit id repudiandae modi voluptas neque deserunt eum quod aspernatur.</p>
                  </div>
                  <div className={styles.Insightinnerdivimagebox}>
                    <div className={styles.Insightinnerdivimage}>
                  <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Analyticsoffeatureimage/screen2.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
        </div>
                  </div>
                </div>
                <div className={styles.Insightinnerdivbox}>
                  <div className={styles.Insightinnerdivboxcontent}>
                    <h4>Slice and dice, however you like </h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi perspiciatis molestiae ipsa. Corrupti, eius illo. Neque asperiores tempore, laboriosam itaque necessitatibus ut quam Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolorem corporis pariatur quisquam, perferendis facilis, vero quo fugiat explicabo minus quis alias distinctio, iure adipisci sequi. Id numquam labore quisquam?</p>
                  </div>
                  <div className={styles.Insightinnerdivimagebox}>
                    <div className={styles.Insightinnerdivimage}>
                  <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Analyticsoffeatureimage/screen3.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
        </div>
                  </div>
                </div>
                <div className={styles.Insightinnerdivbox1}>
                  <div className={styles.Insightinnerdivboxcontent1}>
                    <h4>Access insights, on-the-go</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi perspiciatis molestiae ipsa. Corrupti, eius illo. Neque asperiores tempore, laboriosam itaque necessitatibus ut quam similique voluptatibus molestias animi, ullam modi sapiente?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ullam, dolorum distinctio nostrum, nesciunt fuga quaerat, et earum labore porro eaque suscipit accusantium consectetur blanditiis. Vitae ad sit cum sed.</p>
                  </div>
                  <div className={styles.Insightinnerdivimagebox}>
                    <div className={styles.Insightinnerdivimage}>
                  <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Analyticsoffeatureimage/screen4.webp"}
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
        </div>
    </div>
  )
}
