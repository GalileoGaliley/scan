import React from 'react';

import './WelcomePage.scss';
import {Hand} from "../../assets/images/iconPack";
import Button from "../../components/Button/Button";
import Header from "../../components/header/Header";
import {useHistory} from "react-router-dom";
import {Gender} from "../../utils/constants";

const WelcomePage = () => {
  const history = useHistory();
  const click = () => {
    history.push(Gender);
  }
  return (
    <>
      <Header />
      <div className={'container'}>
        <Hand />
        <h1 className={'title'}>
          Find your happiness with highly-personalized predictions.
        </h1>
        <Button title={'Let’s Begin'} onClick={click} />
      </div>
    </>
  );
};

export default WelcomePage;
