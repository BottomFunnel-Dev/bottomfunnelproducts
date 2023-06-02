import React from "react";
import styles from "./SalesProcess.module.css";
import Image from "next/image";

export const SalesProcess = () => {
  const salesprocessdata = [
    {
      img: "https://d3op2l77j7wnti.cloudfront.net/Images/cpqimage/Business Target.webp",
      hd: "Improve accuracy on shorter timelines ",
      p: "Salespeople can create quotes and other documents in simple steps that pull in data from the related records. CPQ takes out the calculation from the process to help create error-free documents in minutes.",
    },
    {
      img: "https://d3op2l77j7wnti.cloudfront.net/Images/cpqimage/sales (1) 1.webp",
      hd: "Improve accuracy on shorter timelines",
      p: "Salespeople can create quotes and other documents in simple steps that pull in data from the related records. CPQ takes out the calculation from the process to help create error-free documents in minutes.",
    },
    {
      img: "https://d3op2l77j7wnti.cloudfront.net/Images/cpqimage/Group.webp",
      hd: "Improve accuracy on shorter timelines",
      p: "Salespeople can create quotes and other documents in simple steps that pull in data from the related records. CPQ takes out the calculation from the process to help create error-free documents in minutes.",
    },
    {
        img: "https://d3op2l77j7wnti.cloudfront.net/Images/cpqimage/Group.webp",
        hd: "Improve accuracy on shorter timelines",
        p: "Salespeople can create quotes and other documents in simple steps that pull in data from the related records. CPQ takes out the calculation from the process to help create error-free documents in minutes.",
      },
    {
      img: "https://d3op2l77j7wnti.cloudfront.net/Images/cpqimage/save-time 1.webp",
      hd: "Improve accuracy on shorter timelines",
      p: "Salespeople can create quotes and other documents in simple steps that pull in data from the related records. CPQ takes out the calculation from the process to help create error-free documents in minutes.",
    },
    {
        img: "https://d3op2l77j7wnti.cloudfront.net/Images/cpqimage/save-time 1.webp",
        hd: "Improve accuracy on shorter timelines",
        p: "Salespeople can create quotes and other documents in simple steps that pull in data from the related records. CPQ takes out the calculation from the process to help create error-free documents in minutes.",
      }
  ];
  return (
    <div>
      <div className={styles.SalesProcessmaindiv}>
        <h2>
          From prospect signed customer, CPQ helps speed up the sales process{" "}
        </h2>
        
          <div className={styles.SalesProcessinnerdiv}>
            {salesprocessdata.map((e) => {
                return(
                    <div className={styles.SalesProcessrow}>
              <div className={styles.SalesProcessrowimage}>
                <Image
                  src={e.img}
    
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <h5>{e.hd} </h5>
              <p>
               {e.p}
              </p>
            </div>
                );
            })}
           

           
          </div>
         
          
          

         
       
      </div>
    </div>
  );
};
