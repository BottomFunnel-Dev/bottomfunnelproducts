import React from 'react';
import styles from "./TalentProfiles.module.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

export const TalentProfiles = () => {
    const productsTalentProfilesCardsData = [
        {
            title: "Manav Sharma",
            body: `Sr. Product Designer`,
            profileLink: `https://www.linkedin.com/in/manav--sharma/`,
            image: "/Images/ProductsPage/TalentProfiles/Manav.png",
            experience: "Ex: 2 years",
            communication: "Communication Score",
            technicalscore: "Technical Score",
            buttondetails: "See more",
        },
        {
            title: "Hemant Jayas",
            body: `Sr. Tech Lead`,
            profileLink: `https://www.linkedin.com/in/hemant-jayas-45ab6318b/`,
            image: "/Images/ProductsPage/TalentProfiles/HemantJayas.png",
            experience: "Ex: 2 years",
            communication: "Communication Score",
            technicalscore: "Technical Score",
            buttondetails: "See more",
        },
        {
            title: "Shantnu Bhardwaj",
            body: `UI/Ux Designer`,
            profileLink: `https://www.linkedin.com/in/shantanu-bhardwaj-717631233/`,
            image: "/Images/ProductsPage/TalentProfiles/Shantanu.png",
            experience: "Ex: 2 years",
            communication: "Communication Score",
            technicalscore: "Technical Score",
            buttondetails: "See more",
        },
        {
            title: "Deepanshu Gulia",
            body: `React Native Developer`,
            profileLink: `https://www.linkedin.com/in/deepanshu-gulia/`,
            image: "/Images/ProductsPage/TalentProfiles/Deepanshu.png",
            experience: "Ex: 2 years",
            communication: "Communication Score",
            buttondetails: "See more",
            technicalscore: "Technical Score",
        },
        {
            title: "Hemant Khandelwal",
            body: `UI/UX Designer`,
            profileLink: `https://www.linkedin.com/in/hemant-khandelwal-60a717200`,
            image: "/Images/ProductsPage/TalentProfiles/HemantK.png",
            experience: "Ex: 2 years",
            communication: "Communication Score",
            buttondetails: "See more",
            technicalscore: "Technical Score",
        },
        {
            title: "Aaradhana Shukla",
            body: `MERN Stack Developer`,
            profileLink: `https://www.linkedin.com/in/aaradhana-shukla-a285b1197`,
            image: "/Images/ProductsPage/TalentProfiles/Aaradhana.png",
            experience: "Ex: 2 years",
            communication: "Communication Score",
            buttondetails: "See more",
            technicalscore: "Technical Score",
        },
        {
            title: "Minali Dadhich",
            body: `Product Designer`,
            profileLink: `https://www.linkedin.com/in/minali-dadhich/`,
            image: "/Images/ProductsPage/TalentProfiles/Minali.png",
            experience: "Ex: 2 years",
            communication: "Communication Score",
            buttondetails: "See more",
            technicalscore: "Technical Score",
        },
        {
            title: "Akshay Thakur",
            body: `React Native Developer`,
            profileLink: `https://www.linkedin.com/in/akshay-kumar-018970189/`,
            image: "/Images/ProductsPage/TalentProfiles/Akshay.png",
            experience: "Ex: 2 years",
            communication: "Communication Score",
            buttondetails: "See more",
            technicalscore: "Technical Score",
        },
        {
            title: "Avinash Kumar",
            body: `MERN Stack Developer`,
            profileLink: `https://www.linkedin.com/in/avinash-kumar-7015baa3/`,
            image: "/Images/ProductsPage/TalentProfiles/Avinash.png",
            experience: "Ex: 2 years",
            communication: "Communication Score",
            buttondetails: "See more",
            technicalscore: "Technical Score",
        },
        {
            title: "Muskan Gupta",
            body: `MERN Stack Developer`,
            profileLink: `https://www.linkedin.com/in/muskan-gupta01/`,
            image: "/Images/ProductsPage/TalentProfiles/Muskan.png",
            experience: "Ex: 2 years",
            communication: "Communication Score",
            buttondetails: "See more",
            technicalscore: "Technical Score",
        }
    ];


    return (
        <div className={styles.productsTalentProfilesParentDiv}>
            <div className={styles.productsTalentProfilesHeadingDiv}>
                <h1>
                    Talent Profiles
                    {/* <span> SERVICES </span> */}
                </h1>

                <p>
                    Check to see what fits-this is what the top talent from India looks like.
                </p>

            </div>

            {/* <div className='plantBasedServicesBackImageDiv'>
                <img src='/Images/PlantBasedMeat/banners & backgrounds/PlantBasedMeatBackground.png' alt='image' />
            </div> */}

            <div className={styles.productsTalentProfilesContentDiv}>
                {productsTalentProfilesCardsData.map(({ title, body, image, buttondetails, experience, communication, technicalscore, profileLink }, idx) => (
                    <div key={idx}>
                        <div>
                            <img src={image} alt={title} />

                            <div className={styles.productsTalentProfilesLinkdinDiv}>
                                <a target="_blank" href={profileLink}>
                                    <IconContext.Provider value={{ className: styles.talentedProfilesLinkedinIcons }}>
                                        <FaLinkedin />
                                    </IconContext.Provider>
                                </a>
                            </div>
                        </div>

                        <h3> {title} </h3>
                        <h4> {body} </h4>
                        <h6> {experience} </h6>

                        <div className={styles.productsTalentCommunication}>
                            <p> {communication} </p>
                            <p style={{ fontSize: "12px", marginTop: "3%" }}>
                                <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiOutlineStar />
                            </p>
                        </div>

                        <p className={styles.productsTalentProfilesContentButton}>
                            {buttondetails}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
