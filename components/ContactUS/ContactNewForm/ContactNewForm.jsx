import React from "react";
import styles from "./ContactNewForm.module.css";
import Image from "next/image";
import {
  region,
  budget,
  countrycodes,
} from "./countrycode";

// import { interested, budget, countrycodes } from "/";
// ../CommonComponents/ContectForm/countrycode
export default function ContactNewForm({ formdata, bgcolor }) {
  const { heading, subHeading, image, color } = formdata;

  return (
    <div
      className={styles.contactNewFormparent}
      style={{ background: bgcolor ? bgcolor : "#fff" }}
    >
      <div className={styles.contactNewFormparentheading}>
        <h2>Lets Build Great things Together</h2>
        <p>Fill Up form our team will get back to you withing 24hrs</p>
      </div>

      <div className={styles.contactNewFormparentcontent}>
        <div className={styles.contactNewFormparentcontentone}>
          <div className={styles.contactNewFormparentImage}>
            <Image
              src={"/Images/submitform/icons/objects.png"}
              alt={"img"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className={styles.contactheadingproduct}>
            <p>By 500+ clients for 1300+ web and Mobile App Project</p>
          </div>
          
          <div className={styles.emaildiv}>
            <div>
              <Image
                src={"/Images/submitform/icons/Rectangle 34624404.png"}
                alt={"img"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className={styles.emailcontent}>
              <button>bottom.funnel</button>
            </div>
          </div>
          <div className={styles.emaildiv}>
            <div>
              <Image
                src={"/Images/submitform/icons/Rectangle 34624405.png"}
                alt={"img"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className={styles.emailcontent}>
              <button>info@bottomfunnel.net</button>
            </div>
          </div>
        </div>

        <form className={styles.formContainer}>

          <div className={styles.nameDiv}>
            <input
              type="text"
              placeholder="Your Name"
            />
          </div>

          <div className={styles.emailDiv}>
            <input
              type="email"
              placeholder="Email"
            />
          </div>

         <div className={styles.phoneSelcet}>
          <span>
            <select
                name=""
              >
            <option value="+91">+91</option>
                {countrycodes.map((item, i) => (
                  <option key={i} value={item.code}>
                    {item.code} {item.dial_code}{" "}
                  </option>
                ))}
              </select>
          </span>
           <span>
            <input
                type="text"
                placeholder="Phone Number"
              />
           </span>
         </div>

         <div className={styles.regionAndBudgetBox}>
         <span>
          <select
                name=""
              >
                <option value="">Select Region</option>
                {region.map((item, i) => (
                  <option key={i} value={item.region}>
                    {item.region}
                  </option>
                ))}
              </select>
         </span>
          <span>
            <select
                name=""
              >
                <option value="">Pre Estimated Budget</option>
                {budget.map((item, i) => (
                  <option key={i} value={item.budget}>
                    {item.budget}
                  </option>
                ))}
              </select>
          </span>
        </div>

          {/* <input type="text" placeholder="Project Deatil" className={styles.contactNewFormparentcontentFormblock} /> */}
         <div className={styles.textareaBox}>
          <textarea
              cols="20"
              rows="5"
              placeholder="Project Details"
            >
          </textarea>
         </div>
          <div className={styles.buttonDiv}>
            <button style={{ backgroundColor: `${bgcolor}` }}>
              Talk to a Consultant
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
