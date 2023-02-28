import React from 'react'
import styles from "./EmailSell.module.css";


export const EmailSell = () => {
  return (
    <div className={styles.EmailSelltopdiv}>
        <div className={styles.EmailSellmaindiv}>
            <h3>
                Everythings you need to send emails that sell
            </h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure quae officia doloremque incidunt saepe doloribus fugiat est voluptate voluptatem, hic consequatur praesentium, rerum labore at repellendus cum sed obcaecati ab. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam sit omnis voluptas ipsa atque? Qui, doloremque! Inventore repellat harum nisi eveniet illo animi, numquam autem odit voluptates minima nemo nam?</p>
        <div className={styles.EmailSelllistdiv}>
            <div className={styles.EmailSelllistdivinner}>
                <ul>
                    <li><h4>Schedule emails</h4></li>
                    <p>Set your campaigns to go out at a specific date and time when your customers are most likely to read them.</p>
                    <li><h4>Set up real-time alerts</h4></li>
                    <p>Get real-time alerts on email opens, link clicks, and new emails, and connect with your prospects at the right time.</p>
                    <li><h4>Forward emails</h4></li>
                    <p>Sell from any inbox, forward or BCC emails, and follow up on conversations right from your CRM account.</p>
                </ul>
            </div>

            <div  className={styles.EmailSelllistdivinner}>
                <ul>
                    <li><h4>Schedule emails</h4></li>
                    <p>Set your campaigns to go out at a specific date and time when your customers are most likely to read them.</p>
                    <li><h4>Set up real-time alerts</h4></li>
                    <p>Get real-time alerts on email opens, link clicks, and new emails, and connect with your prospects at the right time.</p>
                    <li><h4>Forward emails</h4></li>
                    <p>Sell from any inbox, forward or BCC emails, and follow up on conversations right from your CRM account.</p>
                </ul>
            </div>
        </div>
        
        </div>
    </div>
  )
}
