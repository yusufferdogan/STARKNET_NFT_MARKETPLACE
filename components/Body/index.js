import { React } from 'react';
import {
  useAccount,
  useBalance,
  usePrepareContractWrite,
  useContractWrite,
  useContractRead,
  useSigner,
} from 'wagmi';

import { Text, Button, useInput } from '@nextui-org/react';
import {
  STORAGE_CONTRACT_ADDRESS,
  STORAGE_ABI,
} from '../../constants/simpleStorage';
import Carousel from '../Carousel';
import Timeline from '../Timeline';
import { Hero } from '../Hero';
function SetValue({ value }) {
  const { data: signer } = useSigner();

  const { config } = usePrepareContractWrite({
    address: STORAGE_CONTRACT_ADDRESS,
    abi: STORAGE_ABI,
    functionName: 'set',
    signer: signer,
    args: [value],
    onSuccess(data) {
      console.log('Success', data);
    },
    onError(error) {
      console.log('Error', error);
    },
    // overrides: {
    //   value: ethers.utils.parseEther('0.01'),
    // },
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  return (
    <>
      <Button color="warning" disabled={!write} onClick={() => write?.()}>
        Set Value
      </Button>
    </>
  );
}
function GetValue({}) {
  const contractRead = useContractRead({
    address: STORAGE_CONTRACT_ADDRESS,
    abi: STORAGE_ABI,
    functionName: 'get',
    watch: true,
  });
  const data = contractRead.data;
  if (data === undefined) return null;
  return (
    <Text h6 size={15} color="black" css={{ m: 0 }}>
      Value : {data.toString()}
    </Text>
  );
}
function GetBalance({ data, loading, fetched }) {
  if (loading) return <div>Loading</div>;
  else
    return (
      <Text>
        Balance: {data?.formatted} {data?.symbol}
      </Text>
    );
}
function GetAddress({ data, connecting, reconnecting, disconnected }) {
  if (connecting || reconnecting) return <Text>Loading</Text>;
  if (disconnected) return <Text>Disconnected</Text>;
  else return <Text>Address: {data}</Text>;
}
export default function Body() {
  const {
    address,
    isConnecting: userConnecting,
    isReconnecting: userReconnecting,
    isDisconnected: userDisconnected,
  } = useAccount();
  const {
    data: balance,
    isLoading: isBalanceLoading,
    isFetched: isBalanceFetched,
  } = useBalance({
    address: address,
  });
  const {
    value: controlledValue,
    setValue: setControlledValue,
    reset,
    bindings,
  } = useInput('999');

  return (
    <div>
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
      <section id="collection" className="h-screen">
        <Carousel></Carousel>
      </section>{' '}
      <Timeline></Timeline>
    </div>
  );
}
