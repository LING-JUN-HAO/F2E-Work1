import React from 'react'
import cancel from '../../static/image/cancel.png'
import news1 from '../../static/image/news1.png'
import facebookIcon from '../../static/image/fb-icon.png';
import instagramIcon from '../../static/image/ig-icon.png';
import lineIcon from '../../static/image/line.png';
import twitterIcon from '../../static/image/twitter.png';
import news2 from '../../static/image/more_news2.png';
import news3 from '../../static/image/more_news3.png';

const ModalNews3 = ({ setNewsModal, setBodyStyle }) => {
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
                    <img src={news3} alt="收容所模特兒大比拼！" className='NewsPhoto' />
                    <div className="ModalImageContentBox">
                        <span>收容所模特兒大比拼！</span>
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
                        <span>收容所模特兒大比拼！</span>
                        <time>2023/12/20</time>
                    </div>
                    <div className='CardContent'>
                        今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！
                    </div>
                    <div className='MoreBox'>
                        <span className='MoreBoxTitle'>更多活動</span>
                        <div className="MoreInfo">
                            <div className="ImageContainer">
                                <img src={news1} alt="爭取貓咪友善環境" />
                                <p>參與台北寵物論壇，爭取貓咪友善環境</p>
                            </div>
                            <div className="ImageContainer">
                                <img src={news2} alt="掃街模式開啟！帶著你的貓耳，來和我一起走！" />
                                <p>掃街模式開啟！帶著你的貓耳，來和我一起走！</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalNews3