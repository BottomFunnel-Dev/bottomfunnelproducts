import React from 'react'
import styles from "./Business.module.css";
import Image  from 'next/image';

export const Business = () => {
  return (
    <div>
        <div className={styles.Businessmaindiv}>
            <h2>Get one step closer to your customers and win more business </h2>
            <p>With Freshsales, get complete, end-to-end visibility into your distributors’ and retailers’ journey.  You also get to customize the essential data points you want to see upfront in the summary and highlights section. Using this information, you can be proactive in building better products, collaborating with different teams, targeting the right industries, and tailoring your messaging accordingly. This not just helps boost your revenue but also creates an edge over your competitors by always staying two steps ahead in the game.  </p>
            <div className={styles.Businessmaindivimage}>
                  <Image
                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/Manufacturing/manufaturing-vector-animation.gif"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
            </div>
        </div>
    </div>
  )
}
