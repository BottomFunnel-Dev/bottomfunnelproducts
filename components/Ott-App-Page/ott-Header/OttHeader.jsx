import React from 'react';
import styles from './ottHeader.module.css';

export const OttHeader = () => {

  const ServicesData = [
    {
      icon: "/Images/ott-app/Frame-2.png",
      title: "Best Quality",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident quibusdam illo esse iste eligendi,"
    },

    {
      icon: "/Images/ott-app/Group901189.png",
      title: "Fast Downloading",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident quibusdam illo esse iste eligendi,"
    },

    {
      icon: "/Images/ott-app/Group16.png",
      title: "Analytics Services",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident quibusdam illo esse iste eligendi,"
    },

    {
      icon: "/Images/ott-app/Frame.png",
      title: "Data Optimization",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident quibusdam illo esse iste eligendi,"

    },

    {
      icon: "/Images/ott-app/Group-1.png",
      title: "Regular Support",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident quibusdam illo esse iste eligendi,"
    },

    {
      icon: "/Images/ott-app/Frame-1.png",
      title: "Search Engine Optimization",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident quibusdam illo esse iste eligendi,"
    }
  ]

  return (
    <div className={styles.testdiv}>
      <div className={styles.ottHeaderContainerMain}>
        <div className={styles.ottHeaderLeftDiv}>
          <div className={styles.ottHeaderLeftTextDiv}>
            <h1 className={styles.redbn}>OTT App Solutions</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe porro id est in sit! Velit consectetur suscipit,
              corrupti tenetur nontcliolectui dignissimos possimus, doloremque in minimabgrds ggue quae quia magnam reiciendis ab.
            </p>
            <button className={styles.ottHeaderButton}>Get Started</button>
          </div>
        </div>

        <div className={styles.ottHeaderRightDiv}>

          <div className={styles.ottHeaderRightFrameForImage}>

            <div className={styles.ottHeaderRightImagesDiv}>
              <img className={styles.ottHeaderRightImg1} src="/Images/ott-app/moneyHeist.png" alt="image" />
              <img className={styles.ottHeaderRightImg2} src="/Images/ott-app/Group901188.png" alt="image" />
              <img className={styles.ottHeaderRightImg3} src="/Images/ott-app/Group901187.png" alt="image" />
            </div>
          </div>
        </div>

      </div>

      <div className={styles.ottServicesContainer}>
        <div className={styles.ottServicesContainer2}>
          <div className={styles.ottServicesTitleDiv}>
            <h1>OTT App Services</h1>
            <p>The best streaming platform with all the latest shows and best videos quality</p>
          </div>
          <button className={styles.ottServicesButton}>Book a Meeting With Us Today</button>
          <div className={styles.ottServicesContent}>
            {ServicesData.map((e) => {
              return (
                <div className={styles.ottServicesBoxesDiv}>
                  <div className={styles.ottServicesDivForFlexIconHead}>
                    <div>
                      <img src={e.icon} alt="image" />
                    </div>
                    <h3>{e.title}</h3>
                  </div>
                  <div className={styles.ottServicesLoremPara}>
                    <p >{e.para}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
