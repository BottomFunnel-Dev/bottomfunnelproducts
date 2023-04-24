import React from 'react';
import styles from "./HiringJdForm.module.css";

import { IconContext } from "react-icons/lib";
import {
    BsFillPersonFill,
    BsFillTelephoneFill,
    BsFillCalendarWeekFill,
} from "react-icons/bs";

import { AiTwotoneMail } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";

import { BiMessage } from "react-icons/bi";

import { interested, budget, countrycodes } from "../../ContectForm/countrycode";
import { useRef } from "react";
import emailjs from "@emailjs/browser"

const HiringJdForm = () => {
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


    return (
        <div>
            <form ref={form} onSubmit={sendEmail} className={styles.careerPageFormPart}>
                <div className={styles.careerPageFormSection}>
                    <div className={styles.careerPageForminputWithIcon}>
                        <IconContext.Provider value={{ className: styles.careerPageFormIcon }}>
                            <BsFillPersonFill />
                        </IconContext.Provider>
                        <input
                            type="text"
                            className={styles.careerPageForminputPart}
                            placeholder="Name"
                            name="user_name"
                            required
                        />
                    </div>

                    <div className={styles.careerPageForminputWithIcon}>
                        <IconContext.Provider value={{ className: styles.careerPageFormIcon }}>
                            <AiTwotoneMail />
                        </IconContext.Provider>
                        <input
                            type="text"
                            className={styles.careerPageForminputPart}
                            placeholder="Email"
                            name="user_email"
                            required
                        />
                    </div>

                    <div className={styles.careerPageFormphoneClass}>
                        <IconContext.Provider value={{ className: styles.careerPageFormIcon }}>
                            <BsFillTelephoneFill />
                        </IconContext.Provider>
                        <select
                            className={styles.careerPageFormcountryCode}
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
                        className={styles.careerPageFormphoneNumber}
                        type="number"
                        placeholder="Phone Number"
                        name="phone_number"
                        required
                    />

                    <h5> Experience </h5>

                    <div className={styles.careerPageFormselectClass}>
                        <IconContext.Provider value={{ className: styles.careerPageFormIcon }}>
                            <CgMenuGridR />
                        </IconContext.Provider>
                        <input
                            type="text"
                            className={styles.careerPageForminputPart}
                            placeholder="Job Category"
                            name="whatsapp_number"
                            required
                        />
                    </div>

                    <div id="budgetSelect" className={styles.careerPageFormselectClass}>
                        <IconContext.Provider value={{ className: styles.careerPageFormIcon }}>
                            <BsFillCalendarWeekFill />
                        </IconContext.Provider>
                        <input
                            type="text"
                            className={styles.careerPageForminputPart}
                            placeholder="Year"
                            name="whatsapp_number"
                            required
                        />
                    </div>

                    <div className={styles.careerPageForminputWithIcon}>
                        <IconContext.Provider value={{ className: styles.careerPageFormIcon }}>
                            <BsFillCalendarWeekFill />
                        </IconContext.Provider>
                        <input
                            type="text"
                            className={styles.careerPageForminputPart}
                            placeholder="Month"
                            name="whatsapp_number"
                            required
                        />
                    </div>

                    <div className={styles.careerPageFormtextareaClass}>
                        <IconContext.Provider value={{ className: styles.careerPageFormMessageIcon }}>
                            <BiMessage />
                        </IconContext.Provider>
                        <label htmlFor="textarea"> Description</label>
                        <textarea
                            className={styles.careerPageFormmessagePart}
                            name="Enter Description"
                            placeholder="write your requirement (100-150 words)"
                            id=""
                            cols="15"
                            rows="5"
                        ></textarea>
                    </div>
                </div>

                <input type="file" className={styles.hirringChooseFile} />
                <p> Please upload Only pdf,rtf, docx and doc files </p>

                <div className={styles.careerPageFormrobotCaptcha}>
                    <input type="submit" value="Send Your Enquiry" />
                </div>
            </form>
        </div>
    )
}

export default HiringJdForm