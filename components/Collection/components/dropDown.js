import { BsChevronDown, BsChevronUp, BsCheckLg } from 'react-icons/bs';
import { useState } from 'react';
export function Dropdown({ name, options }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="py-2">
      <button
        type="button"
        className="6xl:w-96 5xl:w-80 4xl:w-72 3xl:w-64 2xl:w-60"
        id="options-menu"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded="true"
      >
        <div className="flex w-full justify-between">
          <p className="w-3/6 text-left ">{name}</p>
          <div className="w-2/12 flex items-center space-x-3">
            <p className="w-1/2">{options.length}</p>
            {isOpen ? (
              <BsChevronUp className="w-1/2" color="white" />
            ) : (
              <BsChevronDown size={22} className="w-3/4" />
            )}
          </div>
        </div>
      </button>
      {isOpen && (
        <div
          className="pt-2 2xl:w-72 xl:w-66 lg:w-60"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {options.map((option, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-1"
              role="none"
            >
              <div className="w-3/5 flex items-center space-x-2">
                <CheckBox></CheckBox>
                <p> {option.value}</p>
              </div>
              <p className="w-1/6 text-right">{option.count}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function CheckBox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center mr-4">
      <button
        onClick={handleCheckboxChange}
        id="orange-checkbox"
        type="checkbox"
        className="
        w-6
        h-6
        border-2 border-gray-400
        rounded-sm
      "
      >
        {isChecked && <BsCheckLg className="w-4 h-4 mx-auto" />}
      </button>
    </div>
  );
}
