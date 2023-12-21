import React from 'react'

const ArticleTitleBox = ({Mark, Title}) => {
    return (
        <div className="ArticleTitleBox" data-aos="fade-up" data-aos-delay="0" data-aos-duration="900">
            <div className="ArticleMark">
                <span>{Mark}</span>
            </div>
            <h3 className="LogoText">{Title}</h3>
        </div>
    )
}

export default ArticleTitleBox