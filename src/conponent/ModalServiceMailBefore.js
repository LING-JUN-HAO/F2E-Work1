import React, { useState } from 'react'

const ModalServiceMailBefore = ({ setComponent }) => {

    const handleDonateOnclick = () => {
        setComponent("after")
    }
    return (
        <div className="ModalDonateContent">
            <div className="ModalDonateBox">
                <div>
                    <div className='ServiceMailBox'>
                        <div className='ServiceMailItem'>您的名字</div>
                        <input type="text" placeholder='姓名'/>
                    </div>
                    <div className='ServiceMailBox'>
                        <div className='ServiceMailItem'>Email</div>
                        <input type="text" placeholder='email' />
                    </div>
                    <div className='ServiceMailBox'>
                        <div className='ServiceMailItem'>手機</div>
                        <input type="text" placeholder='手機號碼'/>
                    </div>
                    <div className='ServiceMailBox'>
                        <div className='ServiceMailItem'>您的建言</div>
                        <textarea rows={5} placeholder='輸入內容'/>
                    </div>
                </div>
                <div className='ModalOtherDonateBtn' onClick={() => (handleDonateOnclick())}>送出意見</div>
            </div>
        </div>
    )
}

export default ModalServiceMailBefore