import React, {useState} from 'react';
import Header from "../../components/header/Header";
import Button from "../../components/Button/Button";
import {useHistory} from "react-router-dom";
import {Birthday} from "../../utils/constants";
import './GenderPage.scss';

const GenderPage = () => {
  const [gender, setGender] = useState('male');
  const history = useHistory();
  const click = (data: 'male' | 'female') => {
    setGender(data);
    history.push(Birthday);
    console.log(gender);
  }
  return (
    <>
      <Header />
      <div className={'container gender'}>
        <h3 className={'mini-title'}>
          What’s your gender?
        </h3>
        <h4 className={'desc'}>
          In Palmistry, everyone is a blend of masculine and feminine, so it helps to know yours.
        </h4>
        <Button
          title={'Male'}
          active={gender === 'male'}
          onClick={() => click('male')}
          showArrow={false}
        />
        <Button
          title={'Female'}
          active={gender === 'female'}
          onClick={() => click('female')}
          showArrow={false}
        />
      </div>
    </>
  );
};

export default GenderPage;
