import styles from "./ContentMarketingServicesExpertise.module.css";
import Image from "next/image";
export const ContentMarketingServicesExpertise = () => {
    return (
        <div className={styles.ContentMarketingServicesExpertiseParent}>
            <h1>Our Expertise in Content Marketing</h1>
            <p>We’re a full-service content marketer.Great content is what our content marketing team is all about.</p>
            <div className={styles.ContentMarketingServicesExpertiseParentonlyChild}>
                <div className={styles.ContentMarketingServicesExpertiseParentonlyChildFirstChild}>
                    <div>
                        <div> <Image
                            src={"https://d3op2l77j7wnti.cloudfront.net/Images/ContentMarketingServices/Expertise1.webp"}
                            alt={"image"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }} /></div>
                        <h5>Blog Writing
                            Services</h5>
                        <p>Increase search exposure, build
                            brand awareness and attract
                            top-of-funnel visitors with blog
                            posts created by our in-house
                            team of content marketers. We
                            develop engaging, high-quality
                            content that’s personalized for
                            your target audience and
                            optimized for search engines.</p>
                    </div>
                    <div  className={styles.ContentMarketingServicesExpertiseParentborder}>
                        <div><Image
                            src={"https://d3op2l77j7wnti.cloudfront.net/Images/ContentMarketingServices/Expertise2.webp"}
                            alt={"image"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%"  }} /></div>
                        <h5>Infographics &
                            Asset Design</h5>
                        <p>Get onboard with visual content
                            marketing. We design everything
                            from full-size printable
                            infographics that emphasize
                            visual storytelling to formatted
                            white papers that demonstrate
                            your brand’s expertise.</p>
                    </div>
                    <div>
                        <div><Image
                            src={"https://d3op2l77j7wnti.cloudfront.net/Images/ContentMarketingServices/Expertise3.webp"}
                            alt={"image"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%"  }} /></div>
                        <h5>eBooks &
                            White Papers</h5>
                        <p>Increase search exposure, build
                            brand awareness and attract
                            top-of-funnel visitors with blog
                            posts created by our in-house
                            team of content marketers. We
                            develop engaging, high-quality
                            content that’s personalized for
                            your target audience and
                            optimized for search engines.</p>
                    </div>
                </div>
                <div className={styles.ContentMarketingServicesExpertiseParentonlyChildSecChild}>
                    <div>
                        <div><Image
                            src={"https://d3op2l77j7wnti.cloudfront.net/Images/ContentMarketingServices/Expertise4.webp"}
                            alt={"image"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{  width: "100%", height: "100%"  }} /></div>
                        <h5>Video Production</h5>
                        <p>Steal the eyes of your prospects.
                            We create everything from onlocation testimonials to
                            animations, motion graphics to
                            in-studio productions, vox pops to
                            video blogs and more. Our video
                            marketing services and
                            campaigns use immersive,
                            visually compelling content to
                            reach your target audience in
                            new ways and give them
                            something to remembe</p>
                    </div>
                    <div className={styles.ContentMarketingServicesExpertiseParentborder}>
                        <div><Image
                            src={"https://d3op2l77j7wnti.cloudfront.net/Images/ContentMarketingServices/Expertise5.webp"}
                            alt={"image"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{  width: "100%", height: "100%" }} /></div>
                        <h5>Case Studies &
                            Website Copy</h5>
                        <p>Case studies provide powerful
                            social proof and underscore the
                            value of your brand to your
                            potential customers. Let us help
                            you and your clients tell those
                            stories, speak those truths and
                            validate your marketing efforts.</p>
                    </div>
                    <div>
                        <div><Image
                            src={"https://d3op2l77j7wnti.cloudfront.net/Images/ContentMarketingServices/Expertise6.webp"}
                            alt={"image"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{  width: "100%", height: "100%"  }} /></div>
                        <h5>Newsletters &
                            Email Copy</h5>
                        <p>Execute your email marketing
                            strategy with our email marketers
                            in the driver’s seat of your
                            automation platform, and our
                            creatives at the helm of your
                            content development efforts. We
                            help you leverage email
                            marketing as part of your content
                            marketing strategy to connect
                            with new prospects, nurture more
                            leads and cultivate customer
                            loyalty</p>
                    </div>
                </div>
            </div>
        </div>
    )
}