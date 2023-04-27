import React from 'react'
import style from "./IntegrationFooter.module.css"

export const IntegrationFooter = () => {
  return (
    <div className={style.IntegrationFooterMain}>
        <div className={style.IntegrationFootercontain}>
        <h1>Start today, and enjoy our free trial.</h1>
        <p>Start your 21-days free trial. No credit card required. No strings attached.</p>
        <button className={style.IntegrationFooterbutton1}>Start Free Trial</button>
        <button className={style.IntegrationFooterbutton2}>Request Demo</button>
        </div>
    </div>
  )
}
