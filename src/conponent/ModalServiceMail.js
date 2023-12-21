import React from 'react'
import cancel from '../../static/image/cancel.png'
import modalservicemail from '../../static/image/modalservicemail.png'
import ModalServiceMailBefore from './ModalServiceMailBefore';
import ModalCompleted from './ModalDonateAfter';

const ModalServiceMail = ({ setNewsModal, setBodyStyle, selectedComponent, setComponent }) => {
    const handleContainerClick = (event) => {
        event.stopPropagation();
    }
    const handleButtonClick = () => {
        setNewsModal("none");
        setBodyStyle("auto");
        setComponent("before")
    };

    let disPlayComponent
    if (selectedComponent == "before") {
        disPlayComponent = <ModalServiceMailBefore setComponent={setComponent}></ModalServiceMailBefore>
    } else if (selectedComponent == "after") {
        disPlayComponent = <ModalCompleted setComponent={setComponent} handleButtonClick={handleButtonClick}></ModalCompleted>
    }
    return (
        <div className="ModalContainer" onClick={handleContainerClick}>
            <header>
                <span>民眾服務信箱</span>
                <img src={cancel} alt="民眾服務信箱模態框(取消圖示)" onClick={() => { handleButtonClick() }} />
            </header>
            <div className="ModalBox ModalServiceMailBox">
                <div className="ModalOtherImageBox">
                    <div className="ModalImageContentBox">
                        分享你的想法<br />一同為我們的未來打造更美好！
                    </div>
                    <div className="ModalDonateImage">
                        <img src={modalservicemail} alt="民眾信箱" />
                    </div>
                </div>
                {disPlayComponent}
            </div>
        </div>
    )
}

export default ModalServiceMail