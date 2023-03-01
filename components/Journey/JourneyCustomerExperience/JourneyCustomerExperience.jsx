import styles from "./JourneyCustomerExperience.module.css"
import Image from "next/image"
export const JourneyCustomerExperience = () => {
    return (
         <div className={styles.JourneyCustomerExperiencemain}>
            <h1 className={styles.JourneyCustomerExperiencemainheading}>Deliver delightful customer experiences with timely ,targeted engagement</h1>
            <div className={styles.JourneyCustomerExperienceOnlyChild}>
                 <div className={styles.JourneyCustomerExperienceImage}> 
                <Image
                    src={"/Images/Journey/7793.png"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />
               </div> 
                <div style={{ marginLeft: "5%"}} className={styles.JourneyCustomerExperiencelistdiv}>
                   <ul>
                    <li > <b>Get insights into journey pergormance</b> </li>
                    <p>Understand  how your campaigns are performing and 
                        how customers are engaging to optimize journey for better result.
                    </p>
                    <li><b>Create nurture campaigns</b></li>
                    <p>Nurture your cutomers bases on thier web page visits,downloads etc amd send 
                        targeted emails that improve conversion.
                    </p>
                    <li><b>Schedule at the right time</b></li>
                    <p>
                        Plan your customer journey to go at the right time,for instances ,anniversary compaigns,launches etc.
                    </p>
                   </ul>
                </div>
            </div>
        </div>    
    )
}