import React from 'react';
import styles from "./LifeBottomFunnel.module.css";
import Link from "next/link";

const LifeBottomFunnel = () => {
    return (
        <div className={styles.lifeMainOuterDiv}>
            <div className={styles.lifeHeadingMainDiv}>
                <p>
                    Welcome to Bottom Funnel
                </p>

                <h1>
                    Work the way that works for you
                </h1>
            </div>

            <div className={styles.lifeImageMainDiv}>
                <div className={styles.lifeImageInnerDiv}>

                    <div className={styles.lifeImageDiv}>
                        <Link href={"/about"}>
                            <img src="/Images/ProductsPage/Footer/LifeImage1.png" alt='image' />
                        </Link>
                    </div>


                    <div className={styles.lifeImageDiv}>
                        <Link href={"/engagement"}>
                            <img src='/Images/ProductsPage/Footer/Model.png' alt='image' />
                        </Link>
                    </div>

                    <div className={styles.lifeImageDiv}>
                        <Link href={"/career"}>
                            <img src='/Images/ProductsPage/Footer/LifeImage3.png' alt='image' />
                        </Link>
                    </div>
                </div>

                <div className={styles.lifeBottomContentDiv}>
                    <button>
                        See life of Bottom Funnel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LifeBottomFunnel;