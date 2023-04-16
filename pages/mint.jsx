import React from 'react';
import { CustomHead } from '../components/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ethers } from 'ethers';
import {
  useAccount,
  useBalance,
  usePrepareContractWrite,
  useContractWrite,
  useContractRead,
  useSigner,
} from 'wagmi';
import { NFT_ABI, NFT_CONTRACT_ADDRESS } from '../constants/nft';
const MintBody = () => {
  function Mint({ value }) {
    const { data: signer } = useSigner();
    const { address: user } = useAccount();

    const { config } = usePrepareContractWrite({
      address: NFT_CONTRACT_ADDRESS,
      abi: NFT_ABI,
      functionName: 'mint',
      signer: signer,
      args: [user],
      onSuccess(data) {
        console.log('Success', data);
      },
      onError(error) {
        console.log('Error', error);
      },
      overrides: {
        value: ethers.utils.parseEther('0.001'),
      },
    });
    const { data, isLoading, isSuccess, write } = useContractWrite(config);

    return (
      <>
        <button
          disabled={!write}
          onClick={() => write?.()}
          className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
        >
          Mint
        </button>
      </>
    );
  }
  return (
    <section className=" text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            GET YOUR APE
            <span className="sm:block"> MINT NOW </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
            BAYC is a collection of 10,000 Bored Ape NFTs—unique digital
            collectibles living on the Ethereum blockchain
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Mint></Mint>
            <a
              className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="/about"
            >
              Join Whitelist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
const MintPage = () => {
  return (
    <>
      <CustomHead></CustomHead>
      <Header></Header>
      <MintBody></MintBody>
      <Footer></Footer>
    </>
  );
};

export default MintPage;
