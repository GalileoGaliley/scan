import React from 'react';
import './Header.scss';
// @ts-ignore
import image from 'src/assets/logo.svg'
import GoBack from "../goBack/GoBack";
const Header = () => {
  return (
    <div className={'header'}>
      <GoBack />
      <img className={'image'} src={image}/>
    </div>
  );
};

export default Header;
