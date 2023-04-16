import { React } from 'react';

export function Hero() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <div></div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-lime-600 sm:text-4xl sm:leading-none">
              WELCOME TO THE
              <br className="hidden md:block" />
              BORED APE&nbsp;
              <span className="inline-block text-deep-purple-accent-400">
                YACHT CLUB
              </span>
            </h2>
            <p className="text-base text-white md:text-lg">
              A limited NFT collection where the token itself doubles as your
              membership to a swamp club for apes. The club is open! Ape in with
              us.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="grid grid-cols-2 grid-rows-2 grid-flow-col gap-4">
            <img
              alt="BAYC1"
              src="https://dl.openseauserdata.com/cache/originImage/files/720bb93fb69a1c22463ed9c3adebb3e6.png"
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
            />{' '}
            <img
              alt="BAYC2"
              src="https://dl.openseauserdata.com/cache/originImage/files/36dd076eb15f28de05d50f78792516e7.png"
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
            />{' '}
            <img
              alt="BAYC3"
              src="https://dl.openseauserdata.com/cache/originImage/files/751d783f1e5c16e1a2a5a2c5870edf0b.png"
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
            />{' '}
            <img
              alt="BAYC4"
              src="https://dl.openseauserdata.com/cache/originImage/files/fc3a7f3554b6b124833e337ee6f118e8.png"
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
            />{' '}
          </div>
        </div>
      </div>
    </div>
  );
}
