import { useState } from 'react';

export function RadioButton({ label, isChecked, setIsChecked, id }) {
  const handleClick = () => {
    setIsChecked(id);
  };

  const radioStyle =
    'inline-block h-6 w-6 border-2 rounded-full border-gray-300 ' +
    (isChecked == id ? 'bg-green-500 border-green-700' : '');

  return (
    <label
      className="inline-flex items-center cursor-pointer"
      onClick={handleClick}
    >
      <span className={radioStyle}></span>
      <span className="ml-5 font-bold font-mono bg-">{label}</span>
    </label>
  );
}
