import React from 'react'
import styles from "./CustomerWhatsappService.module.css"
import Image from 'next/image'

export const CustomerWhatsappService = () => {
  return (
    <div>
         <div className={styles.CustomerWhatsappServicemaindivheading}>
            <h2>
            Ace Customer Service on WhatsApp: Elevate Your Support with Bottom Funnel Chat
            </h2>
            <p>Deliver exceptional customer service on WhatsApp with the power of Bottom Funnel Chat. Engage, support, and delight customers effortlessly.</p>
         </div>

         <div className={styles.CustomerWhatsappServicemaindiv}>
            <div className={styles.CustomerWhatsappServicemaindivcontent}>
                <h4>Streamline and Simplify Customer Conversations with Unified WhatsApp Management</h4>
                <p>With Bottom Funnel Chat, effortlessly manage multiple WhatsApp conversations in a single workspace, ensuring efficient organization, collaborative teamwork, time-saving automation, and enhanced productivity for seamless customer support experiences.</p>
                <ul>
                    <li>Streamline your customer conversations by managing multiple WhatsApp messages in one convenient workspace, eliminating the need to switch between different platforms.</li>
                    <li>Keep track of customer inquiries, orders, and support requests in a structured manner, ensuring nothing falls through the cracks.</li>
                    <li>Enable your customer support team to collaborate seamlessly, assign tasks, and resolve customer issues together within the same workspace.</li>
                    <li>Automate repetitive tasks and responses, allowing your team to focus on more complex customer queries and provide personalized assistance.</li>
                    <li>With a single workspace for all your WhatsApp messages, you can maximize productivity, respond faster, and provide consistent customer experiences.</li>
                </ul>
            </div>
            <div className={styles.CustomerWhatsappServicemaindivimage}> 
                <Image
                  src={"/Images/WhatsApp-Chat/screen1.webp"}
                  alt={"Image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                /></div>
         </div>


         <div className={styles.CustomerWhatsappServicemaindivone}>
            <div className={styles.CustomerWhatsappServicemaindivcontent}>
                <h4>Empower Customers with Intelligent Self-Service on WhatsApp</h4>
                <p>Enhance customer experience and efficiency by enabling intelligent self-service options on WhatsApp. Leverage interactive chatbots, personalized recommendations, and guided workflows to empower customers with the tools they need to find answers and accomplish tasks on their own.</p>
                <ul>
                    <li>Deploy an intelligent chatbot on WhatsApp to provide instant self-service options to customers, allowing them to find answers to common queries without human intervention.</li>
                    <li>Integrate your knowledge base with the chatbot to offer comprehensive self-help resources, including FAQs, guides, tutorials, and troubleshooting steps, empowering customers to resolve issues on their own.</li>
                    <li>Utilize AI algorithms to deliver personalized product or service recommendations based on customer preferences and past interactions, enhancing their self-service experience.</li>
                    <li>Implement guided workflows within the chatbot interface to assist customers in completing complex tasks or processes, ensuring they can navigate through various steps with ease.</li>
                    <li>Leverage natural language processing to understand customer intent and provide contextual assistance, enabling the chatbot to offer relevant and accurate self-service options in real time.</li>
                </ul>
            </div>
            <div className={styles.CustomerWhatsappServicemaindivimageone}> 
                <Image
                  src={"/Images/WhatsApp-Chat/screen3.webp"}
                  alt={"Image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "50%", height: "100%" }}
                /></div>
         </div>

         <div className={styles.CustomerWhatsappServicemaindiv}>
            <div className={styles.CustomerWhatsappServicemaindivcontent}>
                <h4>Empower Customers with Timely and Relevant Information on WhatsApp</h4>
                <p>Our AI chatbot on WhatsApp ensures that customers receive the right information at the right time. With personalized responses, real-time updates, contextual understanding, proactive notifications, and seamless integration, we enhance the customer experience by providing accurate and timely information on WhatsApp.</p>
                <ul>
                    <li>AI chatbots on WhatsApp deliver tailored and relevant information to customers based on their specific queries and preferences, ensuring they receive accurate and personalized responses.</li>
                    <li>The chatbot provides up-to-date information on products, services, promotions, and more, ensuring customers have access to the most current and relevant details at any given time.</li>
                    <li>Through natural language processing, the chatbot comprehends customer inquiries in context, allowing it to provide precise and timely information that matches their needs.</li>
                    <li>The chatbot can proactively send notifications and updates to customers, keeping them informed about relevant information or changes that may impact their experience.</li>
                    <li>With integration capabilities, the chatbot can seamlessly connect with backend systems and databases to retrieve accurate information and provide customers with real-time responses.</li>
                </ul>
            </div>
            <div className={styles.CustomerWhatsappServicemaindivimage}> 
                <Image
                  src={"/Images/WhatsApp-Chat/screen2.webp"}
                  alt={"Image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "80%", height: "100%" }}
                /></div>
         </div>
    </div>
  )
}
