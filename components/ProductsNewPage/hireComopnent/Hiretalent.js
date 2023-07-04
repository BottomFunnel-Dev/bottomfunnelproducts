import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "./hiretalent.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
export default function Hiretalent() {
  const navigate = useRouter();
  const roles = [
    {
      title: "Front-end Developers",
      stack: [
        {
          stack: "React.js",
          path: "https://bottomfunnel.netreactjs",
        },
        {
          stack: "Angular.js",
          path: "https://bottomfunnel.netangularjs",
        },
        {
          stack: "Vue.js",
          path: "https://bottomfunnel.netvuejs",
        },
        {
          stack: "Ember.js",
          path: "https://bottomfunnel.netemberjs",
        },
        {
          stack: "Jquery",
          path: "https://bottomfunnel.netjquery",
        },
        {
          stack: "Next.js",
          path: "https://bottomfunnel.netnextjs",
        },
        {
          stack: "Backbone.js",
          path: "https://bottomfunnel.netbackbonejs",
        },
        {
          stack: "Svelte",
          path: "https://bottomfunnel.netsvelte",
        },
      ],
      img: "https://d3op2l77j7wnti.cloudfront.net/Images/productsmainpage/Components/frontend.png",
    },
    {
      title: "Backend Developers",
      stack: [
        {
          stack: "Php",
          path: "https://bottomfunnel.netphp",
        },
        {
          stack: ".NET",
          path: "https://bottomfunnel.netdotnet",
        },
        {
          stack: "Golang",
          path: "https://bottomfunnel.netgolang",
        },
        {
          stack: "Laravel",
          path: "https://bottomfunnel.netlaravel",
        },
        {
          stack: "Springboot",
          path: "https://bottomfunnel.netspringboot",
        },
        {
          stack: "Django",
          path: "https://bottomfunnel.netdjango",
        },
        {
          stack: "Cakephp",
          path: "https://bottomfunnel.netcakephp",
        },
        {
          stack: "Hibernate",
          path: "https://bottomfunnel.netskills/hibernate",
        },
        {
          stack: "Flask",
          path: "https://bottomfunnel.netskills/flask",
        },
        {
          stack: "Revel",
          path: "https://bottomfunnel.netskills/revel",
        },
      ],
      img: "https://d3op2l77j7wnti.cloudfront.net/Images/productsmainpage/Components/backend.png",
    },

    {
      title: "Product Designers",
      stack: [
        {
          stack: "UX Designers",
          path: "https://bottomfunnel.netcakephp",
        },
        {
          stack: "UI Designers",
          path: "https://bottomfunnel.netcakephp",
        },
        {
          stack: "Motion Designers",
          path: "https://bottomfunnel.netcakephp",
        },
        {
          stack: "Graphic Designers",
          path: "https://bottomfunnel.netcakephp",
        },
        {
          stack: "Visual Designers",
          path: "https://bottomfunnel.netcakephp",
        },
      ],
      img: "https://d3op2l77j7wnti.cloudfront.net/Images/productsmainpage/Components/productdesign.png",
    },
    {
      title: "Software Engineers",
      stack: [
        {
          stack: "Golang",
          path: "https://bottomfunnel.netcakephp",
        },
        {
          stack: "Python",
          path: "https://bottomfunnel.netcakephp",
        },
        {
          stack: "Php",
          path: "https://bottomfunnel.netcakephp",
        },
        {
          stack: ".NET",
          path: "https://bottomfunnel.netcakephp",
        },
        {
          stack: "Ruby",
          path: "https://bottomfunnel.netcakephp",
        },
        {
          stack: "R",
          path: "https://bottomfunnel.netcakephp",
        },
        {
          stack: "MERN stack",
          path: "https://bottomfunnel.netcakephp",
        },
        {
          stack: "PERL",
          path: "https://bottomfunnel.netcakephp",
        },
        {
          stack: "Java",
          path: "https://bottomfunnel.netcakephp",
        },
        {
          stack: "Revel",
          path: "https://bottomfunnel.netskills/revel",
        },
      ],
      img: "https://d3op2l77j7wnti.cloudfront.net/Images/productsmainpage/Components/sde.png",
    },

    {
      title: "Salesforce Experts",
      stack: [
        {
          stack: "Tableau",
          path: "https://bottomfunnel.netcakephp",
        },
        {
          stack: "System Administrator",
          path: "https://bottomfunnel.netcakephp",
        },
        {
          stack: "Platform Manager",
          path: "https://bottomfunnel.netcakephp",
        },
        {
          stack: "Solution Architect",
          path: "https://bottomfunnel.netcakephp",
        },
        {
          stack: "Technical Architect",
          path: "https://bottomfunnel.netcakephp",
        },
      ],
      img: "https://d3op2l77j7wnti.cloudfront.net/Images/productsmainpage/Components/salesforce.png",
    },
    {
      title: "Digital Marketing",
      stack: [
        {
          stack: "SEO Expert",
          path: "https://bottomfunnel.netseo-services",
        },
        {
          stack: "Local SEO Expert",
          path: "https://bottomfunnel.netlocal-seo-services",
        },
        {
          stack: "SEM Expert",
          path: "https://bottomfunnel.netsem-services",
        },
        {
          stack: "PPC Expert",
          path: "https://bottomfunnel.netppc-services",
        },
        {
          stack: "Link Building Expert",
          path: "https://bottomfunnel.netlink-building-services",
        },
        // {
        //   stack: "Guest Posting Expert",
        //   path: "https://bottomfunnel.netguest-posting-services",
        // },
        // {
        //   stack: "Email marketer",
        //   path: "https://bottomfunnel.netemailmarketing-services",
        // },
      ],
      img: "https://d3op2l77j7wnti.cloudfront.net/Images/productsmainpage/Components/digital.png",
    },

    {
      title: "Cross-platform Developers",
      stack: [
        {
          stack: "React Native",
          path: "https://bottomfunnel.netreactnative-development",
        },
        {
          stack: "Flutter",
          path: "https://bottomfunnel.netflutter-development",
        },
        {
          stack: "Ionic",
          path: "https://bottomfunnel.netionic",
        },
        {
          stack: "Xamarin",
          path: "https://bottomfunnel.netxamarin-development",
        },
        {
          stack: "Kotlin",
          path: "https://bottomfunnel.netkotlin-development",
        },
      ],
      img: "https://d3op2l77j7wnti.cloudfront.net/Images/productsmainpage/Components/crossdev.png",
    },
    {
      title: "Native app Developers",
      stack: [
        {
          stack: "Android",
          path: "https://bottomfunnel.netandroid-development",
        },
        {
          stack: "IOS",
          path: "https://bottomfunnel.netios-development",
        },
        {
          stack: "React Native",
          path: "https://bottomfunnel.netreactnative-development",
        },

        {
          stack: "Flutter",
          path: "https://bottomfunnel.netflutter-development",
        },
      ],
      img: "https://d3op2l77j7wnti.cloudfront.net/Images/productsmainpage/Components/native.png",
    },
  ];

  const [dataprint, setdataprint] = useState(0);

  const handleclick = (item, index) => {
    setdataprint(index);
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

          {/* <div className={styles.topcontent}>Click to know More</div> */}

          <div className={styles.techstackpart}>
            <h3>{roles[dataprint].title}</h3>
            <div className={styles.relatedtech}>
              {roles[dataprint].stack.map((item, index) => (
                <Link href={item.path} target="_blank"  style={{textDecoration:"none", color : "inherit"}}>
                  <div className={styles.relatedtechInnerDiv}
                    key={index}
                  >
                    {item.stack}
                  </div>
                </Link>
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
