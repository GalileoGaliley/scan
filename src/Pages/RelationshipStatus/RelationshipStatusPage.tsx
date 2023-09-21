import React, {useState} from 'react';
import Header from "../../components/header/Header";
import Button from "../../components/Button/Button";
import './RelationshipStatusPage.scss';
import {useHistory} from "react-router-dom";
import {ResonatedElement} from "../../utils/constants";

type RelationshipStatusType = 'Single' | 'In a relationship' | ''
const RelationshipStatusPage = () => {
  const history = useHistory();
  const [status, setStatus] = useState<RelationshipStatusType>('');

  const change = (value: RelationshipStatusType) => {
    setStatus(value);
    history.push(ResonatedElement);
  }
  return (
    <>
      <Header />
      <div className={'container relationship-status'}>
        <h3 className={'mini-title'}>
          So we can get to know you better, please tell us your relationship status.
        </h3>
        <Button
          title={'Single'}
          onClick={() => change('Single')}
          active={status === 'Single'}
        />
        <Button
          title={'In a relationship'}
          onClick={() => change('In a relationship')}
          active={status === 'In a relationship'}
        />
      </div>
    </>
  );
};

export default RelationshipStatusPage;
