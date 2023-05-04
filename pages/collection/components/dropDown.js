import { BsChevronDown, BsChevronUp, BsCheckLg } from 'react-icons/bs';
import { useState } from 'react';
export function Dropdown({ name, options }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="py-2">
      <button
        type="button"
        className="max-w-xs md:max-w-none hidden lg:block 2xl:w-80 xl:w-72 lg:w-40 md:w-32"
        id="options-menu"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded="true"
      >
        <div className="flex justify-between">
          <p>{name}</p>
          <div className="flex gap-2 items-center">
            <p>{options.length}</p>
            {isOpen ? <BsChevronUp size={22} /> : <BsChevronDown size={22} />}
          </div>
        </div>
      </button>
      {isOpen && (
        <div
          className="pt-2"
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
              <div className="flex items-center gap-5">
                <CheckBox></CheckBox>
                <p> {option.value}</p>
              </div>
              <p>{option.count}</p>
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
