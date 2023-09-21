import React from 'react';
import {ArrowLink} from "../../assets/images/iconPack";

import './Button.scss';

interface OwnProps {
  title: string;
  onClick: (e: any) => void;
  disabled?: boolean;
  active?: boolean
  showArrow?: boolean;
  Icon?: () => JSX.Element;
}

const Button = ({title, onClick, disabled = false, active = true, showArrow = true, Icon}: OwnProps) => {
  const click = (e: any) => {
    if (!disabled) {
      onClick(e);
    }
  }

  return (
    <div
      className={`button
        ${disabled ? 'button__disabled' : 'button__enabled'} 
        ${active ? 'button_active' : 'button_inactive'}`}
      onClick={click}>
      {Icon ? (<Icon />) : null}
      <div className={'button__title'}>
        {title}
      </div>
      {showArrow ? (<ArrowLink fill={active ? '#fff' : '#000'} />) : null}
    </div>
  );
};

export default Button;
