import React from "react";
import Image from "next/image";
import styles from "./KnowledgeManagementPerks.module.css";
export const KnowledgeManagementPerks = () => {
  return (
    <div>
      <div className={styles.KnowledgeManagementPerksmaindiv}>
        <h2><span>Perks of</span> Knowledge Management</h2>
        <div className="container my-3">
          <div className="row">
            <div className="col-md-4 ">
              <div className={styles.KnowledgeManagementPerk}>
                <div className={styles.KnowledgeManagementPerksIcon1}>
                  <Image
                    src={"/Images/KnowledgeManagement/icon-1.png"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <h3>Auto-convert emails to articles</h3>
                <p>
                  Maximize productivity by converting existing emails of
                  solutions to articles in the knowledge base
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className={styles.KnowledgeManagementPerk}>
                <div className={styles.KnowledgeManagementPerksIcon2}>
                  <Image
                    src={"/Images/KnowledgeManagement/icon-2.png"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <h3>Control privacy of articless</h3>
                <p>
                  Manage the visibility of your knowledge base articles by
                  keeping them private or public, or even restricting access to
                  certain roles.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className={styles.KnowledgeManagementPerk}>
                <div className={styles.KnowledgeManagementPerksIcon3}>
                  <Image
                    src={"/Images/KnowledgeManagement/icon-3.png"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <h3>Search Engine Optimization</h3>
                <p>
                  Optimize knowledge articles for search engines so users can
                  easily find the solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
