import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
const options = {
  plugins: {
    tooltip: {
      mode: 'index',
      intersect: false,
      callbacks: {
        labelColor: (context) => ({
          borderColor: 'white',
          backgroundColor: 'white',
        }),
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: 'white',
      },
      grid: {
        color: '#36342f',
      },
      scaleLabel: {
        display: true,
        labelString: 'Year',
        color: 'white',
      },
    },
    y: {
      ticks: {
        color: 'white',
      },
      grid: {
        color: '#36342f',
      },
      scaleLabel: {
        display: true,
        labelString: 'Value',
        color: 'white',
      },
    },
  },
};
const data = {
  labels: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
  datasets: [
    {
      label: 'Line Data',
      type: 'line',
      data: [10, 20, 15, 25, 22, 30, 28],
      borderColor: '#724091',
      backgroundColor: 'transparent',
    },
    {
      label: 'Bar Data',
      type: 'bar',
      data: [5, 12, 10, 18, 15, 20, 16],
      backgroundColor: '#406391',
      borderColor: 'transparent',
    },
  ],
};
function ProgressBar({ width, text }) {
  return (
    <div className="pt-5 space-y-5">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium ">{width}%</span>
        <span className="text-sm font-medium ">{text} item</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-3.5 rounded-full"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
function TopOwnersItem({ id, wallet, owned, ownedPercantage }) {
  return (
    <div className="flex justify-between items-center overflow-clip">
      <div className="flex items-center space-x-5 w-2/5 text-clip">
        <p>{id}</p>
        <p>YUSUF</p>
        <img
          className="rounded-full w-10 h-10"
          alt="clc"
          src="https://mintsquare.sfo3.cdn.digitaloceanspaces.com/mintsquare/collections/starkguardian.jpeg"
        ></img>
      </div>

      <p className="w-1/5 text-clip">{wallet}</p>
      <p className="w-1/5">{owned}</p>
      <p className="w-1/5">%{ownedPercantage}</p>
    </div>
  );
}
let topOwnersData = [];

for (let index = 0; index < 25; index++) {
  const min = 1;
  const max = 10;
  const number = Math.floor(Math.random() * (max - min + 1)) + min;
  topOwnersData.push({
    wallet: '0xabcd',
    owned: number,
    ownedPercantage: Math.floor((number * 100) / 326),
  });
}
export function Analytics() {
  return (
    <div
      className="appearance-none  h-screen overflow-y-auto
    justify-center justify-items-center 
     justify-self-center pb-25 mx-5"
    >
      <div className="flex gap-5 pb-5">
        <div className="w-1/2 border border-gray-500 rounded-xl">
          <p className="font-extrabold font-mono p-5">Volume and Price</p>
          <Bar className="py-5 px-2" options={options} data={data} />
        </div>{' '}
        <div className="w-1/2 border border-gray-500 rounded-xl">
          <p className="font-extrabold font-mono p-5">Floor Price</p>
          <Bar className="py-5 px-2" options={options} data={data} />
        </div>
      </div>
      <div className="flex gap-5 pt-5 ">
        <div className="w-1/2 p-5 border border-gray-500 rounded-xl">
          <p className="font-extrabold font-mono">Owner Distribution</p>
          <p className="font-mono">326 item</p>
          <ProgressBar width={79} text={'1'} />
          <ProgressBar width={16} text={'2-3'} />
          <ProgressBar width={4} text={'4-10'} />
          <ProgressBar width={0.6} text={'11-25'} />
          <ProgressBar width={0.1} text={'26-50'} />
        </div>
        <div className=" w-1/2 p-5 border border-gray-500 rounded-xl">
          <p className="font-extrabold font-mono">Owners</p>
          <p className="font-mono pb-5">Top 10</p>
          <div className="flex justify-between pb-5 font-extrabold font-mono">
            <p className="w-2/5">NAME</p>
            <p className="w-1/5">WALLET</p>
            <p className="w-1/5">OWNED</p>
            <p className="w-1/5">% OWNED</p>
          </div>
          <div className="space-y-6 overflow-y-auto h-96">
            {topOwnersData
              .sort((a, b) => a.owned < b.owned)
              .map((item, index) => (
                <TopOwnersItem
                  key={index}
                  id={index + 1}
                  wallet={item.wallet}
                  owned={item.owned}
                  ownedPercantage={item.ownedPercantage}
                ></TopOwnersItem>
              ))}
          </div>
        </div>
      </div>
      <div className="pb-72"></div>
    </div>
  );
}
