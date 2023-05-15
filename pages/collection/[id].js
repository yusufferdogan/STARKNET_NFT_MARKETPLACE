import { useRouter } from 'next/router';
import { Grid } from '../../components/Collection/components/grid';
import { Activity } from '../../components/Collection/components/activity';
import { Analytics } from '../../components/Collection/components/analytics';

import Header from '../../components/Header';

import { useState, useEffect } from 'react';
import { ImStack } from 'react-icons/im';
import { AiOutlineLineChart } from 'react-icons/ai';
import { FaListUl } from 'react-icons/fa';
import { FilterTraits } from './utils';
import { TopCollectionData } from './utils';

function ItemsOrGrid({ isGrid, setIsGrid }) {
  return (
    <div className="flex h-5 m-5 items-center">
      <button
        className={
          'flex items-start ' +
          (isGrid === 1 ? 'text-yellow-500' : 'text-gray-400 hover:text-white')
        }
        onClick={() => setIsGrid(1)}
      >
        <ImStack size={22} />
        <p className={'pl-3 font-bold font-mono '}>ITEMS</p>
      </button>
      <p className="w-5"></p>
      <button
        onClick={() => setIsGrid(2)}
        className={
          'flex items-start  ' +
          (isGrid === 2 ? 'text-yellow-500' : 'text-gray-400 hover:text-white')
        }
      >
        <FaListUl size={22} />
        <p className={'pl-3 font-bold font-mono '}> ACTIVITY </p>
      </button>{' '}
      <p className="w-5"></p>
      <button
        onClick={() => setIsGrid(3)}
        className={
          'flex items-start ' +
          (isGrid === 3 ? 'text-yellow-500' : 'text-gray-400 hover:text-white')
        }
      >
        <AiOutlineLineChart className={''} size={22} />
        <p className={'pl-3 font-bold font-mono '}> ANALYTICS </p>
      </button>{' '}
    </div>
  );
}
function Collection() {
  const router = useRouter();
  const { id } = router.query;
  const [selectedTraits, setSelectedTraits] = useState([]);
  const [isChecked, setIsChecked] = useState(1);
  const [isGrid, setIsGrid] = useState(1);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="h-screen overflow-y-hidden flex flex-col p-0 m-0">
      <Header></Header>
      <div className="border border-gray-500"></div>
      <div className="flex-1">
        {screenWidth > 1400 ? <TopCollectionData /> : <div></div>}
        <div className="flex justify-center justify-items-center justify-self-center">
          {screenWidth > 1535 ? (
            <FilterTraits isChecked={isChecked} setIsChecked={setIsChecked} />
          ) : (
            <div></div>
          )}
          <div className="3xl:w-4/5 2xl:w-4/5 xl:w-full w-full">
            <ItemsOrGrid isGrid={isGrid} setIsGrid={setIsGrid} />
            <div className="pb-5">
              <div className="border border-gray-500 border-b"></div>
            </div>
            <div>
              {isGrid === 1 ? (
                <div
                  className="appearance-none  h-screen overflow-y-auto
                justify-center justify-items-center 
                 justify-self-center pb-25 mx-5"
                >
                  <Grid />
                </div>
              ) : isGrid === 2 ? (
                <Activity />
              ) : isGrid === 3 ? (
                <Analytics />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
