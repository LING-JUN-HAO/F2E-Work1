import React, { useState } from 'react'
import complete from '../../static/image/complete.png'

const ModalCompleted = ({handleButtonClick}) => {
    return (
        <div className="ModalCompleteBox">
            <p>感謝您的捐款</p>
            <img src={complete} alt="捐款完成圖示" />
            <div className="close" onClick={()=>{handleButtonClick()}}>關閉</div>
        </div>
    )
}

export default ModalCompleted