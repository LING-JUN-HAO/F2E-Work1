import React from 'react'
import MiaoLiHan from '../../static/image/MiaoLiHan.png';
import facebookIcon from '../../static/image/fb-icon.png';
import instagramIcon from '../../static/image/ig-icon.png';
import youtubeIcon from '../../static/image/youtube-icon.png';

const Banner = () => {
    return (
        <section className="BannerContainer">
            <div className="BannerBox">
                <h3 className="BannerTitleText" data-aos="fade-up" data-aos-delay="0" data-aos-duration="900">
                    台灣的明天  喵先鋪路
                </h3>
                <div className="BannerInfo">
                    <div className="ElectionText" data-aos="fade-up" data-aos-delay="450" data-aos-duration="900">
                        <h4>2024 立委參選人</h4>
                    </div>
                    <div className="NameBox" data-aos="fade-up" data-aos-delay="900" data-aos-duration="900">
                        <div className="Number">
                            3
                        </div>
                        <h4>喵立翰 Miao Li-Han</h4>
                    </div>
                </div>
            </div>
            <img className='BannerImg' src={MiaoLiHan} alt="MiaoLiHan" data-aos="fade-up" data-aos-delay="1500" data-aos-duration="900" />
            <div className="SocialSoftware" data-aos="fade-up" data-aos-delay="1500" data-aos-duration="900">
                <img src={facebookIcon} alt="facebookIcon" />
                <img src={instagramIcon} alt="instagramIcon" />
                <img src={youtubeIcon} alt="youtubeIcon" />
            </div>
        </section>
    )
}

export default Banner