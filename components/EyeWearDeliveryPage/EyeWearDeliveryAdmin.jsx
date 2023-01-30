import React, { useState } from 'react';
import styles from "./EyeWearDeliveryAdmin.module.css";

export const EyeWearDeliveryAdmin = () => {

  const [imageChange, setImageChange] = useState("/Images/EyewearDeliveryapp/Adminpanelscreens/dashboard.png")
  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath)
  }

  const eyeweardeliveryadmindata = [
    {
      img: "/Images/EyewearDeliveryapp/Adminpanelscreens/dashboard.png",
      logo: "/Images/EyewearDeliveryapp/icons/prototyping.png",
      stxt: "The dashboard for an admin panel can vary depending on the system you're using, but typically includes things like an overview of recent activity, a list of pending tasks or requests.",
      htxt: "Dashboard"
    },

    {
      img: "/Images/EyewearDeliveryapp/Adminpanelscreens/reports&analytics.png",
      logo: "/Images/EyewearDeliveryapp/icons/prototyping-9.png",
      stxt: "By using the reports and analytics features in the admin app, you can see how your app is being used, what areas need improvement, and where users are struggling.      ",
      htxt: "Reports & Analytics"
    },

    {
      img: "/Images/EyewearDeliveryapp/Adminpanelscreens/notification&alerts.png",
      logo: "/Images/EyewearDeliveryapp/icons/prototyping-11.png",
      stxt: "Notifications and alerts are a vital part of any admin app. They keep users informed of new developments, changes in status, and any other important information.",
      htxt: "Notifications & Alerts"
    },


    {
      img: "/Images/EyewearDeliveryapp/Adminpanelscreens/paymentmanagement.png",
      logo: "/Images/EyewearDeliveryapp/icons/prototyping-10.png",
      stxt: "you will need to integrate the payment provider into your app. This usually involves getting an API key from the provider and using it in your code.",
      htxt: "payments Management"
    },
  ]

  return (
    <div className={styles.eyeweardeliveryadminpannelmainbox}>
      <div className={styles.eyeweardeliveryadminpannelleftbox}>
        <div className={styles.eyeweardeliveryadmintextboxleftside}>
          <h1>Admin Pannel</h1>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum</p> */}
          <div className={styles.eyeweardeliveryadminpannelwheremap}>
            {eyeweardeliveryadmindata.map((e) => {
              return (
                <div className={styles.eyewearmappingdataboxadminpannel}
                  key={e.htxt} onMouseEnter={() => {
                    handleImageChange(e.img)
                  }}
                >
                  <div className={styles.eyeadminlogo}>
                    <img src={e.logo} alt='logo' />
                  </div>

                  <div>
                    <h4>{e.htxt}</h4>
                    <p>{e.stxt}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className={styles.eyeweardeliveryadminpannelrightbox}>
        <img src={imageChange} alt="images" />
      </div>
    </div>
  );
};

