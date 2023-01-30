import React from "react";
import styles from './Reviews.module.css';
// import Volkswagen from "../../ImageSection/Volkswagen.jpg"  
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { IconContext } from "react-icons/lib";

function Reviews() {
    return (

        <div className={styles._SeoReviewsmaindiv}>
            <div className={styles._SeoReviews1}>
                <div className={styles._SeoCompanyRatings}>
                    <div className={styles.ratingImg}>
                        <img src="Images/seopages/rating1.png" alt="image" />
                    </div>
                    <div className={styles._SeoRatingStar}>
                        <IconContext.Provider value={{ className: styles.ratingIcons }}>
                            <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                        </IconContext.Provider>
                    </div>
                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews </p>
            </div>
            <div className={styles._SeoReviews1}>
                <div className={styles._SeoCompanyRatings}>
                    <div className={styles.ratingImg}>

                        <img src="Images/seopages/clutch.png" alt="image" />
                    </div>
                    <div className={styles._SeoRatingStar}>
                        <IconContext.Provider value={{ className: styles.ratingIcons }}>
                            <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                        </IconContext.Provider>
                    </div>

                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews</p>
            </div>
            <div className={styles._SeoReviews1}>
                <div className={styles._SeoCompanyRatings}>
                    <div className={styles.ratingImg}>

                        <img src="Images/seopages/rating3.png" alt="image" />
                    </div>
                    <div className={styles._SeoRatingStar}>
                        <IconContext.Provider value={{ className: styles.ratingIcons }}>
                            <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                        </IconContext.Provider>
                    </div>
                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews </p>
            </div>
            <div className={styles._SeoReviews1}>
                <div className={styles._SeoCompanyRatings}>
                    <div className={styles.ratingImg}>

                        <img src="Images/seopages/rating4.png" alt="image" />
                    </div>
                    <div className={styles._SeoRatingStar}>
                        <IconContext.Provider value={{ className: styles.ratingIcons }}>
                            <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                        </IconContext.Provider>
                    </div>
                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews </p>
            </div>

        </div>
    )
}
export default Reviews