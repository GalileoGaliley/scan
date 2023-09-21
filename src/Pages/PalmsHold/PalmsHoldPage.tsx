import React from 'react';
import Header from "../../components/header/Header";
import {AstroHand} from "../../assets/images/iconPack";
import Button from "../../components/Button/Button";
import {useHistory} from "react-router-dom";
import {Wish} from "../../utils/constants";

const PalmsHoldPage = () => {
  const history = useHistory();
  const click = () => {
    history.push(Wish);
  }
  return (
    <>
      <Header />
      <div className={'container'}>
        <AstroHand />
        <div className={'desc'}>
          Your palms hold a wealth of information about your fate and personality
        </div>
        <Button title={'Continue'} onClick={click} />
      </div>
    </>
  );
};

export default PalmsHoldPage;
