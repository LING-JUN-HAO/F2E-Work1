import React, { useState } from 'react'
import ModalNews1 from './ModalNews1';
import ModalNews2 from './ModalNews2';
import ModalNews3 from './ModalNews3';
import ModalPolicy1 from './ModalPolicy1';
import ModalPolicy2 from './ModalPolicy2';
import ModalPolicy3 from './ModalPolicy3';
import ModalDonate from './ModalDonate';
import ModalServiceMail from './ModalServiceMail';

const ModalBackdrop = ({ modalType, newsModal, setNewsModal, setBodyStyle }) => {
    const [selectedComponent, setComponent] = useState("before");
    const handleButtonClick = () => {
        setNewsModal("none");
        setBodyStyle("auto");
        setComponent("before")
    };
    let displayModal
    if (modalType == "news1") {
        displayModal = <ModalNews1 setNewsModal={setNewsModal} setBodyStyle={setBodyStyle} ></ModalNews1>
    } else if (modalType == "news2") {
        displayModal = <ModalNews2 setNewsModal={setNewsModal} setBodyStyle={setBodyStyle} ></ModalNews2>
    } else if (modalType == "news3") {
        displayModal = <ModalNews3 setNewsModal={setNewsModal} setBodyStyle={setBodyStyle} ></ModalNews3>
    } else if (modalType == "policy1") {
        displayModal = <ModalPolicy1 setNewsModal={setNewsModal} setBodyStyle={setBodyStyle} ></ModalPolicy1>
    } else if (modalType == "policy2") {
        displayModal = <ModalPolicy2 setNewsModal={setNewsModal} setBodyStyle={setBodyStyle} ></ModalPolicy2>
    } else if (modalType == "policy3") {
        displayModal = <ModalPolicy3 setNewsModal={setNewsModal} setBodyStyle={setBodyStyle} ></ModalPolicy3>
    } else if (modalType == "donate") {
        displayModal = <ModalDonate setNewsModal={setNewsModal} setBodyStyle={setBodyStyle} selectedComponent={selectedComponent} setComponent={setComponent}></ModalDonate>
    }else if (modalType == "servicemail"){
        displayModal = <ModalServiceMail setNewsModal={setNewsModal} setBodyStyle={setBodyStyle} selectedComponent={selectedComponent} setComponent={setComponent}></ModalServiceMail>
    }
    return (
        <div className="ModalBackdropBox" style={{ display: newsModal }} onClick={handleButtonClick}>
            {displayModal}
        </div>
    )
}

export default ModalBackdrop