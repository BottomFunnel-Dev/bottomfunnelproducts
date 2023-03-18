import React from 'react'
import styles from "./SalesProcess.module.css";
import Image from 'next/image';

export const SalesProcess = () => {
  return (
    <div>
        <div className={styles.SalesProcessmaindiv}>
            <h2>From prospect signed customer, CPQ helps speed up the sales process </h2>
            <div className={styles.SalesProcessuperdiv}>
                <div className={styles.SalesProcessinnerdiv}>
                    <div className={styles.SalesProcessrow}>
                        <div className={styles.SalesProcessrowimage}>
                        <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/cpqimage/Business Target.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
                        </div>
                        <h5>improve accuracy on shorter timelines   </h5>
                        <p>Salespeople can create quotes and other documents in simple steps that pull in data from the related records. CPQ takes out the calculation from the process to help create error-free documents in minutes.</p>
                    </div>

                   


                    <div className={styles.SalesProcessrow}>
                        <div className={styles.SalesProcessrowimage}>
                        <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/cpqimage/sales (1) 1.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
                        </div>
                        <h5>improve accuracy on shorter timelines   </h5>
                        <p>Salespeople can create quotes and other documents in simple steps that pull in data from the related records. CPQ takes out the calculation from the process to help create error-free documents in minutes.</p>
                    </div>


                    <div className={styles.SalesProcessrow}>
                        <div className={styles.SalesProcessrowimage}>
                        <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/cpqimage/Group.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
                        </div>
                        <h5>improve accuracy on shorter timelines   </h5>
                        <p>Salespeople can create quotes and other documents in simple steps that pull in data from the related records. CPQ takes out the calculation from the process to help create error-free documents in minutes.</p>
                    </div>
                </div>








                <div className={styles.SalesProcessinnerdiv}>
                    <div className={styles.SalesProcessrow1}>
                        <div className={styles.SalesProcessrowimage}>
                        <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/cpqimage/Group.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
                        </div>
                        <h5>improve accuracy on shorter timelines   </h5>
                        <p>Salespeople can create quotes and other documents in simple steps that pull in data from the related records. CPQ takes out the calculation from the process to help create error-free documents in minutes.</p>
                    </div>

                    <div className={styles.SalesProcessrow2}>
                        <div className={styles.SalesProcessrowimage}>
                        <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/cpqimage/save-time 1.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
                        </div>
                        <h5>improve accuracy on shorter timelines   </h5>
                        <p>Salespeople can create quotes and other documents in simple steps that pull in data from the related records. CPQ takes out the calculation from the process to help create error-free documents in minutes.</p>
                    </div>


                    


                  


                   
                </div>
            </div>
        </div>
    </div>
  )
}
