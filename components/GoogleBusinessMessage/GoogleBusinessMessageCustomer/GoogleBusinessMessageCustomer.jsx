// GoogleBusinessMessageCustomer
import styles from "./GoogleBusinessMessageCustomer.module.css"
import Image from "next/image"
export const GoogleBusinessMessageCustomer = () => {
    return (
        <div className={styles.GoogleBusinessMessageCustomerParent}>
            <h1>Enable customers to reach you from where they already are
            </h1>
            <div className={styles.GoogleBusinessMessageCustomerOnlyChild}>
                <div className={styles.GoogleBusinessMessageCustomerOnlyChilddivone}>
                    <div className={styles.GoogleBusinessMessageCustomerOnlyChilddivonecontent}>
                        <h3>Streamline Customer Support Across Brands and Locations with AI Chatbot on Google Business Messages</h3>
                       <p>With an AI chatbot on Google Business Messages, businesses can manage multiple brands and store locations from a single platform, simplifying operations and ensuring consistent customer support across all channels.</p>
                       <p>The AI chatbot seamlessly integrates with Google Business Messages, allowing businesses to handle customer queries, provide information, and address concerns across all their brands and store locations from one convenient interface.</p>
                       <p>The chatbot enables real-time updates on inventory, promotions, and store information, ensuring accurate and up-to-date responses to customer inquiries, regardless of the brand or store location they are contacting.</p>
                       <p>Leveraging AI capabilities, the chatbot delivers personalized interactions by understanding customer preferences, previous interactions, and purchase history, creating a tailored experience that enhances customer satisfaction and loyalty.</p>
                    </div>
                    <div className={styles.GoogleBusinessMessageCustomerOnlyChilddivoneimage}>
                        <Image
                            src={"https://d3op2l77j7wnti.cloudfront.net/Images/GoogleBusiness/one.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                </div>
                <div className={styles.GoogleBusinessMessageCustomerOnlyChilddivone}>

                    <div className={styles.GoogleBusinessMessageCustomerOnlyChilddivoneimage}>
                        <Image
                            src={"https://d3op2l77j7wnti.cloudfront.net/Images/GoogleBusiness/two.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                    <div className={styles.GoogleBusinessMessageCustomerOnlyChilddivonecontent}>
                        <h3>Elevate Customer Engagement with Contextual Support on Google Business Messages</h3>
                        <p>Our AI chatbot on Google Business Messages utilizes advanced natural language processing to comprehend customer queries in context, ensuring personalized and relevant responses.</p>
                        <p>With the ability to maintain context throughout the conversation, our chatbot delivers a seamless and engaging experience, allowing customers to have fluid interactions without repeating information.</p>
                        <p>The chatbot anticipates customer needs and provides proactive suggestions or recommendations based on their queries, enhancing engagement and guiding customers toward their desired outcomes.</p>
                        <p>By analyzing customer preferences and behavior, the chatbot offers tailored recommendations, products, or services, creating a personalized experience that fosters customer engagement and satisfaction.</p>

                    </div>
                </div>
                <div className={styles.GoogleBusinessMessageCustomerOnlyChilddivone}>
                    <div className={styles.GoogleBusinessMessageCustomerOnlyChilddivonecontent}>
                        <h3>24/7 Support at Your Fingertips: Empower Customers with AI Chatbot on Google Business Messages</h3>
                        <p>Our AI chatbot on Google Business Messages enables businesses to provide round-the-clock support, ensuring that customers can access assistance anytime, anywhere.</p>
                        <p>With its automated and intelligent capabilities, the chatbot delivers immediate responses to customer queries, reducing response times and enhancing customer satisfaction.</p>
                        <p>The chatbot efficiently resolves common customer issues by providing accurate and relevant information, troubleshooting steps, or connecting customers to the right resources.</p>
                        <p>Our AI chatbot supports multiple languages, allowing businesses to cater to a diverse customer base and provide support in customers' preferred languages.</p>
                        <p>When complex queries arise, the chatbot seamlessly transfers the conversation to a human agent, ensuring a smooth transition and uninterrupted support.</p>
                    </div>
                    <div className={styles.GoogleBusinessMessageCustomerOnlyChilddivoneimage}>
                        <Image
                            src={"https://d3op2l77j7wnti.cloudfront.net/Images/GoogleBusiness/three.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                </div>
            </div>

        </div>
    )
}