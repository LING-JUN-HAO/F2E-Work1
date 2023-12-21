import React, { forwardRef } from 'react'
import advocate from '../../static/image/advocate.png';
import ArticleTitleBox from '../conponent/ArticleTitleBox';

const Advocate = forwardRef((props, ref) => {
    return (
        <section className="AdvocateContainer" data-aos="fade-up" data-aos-delay="0" data-aos-duration="900"
            ref={ref}>
            <div className="AdvocateBox">
                <ArticleTitleBox Mark="Advocate" Title="候選人主張"></ArticleTitleBox>
                <h4>
                    我堅信 ! 藉由推動更完善的<span className='Mark'>貓咪福利</span>和相關政策，更是間接地投資於<span className='Mark'>台灣的未來</span>。
                </h4>
                <p>
                    畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
                </p>
            </div>
            <div className='AdvocateBoxImgBox'>
                <img src={advocate} alt="Advocate" />
            </div>
        </section>
    )
})

export default Advocate