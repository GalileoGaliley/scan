import React, {useEffect, useRef, useState} from 'react';
import {Camera, Folder} from "../../assets/images/iconPack";
import './Modal.scss';
// @ts-ignore
import errImage from 'src/assets/images/errorImage.png';
import CameraComponent from "../camera/CameraComponent";
import Button from "../Button/Button";
interface OwnProps {
  show: boolean;
  setShow: (value: boolean) => void
}
const Modal = ({show, setShow}: OwnProps) => {
  const [image, setImage] = useState<any>({});
  const [cameraActive, setCameraActive] = useState(false);
  const [error, setError] = useState(false);

  const fileInputRef = useRef(null);
  const hideModal = () => {
    setError(false);
    setImage({});
    setShow(false);
    setCameraActive(false);
  }

  const chooseImage = (data: any) => {
    setImage(data);
    console.log(data);
    setError(true);
  }

  useEffect(() => {
    if (image) {
      console.log(image);
    }
  }, [image]);

  return (
    <div className={`modal ${show ? 'modal__show' : 'modal__hide'}`} onClick={hideModal}>

      {error ? (
        <div className={'modal__error-modal'}>
          <h3 className={'title'}>
            Unfortunately, we couldn’t identify a palm on your photo.
          </h3>
          <img src={errImage} className={'modal__error-image'}/>
          <h3 className={'error-desc'}>
            Please make sure that your palm is clearly visible as per instruction on the image above.
          </h3>
          <Button title={'Try Again'} onClick={(e) => {
            e.stopPropagation();
            setError(false);
          }} />
        </div>
      ) : (
        <div className={'modal__body'}>
          <div className={'modal__item'} onClick={(event) => {
            setCameraActive(true);
            event.stopPropagation();
          }}>
            <div className={'modal__item-title'}>
              Take Photo
            </div>
            <div className={'modal__item-icon'}>
              <Camera />
            </div>
          </div>
          <hr className={'modal__line'} />
          <div className={'modal__item'} onClick={() => {
            // @ts-ignore
            fileInputRef?.current.click();
          }}>
            <div className={'modal__item-title'}>
              Choose file
            </div>
            <div className={'modal__item-icon'}>
              <Folder />
            </div>
          </div>
        </div>

      )}

      {cameraActive ? (
        <div className={'modal__camera-window'}>
          <div className={'modal__camera-data'} onClick={(e) => e.stopPropagation()} >
            {/*@ts-ignore*/}
            <CameraComponent setCameraActive={setCameraActive} setImage={chooseImage}/>
          </div>
        </div>
      ) : null}
      <input ref={fileInputRef} multiple={false} className={'modal__input'} type={'file'} onChange={(e) => {
        chooseImage(e.target?.files)
        const reader = new FileReader();
        reader.onload = function (event) {
          const base64Image = event.target?.result;
          if (base64Image) {
            chooseImage({data: base64Image, name: new Date().getTime()})
          }
        }
        reader.readAsDataURL(image[0]);
      }} />
    </div>
  );
};

export default Modal;
