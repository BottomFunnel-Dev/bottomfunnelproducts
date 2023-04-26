
import styles from "./EventsTrail.module.css"

export const EventsTrail = () => {
    return (
        <div className={styles.eventsTrailparent}>
            <h2>
                Start today ,and enjoy our free trail.
            </h2>
            <p>Start your 21 -days free trail. No credit card required. No string attached</p>
        
            <div>
                <button>Start Free Trail</button>
                <button>Request Demo</button>
            </div>
        </div>
    )
}