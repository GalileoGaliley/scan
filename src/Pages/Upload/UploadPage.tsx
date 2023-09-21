import React, {useState} from 'react';

import './UploadPage.scss';

// @ts-ignore
import image from 'src/assets/images/instruction.png'
import Button from "../../components/Button/Button";
import NoCollected from "../../components/noCollected/NoCollected";
import Modal from "../../components/modal/Modal";
const UploadPage = () => {
  const [showModal, setShowModal] = useState(false);
  const click = () => {
    setShowModal(true);
  }
  return (
    <>
      <div className={'container upload'}>
        <h3 className={'mini-title'}>
          Take your palm picture as instructed
        </h3>
        <img className={'upload__image'} src={image}/>
        <Button title={'Take a picture now'} showArrow={false} onClick={click} />
        <NoCollected />
        <Modal show={showModal} setShow={setShowModal} />
      </div>
    </>
  );
};

export default UploadPage;
