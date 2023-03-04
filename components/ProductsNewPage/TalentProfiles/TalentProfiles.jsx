import React from "react";
import styles from "./TalentProfiles.module.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Slider from "react-slick";

export const TalentProfiles = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 4,
    arrows: false,
    dragable: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centermode: true,
        },
      },
    ],
  };

  const productsTalentProfilesCardsData = [
    {
      title: "Manav Sharma",
      body: `Product Designer`,
      profileLink: `https://www.linkedin.com/in/manav--sharma/`,
      image: "/Images/ProductsPage/TalentProfiles/Manav.png",
      experience: "Ex: 1-2 years",
      communication: "Communication Score",
      technicalscore: "Technical Score",
      buttondetails: "See more",
    },
    {
      title: "Hemant Jayas",
      body: `Jr. React Developer`,
      profileLink: `https://www.linkedin.com/in/hemant-jayas-45ab6318b/`,
      image: "/Images/ProductsPage/TalentProfiles/HemantJayas.png",
      experience: "Ex: 0-1 years",
      communication: "Communication Score",
      technicalscore: "Technical Score",
      buttondetails: "See more",
    },
    {
      title: "Shantnu Bhardwaj",
      body: `UI/Ux Designer`,
      profileLink: `https://www.linkedin.com/in/shantanu-bhardwaj-717631233/`,
      image: "/Images/ProductsPage/TalentProfiles/Shantanu.png",
      experience: "Ex: 0-1 years",
      communication: "Communication Score",
      technicalscore: "Technical Score",
      buttondetails: "See more",
    },
    {
      title: "Deepanshu Gulia",
      body: `React Native Developer`,
      profileLink: `https://www.linkedin.com/in/deepanshu-gulia/`,
      image: "/Images/ProductsPage/TalentProfiles/Deepanshu.png",
      experience: "Ex: 0-1 years",
      communication: "Communication Score",
      buttondetails: "See more",
      technicalscore: "Technical Score",
    },
    {
      title: "Hemant Khandelwal",
      body: `UI/UX Designer`,
      profileLink: `https://www.linkedin.com/in/hemant-khandelwal-60a717200`,
      image: "/Images/ProductsPage/TalentProfiles/HemantK.png",
      experience: "Ex: 0-1 years",
      communication: "Communication Score",
      buttondetails: "See more",
      technicalscore: "Technical Score",
    },
    {
      title: "Aaradhana Shukla",
      body: `MERN Stack Developer`,
      profileLink: `https://www.linkedin.com/in/aaradhana-shukla-a285b1197`,
      image: "/Images/ProductsPage/TalentProfiles/Aaradhana.png",
      experience: "Ex: 0-1 years",
      communication: "Communication Score",
      buttondetails: "See more",
      technicalscore: "Technical Score",
    },
    {
      title: "Minali Dadhich",
      body: `Product Designer`,
      profileLink: `https://www.linkedin.com/in/minali-dadhich/`,
      image: "/Images/ProductsPage/TalentProfiles/Minali.png",
      experience: "Ex: 0-1 years",
      communication: "Communication Score",
      buttondetails: "See more",
      technicalscore: "Technical Score",
    },
    {
      title: "Akshay Thakur",
      body: `MERN Stack Developer`,
      profileLink: `https://www.linkedin.com/in/akshay-kumar-018970189/`,
      image: "/Images/ProductsPage/TalentProfiles/Akshay.png",
      experience: "Ex: 0-1 years",
      communication: "Communication Score",
      buttondetails: "See more",
      technicalscore: "Technical Score",
    },
    {
      title: "Avinash Kumar",
      body: `MERN Stack Developer`,
      profileLink: `https://www.linkedin.com/in/avinash-kumar-7015baa3/`,
      image: "/Images/ProductsPage/TalentProfiles/Avinash.png",
      experience: "Ex: 0-1 years",
      communication: "Communication Score",
      buttondetails: "See more",
      technicalscore: "Technical Score",
    },
    {
      title: "Muskan Gupta",
      body: `MERN Stack Developer`,
      profileLink: `https://www.linkedin.com/in/muskan-gupta01/`,
      image: "/Images/ProductsPage/TalentProfiles/Muskan.png",
      experience: "Ex: 0-1 years",
      communication: "Communication Score",
      buttondetails: "See more",
      technicalscore: "Technical Score",
    },
  ];

  return (
    <div className={styles.productsTalentProfilesParentDiv}>
      <div className={styles.productsTalentProfilesHeadingDiv}>
        <h1>Talent Profiles</h1>

        <p>
          Check to see what fits-this is what the top talent from India looks
          like.
        </p>
      </div>

      <div className={styles.productsTalentProfilesContentDiv}>
        <Slider {...settings}>
          {productsTalentProfilesCardsData.map(
            (
              {
                title,
                body,
                image,
                buttondetails,
                experience,
                communication,
                technicalscore,
                profileLink,
              },
              idx,
            ) => (
              <div className={styles.sliderinner} key={idx}>
                <div className={styles.innnercontent}>
                  <div>
                    <div className={styles.profile}>
                      <img src={image} alt={title} />
                    </div>

                    <div className={styles.productsTalentProfilesLinkdinDiv}>
                      <a target="_blank" href={profileLink}>
                        <i
                          className={`bi bi-linkedin ${styles.talentedProfilesLinkedinIcons}`}
                        ></i>
                      </a>
                    </div>
                  </div>

                  <h3> {title} </h3>
                  <h5> {body} </h5>
                  <h6> {experience} </h6>

                  <div className={styles.productsTalentCommunication}>
                    <p className={styles.productsTalentTextCommunicationDiv}>
                      {" "}
                      {communication}{" "}
                    </p>
                    <p className={styles.productsTalentStarsTag}>
                      <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
                      <AiFillStar /> <AiOutlineStar />
                    </p>
                  </div>

                  <button
                    className={styles.productsTalentProfilesContentButton}
                  >
                    {buttondetails}
                  </button>
                </div>
              </div>
            ),
          )}
        </Slider>
      </div>
    </div>
  );
};
