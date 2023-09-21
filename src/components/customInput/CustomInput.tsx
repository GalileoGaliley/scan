import React from 'react';
import './CustomInput.scss';

interface OwnProps {
  value: string;
  setValue: (data: string) => void;
  title: string;
  placeholder: string;
}

const CustomInput = ({value, setValue, title, placeholder}: OwnProps) => {
  return (
    <div className={'custom-input'}>
      <h3 className={'custom-input__title'}>
        {title}
      </h3>
      <input
        placeholder={placeholder}
        className={'custom-input__input'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default CustomInput;
