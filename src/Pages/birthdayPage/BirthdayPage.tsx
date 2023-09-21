import React, {useState} from 'react';
import Header from "../../components/header/Header";
import CustomInput from "../../components/customInput/CustomInput";
import './BirthdayPage.scss';
import Button from "../../components/Button/Button";
import {useHistory} from "react-router-dom";
import {PalmsHold} from "../../utils/constants";

const BirthdayPage = () => {
  const history = useHistory();

  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const changeYear = (value: string) => {
    const parseIntedValue = parseInt(value);
    if (parseIntedValue < new Date().getFullYear())
      setYear(`${parseIntedValue}`);
    if (value === '')
      setYear('');
  }

  const changeMonth = (value: string) => {
    const parseIntedValue = parseInt(value);
    if (parseIntedValue <= 12)
      setMonth(`${parseIntedValue}`);
    if (value === '')
      setMonth('');
  }

  const changeDay = (value: string) => {
    const parseIntedValue = parseInt(value);
    if (parseIntedValue <= 31)
      setDay(`${parseIntedValue}`);
    if (value === '')
      setDay('');
  }

  const click = () => {
    history.push(PalmsHold);
  }

  return (
    <>
     <Header />
     <div className={'container'}>
       <h3 className={'mini-title'}>
         What’s your date of birth?
       </h3>
       <h4 className={'desc'}>
         Your birth date reveals your core personality traits, needs and desires.
       </h4>
       <div className={'birthday__input-container'}>
         <CustomInput placeholder={'YYYY'} value={year} setValue={changeYear} title={'Year'} />
         <CustomInput placeholder={'MM'} value={month} setValue={changeMonth} title={'Month'} />
         <CustomInput placeholder={'DD'} value={day} setValue={changeDay} title={'Day'} />
       </div>
       <Button title={'Next'} onClick={click} showArrow={false} disabled={!year || !month || !day} />
     </div>
    </>
  );
};

export default BirthdayPage;
