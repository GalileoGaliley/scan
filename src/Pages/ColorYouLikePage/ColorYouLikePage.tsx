import React, {useState} from 'react';
import Header from "../../components/header/Header";
import './ColorYouLikePage.scss';
import Button from "../../components/Button/Button";
import {useHistory} from "react-router-dom";
import {Decisions} from "../../utils/constants";

const ColorYouLikePage = () => {
  const history = useHistory();
  const colorList = [
    {
      title: 'Red',
    },
    {
      title: 'Yellow',
    },
    {
      title: 'Blue',
    },
    {
      title: 'Orange',
    },
    {
      title: 'Green',
    },
    {
      title: 'Violet',
    },
  ];
  const [state, setState] = useState('');

  const change = (value: string) => {
    setState(value);
    history.push(Decisions);
  }
  return (
    <>
     <Header />
     <div className={'container color-you-like'}>
       <h3 className={'mini-title'}>
         Which color do you like the most?
       </h3>
       {colorList.map(({title}) => {
         return (
           <Button
             Icon={() => (<div className={`button-icon button-icon_${title.toLowerCase()}`}></div>)}
             title={title}
             showArrow={false}
             active={state === title}
             onClick={() => change(title)}
           />
         )
       })}
     </div>
    </>
  );
};

export default ColorYouLikePage;
