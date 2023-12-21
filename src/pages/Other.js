import React, { forwardRef } from 'react'
import donate from '../../static/image/donate.png'
import email from '../../static/image/email.png'
import arrow from '../../static/image/arrow.png'

const Other = forwardRef(({setNewsModal, setBodyStyle, setModalType}, ref) => {
    const handleButtonClick = (Type) => {
        setNewsModal("flex");
        setBodyStyle("hidden");
        setModalType(Type)
      };

    return (
        <section data-aos="fade-up" data-aos-delay="0" data-aos-duration="900">
            <div className="DonateAndServiceMailBox" ref={ref}>
                <div className="DonateBox">
                    <div>
                        <h3>小額支持喵喵</h3>
                        <h4>您的小筆捐款，是每隻毛孩未來的大大動力！</h4>
                    </div>
                    <div className="DonateBtnContainer">

                        <div className="DonateBtnBox">
                            <div className="DonateBtn" onClick={()=>{handleButtonClick("donate")}}>
                                <p>小額捐款</p>
                                <img src={arrow} alt="填寫表單(箭頭圖示)" />
                            </div>
                        </div>
                        <div className='DonateBtnImg'>
                            <img src={donate} alt="小額捐款" className='OtherIcon' />
                        </div>
                    </div>
                </div>
                <div className="ServiceMailBox">
                    <div>
                        <h3>民眾服務信箱</h3>
                        <h4>親愛的鄉親，每一位市民的意見都是我們社區前進的原動力</h4>
                    </div>
                    <div className="ServiceMailBtnContainer">
                        <div className="ServiceMaillBtnBox">
                            <div className="ServiceMailBtn" onClick={()=>{handleButtonClick("servicemail")}}>
                                <p>填寫表單</p>
                                <img src={arrow} alt="填寫表單(箭頭圖示)" />
                            </div>
                        </div>
                        <div className='ServiceMailBtnImg'>
                            <img src={email} alt="ServiceMailbox" className='OtherIcon' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})

export default Other