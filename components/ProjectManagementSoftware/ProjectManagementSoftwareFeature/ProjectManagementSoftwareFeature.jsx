import styles from "./ProjectManagementSoftwareFeature.module.css";
import Image from "next/image";
export const ProjectManagementSoftwareFeature = () => {
    return (
        <div className={styles.projectManagementSoftwareFeatureParent}>
            <h2>Additinal Feature</h2>
            <div className={styles.projectManagementSoftwareFeatureParentchild}>

                <div className={styles.projectManagementSoftwareFeatureParentchildcards}>
                    <div className={styles.projectManagementSoftwareFeatureParentchildcardsImage} >
                        <Image
                            src={"/Images/ProjectManagementSoftware/iconone.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                    <h4 className={styles.projectManagementSoftwareFeatureParentchildcardsHeading}>
                        Customization
                    </h4>
                    <p className={styles.projectManagementSoftwareFeatureParentchildcardsPara}>
                        Customizable project task
                        types, statuses, and fields
                        make project management
                        immensely flexible to suit your
                        needs.
                    </p>
                </div>





                <div className={styles.projectManagementSoftwareFeatureParentchildcards}>
                    <div className={styles.projectManagementSoftwareFeatureParentchildcardsImage} >
                        <Image
                            src={"/Images/ProjectManagementSoftware/icontwo.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                    <h4 className={styles.projectManagementSoftwareFeatureParentchildcardsHeading}>
                        Project templates

                    </h4>
                    <p className={styles.projectManagementSoftwareFeatureParentchildcardsPara}>
                        No more starting from
                        scratch. Save your time by
                        saving your existing project as
                        a template or use pre-built
                        templates.
                    </p>
                </div>







                <div className={styles.projectManagementSoftwareFeatureParentchildcards}>
                    <div className={styles.projectManagementSoftwareFeatureParentchildcardsImage} >
                        <Image
                            src={"/Images/ProjectManagementSoftware/iconthree.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                    <h4 className={styles.projectManagementSoftwareFeatureParentchildcardsHeading}>
                        Collaboration
                    </h4>
                    <p className={styles.projectManagementSoftwareFeatureParentchildcardsPara}>
                        Seamlessly collaborate with
                        your team members by using
                        @mentions and comments.
                    </p>
                </div>
            </div>










            <div className={styles.projectManagementSoftwareFeatureParentchild}>

                <div className={styles.projectManagementSoftwareFeatureParentchildcards}>
                    <div className={styles.projectManagementSoftwareFeatureParentchildcardsImage} >
                        <Image
                            src={"/Images/ProjectManagementSoftware/iconfour.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                    <h4 className={styles.projectManagementSoftwareFeatureParentchildcardsHeading}>
                        Cross-project views
                    </h4>
                    <p className={styles.projectManagementSoftwareFeatureParentchildcardsPara}>
                        Teams will have a holistic view
                        of all the cross-project tasks
                        from a single place.
                    </p>
                </div>





                <div className={styles.projectManagementSoftwareFeatureParentchildcards}>
                    <div className={styles.projectManagementSoftwareFeatureParentchildcardsImage} >
                        <Image
                            src={"/Images/ProjectManagementSoftware/iconfive.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                    <h4 className={styles.projectManagementSoftwareFeatureParentchildcardsHeading}>
                        Time tracking
                    </h4>
                    <p className={styles.projectManagementSoftwareFeatureParentchildcardsPara}>
                        Project members can log the
                        time spent on project tasks.
                        This helps project managers
                        track the amount of effort an
                        agent has put into an item.
                    </p>
                </div>







                <div className={styles.projectManagementSoftwareFeatureParentchildcards}>
                    <div className={styles.projectManagementSoftwareFeatureParentchildcardsImage} >
                        <Image
                            src={"/Images/ProjectManagementSoftware/iconthree.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                    <h4 className={styles.projectManagementSoftwareFeatureParentchildcardsHeading}>
                        Integrations
                    </h4>
                    <p className={styles.projectManagementSoftwareFeatureParentchildcardsPara}>
                        Integration with GitHub and
                        GitLab enables the highvelocity modern DevOps
                        teams to optimize speed and
                        works efficiency across IT
                        functions
                    </p>
                </div>
            </div>
        </div>
    )
}