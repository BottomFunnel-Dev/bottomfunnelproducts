import React from "react";
import career from "./HirringProcess.module.css";
import Image from "next/image";
import Accordion from 'react-bootstrap/Accordion';
import { HirringJdsCareer } from "../HirringJdsCareer/HirringJdsCareer";


export const HirringProcess = () => {
    return (
        <>
            <div className={career.hirringProcessMain}>
                <div className={career.hirringHeading}>
                    <h2>Hiring Process</h2>
                </div>

                <div className={career.hirringProcessImage}>
                    <Image
                        src={"/Images/careerPhotos/hirring.png"}
                        alt={"image"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>


                <div className={career.hirringmaincontainer}>
                    <HirringJdsCareer />
                </div>

            </div>
        </>
    );
};
