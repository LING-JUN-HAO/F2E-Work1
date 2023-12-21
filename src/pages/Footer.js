import React from 'react'
import facebookIcon from '../../static/image/fb-icon.png';
import instagramIcon from '../../static/image/ig-icon.png';
import youtubeIcon from '../../static/image/youtube-icon.png';

const Footer = () => {
    return (
        <footer>
            <div className="FooterContainer">
                <div className="SocialMediaInfo">
                    <div className="NameBox">
                        <div className="Number">
                            3
                        </div>
                        <span>喵立翰 Miao Li-Han</span>
                    </div>
                    <div className="SocialMediaBtn">
                        <div className="SocialMediaItem">
                            <img src={facebookIcon} alt="facebookIcon" />
                        </div>
                        <div className="SocialMediaItem">
                            <img src={instagramIcon} alt="instagramIcon" />
                        </div>
                        <div className="SocialMediaItem">
                            <img src={youtubeIcon} alt="youtubeIcon" />
                        </div>
                    </div>
                    <p className='CopyRight'>© 2023 喵立翰 Miao Li-Han 版權所有</p>
                </div>
                <div className="ContactInfo">
                    <h4>競選總部</h4>
                    <h5>
                        辦公室地址：喵星區，毛茸茸大道88號，喵喵大樓3樓
                        <br />
                        電話：(02) 888-5678
                        <br />
                        電子郵件地址：meowoffice@linmeow.tw
                    </h5>
                </div>
            </div>
        </footer>
    )
}

export default Footer