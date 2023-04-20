import React from 'react';
import { useState, useEffect } from 'react';
import { useConnectors, useAccount } from '@starknet-react/core';
import Link from 'next/link';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';

function OpenModal({ available, connect, connectors }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  function isWalletAvailable(connector, available) {
    return available.find((obj) => obj.id() === connector) !== undefined;
  }

  function connectToWallet(connector) {
    connect(connector);
    handleCloseModal();
  }

  if (isOpen)
    return (
      <div
        id="popup-modal"
        tabIndex={-1}
        className="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <Modal
          appElement={document.getElementById('body')}
          className="fixed z-50 inset-0 overflow-y-auto"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          isOpen={isOpen}
          onRequestClose={handleCloseModal}
          ariaHideApp={false}
        >
          <div className="flex justify-center items-center flex-col min-h-screen">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-hide="popup-modal"
                onClick={handleCloseModal}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <button className="h-1"></button>

              <div className="p-6 text-center">
                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium 
                rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                  onClick={() => connectToWallet(connectors[0])}
                >
                  {isWalletAvailable('bravoos', available)
                    ? 'Connect to Bravoos'
                    : 'install Bravoos'}
                </button>
                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  onClick={() => connectToWallet(connectors[1])}
                >
                  {isWalletAvailable('argentX', available)
                    ? 'Connect to argentX'
                    : 'install argentX'}
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  else return <Button onClick={handleOpenModal}></Button>;
}
function Button({ key, text, onClick }) {
  return (
    <button
      key="{key}"
      type="button"
      className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      onClick={onClick}
    >
      Connect Wallet
    </button>
  );
}
function ConnectWallet() {
  const { connect, connectors, disconnect, available, refresh } =
    useConnectors();
  const { account, address, status } = useAccount();

  useEffect(() => {
    // refresh all available connectors every 5 seconds
    const interval = setInterval(refresh, 1000);
    return () => clearInterval(interval);
  }, [refresh, connect]);

  if (status === 'connected') {
    return (
      <button
        type="button"
        className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={() => {
          navigator.clipboard.writeText(address);
          toast.success('Address Copied', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
        }}
      >
        {address.substring(0, 4) +
          '..' +
          address.substring(address.length - 4, address.length)}
      </button>
    );
  } else
    return (
      <OpenModal
        available={available}
        connectors={connectors}
        connect={connect}
      ></OpenModal>
    );
}

function Header() {
  return (
    <header aria-label="Site Header">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link href="/">
              <div className="block text-teal-600">
                <span className="sr-only">Home</span>
                <img
                  className="h-20 w-50 object-cover"
                  src="https://ik.imagekit.io/bayc/assets/bayc-logo-z.png"
                ></img>
              </div>
            </Link>
          </div>
          <div className="hidden md:block">
            <nav aria-label="Site Nav">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/#about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/#collection"
                  >
                    Collection
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/#roadmap"
                  >
                    Roadmap
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/#subscribe"
                  >
                    Subscribe
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/mint"
                  >
                    Mint
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/wallet"
                  >
                    Wallet
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <ConnectWallet></ConnectWallet>
            </div>
          </div>
          <div className="block md:hidden">
            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
