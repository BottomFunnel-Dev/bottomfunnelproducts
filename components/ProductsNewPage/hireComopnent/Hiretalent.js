import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "./hiretalent.module.css";
import { useRouter } from "next/router";
export default function Hiretalent() {

  const navigate = useRouter()
  const roles = [
    {
      title: "Front-end Developers",
      stack: [

        {
          stack: "React.js",
          path: "https://service.bottomfunnel.net/reactjs"
        },
        {
          stack: "Angular.js",
          path: "https://service.bottomfunnel.net/angularjs"
        },
        {
          stack: "Vue.js",
          path: "https://service.bottomfunnel.net/vuejs"
        },
        {
          stack: "Ember.js",
          path: "https://service.bottomfunnel.net/emberjs"
        },
        {
          stack: "Jquery",
          path: "https://service.bottomfunnel.net/jquery"
        },
        {
          stack: "Next.js",
          path: "https://service.bottomfunnel.net/nextjs"
        },
        {
          stack: "Backbone.js",
          path: "https://service.bottomfunnel.net/backbonejs"
        },
        {
          stack: "Svelte",
          path: "https://service.bottomfunnel.net/svelte"
        },
       
      ],
      img: "/Images/productsmainpage/Components/frontend.png",
    },
    {
      title: "backend Developers",
      stack: [

        {
          stack: "Php",
          path: "https://service.bottomfunnel.net/php"
        },
        {
          stack: ".NET",
          path: "https://service.bottomfunnel.net/dotnet"
        },
        {
          stack: "Golang",
          path: "https://service.bottomfunnel.net/golang"
        },
        {
          stack: "Laravel",
          path: "https://service.bottomfunnel.net/laravel"
        },
        {
          stack: "Springboot",
          path: "https://service.bottomfunnel.net/springboot"
        },
        {
          stack: "Django",
          path: "https://service.bottomfunnel.net/django"
        },
        {
          stack: "Cakephp",
          path: "https://service.bottomfunnel.net/cakephp"
        },


     
      ],
      img: "/Images/productsmainpage/Components/backend.png",
    },

    {
      title: "Product Designers",
      stack: [
        {
          stack: "Cakephp",
          path: "https://service.bottomfunnel.net/cakephp"
        },
        {
          stack: "Cakephp",
          path: "https://service.bottomfunnel.net/cakephp"
        },
        {
          stack: "Cakephp",
          path: "https://service.bottomfunnel.net/cakephp"
        },
        {
          stack: "Cakephp",
          path: "https://service.bottomfunnel.net/cakephp"
        },
        {
          stack: "Cakephp",
          path: "https://service.bottomfunnel.net/cakephp"
        },
      
      ],
      img: "/Images/productsmainpage/Components/productdesign.png",
    },
    {
      title: "Software Engineers",
      stack: [
        {
          stack: "Golang",
          path: "https://service.bottomfunnel.net/cakephp"
        },
        {
          stack: "Python",
          path: "https://service.bottomfunnel.net/cakephp"
        },
        {
          stack: "Php",
          path: "https://service.bottomfunnel.net/cakephp"
        },
        {
          stack: ".NET",
          path: "https://service.bottomfunnel.net/cakephp"
        },
        {
          stack: "Ruby",
          path: "https://service.bottomfunnel.net/cakephp"
        },
        {
          stack: "R",
          path: "https://service.bottomfunnel.net/cakephp"
        },
        {
          stack: "MERN stack",
          path: "https://service.bottomfunnel.net/cakephp"
        },
        {
          stack: "PERL",
          path: "https://service.bottomfunnel.net/cakephp"
        },
        {
          stack: "Java",
          path: "https://service.bottomfunnel.net/cakephp"
        },
      ],
      img: "/Images/productsmainpage/Components/sde.png",
    },

    {
      title: "Salesforce Experts",
      stack: [
        {
          stack: "Cakephp",
          path: "https://service.bottomfunnel.net/cakephp"
        },
        {
          stack: "Cakephp",
          path: "https://service.bottomfunnel.net/cakephp"
        },
        {
          stack: "Cakephp",
          path: "https://service.bottomfunnel.net/cakephp"
        },
        {
          stack: "Cakephp",
          path: "https://service.bottomfunnel.net/cakephp"
        },
        {
          stack: "Cakephp",
          path: "https://service.bottomfunnel.net/cakephp"
        },
      ],
      img: "/Images/productsmainpage/Components/salesforce.png",
    },
    {
      title: "Digital Marketing",
      stack: [

        {
          stack: "SEO Expert",
          path: "https://service.bottomfunnel.net/seo-services"
        },
        {
          stack: "Local SEO Expert",
          path: "https://service.bottomfunnel.net/local-seo-services"
        },
        {
          stack: "SEM Expert",
          path: "https://service.bottomfunnel.net/sem-services"
        },
        {
          stack: "PPC Expert",
          path: "https://service.bottomfunnel.net/ppc-services"
        },
        {
          stack: "Link Building Expert",
          path: "https://service.bottomfunnel.net/link-building-services"
        },
        {
          stack: "Guest Posting Expert",
          path: "https://service.bottomfunnel.net/guest-posting-services"
        },
        {
          stack: "Email marketer",
          path: "https://service.bottomfunnel.net/emailmarketing-services"
        },


      ],
      img: "/Images/productsmainpage/Components/digital.png",
    },

    {
      title: "Cross-platform Developers",
      stack: [

        {
          stack: "React Native",
          path: "https://service.bottomfunnel.net/reactnative-development"
        },
        {
          stack: "Flutter",
          path: "https://service.bottomfunnel.net/flutter-development"
        },
        {
          stack: "Ionic",
          path: "https://service.bottomfunnel.net/ionic"
        },
        {
          stack: "Xamarin",
          path: "https://service.bottomfunnel.net/xamarin-development"
        },
        {
          stack: "Kotlin",
          path: "https://service.bottomfunnel.net/kotlin-development"
        },
     
      ],
      img: "/Images/productsmainpage/Components/crossdev.png",
    },
    {
      title: "Native app Developers",
      stack: [

        {
          stack: "React Native",
          path: "https://service.bottomfunnel.net/reactnative-development"
        },

        {
          stack: "Flutter",
          path: "https://service.bottomfunnel.net/flutter-development"
        },
        {
          stack: "Ionic",
          path: "https://service.bottomfunnel.net/ionic"
        },
        {
          stack: "Xamarin",
          path: "https://service.bottomfunnel.net/xamarin-development"
        },
      

    
      ],
      img: "/Images/productsmainpage/Components/native.png",
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
          <div className={styles.topcontent}>Click to know More</div>
          <div className={styles.techstackpart}>
            <h3>{roles[dataprint].title}</h3>
            <div className={styles.relatedtech}>
              {roles[dataprint].stack.map((item,index) => (
                <div onClick={()=>{navigate.push(item.path)}} key={index}>{item.stack}</div>
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
