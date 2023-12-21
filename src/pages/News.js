import React, { forwardRef } from 'react'
import news1 from '../../static/image/news1.png'
import news2 from '../../static/image/news2.png'
import news3 from '../../static/image/news3.png'
import news4 from '../../static/image/news4.png'
import arrow from '../../static/image/arrow.png'
import ArticleTitleBox from '../conponent/ArticleTitleBox'

const News = forwardRef(({setNewsModal, setBodyStyle, setModalType}, ref) => {
    const handleButtonClick = (Type) => {
        setNewsModal("flex");
        setBodyStyle("hidden");
        setModalType(Type)
      };
    return (
        <section ref={ref}>
            <div className="NewsContainer">
                <ArticleTitleBox Mark="LATEST EVENTS" Title="最新活動"></ArticleTitleBox>
                <div className='NewsBox' data-aos="fade-up" data-aos-delay="450" data-aos-duration="900">
                    <div className="MainNewsBox">
                        <div className="MainCard" onClick={()=>{handleButtonClick("news1")}}>
                            <div className="CardImage">
                                <img src={news1} alt="參與台北寵物論壇，爭取貓咪友善環境" />
                            </div>
                            <div className="CardContent">
                                <time>2023/12/26</time>
                                <h4>參與台北寵物論壇，爭取貓咪友善環境</h4>
                                <p>炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="SubNewsBox" onClick={()=>{handleButtonClick("news2")}}>
                            <div className="CardImage">
                                <img src={news2} alt="掃街模式開啟！帶著你的貓耳，來和我一起走！" />
                            </div>
                            <div className="CardContent">
                                <time>2023/12/24</time>
                                <h4>掃街模式開啟！帶著你的貓耳，來和我一起走！</h4>
                                <p>街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！</p>
                            </div>
                        </div>
                        <div className="SubNewsBox" onClick={()=>{handleButtonClick("news3")}}>
                            <div className="CardImage">
                                <img src={news3} alt="收容所模特兒大比拼！" />
                            </div>
                            <div className="CardContent">
                                <time>2023/12/20</time>
                                <h4>收容所模特兒大比拼！</h4>
                                <p>今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！</p>
                            </div>
                        </div>
                        <div className="SubNewsBox" onClick={()=>{handleButtonClick("news1")}}>
                            <div className="CardImage">
                                <img src={news4} alt="參與台北寵物論壇，爭取貓咪友善環境" />
                            </div>
                            <div className="CardContent">
                                <time>2023/12/26</time>
                                <h4>參與台北寵物論壇，爭取貓咪友善環境</h4>
                                <p>炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！</p>
                            </div>
                        </div>
                        <div className="more">
                            <span>查看更多</span>
                            <img src={arrow} alt="查看更多" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})

export default News