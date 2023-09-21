import React, {useState} from 'react';
import Header from "../../components/header/Header";
import Button from "../../components/Button/Button";
import './ResonatedElementPage.scss';
import {Air, Earth, Fire, Water} from "../../assets/images/iconPack";
import {useHistory} from "react-router-dom";
import {ColorYouLike} from "../../utils/constants";
type ElementType = 'Earth' | 'Water' | 'Fire' | 'Air' | '';
const ResonatedElementPage = () => {
  const history = useHistory();
  const [element, setElement] = useState<ElementType>('');

  const click = (value: ElementType) => {
    setElement(value);
    history.push(ColorYouLike);
  }

  return (
    <>
     <Header />
     <div className={'container resonated-element'}>
       <h4 className={'mini-title'}>
         Which element resonates with you the most?
       </h4>
       <Button
         showArrow={false}
         active={element === 'Earth'}
         title={'Earth'}
         Icon={() => <Earth />}
         onClick={() => click('Earth')}
       />
       <Button
         showArrow={false}
         active={element === 'Water'}
         title={'Water'}
         Icon={() => <Water />}
         onClick={() => click('Water')}
       />
       <Button
         showArrow={false}
         active={element === 'Fire'}
         title={'Fire'}
         Icon={() => <Fire />}
         onClick={() => click('Fire')}
       />
       <Button
         showArrow={false}
         active={element === 'Air'}
         title={'Air'}
         Icon={() => <Air />}
         onClick={() => click('Air')}
       />
     </div>
    </>
  );
};

export default ResonatedElementPage;
