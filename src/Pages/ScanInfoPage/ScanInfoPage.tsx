import React from 'react';
import Header from "../../components/header/Header";

// @ts-ignore
import image from 'src/assets/images/handHint.svg';
import './ScanInfoPage.scss';
import Button from "../../components/Button/Button";
import {useHistory} from "react-router-dom";
import NoCollected from "../../components/noCollected/NoCollected";
import {Upload} from "../../utils/constants";

const ScanInfoPage = () => {
  const history = useHistory();
  const click = () => {
    history.push(Upload);
  }
  return (
    <>
      <Header />
      <div className={'container scan-info'}>
        <img src={image} />
        <h4 className={'mini-title'}>
          Let’s scan your palms
        </h4>
        <h4 className={'desc'}>
          Follow the on-screen instructions, so we can analyze your palm lines and reveal your future, and the secrets of your destiny!
        </h4>
        <Button title={"Let's do it"} showArrow={false} onClick={click} />
        <NoCollected />
      </div>
    </>
  );
};

export default ScanInfoPage;
