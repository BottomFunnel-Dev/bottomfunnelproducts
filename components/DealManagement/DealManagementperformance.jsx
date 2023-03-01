import React from 'react'
import styles from "./DealManagementperformance.module.css"
import Image from 'next/image'


export const DealManagementperformance = () => {

    return (
        <div className={styles.dealmanagementhandlemainboxes}>
        <div className={styles.dealmanagementhanleleftbox}>
        <h2>Quantify team performance with sales Goals !</h2>
        <p>Stay on track with your business objectives by setting and tracking sales goals.
        Set goals based on revenue or the number of deals to win for teams or
        individuals.Define the time range for your goals, assign to teams/geographies/products,
        and track your progress.Identify your growth areas, Sucessful products, 
        or territories to focus on, and do more.</p>
        </div>
    
        <div className={styles.dealmanagementhanlelerightbox}>
        
        <Image
              src={"/Images/Deal management/Screens/ha/quantifyteam.webp"}
              alt={"handle"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%", objectFit:"contain", padding:"20px" }}
            />
    
        
        </div>
        
        
        </div>
      )
    }
    


