import React from 'react'
import styles from "./CTAFrom.module.css";
export const CTAFrom = () => {
  return (
    <div>
        <div>
            <div>
            <Image
                  src={"/Images/AIservicemanagement/screens1.webp"}
                  alt={"Image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
            </div>
            <div>
            <div>
                <input>
                  Your Name 
                </input>
                <input>
                Email
                </input>
                <input>
                Phone Number
                </input>
                <select>Select Region</select>
            </div>
            </div>
        </div>
    </div>
  )
}
