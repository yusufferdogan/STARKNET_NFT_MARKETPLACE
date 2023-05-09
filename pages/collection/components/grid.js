import data from '../data/data.json';
import { useState, useEffect } from 'react';
import axios from 'axios';

export function Card({ id, imageUrl }) {
  return (
    <div
      className="max-w-md rounded-lg overflow-hidden shadow-lg border border-gray-300
       hover:border-gray-900"
      tabIndex="0"
    >
      <a></a>
      <div className="xl:h-72 lg:h-64">
        {/*eslint-disable-next-line @next/next/no-img-element*/}
        <img
          className="object-cover w-full h-full"
          src={imageUrl}
          alt="Product Image"
        />
      </div>
      <div className="px-6 py-4">
        <div className="flex justify-between">
          <div className="text-base">
            <span className="font-bold text-gray-300">Price </span>{' '}
            <p> 14886$</p>
          </div>
          <div className="text-base">
            <span className="font-bold text-gray-300">Last Sale </span>{' '}
            <p> 14886$</p>
          </div>{' '}
        </div>
        <div className="text-base mt-4">
          <span className="font-bold text-gray-300">ID: #{id} </span>{' '}
        </div>{' '}
      </div>
      <div className="border border-gray-500"></div>
    </div>
  );
}
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export function Grid() {
  const { data, error } = useSWR('/api/resource', (url) =>
    Promise.all([...Array(15)].map((_, i) => fetcher(`${url}?id=${i}`)))
  );

  if (data) {
    console.log(data.length);
    const arr = [];
    for (let index = 0; index < 15; index++) {
      arr.push(data[index].attributes[0].value);
    }
    const counts = arr.reduce((acc, val) => {
      acc[val] = acc[val] ? acc[val] + 1 : 1;
      return acc;
    }, {});

    const mySet = new Set(arr);

    console.log(counts);
  }

  if (error) return <div>Error fetching data</div>;
  if (!data) return <div>Loading...</div>;

  const cards = data.map((resource, i) => (
    <Card key={i} imageUrl={resource.image} id={i} />
  ));

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 2xl:grid-cols-5 gap-4">
      {cards}
      <div className="h-52"></div>
    </div>
  );
}
