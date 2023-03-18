import React from 'react'
import Image from 'next/image'
import styles from "./BottomFunnelTeamCards.module.css";

export const BottomFunnelTeamCards = () => {
  return (
    <div>
     <div className={styles.BottomFunnelTeamCardsmaindiv}>
        <h1>HR FEATURES</h1>
        <div className={styles.BottomFunnelTeamCardsinnerdiv}>
            <div className={styles.BottomFunnelTeamCardsinnerdivcards}>
                <div className={styles.BottomFunnelTeamCardsinnerdivimage}>
                <Image
  src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/bottomfunnelteamsphotos/recruit.webp"}
  alt={"image"}
  width={"0"}
  height={"0"}
  sizes={"100vw"}
  style={{ width: "100%", height: "100%" }}

  />
                </div>
                <h5>Recruitment </h5>
                <p>An efficient applicant tracking system and dynamic recruiting software.</p>
            </div>

            <div className={styles.BottomFunnelTeamCardsinnerdivcards}>
                <div className={styles.BottomFunnelTeamCardsinnerdivimage}>
                <Image
  src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/bottomfunnelteamsphotos/database.webp"}
  alt={"image"}
  width={"0"}
  height={"0"}
  sizes={"100vw"}
  style={{ width: "100%", height: "100%" }}

  />
                </div>
                <h5>Employee Database </h5>
                <p>Centralised database to manage everything on your fingertip.</p>
            </div>

            <div className={styles.BottomFunnelTeamCardsinnerdivcards}>
                <div className={styles.BottomFunnelTeamCardsinnerdivimage}>
                <Image
  src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/bottomfunnelteamsphotos/administration.webp"}
  alt={"image"}
  width={"0"}
  height={"0"}
  sizes={"100vw"}
  style={{ width: "100%", height: "100%" }}

  />
                </div>
                <h5>HR Administration  </h5>
                <p>Spend time on your goals, not on routine administration.</p>
            </div>


            <div className={styles.BottomFunnelTeamCardsinnerdivcards}>
                <div className={styles.BottomFunnelTeamCardsinnerdivimage}>
                <Image
  src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/bottomfunnelteamsphotos/payroll.webp"}
  alt={"image"}
  width={"0"}
  height={"0"}
  sizes={"100vw"}
  style={{ width: "100%", height: "100%" }}

  />
                </div>
                <h5>Payroll  </h5>
                <p>Painless payroll processing with Open HRMS.</p>
            </div>


            
        </div>


        <div className={styles.BottomFunnelTeamCardsinnerdiv}>
            <div className={styles.BottomFunnelTeamCardsinnerdivcards}>
                <div className={styles.BottomFunnelTeamCardsinnerdivimage}>
                <Image
  src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/bottomfunnelteamsphotos/appraisal.webp"}
  alt={"image"}
  width={"0"}
  height={"0"}
  sizes={"100vw"}
  style={{ width: "100%", height: "100%" }}

  />
                </div>
                <h5>Appraisal </h5>
                <p>Transparent appraisal strategies with increased employee engagement</p>
            </div>

            <div className={styles.BottomFunnelTeamCardsinnerdivcards}>
                <div className={styles.BottomFunnelTeamCardsinnerdivimage}>
                <Image
  src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/bottomfunnelteamsphotos/attendance.webp"}
  alt={"image"}
  width={"0"}
  height={"0"}
  sizes={"100vw"}
  style={{ width: "100%", height: "100%" }}

  />
                </div>
                <h5>Attendance & Leaves  </h5>
                <p>An intuitive attendance management system.</p>
            </div>

            <div className={styles.BottomFunnelTeamCardsinnerdivcards}>
                <div className={styles.BottomFunnelTeamCardsinnerdivimage}>
                <Image
  src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/bottomfunnelteamsphotos/hr report.webp"}
  alt={"image"}
  width={"0"}
  height={"0"}
  sizes={"100vw"}
  style={{ width: "100%", height: "100%" }}

  />
                </div>
                <h5>HR Reports  </h5>
                <p>Reports that can help you to stay on the top.</p>
            </div>


            <div className={styles.BottomFunnelTeamCardsinnerdivcards}>
                <div className={styles.BottomFunnelTeamCardsinnerdivimage}>
                <Image
  src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/bottomfunnelteamsphotos/feature.webp"}
  alt={"image"}
  width={"0"}
  height={"0"}
  sizes={"100vw"}
  style={{ width: "100%", height: "100%" }}

  />
                </div>
                <h5>For More Features </h5>
                <p>Timesheet Branch transfer, GOSI contribution, etc.</p>
            </div>


            
        </div>
     </div>
    </div>
  )
}
