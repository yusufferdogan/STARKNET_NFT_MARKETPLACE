import { MdOutlineSell } from 'react-icons/md';
import EthereumLogo from '../../../components/Trending/ethereum';
import { useState } from 'react';
import React from 'react';
const list = [
  {
    action: 1,
    id: 0,
    price: 0.20217773222043617,
    priceAsDollar: 97,
    from: 'Jane',
    to: 'Olivia',
    date: '5/5/2023',
    hour: '00:26',
  },
  {
    action: 2,
    id: 1,
    price: 0.47440371030691664,
    priceAsDollar: 228,
    from: 'Jane',
    to: 'Bob',
    date: '5/8/2023',
    hour: '11:37',
  },
  {
    action: 3,
    id: 2,
    price: 0.4970420673280962,
    priceAsDollar: 239,
    from: 'Alice',
    to: 'Jane',
    date: '5/28/2023',
    hour: '05:27',
  },
  {
    action: 4,
    id: 3,
    price: 0.469114521549368,
    priceAsDollar: 226,
    from: 'Bob',
    to: 'David',
    date: '5/12/2023',
    hour: '10:44',
  },
  {
    action: 5,
    id: 4,
    price: 0.3979055359986134,
    priceAsDollar: 191,
    from: 'Emma',
    to: 'Charlie',
    date: '5/5/2023',
    hour: '15:49',
  },
  {
    action: 1,
    id: 5,
    price: 0.2863010500454354,
    priceAsDollar: 138,
    from: 'Jane',
    to: 'Alice',
    date: '5/1/2023',
    hour: '23:38',
  },
  {
    action: 2,
    id: 6,
    price: 0.47312401195971426,
    priceAsDollar: 228,
    from: 'Charlie',
    to: 'David',
    date: '5/14/2023',
    hour: '18:54',
  },
  {
    action: 3,
    id: 7,
    price: 0.42033031440984275,
    priceAsDollar: 202,
    from: 'Charlie',
    to: 'John',
    date: '5/3/2023',
    hour: '13:45',
  },
  {
    action: 4,
    id: 8,
    price: 0.20775574567154917,
    priceAsDollar: 100,
    from: 'Alice',
    to: 'Charlie',
    date: '5/17/2023',
    hour: '19:59',
  },
  {
    action: 5,
    id: 9,
    price: 0.45467885614119447,
    priceAsDollar: 219,
    from: 'Jane',
    to: 'Charlie',
    date: '5/27/2023',
    hour: '06:45',
  },
];
function Toggle({ action, filterActions, setFilterActions, actionId }) {
  const handleToggle = () => {
    const updatedFilterActions = filterActions.includes(actionId)
      ? filterActions.filter((id) => id !== actionId)
      : [...filterActions, actionId];

    setFilterActions(updatedFilterActions);
  };

  return (
    <label className="relative inline-flex items-center mr-5 cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        defaultChecked={true}
        onClick={handleToggle}
      />
      <div
        className="w-11 h-6 rounded-full peer bg-gray-700 peer-focus:ring-2  peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white
       after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
        border-gray-600 peer-checked:bg-green-600"
      />
      <span className="ml-3 text-sm font-medium">{action}</span>
    </label>
  );
}

export default Toggle;

function TableHeader({ text }) {
  return (
    <div
      className="flex w-1/6 items-center justify-start pr-8
     text-gray-300 font-bold text-start"
    >
      {text}
    </div>
  );
}
const tableHeaders = [
  { text: 'ACTION' },
  { text: 'ITEM' },
  { text: 'PRICE' },
  { text: 'FROM' },
  { text: 'TO' },
  { text: 'DATE' },
];
const actionClassName = 'flex gap-2 items-center';
function ActivityItem({
  action,
  id,
  price,
  priceAsDollar,
  from,
  to,
  date,
  hour,
}) {
  return (
    <div className="w-full">
      <div className="flex flex-grow ">
        <div className="w-1/6">
          {action === 1 ? (
            <div className={actionClassName}>
              <MdOutlineSell />
              <p>SALE</p>
            </div>
          ) : action === 2 ? (
            <div className={actionClassName}>
              <MdOutlineSell />
              <p>LIST</p>
            </div>
          ) : action === 3 ? (
            <div className={actionClassName}>
              <MdOutlineSell />
              <p>OFFER</p>
            </div>
          ) : action === 4 ? (
            <div className={actionClassName}>
              <MdOutlineSell />
              <p>TRANSFER</p>
            </div>
          ) : action === 5 ? (
            <div className={actionClassName}>
              <MdOutlineSell />
              <p>MINT</p>
            </div>
          ) : null}
        </div>
        <div className="w-1/6 flex items-end gap-2">
          <img
            className="w-12 h-12"
            src="https://mintsquare.sfo3.cdn.digitaloceanspaces.com/mintsquare/collections/starkguardian.jpeg"
          ></img>
          <p>ID: {id}</p>
        </div>
        <div className="w-1/6">
          <div className="flex items-center pb-2">
            <p className="justify-end">{price.toFixed(3)}</p>
            <span className="pl-2 flex justify-start">
              <EthereumLogo width={15} height={20}></EthereumLogo>
            </span>
          </div>{' '}
          <p className="text-sm">{priceAsDollar} $</p>
        </div>
        <p className="w-1/6">{from}</p>
        <p className="w-1/6">{to}</p>
        <div className="w-1/6">
          <p className="font-bold">{date}</p>
          <p className="text-sm">{hour}</p>
        </div>
      </div>
      <div className="border border-gray-800 my-5"></div>
    </div>
  );
}

function filterList(filterActions) {
  const newList = list.filter((item) => filterActions.includes(item.action));
  return newList;
}
export function Activity() {
  const [filterActions, setFilterActions] = useState([1, 2, 3, 4, 5]);
  return (
    <div className="mb-52 pb-20 h-screen ">
      <div className="">
        <div className="flex gap-5 mb-5 ">
          <Toggle
            key={1}
            action={'SALE'}
            filterActions={filterActions}
            setFilterActions={setFilterActions}
            actionId={1}
          />
          <Toggle
            key={2}
            action={'LIST'}
            filterActions={filterActions}
            setFilterActions={setFilterActions}
            actionId={2}
          />
          <Toggle
            key={3}
            action={'OFFER'}
            filterActions={filterActions}
            setFilterActions={setFilterActions}
            actionId={3}
          />
          <Toggle
            key={4}
            action={'TRANSFER'}
            filterActions={filterActions}
            setFilterActions={setFilterActions}
            actionId={4}
          />
          <Toggle
            action={'MINT'}
            filterActions={filterActions}
            setFilterActions={setFilterActions}
            actionId={5}
          />
        </div>
        <div className="border border-gray-800 my-5"></div>
      </div>
      <div
        className="appearance-none h-screen overflow-y-auto
    justify-center justify-items-center 
     justify-self-center pb-24 mb-40 mx-5"
      >
        <div className="w-full flex flex-grow items-center text-start">
          {tableHeaders.map((item, index) => {
            return <TableHeader text={item.text} id={index} key={index} />;
          })}
        </div>
        <div className="border border-gray-800 my-5"></div>
        <div className="mb-60">
          {filterList(filterActions).map((item, index) => {
            return (
              <ActivityItem
                key={`${item.id}+${index}`}
                action={item.action}
                id={item.id}
                price={item.price}
                priceAsDollar={item.priceAsDollar}
                from={item.from}
                to={item.to}
                date={item.date}
                hour={item.hour}
              ></ActivityItem>
            );
          })}
        </div>
      </div>
    </div>
  );
}
