import React from 'react'
import logoIcon from '../../static/image/logo.png';
import facebookIcon from '../../static/image/fb-icon.png';
import instagramIcon from '../../static/image/ig-icon.png';
import youtubeIcon from '../../static/image/youtube-icon.png';

const HeaderBox = ({ scrollToAnchor }) => {
    return (
        <section className="headerContainer">
            <nav>
                <div className="ImageContainer">
                    <img src={logoIcon} alt="logo" />
                    <div className="TitleText">
                        喵立翰 Miao Li-Han
                    </div>
                </div>
                <ul>
                    <li>
                        <a href="#advocate" onClick={() => { scrollToAnchor("advocate") }}>候選人主張</a>
                    </li>
                    <li>
                        <a href="#news" onClick={() => { scrollToAnchor("news") }}>最新活動</a>
                    </li>
                    <li>
                        <a href="#policy" onClick={() => { scrollToAnchor("policy") }}>政策議題</a>
                    </li>
                    <li>
                        <a href="#other" onClick={() => { scrollToAnchor("other") }}>小額捐款</a>
                    </li>
                    <li>
                        <a href="#other" onClick={() => { scrollToAnchor("other") }}>民眾服務信箱</a>
                    </li>
                </ul>
                <div className="SocialSoftware">
                    <img src={facebookIcon} alt="facebookIcon" />
                    <img src={instagramIcon} alt="instagramIcon" />
                    <img src={youtubeIcon} alt="youtubeIcon" />
                </div>
            </nav>
        </section>
    )
}

export default HeaderBox;