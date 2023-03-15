import styles from "./AllProductsBanner.module.css"

export const AllProductsBanner = () => {
    return (
        <div className={styles.AllProductsBannerparent}>

            <h1>All products and solutions</h1>
            <h6>
                Business software to delight your customer and employee
            </h6>
            <button>
                Sign up for free
            </button>
            <div className={styles.AllProductsBannerparentOnlyChild}>
               <a href="#">Customer Services</a>
               <a href="#"> IT services</a>
               <a href="#"> CRM </a>
            </div>
        </div>
    );
}