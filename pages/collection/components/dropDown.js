import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { useState } from 'react';
export function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  return (
    <div className="w-96">
      <button
        type="button"
        className="w-80"
        id="options-menu"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded="true"
      >
        <div className="flex justify-between">
          <p>Options</p>
          <div className="flex gap-2 items-center">
            <p> 16</p>
            <BsChevronDown size={22} />
          </div>
        </div>
      </button>
      {isOpen && (
        <div
          className="m-5 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {options.map((option, index) => (
            <div key={index} className="p-1" role="none">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-white"
                role="menuitem"
              >
                {option}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
