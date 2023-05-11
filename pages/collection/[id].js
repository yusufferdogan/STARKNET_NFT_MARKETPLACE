import { useRouter } from 'next/router';
import { Grid } from '../../components/Collection/components/grid';
import { Activity } from '../../components/Collection/components/activity';

import Header from '../../components/Header';

import { useState } from 'react';
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
        <p className={'pl-3 font-bold font-mono '}> Analytics </p>
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

  return (
    <div className="h-screen overflow-y-hidden flex flex-col p-0 m-0">
      <Header></Header>
      <div className="border border-gray-500"></div>
      <div className="flex-1">
        <TopCollectionData />
        <div className="flex justify-center justify-items-center justify-self-center">
          <FilterTraits isChecked={isChecked} setIsChecked={setIsChecked} />
          <div
            className="appearance-none  h-screen overflow-y-auto
            w-4/5 justify-center justify-items-center 
            justify-self-center pb-25 mx-5"
          >
            <ItemsOrGrid isGrid={isGrid} setIsGrid={setIsGrid} />
            <div className="pb-5">
              <div className="border border-gray-500 border-b"></div>
            </div>
            {isGrid === 1 ? (
              <Grid />
            ) : isGrid === 2 ? (
              <Activity />
            ) : isGrid === 3 ? (
              <div>ANALYTICS</div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
