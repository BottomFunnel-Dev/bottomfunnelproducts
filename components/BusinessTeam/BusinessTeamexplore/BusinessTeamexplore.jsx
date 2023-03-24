
import React from "react";
import styles from "./BusinessTeamexplore.module.css";
import Image from "next/image";
export const BusinessTeamexplore = () => {
    return (
        <div className={styles.businessTeamexploreParent}>
            <h2 className={styles.businessTeamexploreParentHeading}>
                Explore use cases for business team
            </h2>
            <div className={styles.businessTeamexploreParentchild}>
                <div className={styles.businessTeamexploreParentchildcards}>
                    <div className={styles.businessTeamexploreParentchildcardsImage}>
                        <Image
                            src={"/Images/BusinessTeam/iconone.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                    <h4 className={styles.businessTeamexploreParentchildcardsImageHeading}>
                        finance teams
                    </h4>
                    <p className={styles.businessTeamexploreParentchildcardsImagepara}>
                        Alwys be audit ready with automated workflow
                    </p>
                    <button className={styles.businessTeamexploreParentchildcardsImagebutton} >
                        Learn more &rarr;
                    </button>
                </div>




                <div className={styles.businessTeamexploreParentchildcards}>
                    <div className={styles.businessTeamexploreParentchildcardsImage}>
                        <Image
                            src={"/Images/BusinessTeam/icontwo.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                    <h4 className={styles.businessTeamexploreParentchildcardsImageHeading}>
                        HR Teams
                    </h4>
                    <p className={styles.businessTeamexploreParentchildcardsImagepara}>
                        Easily automate employee onboarding and user provisioning                    </p>
                    <button className={styles.businessTeamexploreParentchildcardsImagebutton} >
                        Learn more &rarr;
                    </button>
                </div>


                <div className={styles.businessTeamexploreParentchildcards}>
                    <div className={styles.businessTeamexploreParentchildcardsImage}>
                        <Image
                            src={"/Images/BusinessTeam/iconthree.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                    <h4 className={styles.businessTeamexploreParentchildcardsImageHeading}>
                        Facilities Tams
                    </h4>
                    <p className={styles.businessTeamexploreParentchildcardsImagepara}>
                        Ensure a fully functional and comfortable work environment                 </p>
                    <button className={styles.businessTeamexploreParentchildcardsImagebutton} >
                        Learn more &rarr;
                    </button>
                </div>



                <div className={styles.businessTeamexploreParentchildcards}>
                    <div className={styles.businessTeamexploreParentchildcardsImage}>
                        <Image
                            src={"/Images/BusinessTeam/iconfour.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                    <h4 className={styles.businessTeamexploreParentchildcardsImageHeading}>
                        Legal Teams
                    </h4>
                    <p className={styles.businessTeamexploreParentchildcardsImagepara}>
                       Streamline document reviews and automate approvals for quick assistance      </p>
                    <button className={styles.businessTeamexploreParentchildcardsImagebutton} >
                        Learn more &rarr;
                    </button>
                </div>
            </div>

        </div >
    )
}