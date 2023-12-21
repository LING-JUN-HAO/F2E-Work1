import React from 'react'
import navicon1 from '../../static/image/navicon1.png'
import navicon2 from '../../static/image/navicon2.png'
import navicon3 from '../../static/image/navicon3.png'
import navicon4 from '../../static/image/navicon4.png'
import navicon5 from '../../static/image/navicon5.png'


const NavigationBar = ({ scrollToAnchor }) => {
    return (
        <nav className='NavBottomBox'>
            <ul className='NavBottom'>
                <li>
                    <img src={navicon1} alt="候選人主張" />
                    <a href="#advocate" onClick={() => { scrollToAnchor("advocate") }}>候選人主張</a>
                </li>
                <li>
                    <img src={navicon2} alt="最新活動" />
                    <a href="#news" onClick={() => { scrollToAnchor("news") }}>最新活動</a>
                </li>
                <li>
                    <img src={navicon3} alt="政策議題" />
                    <a href="#policy" onClick={() => { scrollToAnchor("policy") }}>政策議題</a>
                </li>
                <li>
                    <img src={navicon4} alt="小額捐款" />
                    <a href="#other" onClick={() => { scrollToAnchor("other") }}>小額捐款</a>
                </li>
                <li>
                    <img src={navicon5} alt="服務信箱" />
                    <a href="#other" onClick={() => { scrollToAnchor("other") }}>服務信箱</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavigationBar