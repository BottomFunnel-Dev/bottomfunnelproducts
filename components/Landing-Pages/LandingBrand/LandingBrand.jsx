import styles from "./LandingBrand.module.css"
export const LandingBrand = () => {
    return (
        <div className={styles.LandingBrandParent}>
            <h1>Engage with customer and increase brand awarness on social media </h1>
            <div className={styles.Landingstrip} ></div>
            <div className={styles.LandingBrandChild}>
                <div>Choose from pre_designed templete </div>
                <div> Simplify design with the drag-and-drop builder</div>
                <div>Find perfect images to complete your page</div>
            </div>
            <div className={styles.LandingBrandChild}>

            </div>
        </div>
    )
}