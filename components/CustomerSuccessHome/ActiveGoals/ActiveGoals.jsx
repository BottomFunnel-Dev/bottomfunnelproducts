import React from 'react'
import styles from "./ActiveGoals.module.css";

export const ActiveGoals = () => {
  return (
    <div className={styles.ActiveGoalsmaindiv}>
        <div className={styles.ActiveGoalsmaindivcontainer}>

            <div className={styles.ActiveGoalsmaindivcontain}>
                <h1>Take a data-driven approach to proactively help customers achieve their goals, faster.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odit debitis id consequuntur et maiores nulla dolorem repellendus amet iure sequi, ipsam, architecto, iste similique atque eos reiciendis ullam soluta.</p>
            </div>
            <div className={styles.ActiveGoalsmaindivcards}>
                <div className={styles.ActiveGoalsmaindivcardsdiv}>
                    <div className={styles.ActiveGoalsmaindivcardsdivinner}>
                        <h5>increase up-sells and expansions</h5>
                        <div>
                            <img src="/Images/customersuccesshomepagephotos/logo1.png" alt="image" />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odit debitis id consequuntur</p>
                    </div>
                    <div className={styles.ActiveGoalsmaindivcardsdivinner}>
                        <h5>increase up-sells and expansions</h5>
                        <div>
                            <img src="/Images/customersuccesshomepagephotos/logo2.png" alt="image" />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odit debitis id consequuntur</p>
                    </div>
                    <div className={styles.ActiveGoalsmaindivcardsdivinner}>
                        <h5>increase up-sells and expansions</h5>
                        <div>
                            <img src="/Images/customersuccesshomepagephotos/logo3.png" alt="image" />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odit debitis id consequuntur</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
