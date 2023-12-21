import React from 'react'
import cancel from '../../static/image/cancel.png'
import facebookIcon from '../../static/image/fb-icon.png';
import instagramIcon from '../../static/image/ig-icon.png';
import lineIcon from '../../static/image/line.png';
import twitterIcon from '../../static/image/twitter.png';
import policy1 from '../../static/image/policy1.png'
import policy2 from '../../static/image/policy2.png'
import policy3 from '../../static/image/policy3.png'

const ModalPolicy1 = ({ setNewsModal, setBodyStyle }) => {
    const handleContainerClick = (event) => {
        event.stopPropagation();
    }
    const handleButtonClick = () => {
        setNewsModal("none");
        setBodyStyle("auto");
    };
    return (
        <div className="ModalContainer" onClick={handleContainerClick}>
            <header>
                <span>政策議題</span>
                <img src={cancel} alt="政策議題模態框(取消圖示)" onClick={handleButtonClick} />
            </header>
            <div className="ModalBox">
                <div className="ModalImageBox">
                    <img src={policy1} alt="為毛孩子謀福利！推動寵物醫療保障方案案" className='PolicyPhoto' />
                    <div className="ModalImageContentBox">
                        <span>為毛孩子謀福利！推動寵物醫療保障方案案</span>
                        <div className="Share">
                            分享
                            <img src={facebookIcon} alt="facebookIcon" />
                            <img src={instagramIcon} alt="instagramIcon" />
                            <img src={lineIcon} alt="lineIcon" />
                            <img src={twitterIcon} alt="twitterIcon" />
                        </div>
                    </div>
                </div>
                <div className="ModalImageContentBox">
                    <div className="CardTitle">
                        <span>為毛孩子謀福利！推動寵物醫療保障方案案</span>
                    </div>
                    <div className='CardContent'>
                        <div className="CardItemTBox">
                            <h5>設立寵物醫療基金</h5>
                            <p>每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用</p>
                        </div>
                        <div className="CardItemTBox">
                            <h5>提供醫療補助</h5>
                            <p>每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力</p>
                        </div>
                        <div className="CardItemTBox">
                            <h5>合作動物醫院</h5>
                            <p>目前已有和超過 200 家動物醫院進行初步的合作討論</p>
                        </div>
                    </div>
                    <div className='MoreBox'>
                        <span className='MoreBoxTitle'>更多政策議題</span>
                        <div className="MoreInfo">
                            <div className="ImageContainer">
                                <img src={policy2} alt="打造休閒天堂！推廣寵物休閒與娛樂場所" />
                                <p>打造休閒天堂！推廣寵物休閒與娛樂場所</p>
                            </div>
                            <div className="ImageContainer">
                                <img src={policy3} alt="推廣寵物飼養教育！讓愛更加專業" />
                                <p>推廣寵物飼養教育！讓愛更加專業</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalPolicy1