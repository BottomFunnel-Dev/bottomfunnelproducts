import styles from "./Digital.module.css";

const Digital = () => {
  return (
    <>
      <div className={styles.digitalMainDiv}>
        <div className={styles.digitalImgDiv}>
          <img
            src="/Images/Customerengagement/Group1261153066.png"
            alt="image"
          />
        </div>
        <div className={styles.digitalcontentcontainer}>
          <h2>So effortless, you won't notice what makes Freshdesk great.</h2>
          <p>
            Deliver a seamless experience across digital and traditional
            channels with Freshdesk Omnichannel.
          </p>
          <a href="#">Learn More →</a>
        </div>
      </div>
    </>
  );
};

export default Digital;
