import React from 'react'
import style from "./SaleSmarter.module.css";

export const SaleSmarter = () => {
    const data = [{hd:"Free",p:"Get sales teams organized and engage leads fast with built-in chat, email, and phone",
hd1:"₹0", ld:"Everything in Free, plus",l1:"Contact & Account Management",l2:"Contact Lifecycle Stages",
l3:"Built-in Chat, Email, & Phone",l4:"24x5 Support",l5:"Mobile App"},
{hd:"Growth",p:"Powerful CRM automation to help growing sales teams avoid repetitive work and spend more time selling",
hd1:"₹829",ld:"Everything in  Growth, plus",l1:"Visual Sales Pipeline",l2:"AI-powered Contact Scoring",
l3:"Sales Sequences",l4:"Up to 2,000 Bot Sessions/Month",l5:"WhatsApp Business"},
{hd:"Pro",p:"Everything you need to manage multiple sales teams and grow revenue like a pro",
hd1:"₹2367", ld:"Everything in Pro, plus",l1:"Multiple Sales Pipelines",l2:"Time-based Workflows",
l3:"AI-power Deal Insights & Next Best Action, Email, & Phone",l4:"Up to 3,000 Bot Session/Month OLLY",l5:"Sales Teams & Territory Management"},
{hd:"Enterprise",p:"CRM your way Advanced customization, governance,and controls",
hd1:"₹3799", ld:"Everything in Enterprise, plus",l1:"Custom Modules",l2:"AI-based Forecasting insights",
l3:"Audit Logs",l4:"Up to 5,000 Bot Sessions/Month",l5:"Dedicated Account Manager"}]
  return (
    <div>
    <div className={style.SaleSmarterdivupperheading}>
        <h2>Sell Smarter and faster with Bottom Funnel Sales</h2>
        </div>

        <div className={style.SaleSmarterdiv}>
            {data.map((item) => {
                return(
                    <div className={style.SaleSmarterinnerdiv}>
                    <div className={style.SaleSmarterheading} >
                        <h2>{item.hd}</h2>
                    </div>
                    <div className={style.SaleSmarterparagrafdiv}>
                        <p>{item.p}</p>
                    </div>
                    <div className={style.SaleSmarterpricediv}>
                        <h2>{item.hd1}</h2>
                        <h6>per user/month, billed annually </h6>
                        <button className={style.SaleSmarterbutton}> SIGN UP </button>
                    </div>
                    <div className={style.SaleSmarterlistdiv}>
                    <h6>{item.ld}</h6>
                        <ul>
                           
                            <li>{item.l1}</li>
                            <li>{item.l2}</li>
                            <li>{item.l3}</li>
                            <li>{item.l4}</li>
                            <li>{item.l5}</li>
                            
                        </ul>
                    </div>
    
                </div>
                );
            })}
        


          

        </div>
        <div className={style.SaleSmartertext}>
            <p>All prices are exclusive of applicable taxes</p>
        </div>
    </div>
  )
}
