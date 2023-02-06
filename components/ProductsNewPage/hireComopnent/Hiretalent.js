import React, { useState,useEffect } from "react";
import styles from "./hiretalent.module.css";
export default function Hiretalent() {
  const roles = [
    {
      role1: {
        title: "Front-end Developers",
        stack: [
          "HTML",
          "React.js",
          "Angular.js",
          "Vue.js",
          "jquery",
          "javascript",
          "Svelte",
          "Semantic Ui",
        ],
        img: "/Images/productsmainpage/Components/jobimage.png",
      },
      role2: {
        title: "backend Developers",
        stack: [
          "HTML",
          "React.js",
          "Angular.js",
          "Vue.js",
          "jquery",
          "javascript",
          "Svelte",
          "Semantic Ui",
        ],
        img: "/Images/productsmainpage/Components/jobimage.png",
      },
    },
    {
      role1: {
        title: "Product Designers",
        stack: [
          "HTML",
          "React.js",
          "Angular.js",
          "Vue.js",
          "jquery",
          "javascript",
          "Svelte",
          "Semantic Ui",
        ],
        img: "/Images/productsmainpage/Components/jobimage.png",
      },
      role2: {
        title: "Software Engineers",
        stack: [
          "HTML",
          "React.js",
          "Angular.js",
          "Vue.js",
          "jquery",
          "javascript",
          "Svelte",
          "Semantic Ui",
        ],
        img: "/Images/productsmainpage/Components/jobimage.png",
      },
    },
    {
      role1: {
        title: "Salesforce Experts",
        stack: [
          "HTML",
          "React.js",
          "Angular.js",
          "Vue.js",
          "jquery",
          "javascript",
          "Svelte",
          "Semantic Ui",
        ],
        img: "/Images/productsmainpage/Components/jobimage.png",
      },
      role2: {
        title: "Digital Marketing",
        stack: [
          "HTML",
          "React.js",
          "Angular.js",
          "Vue.js",
          "jquery",
          "javascript",
          "Svelte",
          "Semantic Ui",
        ],
        img: "/Images/productsmainpage/Components/jobimage.png",
      },
    },
    {
      role1: {
        title: "Cross-platform Developers",
        stack: [
          "HTML",
          "React.js",
          "Angular.js",
          "Vue.js",
          "jquery",
          "javascript",
          "Svelte",
          "Semantic Ui",
        ],
        img: "/Images/productsmainpage/Components/jobimage.png",
      },
      role2: {
        title: "native app Developers",
        stack: [
          "HTML",
          "React.js",
          "Angular.js",
          "Vue.js",
          "jquery",
          "javascript",
          "Svelte",
          "Semantic Ui",
        ],
        img: "/Images/productsmainpage/Components/jobimage.png",
      },
    },
  ];

  const [dataprint, setdataprint] = useState(roles[0].role1)


  
  
  const handleclick1 = (item)=>{
    setdataprint(item.role1)
    console.log(dataprint)
  }
  const handleclick2 = (item)=>{
    setdataprint(item.role2)
    console.log(dataprint)
  }

  

  return (
    <div className={styles.hiretalent}>
      <h1>Hire From India's Largest Talent Network</h1>
      <p>
        Explore the 50,000+ strong top, pre-vetted talent, from India, for the
        world
      </p>
      <div className={styles.jobroles}>
        <div className={styles.leftrole}>

          <img src="/Images/productsmainpage/Components/jobimage.png" alt="" />
        </div>
        <div className={styles.rightrole}>
          {roles.map((item, index) => (
            <div key={index} className={styles.jobtitles}>
              <div onClick={()=>{handleclick1(item)}} className={styles.rolespart1}>{item.role1.title}</div>
              <div onClick={()=>{handleclick2(item)}} className={styles.rolespart2}>{item.role2.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
