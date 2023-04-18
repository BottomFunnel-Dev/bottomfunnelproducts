import React from 'react';
import styles from "./ContactUsMap.module.css";

import GlobalCountries from './GlobalCountires';

import Positions from "./Positions"

const ContactUsMap = () => {
    return (
        <>
            <div>
                <GlobalCountries />
            </div>

            <div>

                <Positions />

                <div className={styles.contactUsMapDiv}>
                    <lottie-player
                        src="https://bottom-funnel-fe.s3.ap-south-1.amazonaws.com/Animation/Bottom funnel footer map animation.json"
                        background="transparent"
                        speed="1"
                        loop
                        autoplay
                    ></lottie-player>
                </div>
            </div>
        </>
    );
};

export default ContactUsMap;