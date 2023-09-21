import React from 'react';
import Header from "../../components/header/Header";
import {Guidance} from "../../assets/images/iconPack";
import './GuidancePlanPage.scss';
import Button from "../../components/Button/Button";
import {useHistory} from "react-router-dom";
import {ScanInfo} from "../../utils/constants";
const GuidancePlanPage = () => {
  const history = useHistory();
  return (
    <>
     <Header />
     <div className={'container guidance-plan'}>
       <Guidance />
       <h4 className={'guidance-plan__title'}>
         Based on our data, 30% of Leo Sun people also make decisions with their Heart. But don't worry, we'll consider that while creating your guidance plan.
       </h4>
       <div className={'guidance-plan__button-container'}>
         <Button title={'Back'} showArrow={false} active={false} onClick={() => history.goBack()} />
         <Button title={'Next'} showArrow={false} active={true} onClick={() => history.push(ScanInfo)} />
       </div>
     </div>
    </>
  );
};

export default GuidancePlanPage;
