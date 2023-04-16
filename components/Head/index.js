import React from 'react';
import Head from 'next/head';

export function CustomHead(params) {
  return (
    <Head>
      <title>BAYC</title>
      <meta name="description" content="NFT LANDING PAGE" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
