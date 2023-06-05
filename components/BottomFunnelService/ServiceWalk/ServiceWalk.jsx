import React from 'react'
import styles from "./ServiceWalk.module.css"

export const ServiceWalk = () => {
  const data = [
    {
   
    hd:"24x7 Customers Support",
    p:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic animi aut quaerat accusamus reiciendis sequi, facere vel repellendus suscipit assumenda aspernatur dolores accusantium eius consectetur cumque iste dolor maiores facilis?",
    },
    {
   
      hd:"Services",
      p:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic animi aut quaerat accusamus reiciendis sequi, facere vel repellendus suscipit assumenda aspernatur dolores accusantium eius consectetur cumque iste dolor maiores facilis?",
      },
      {
   
        hd:"Education",
        p:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic animi aut quaerat accusamus reiciendis sequi, facere vel repellendus suscipit assumenda aspernatur dolores accusantium eius consectetur cumque iste dolor maiores facilis?",
        },
  
    
    ]
  return (
    <div>
       <div className= {styles.ServiceWalkmaindiv}>
        <h2>You deserve exceptional service too, so Bottom Funnel walks the walk.</h2>
        <p>because just like your customers, you shouldn't have to figure it out all on your own.</p>
        <div className={styles.ServiceWalkboxdiv}>
            
            {data.map((e) => {
return (
  <div className={styles.ServiceWalkboxinnerdiv}>
              <div>
                <h4>{e.hd}</h4>
                <p>{e.p}</p> </div>
            </div>
)
})}
            

        </div>
       </div>
    </div>
  )
}
