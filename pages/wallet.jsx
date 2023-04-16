import React from 'react';
import data from '../constants/data.json';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useContractRead, useAccount, useContractReads } from 'wagmi';
import { NFT_ABI, NFT_CONTRACT_ADDRESS } from '../constants/nft';
const baseUrl =
  'https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/';
function Item({ id, metadataID }) {
  return (
    <div className="relative block group">
      <img
        src={data.collection[metadataID].image}
        alt={metadataID}
        className="h-[350px] w-full object-cover transition duration-500 group-hover:opacity-90 sm:h-[450px]"
      />
      <div className="absolute inset-0 flex flex-col items-start justify-start p-6">
        <h5 className="text-xl font-medium text-black">ID:{id}</h5>
      </div>

      <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
        <a
          href={`${baseUrl}${id}`}
          className="justify-items-center content-center flex px-5 py-3 mt-3 text-xs font-medium tracking-wide text-white uppercase bg-black"
        >
          <span className="place-self-center">Sell on</span>
          <img
            className="h-7 w-7 pl-2"
            src="https://storage.googleapis.com/opensea-static/Logomark/Logomark-Blue.svg"
          ></img>
        </a>
      </div>
    </div>
  );
}
function GetAllItems({ user, balance }) {
  const tokenIds = [];
  for (let i = 0; i < balance.toNumber(); i++) {
    tokenIds.push({
      address: NFT_CONTRACT_ADDRESS,
      abi: NFT_ABI,
      functionName: 'tokenOfOwnerByIndex',
      args: [user, i],
    });
  }
  const { data, isError, isLoading, isFetched } = useContractReads({
    contracts: tokenIds,
    onSuccess(data) {
      console.log('Success', data);
    },
    onError(error) {
      console.log('Error', error);
    },
  });
  return (
    <div className="container flex flex-col items-center py-15 px-5 mx-auto space-y-6 md:p-8">
      <div className="relative">
        <div className="grid grid-rows-3 grid-cols-3 grid-flow-row gap-8">
          {isFetched
            ? data.map((item, index) => {
                console.log('item:', item, '    index:', index);
                return (
                  <Item
                    metadataID={(item.toNumber() + 8853) % 10000}
                    id={item.toNumber()}
                    key={index}
                  ></Item>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}
export default function Wallet() {
  const {
    address,
    isConnecting: userConnecting,
    isReconnecting: userReconnecting,
    isDisconnected: userDisconnected,
  } = useAccount();
  const {
    data: userBalance,
    isError,
    isLoading,
  } = useContractRead({
    address: NFT_CONTRACT_ADDRESS,
    abi: NFT_ABI,
    functionName: 'balanceOf',
    args: [address],
    onSuccess(data) {
      console.log('Success', data);
    },
    onError(error) {
      console.log('Error', error);
    },
  });

  if (!address)
    return (
      <div>
        <Header></Header>
        <div className="h-screen px-4 pt-36 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <h2
            className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl
            sm:leading-none text-transparent bg-clip-text bg-gradient-to-r from-indigo-900
            via-rose-400 to-orange-300"
          >
            Connect Wallet To See Your NFT`s
          </h2>
        </div>
        <Footer></Footer>
      </div>
    );
  else
    return (
      <div>
        <Header></Header>
        <GetAllItems balance={userBalance} user={address}></GetAllItems>
        <Footer></Footer>
      </div>
    );
}
