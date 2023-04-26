import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.css';
import { collectionData } from './data';
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

  const words = collection.split(' ');

  return (
    <div className="flex items-center m-6 pt-6 w-max">
      <div className="flex items-center pr-40">
        <img
          className="w-12 h-12 rounded-full"
          src="https://images.blur.io/_blur-prod/0xed5af388653567af2f388e6224dc7c4b3241c544/4361-29b9f08af6d9c52f?w=128&h=128"
          //   alt={collection}
        />
        <div className="w-12 px-5">
          {words.map((word, index) => (
            <span key={index}>{word} </span>
          ))}
        </div>
      </div>
      <div className="flex justify-self-stretch flex-row w-screen">
        {/* <p className="w-1/12 px-5"></p> */}
        <p className="w-1/12 px-5 self-end">{floorPrice}</p>
        <p className="w-1/12 px-5 self-end">{oneDayChange}</p>
        <p className="w-1/12 px-5 text-left">{sevenDayChange}</p>
        <p className="w-1/12 px-5 text-left">{oneDayVolume}</p>
        <p className="w-1/12 px-5">{sevenDayVolume}</p>
        <p className="w-1/12 px-5">{owners}</p>
        <p className="w-1/12 px-5">{supply}</p>
        <p className="w-1/12 px-5">{maxSupply}</p>
      </div>
    </div>
  );
}
function TableHeader({ text }) {
  return <div className="w-1/12 px-5 font-bold text-emerald-700">{text}</div>;
}

const CollectionTable = () => {
  return (
    <div className="mt-5 pt-5">
      <div className="flex items-center w-max h-12 m-5">
        <div className="pr-40 font-bold text-emerald-700">COLLECTION</div>
        <div className="flex items-center flex-row w-screen">
          <TableHeader text="FLOOR PRICE" />
          <TableHeader text="1D CHANGE" />
          <TableHeader text="7D CHANGE" />
          <TableHeader text="1D VOLUME" />
          <TableHeader text="7D VOLUME" />
          <TableHeader text="OWNERS" />
          <TableHeader text="SUPPLY" />
          <TableHeader text="MAX SUPPLY" />
        </div>
      </div>
      <div class="border border-gray-500"></div>

      {collectionData.map((item, index) => (
        <CollectionItem
          key={index}
          collection={item.collection}
          floorPrice={item.floorPrice}
          oneDayChange={item.oneDayChange}
          sevenDayChange={item.sevenDayChange}
          oneDayVolume={item.oneDayVolume}
          sevenDayVolume={item.sevenDayVolume}
          owners={item.owners}
          supply={item.supply}
          maxSupply={item.maxSupply}
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
