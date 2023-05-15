import { React, useState, useEffect } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';

import { collectionData } from './data';
import classnames from 'classnames';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { sorter } from './sorters';
import EthereumLogo from './ethereum';

function CollectionItem(props) {
  const {
    collection,
    floorPrice,
    oneDayChange,
    sevenDayChange,
    oneDayVolume,
    sevenDayVolume,
    owners,
    supply,
    maxSupply,
    imageUrl,
  } = props;

  return (
    <div className="flex items-center m-6 pt-6 w-max">
      <div className="flex items-center pr-40">
        {/*eslint-disable-next-line @next/next/no-img-element*/}
        <img
          className="w-12 h-12 rounded-full "
          src="https://images.blur.io/_blur-prod/0xed5af388653567af2f388e6224dc7c4b3241c544/4361-29b9f08af6d9c52f?w=128&h=128"
          alt={collection}
        />
        <div className="w-12 px-5 whitespace-nowrap">{collection}</div>
      </div>
      <div className="flex justify-self-stretch flex-row items-start w-screen">
        <div className="w-1/12 px-5 flex items-center">
          <span className="pr-2 flex justify-center">
            <EthereumLogo width={20} height={25}></EthereumLogo>
          </span>
          <p className="justify-end">{floorPrice.toFixed(2)}</p>
        </div>
        <p
          className={`w-1/12 px-5 align-baseline items-center ${
            oneDayChange < 0 ? 'text-red-500' : 'text-green-500'
          }`}
        >
          {oneDayChange + '%'}
        </p>{' '}
        <p
          className={`w-1/12 px-5  ${
            sevenDayChange < 0 ? 'text-red-500' : 'text-green-500'
          }`}
        >
          {sevenDayChange + '%'}
        </p>
        <div className="w-1/12 px-5 flex items-center">
          <span className="pr-2 flex justify-start">
            <EthereumLogo width={20} height={25}></EthereumLogo>
          </span>
          <p className="justify-end">{oneDayVolume.toFixed(2)}</p>
        </div>{' '}
        <div className="w-1/12 px-5 flex items-center">
          <span className="pr-2 flex justify-start">
            <EthereumLogo width={20} height={25}></EthereumLogo>
          </span>
          <p className="justify-end">{sevenDayVolume.toFixed(2)}</p>
        </div>{' '}
        <p className="w-1/12 px-5">{owners}</p>
        <p className="w-1/12 px-5">{supply}</p>
        <p className="w-1/12 px-5">{maxSupply}</p>
      </div>
    </div>
  );
}

const tableHeaders = [
  { text: 'FLOOR PRICE' },
  { text: '1D CHANGE' },
  { text: '7D CHANGE' },
  { text: '1D VOLUME' },
  { text: '7D VOLUME' },
  { text: 'OWNERS' },
  { text: 'SUPPLY' },
  { text: 'MAX SUPPLY' },
];

function TableHeader({
  text,
  id,
  clickedId,
  setClickedId,
  isDescending,
  setIsDescending,
  setShownData,
}) {
  console.log('isDescending:', isDescending);
  const isClicked = clickedId === id;
  //text-[#2f72ed]
  const color = isClicked ? 'text-blue-500' : 'text-orange-500';
  const divClassNames = classnames('font-bold', color);

  const handleButtonClick = () => {
    setClickedId(id);
    setIsDescending(false);
    sorter(id, isDescending, setIsDescending, setShownData);

    console.log('clicked TO:', id);
  };

  return (
    <button
      className="w-1/12 px-5 flex items-center justify-start"
      onClick={handleButtonClick}
    >
      <div className={divClassNames}>{text}</div>
      {isClicked && (isDescending ? <FiChevronDown /> : <FiChevronUp />)}
    </button>
  );
}
const CollectionTable = () => {
  const [clickedId, setClickedId] = useState(null);
  const [isDescending, setIsDescending] = useState(false);
  const [shownData, setShownData] = useState(collectionData);

  return (
    <div className="mt-5 pt-5">
      <div className="flex items-center w-max h-12 m-5">
        <button
          className="pr-36"
          onClick={() => {
            setClickedId(null);
            setShownData(collectionData);
            setIsDescending(false);
          }}
        >
          <div className="font-bold text-orange-500">COLLECTION</div>
        </button>
        <div className="flex items-center flex-row w-screen">
          {tableHeaders.map((item, index) => {
            console.log('i:', index, ':', item.text);
            return (
              <TableHeader
                text={item.text}
                id={index}
                key={index}
                clickedId={clickedId}
                setClickedId={setClickedId}
                setIsDescending={setIsDescending}
                isDescending={isDescending}
                setShownData={setShownData}
              />
            );
          })}
        </div>
      </div>
      <div className="border border-gray-500"></div>

      {shownData.map((item, index) => (
        <CollectionItem
          key={index}
          collection={item.collection}
          floorPrice={item.floorPrice}
          oneDayChange={item.oneDayChange}
          sevenDayChange={item.sevenDayChange}
          oneDayVolume={item.oneDayVolume}
          sevenDayVolume={item.sevenDayVolume}
          owners={item.owners.toLocaleString('tr-TR')}
          supply={item.supply.toLocaleString('tr-TR')}
          maxSupply={item.maxSupply.toLocaleString('tr-TR')}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
};
function Trending() {
  return <CollectionTable></CollectionTable>;
}

export default Trending;
export { CollectionItem };
