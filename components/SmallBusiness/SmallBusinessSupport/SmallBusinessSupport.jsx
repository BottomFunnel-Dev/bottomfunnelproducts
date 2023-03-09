import styles from "./SmallBusinessSupport.module.css"
import Image from "next/image";
export const SmallBusinessSupport = () => {
    return (
    <div className={styles.SmallBusinessSupportParent} >
     <h1> why do small business need a help desk software to manage customer support?</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius est molestiae ea, similique magnam quam odit sit laboriosam nesciunt animi nisi quidem dignissimos, harum reiciendis voluptates. Ab necessitatibus rem dicta.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus itaque excepturi assumenda modi sed, culpa accusamus eos non corrupti aliquid molestiae! Dolore tenetur libero quod illo dolor quam labore ipsam?</p>
     <p> Corrupti laudantium saepe nemo incidunt voluptatem quis temporibus asperiores. Alias, voluptatem distinctio magnam corporis autem odit soluta voluptatum fuga doloremque dolorum illo.</p>
     <div className={styles.SmallBusinessSupportParentonlydiv}>
        <div className={styles.SmallBusinessSupportParentonlydivfirstchild}>
            <div>
                <div>
                <Image
                    src={"/Images/Small-Business/banner.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "10%", height: "10%" }}
                />
                <h5>Delayed response</h5>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde voluptatem consequatur hic omnis, optio beatae natus eaque! Sint, quis. Sit voluptatum itaque pariatur quidem? Ut accusamus eum nisi laborum libero?</p>
            </div>
            <div>
                <div>
                <Image
                    src={"/Images/Small-Business/banner.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "10%", height: "10%" }}
                />
                <h5>Delayed response</h5>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ipsa non in, eveniet commodi, esse et, modi consequatur quo laborum repudiandae dolore? Molestias aspernatur, voluptatibus a mollitia odit rem assumenda.</p>
            </div>
        </div>
        <div className={styles.SmallBusinessSupportParentonlydivsecchild}>
        <div>
                <div>
                <Image
                    src={"/Images/Small-Business/banner.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "10%", height: "10%" }}
                />
                <h5>Delayed response</h5>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde voluptatem consequatur hic omnis, optio beatae natus eaque! Sint, quis. Sit voluptatum itaque pariatur quidem? Ut accusamus eum nisi laborum libero?</p>
            </div>
            <div>
                <div>
                <Image
                    src={"/Images/Small-Business/banner.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "10%", height: "10%" }}
                />
                <h5>Delayed response</h5>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ipsa non in, eveniet commodi, esse et, modi consequatur quo laborum repudiandae dolore? Molestias aspernatur, voluptatibus a mollitia odit rem assumenda.</p>
            </div>
        </div>
     </div>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ex illum architecto quasi vel quis reprehenderit, exercitationem ipsam tempora incidunt odit temporibus accusantium, ea, earum animi soluta perspiciatis beatae doloribus.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, deserunt! Incidunt delectus provident enim non obcaecati quaerat, sequi laborum repellendus, voluptas officia, reprehenderit numquam. Quidem ratione nulla doloremque blanditiis ducimus?</p>
    </div>
    );
}