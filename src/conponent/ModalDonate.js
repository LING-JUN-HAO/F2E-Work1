import React from 'react'
import cancel from '../../static/image/cancel.png'
import donate from '../../static/image/donate.png'
import ModalDonateBefore from './ModalDonateBefore';
import ModalCompleted from './ModalDonateAfter';

const ModalDonate = ({ setNewsModal, setBodyStyle, selectedComponent, setComponent }) => {
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
        disPlayComponent = <ModalDonateBefore setComponent={setComponent}></ModalDonateBefore>
    } else if (selectedComponent == "after") {
        disPlayComponent = <ModalCompleted setComponent={setComponent} handleButtonClick={handleButtonClick}></ModalCompleted>
    }
    return (
        <div className="ModalContainer" onClick={handleContainerClick}>
            <header>
                <span>小額捐款</span>
                <img src={cancel} alt="政策議題模態框(取消圖示)" onClick={() => { handleButtonClick() }} />
            </header>
            <div className="ModalBox ModalDonateBox">
                <div className="ModalOtherImageBox">
                    <div className="ModalImageContentBox">
                        <div className="CardTitle">
                            您的小筆捐款<br />是每隻毛孩未來的大大動力！
                        </div>
                        <div className="ModalDonateContent">
                            <p>目前小額贊助總金額</p>
                            <p>987,655,873</p>
                        </div>
                    </div>
                    <div className="ModalDonateImage">
                        <img src={donate} alt="小額捐款" />
                    </div>
                </div>
                {disPlayComponent}
            </div>
        </div>
    )
}

export default ModalDonate