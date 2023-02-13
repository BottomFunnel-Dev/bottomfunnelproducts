import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "./hiretalent.module.css";
export default function Hiretalent() {
  const roles = [
    {
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
      img: "/Images/productsmainpage/Components/frontend.png",
    },
    {
      title: "backend Developers",
      stack: [
        "Node.js",
        ".NET",
        "PHP",
        "JAVA",
        "Laravel",
        "Django",
        "Flask",
        "Golang",
      ],
      img: "/Images/productsmainpage/Components/backend.png",
    },

    {
      title: "Product Designers",
      stack: [
        "UI Ux Designer",
        "Graphic Designer",
        "motion Designer",
        "Figma Designer",
        "Product Designer",
        "Product Manager",
      
      ],
      img: "/Images/productsmainpage/Components/productdesign.png",
    },
    {
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
      img: "/Images/productsmainpage/Components/sde.png",
    },

    {
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
      img: "/Images/productsmainpage/Components/salesforce.png",
    },
    {
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
      img: "/Images/productsmainpage/Components/digital.png",
    },

    {
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
      img: "/Images/productsmainpage/Components/crossdev.png",
    },
    {
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
      img: "/Images/productsmainpage/Components/native.png",
    },
  ];

  const [dataprint, setdataprint] = useState(0);

  const handleclick = (item, index) => {
    setdataprint(index);
    // console.log(index);
  };

  return (
    <div className={styles.hiretalent}>
      <h1>Hire From India's Largest Talent Network</h1>
      <p>
        Explore the 50,000+ strong top, pre-vetted talent, from India, for the
        world
      </p>
      <div className={styles.jobroles}>
        <div className={styles.leftrole}>
          <Image
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
            src={roles[dataprint].img}
            alt={roles[dataprint].img}
          />
          <div className={styles.topcontent}>Click to know More</div>
          <div className={styles.techstackpart}>
            <h3>{roles[dataprint].title}</h3>
            <div className={styles.relatedtech}>
              {roles[dataprint].stack.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.rightrole}>
          <div className={styles.backcont}>
            <div className={styles.backdiv}></div>
            <div className={styles.backdiv}></div>
            <div className={styles.backdiv}></div>
            <div className={styles.backdiv}></div>
          </div>
          <div className={styles.devroles}>
            {roles.map((item, index) => (
              <div
                className={
                  index % 2 == 0 ? styles.rolespart1 : styles.rolespart2
                }
                key={index}
                onClick={() => {
                  handleclick(item, index);
                }}
                style={
                  index === dataprint
                    ? {
                        background: "#ef4c23",
                        color: "white",
                      }
                    : null
                }
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
