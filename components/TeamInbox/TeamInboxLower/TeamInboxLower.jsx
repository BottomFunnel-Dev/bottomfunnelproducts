import React from 'react'
import style from "./TeamInboxLower.module.css"

export default function TeamInboxLower () {
  return (
    <div>
        <div className={style.TeaminboxLowerMain}>
        <div className={style.TeaminboxLowercontain}>
        <h1>Start today, and enjoy our free trial.</h1>
        <p>start your 21-days free trial. No credit card required. No strings attached.</p>
        <button className={style.TeaminboxLowerbutton1}>Start Free Trial</button>
        <button className={style.TeaminboxLowerbutton2}>Request Demo</button>
        </div>
    </div>
    </div>
  )
}
