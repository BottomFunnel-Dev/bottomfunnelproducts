import React from 'react'
import styles from "./SuitFeature.module.css"
import Image from 'next/image'
import { featuredata } from '../../Data/webdevPageData/Suitepagedata';

export default function SuitFeature () {
  
  return (
    <div className={styles.SuitFeatureMain}>
        <div className={styles.SuitFeaturediv}>
        {featuredata.map(({ img, title, para, point, fetr, idx }) => {
          return (
            <div key={idx} className={styles.SuitFeaturebox}>
                <div className={styles.SuitFeatureimg}>
                <Image
                    src={img}
                    alt={"SuitePage/icons/"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    />
                </div>
                <div className={styles.SuitFeaturetext}>
                    <h5>{title}</h5>
                    <p>{para}</p>
                    <p>{fetr}</p>
                    <ul className={styles.list}>
                        <li>{point.one}</li>
                        <li>{point.two}</li>
                        <li>{point.three}</li>
                        <li>{point.four}</li>
                    </ul>  
                </div>

            </div>
          );
        })}
        </div>
    </div>
  )
}
