import styles from "./BenchmarkBanner.module.css";
const BenchmarkBanner = () => {
  return (
    <>
      <div className={styles.benchmarkBannerMainDiv}>
        <div className={styles.benchmarkbannerImgDiv}>
          <img
            src="/Images/Customerengagement/Group1261153070.png"
            alt="image"
          />
        </div>
        <div className={styles.benchmarkbannercontentcontainer}>
          <h1> Boost customer engagement with smarter conversations</h1>
          <p>
            Rethink customer engagement by harnessing AI, automation, and
            conversational support to deliver delightful experiences on their
            terms, and their favorite channels.
          </p>
          <button>GET THE BENCHMARK REPORT</button>
        </div>
      </div>
    </>
  );
};

export default BenchmarkBanner;
