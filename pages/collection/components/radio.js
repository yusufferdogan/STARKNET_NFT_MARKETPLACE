import { useState } from 'react';

export function RadioButton(props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  const radioStyle =
    'inline-block h-6 w-6 border-2 rounded-full border-gray-300 ' +
    (isChecked ? 'bg-green-500 border-green-700' : '');

  return (
    <label
      className="inline-flex items-center cursor-pointer"
      onClick={handleClick}
    >
      <span className={radioStyle}></span>
      <span className="ml-5 font-bold font-mono bg-">{props.label}</span>
    </label>
  );
}
