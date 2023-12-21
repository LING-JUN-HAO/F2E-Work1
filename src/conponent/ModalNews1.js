import React from 'react'
import cancel from '../../static/image/cancel.png'
import news1 from '../../static/image/news1.png'
import facebookIcon from '../../static/image/fb-icon.png';
import instagramIcon from '../../static/image/ig-icon.png';
import lineIcon from '../../static/image/line.png';
import twitterIcon from '../../static/image/twitter.png';
import news2 from '../../static/image/more_news2.png';
import news3 from '../../static/image/more_news3.png';

const ModalNews1 = ({ setNewsModal, setBodyStyle }) => {
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
                <span>最新活動</span>
                <img src={cancel} alt="最新活動模態框(取消圖示)" onClick={handleButtonClick} />
            </header>
            <div className="ModalBox">
                <div className="ModalImageBox">
                    <img src={news1} alt="參與台北寵物論壇，爭取貓咪友善環境" className='NewsPhoto' />
                    <div className="ModalImageContentBox">
                        <span className='ShareText'>參與台北寵物論壇，爭取貓咪友善環境</span>
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
                        <span>參與台北寵物論壇，爭取貓咪友善環境</span>
                        <time>2023/12/26</time>
                    </div>
                    <div className='CardContent'>
                        炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。
                    </div>
                    <div className='MoreBox'>
                        <span className='MoreBoxTitle'>更多活動</span>
                        <div className="MoreInfo">
                            <div className="ImageContainer">
                                <img src={news2} alt="掃街模式開啟！帶著你的貓耳，來和我一起走！" />
                                <p>掃街模式開啟！帶著你的貓耳，來和我一起走！</p>
                            </div>
                            <div className="ImageContainer">
                                <img src={news3} alt="收容所模特兒大比拼！" />
                                <p>收容所模特兒大比拼！</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalNews1