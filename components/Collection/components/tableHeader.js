import classnames from 'classnames';

export function TableHeader({ text }) {
  return (
    <div className="w-1/6  flex items-center justify-start text-gray-300 font-bold">
      {text}
    </div>
  );
}
