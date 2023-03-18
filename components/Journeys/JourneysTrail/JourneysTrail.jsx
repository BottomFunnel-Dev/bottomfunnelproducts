
import styles from "./JourneysTrail.module.css"

export const JourneysTrail = () => {
    return (
        <div className={styles.JourneysTrailparent}>
            <h1>
                Start today ,and enjoy our free trail.
            </h1>
            <p>Start your 21 -days free trail.No credit card required.No string attached</p>
        
            <div>
                <button>Start Free Trail</button>
                <button>Request Demo</button>
            </div>
        </div>
    )
}