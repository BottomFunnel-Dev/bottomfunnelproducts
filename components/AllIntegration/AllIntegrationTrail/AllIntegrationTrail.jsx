
import styles from "./AllIntegrationTrail.module.css";


export const AllIntegrationTrail = () => {
    return (
        <div className={styles.allIntegrationTrailParent}>
            <h2>
                Start today, and enjoy our free trial
            </h2>
            <p>
                Start your 21-day free trial. No credit card required. No strings attached
            </p>
            <div className={styles.allIntegrationTrailParentButton}>
                <button>Start Free Trail  </button>

                <button>Request Demo</button>
            </div>
        </div>
    )
}