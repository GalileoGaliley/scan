import React, {useState} from 'react';
import Header from "../../components/header/Header";
import Button from "../../components/Button/Button";
import {useHistory} from "react-router-dom";

import './WishPage.scss';
import {RelationshipStatus} from "../../utils/constants";

const WishPage = () => {
  const LR = 'Love & Relationship';
  const HV = 'Health & Vitality';
  const CD = 'Career & Destiny';

  const history = useHistory();

  const [selected, setSelected] = useState<string>(HV);

  const changeValue = (value: string) => {
    setSelected(value);
    history.push(RelationshipStatus);
  }

  return (
    <>
      <Header />
      <div className={'container wish'}>
        <div className={'mini-title'} >
          What aspects of your life do you wish to gain insight into through palmistry?
        </div>
        <Button title={LR} active={selected === LR} onClick={() => changeValue(LR)} />
        <Button title={HV} active={selected === HV} onClick={() => changeValue(HV)} />
        <Button title={CD} active={selected === CD} onClick={() => changeValue(CD)} />
      </div>
    </>
  );
};

export default WishPage;
