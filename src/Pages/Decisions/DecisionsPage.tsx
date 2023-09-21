import React, {useState} from 'react';
import Header from "../../components/header/Header";
import './DecisionsPage.scss';
import {useHistory} from "react-router-dom";
import Button from "../../components/Button/Button";
import {GuidancePlan} from "../../utils/constants";

type DecisionsType = 'Heart' | 'Head' | 'Both' | '';
const DecisionsPage = () => {
  const history = useHistory();

  const [state, setState] = useState<DecisionsType>('');
  const change = (value: DecisionsType) => {
    setState(value);
    history.push(GuidancePlan)
  }

  return (
    <>
     <Header />
      <div className={'container decisions'}>
        <h3 className={'mini-title'}>
          Do you make decisions with your head or your heart?
        </h3>
        <Button
          active={state === 'Head'}
          title={'Heart'}
          showArrow={false}
          onClick={() => change('Heart')}
        />
        <Button
          active={state === 'Heart'}
          title={'Head'}
          showArrow={false}
          onClick={() => change('Head')}
        />
        <Button
          active={state === 'Both'}
          title={'Both'}
          showArrow={false}
          onClick={() => change('Both')}
        />
      </div>
    </>
  );
};

export default DecisionsPage;
