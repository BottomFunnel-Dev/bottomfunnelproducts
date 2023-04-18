import React from "react";
import styles from "./ContactForm.module.css"
import Image from "next/image"

export default function ContactForm({ formdata, bgcolor }) {
  const { heading, subHeading, image } = formdata;
  return (
    <div className={styles.onDemandFormparent} style={{ background: bgcolor ? bgcolor : "#fff" }}>
      <div className={styles.onDemandFormparentImage}>
        <Image
          src={image}
          alt={"img"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className={styles.onDemandFormparentcontent} >
        <h2>{heading}</h2>
        <p>{subHeading}</p>
        <form className={styles.onDemandFormparentcontentForm}>
          <input type="text" placeholder="Your Name" className={styles.onDemandFormparentcontentFormblock} />
         
          <input type="email" placeholder="Email" className={styles.onDemandFormparentcontentFormblock} />
          <select name="" className={styles.onDemandFormparentcontentForselectone}>
            <option value="91" >+91 </option>
          </select>
          <input type="text" placeholder="Phone Number" className={styles.onDemandFormparentcontentFormblockphone} />
          <select name="" className={styles.onDemandFormparentcontentForselecttwo}>
            <option value="">Select Region</option>
          </select>

          <select name="" className={styles.onDemandFormparentcontentForselectthree}>
            <option value="">Select Region</option>
          </select>

          <select name="" className={styles.onDemandFormparentcontentForselectfour}>
            <option value="">Pre Estamated Budget</option>
          </select>

          <input type="text" placeholder="Project Deatil" className={styles.onDemandFormparentcontentFormblock} />
          <div className={styles.onDemandFormparentcontentFormAttchmentDiv}>
            <label htmlFor="" placeholder="Attach File">Attach File <input type="file" placeholder="Attach file" /></label>

            <button >Submit</button>
          </div>
        </form>
      </div>

    </div>
  );
};
