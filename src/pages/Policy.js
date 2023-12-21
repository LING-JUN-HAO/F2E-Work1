import React,{forwardRef} from 'react'
import policy1 from '../../static/image/policy1.png'
import policy2 from '../../static/image/policy2.png'
import policy3 from '../../static/image/policy3.png'
import ArticleTitleBox from '../conponent/ArticleTitleBox'

const Policy = forwardRef(({setNewsModal, setBodyStyle, setModalType}, ref) => {
    const handleButtonClick = (Type) => {
        // 在這裡使用 set_news_modal 來改變父元件中的 news_modal 狀態
        setNewsModal("flex");
        setBodyStyle("hidden");
        setModalType(Type)
      };
    return (
        <section className='PolicyContainer' data-aos="fade-up" data-aos-delay="0" data-aos-duration="900" ref={ref}>
            <ArticleTitleBox Mark="POLICY ISSUES" Title="政策議題"></ArticleTitleBox>
            <div className='PolicyBox'>
                <div className='PolicyCard' onClick={()=>{handleButtonClick("policy1")}}>
                    <div className="PolicyCardTitle">
                        <h4>
                            為毛孩子謀福利！
                            <br />
                            推動寵物醫療保障方案案
                        </h4>
                    </div>
                    <div>
                        <img src={policy1} alt="為毛孩子謀福利！推動寵物醫療保障方案案" />
                    </div>
                </div>
                <div className='PolicyCard' onClick={()=>{handleButtonClick("policy2")}}>
                    <div className="PolicyCardTitle">
                        <h4>
                            打造休閒天堂！
                            <br />
                            推廣寵物休閒與娛樂場所
                        </h4>
                    </div>
                    <div>
                        <img src={policy2} alt="打造休閒天堂！推廣寵物休閒與娛樂場所" />
                    </div>
                </div>
                <div className='PolicyCard' onClick={()=>{handleButtonClick("policy3")}}>
                    <div className="PolicyCardTitle">
                        <h4>
                            推廣寵物飼養教育！
                            <br />
                            讓愛更加專業
                        </h4>
                    </div>
                    <div>
                        <img src={policy3} alt="推廣寵物飼養教育！讓愛更加專業" />
                    </div>
                </div>
            </div>
        </section>
    )
})

export default Policy