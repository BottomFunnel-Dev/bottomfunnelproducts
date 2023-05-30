import React from 'react'
import styles from "./SuitDeals.module.css"
import Image from 'next/image'
import { dealsdata } from '../../Data/webdevPageData/Suitepagedata';

export default function SuitDeals() {
  return (
    <div className={styles.SuitDealsMain}>
      <div className={styles.SuitDealsdiv}>
        {dealsdata.map(({ img, title, para, point, fetr, idx }) => {
          return (
            <div key={idx} className={styles.SuitDealsbox}>
              <div className={styles.SuitDealsimg}>
                <Image
                  src={img}
                  alt={"SuitePage/icons/"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%", objectFit: 'contain' }}
                />
              </div>
              
              <div className={styles.SuitDealstext}>
                <h5>{title}</h5>
                <p>{para}</p>
                <p>{fetr}</p>
                <ul className={styles.list}>
                  <li>{point.one}</li>
                  <li>{point.two}</li>
                  <li>{point.three}</li>
                </ul>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  )
}
