import React from 'react'
import style from './WelcomeBox.module.css'

function WelcomeBox() {
    return (
        <div className={style.welcomebox}>
 <div className={style.fancytextcontainer}>
      <p className={style.mainText}>
        WE WELCOME YOU TO <span className={style.fancySpan}>RESUAI</span>
      </p>
    </div>
            <p className={style.welcomemessage}>A WebApp That Asks Questions Based On Your Resume!<br/>
            <span className={style.welcomesubmessage}>Upload again for new questions!</span></p>
        </div>
    )
}

export default WelcomeBox