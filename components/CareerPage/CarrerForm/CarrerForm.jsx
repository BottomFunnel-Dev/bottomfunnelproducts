import React, { useState } from "react";
import styles from "./CarrerForm.module.css";

import { IconContext } from "react-icons/lib";
import {
  BsFillPersonFill,
  BsFillTelephoneFill,
  BsCurrencyDollar,
} from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
import { RiMessage2Fill } from "react-icons/ri";
import { BiMessage } from "react-icons/bi";
import { countrycodes } from "../../ContectForm/countrycode";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const CaerrForm = ({ formStyle }) => {
  
  const form = useRef();
  const serviceID = "service_219qjzb";
  const template = "template_0fxfi75";
  const publicKey = "w37MD2W3eugHo9N6r";

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceID, template, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        alert("email sent successfully");
      },
      (error) => {
        console.log(error.text);
        console.log("failed");
      }
    );
    form.current.reset()
  };

  const experience = [
    {
        id : 1,
        exp : "0-2 years"
    },
    {
        id : 2,
        exp : "2-4 years"
    },
    {
        id : 3,
        exp : "4-6 years"
    },
    {
        id : 4,
        exp : "6-8 years"
    },
    {
        id : 5,
        exp : "8-10 years"
    }
  ]

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className={styles.popupformPart}>
        <div className={styles.popupformSection}>
          <div className={styles.popupinputWithIcon}>
            <IconContext.Provider value={{ className: styles.popupformIcon }}>
              <BsFillPersonFill />
            </IconContext.Provider>
            <input
              type="text"
              className={styles.popupinputPart}
              placeholder="Name"
              name="user_name"
              required
            />
          </div>
          <div className={styles.popupinputWithIcon}>
            <IconContext.Provider value={{ className: styles.popupformIcon }}>
              <AiTwotoneMail />
            </IconContext.Provider>
            <input
              type="text"
              className={styles.popupinputPart}
              placeholder="Email"
              name="user_email"
              required
            />
          </div>
          <div className={styles.popupphoneClass}>
            <IconContext.Provider value={{ className: styles.popupformIcon }}>
              <BsFillTelephoneFill />
            </IconContext.Provider>
            <select
              className={styles.popupcountryCode}
              name="country_code"
              required
              id=""
            >
              {countrycodes.map((item, i) => (
                <option key={i} value={item.code}>
                  {item.code} {item.dial_code}
                </option>
              ))}
            </select>
          </div>
          <input
            className={styles.popupphoneNumber}
            type="number"
            placeholder="Phone Number"
            name="phone_number"
            required
          />
          <div className={styles.popupselectClass}>
            <IconContext.Provider value={{ className: styles.popupformIcon }}>
              {/* <CgMenuGridR /> */}
            </IconContext.Provider>
            <input
            className={styles.popupphoneRole}
            type="role"
            placeholder="Role"
            name="role"
            required
          />
          </div>
          <div id={styles.budgetSelect} className={styles.popupselectClass}>
            <IconContext.Provider value={{ className: styles.popupformIcon }}>
              {/* <BsCurrencyDollar />  //Expericen icon need */}
            </IconContext.Provider>
            <select className={styles.popupselectPart} name="budget" required id="">
              <option value="Select">Your Experience</option>
              {experience.map((item, i) => (
                <option key={item.id} value={item.exp}>
                  {item.exp}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.popupinputWithIcon}>
            <IconContext.Provider value={{ className: styles.popupformIcon }}>
              {/* <RiMessage2Fill />  // Resume icon need */}
            </IconContext.Provider>
            <input
              type="file"
              className={styles.popupinputPart}
              placeholder="Upload Your Resume"
              name="resume"
              required
            />
          </div>
          <div className={styles.popuptextareaClass}>
            <IconContext.Provider value={{ className: styles.popupformMessageIcon }}>
              <BiMessage />
            </IconContext.Provider>
            <label htmlFor="textarea"> Message</label>
            <textarea
              className={styles.popupmessagePart}
              name="message"
              placeholder="write your requirement (100-150 words)"
              id=""
              cols="15"
              rows="5"
            ></textarea>
          </div>
          
        </div>
        <div className={styles.popuprobotCaptcha}>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};
