import React from 'react';
import Webcam from 'react-webcam';
import {HandCamera} from "../../assets/images/iconPack";

const CameraComponent = ({setCameraActive, setImage}) => {
  return (
    <>
      <Webcam
        audio={false}
        screenshotFormat="image/jpeg"
        className={'modal__camera-data'}
        onUserMediaError={() => setCameraActive(false)}
      >
        {({getScreenshot}) => (
          <div className={'modal__camera-button'} onClick={async () => {
            const imageSrc = await getScreenshot();
            console.log(imageSrc)
            await setImage({data: imageSrc, name: new Date().getTime()});
            await setCameraActive(false);
          }}>
          </div>
        )}
      </Webcam>
      <HandCamera />
    </>
  );
};

export default CameraComponent;
