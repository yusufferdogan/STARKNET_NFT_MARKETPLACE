import { React } from 'react';
import { Text, Button, useInput } from '@nextui-org/react';
import Carousel from '../Carousel';
import Timeline from '../Timeline';
import { Hero } from '../Hero';
import { useConnectors, useAccount } from '@starknet-react/core';
import { ToastContainer, toast } from 'react-toastify';

function GetAddress() {
  const { account, address, status } = useAccount();
  console.log(account);
  if (status === 'disconnected') return <p>Disconnected</p>;
  return <p>Account: {address} &nbsp </p>;
}
export default function Body() {
  return (
    <div>
      <ToastContainer />
      <GetAddress></GetAddress>
      <Hero></Hero>
      <section
        id="about"
        className="my-8 dark:bg-gray-800 dark:text-gray-100 items-center"
      >
        <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-300 dark:text-white md:text-5xl lg:text-6xl">
            About the&nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Collection
            </span>
          </h1>
          <p className="text-lg font-normal text-white lg:text-xl dark:text-gray-400 text-center">
            BAYC is a collection of 10,000 Bored Ape NFTs—unique digital
            collectibles living on the Ethereum blockchain. Your Bored Ape
            doubles as your Yacht Club membership card, and grants access to
            members-only benefits, the first of which is access to THE BATHROOM,
            a collaborative graffiti board. Future areas and perks can be
            unlocked by the community through roadmap activation.
          </p>{' '}
          <div className="flex justify-center space-x-3">
            <button
              type="button"
              className="px-8 py-3 font-semibold rounded-full bg-green-700 text-white"
            >
              BUY AN APE
            </button>
          </div>
        </div>
      </section>
      {/* <section id="collection" className="h-screen">
        <Carousel></Carousel>
      </section>{' '} */}
      <Timeline></Timeline>
    </div>
  );
}
