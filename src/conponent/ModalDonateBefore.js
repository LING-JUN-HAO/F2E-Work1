import React, { useState } from 'react'

const ModalDonateBefore = ({ setComponent }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    }
    const handleDonateOnclick = () => {
        setComponent("after")
    }
    return (
        <div className="ModalDonateContent">
            <h6>捐款方案</h6>
            <div className="ModalDonateBox">
                <div className={`ModalDonateItem ${selectedItem === 'item1' ? 'selected' : ''}`}
                    onClick={() => handleItemClick('item1')}>
                    <span className='ModalDonateItemTitle'>喵星人之友</span>
                    <span>
                        <span className='DollarBox'>
                            <span className='Dollar'>NT$</span><span className='DollarNum'>600</span>
                        </span>
                        <span className='Sponsor'>已有 9,957 人贊助</span>
                    </span>
                </div>
                <div className={`ModalDonateItem ${selectedItem === 'item2' ? 'selected' : ''}`}
                    onClick={() => handleItemClick('item2')}>
                    <span className='ModalDonateItemTitle'>喵星大使</span>
                    <span>
                        <span className='DollarBox'>
                            <span className='Dollar'>NT$</span><span className='DollarNum'>6,000</span>
                        </span>
                        <span className='Sponsor'>已有 2,000 人贊助</span>
                    </span>
                </div>
                <div className={`ModalDonateItem ${selectedItem === 'item3' ? 'selected' : ''}`}
                    onClick={() => handleItemClick('item3')}>
                    <span className='ModalDonateItemTitle'>喵星傳奇</span>
                    <span>
                        <span className='DollarBox'>
                            <span className='Dollar'>NT$</span><span className='DollarNum'>60,000</span>
                        </span>
                        <span className='Sponsor'>已有 999人贊助</span>
                    </span>
                </div>
                <div className={`ModalDonateItem CustomizeItem ${selectedItem === 'item4' ? 'selected' : ''}`}
                    onClick={() => handleItemClick('item4')}>
                    <span className='ModalDonateItemTitle'>自訂贊助金額</span>
                    <div className="InputBox">
                        <div>NT$</div>
                        <input type="text" placeholder='輸入金額' />
                    </div>
                </div>
                <div className='ModalOtherDonateBtn' onClick={() => (handleDonateOnclick())}>前往捐款</div>
            </div>
        </div>
    )
}

export default ModalDonateBefore