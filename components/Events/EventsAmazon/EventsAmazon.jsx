
import styles from "./EventsAmazon.module.css"

export const EventsAmazon = () => {
    return (
        <div className={styles.eventsAmazonparent}>
            <h1>
                Bottomfunnel + Amazon Eventbridge
            </h1>
            <p>By adding the app to your workspace, you will have an advantage when it comes to setting up notifications.</p>
        
            <div>
                <button>BottomFunnel Support Desk</button>
                <button>BottomFunnel Sales</button>
            </div>
        </div>
    )
}