import React from "react";
import styles from "./Travelsolution.module.css";

export default function Travelsolution() {
  const travelsolution = [
    {
      img: "Images/Travel/carbooking.png",
      p: "Car Booking Solution ",
    },
    {
      img: "Images/Travel/booking.png",
      p: "Hotel Booking Solution",
    },
    {
      img: "Images/Travel/diverse.png",
      p: "Diverse Booking Solution",
    },
    {
      img: "Images/Travel/crm solution.png",
      p: "CRM Solutions ",
    },
    {
      img: "Images/Travel/travelsolution.png",
      p: "Travel Planning Solution.png",
    },
    {
      img: "Images/Travel/travelportal.png",
      p: "Travel Portal Development",
    },
  ];
  return (
    <div className={styles.travelsolutiondiv}>
      <div className={styles.travelsubdiv}>
        <div className={styles.travelsolutionleft}>
          <div>
            <h1>Solution</h1>
            <p>
              Bottom Funnel app is a perfect blend of both. We provide you with
              all the basic and advanced features that are necessary to enhance
              your online presence and market your brand effectively.
            </p>
          </div>
        </div>
        <div className={styles.travelsolutionright}>
          {travelsolution.map((item) => {
            return (
              <div className={styles.travelsolutiondocs}>
                <div className={styles.traveldocimg}>
                  <img src={item.img} />{" "}
                </div>
                <p>{item.p}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
