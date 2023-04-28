import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'tailwindcss/tailwind.css';
import Trending from '../Trending';
import BackupTranding from '../Trending/backup';
import { ToastContainer, toast } from 'react-toastify';

const data = [
  {
    text: 'STARK ROCKS',
    imgUrl:
      'https://mintsquare.sfo3.cdn.digitaloceanspaces.com/mintsquare/assets/0x012f8e318fe04a1fe8bffe005ea4bbd19cb77a656b4f42682aab8a0ed20702f0/QmWoEXmUtCq8boRegstQttD323wNh8uuPFpsoRo7MMn347',
  },
  {
    text: 'STARK PUNKS',
    imgUrl:
      'https://mintsquare.sfo3.cdn.digitaloceanspaces.com/mintsquare/assets/0x0727a63f78ee3f1bd18f78009067411ab369c31dece1ae22e16f567906409905/Qma7XExdR6qnJAQhmKxDh3QLgctGFS1UF31yKM2BPHH6HU',
  },
  {
    text: 'STARK GUARDIANS',
    imgUrl:
      'https://mintsquare.sfo3.cdn.digitaloceanspaces.com/mintsquare/assets/0x02d679a171589777bc996fb27767ff9a2e44c7e07967760dea3df31704ab398a/Qma5uXfBdioLq1jhvz8jFENbq63ux2eSxWzGJsHWDk1Svs',
  },
  {
    text: 'Lucky Cookies',
    imgUrl:
      'https://mintsquare.sfo3.cdn.digitaloceanspaces.com/mintsquare/assets/0x062fb2456c6db26154f789c73e7b26930a7cfd63bd025d98d8e293ad61d4bc26/QmatbVHVzyq9ntk1yBqNQDkgeFcrG2bWM3oo7mp9vDbpdr',
  },
];

function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    mobileFirst: true,
    adaptiveHeight: true,
  };

  return (
    <div className="container mx-auto">
      <ToastContainer />
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="relative p-4">
            <img
              src={item.imgUrl}
              alt={item.text}
              className="transform transition-all duration-300 hover:scale-110"
            />
            <p
              className="absolute bottom-5 left-5 px-4 py-2
             text-white text-lg font-extrabold bg-opacity-75 backdrop-blur-lg
             
             "
            >
              {item.text}
            </p>
          </div>
        ))}
      </Slider>
      <Trending></Trending>
      <BackupTranding></BackupTranding>
    </div>
  );
}

function Home() {
  return (
    <div>
      <Carousel></Carousel>
    </div>
  );
}

export default Home;
