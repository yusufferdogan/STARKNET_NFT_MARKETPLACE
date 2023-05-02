import { useRouter } from 'next/router';
import { CollectionItem } from './components/collectionItem';
import { Dropdown } from './components/dropDown';
import { Grid } from './components/grid';

import Header from '../../components/Header';

const item = {
  collection: 'BoredApeYachtClub',
  floorPrice: 50.437,
  oneDayChange: 49.87,
  sevenDayChange: 5.96,
  oneDayVolume: 5,
  sevenDayVolume: 2169.2,
  owners: 5618,
  supply: 5652,
  maxSupply: 10000,
};

function Collection() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Header></Header>
      <div className="border border-gray-500"></div>
      <div className="px-5">
        <CollectionItem
          collection={item.collection}
          floorPrice={item.floorPrice}
          oneDayChange={item.oneDayChange}
          sevenDayChange={item.sevenDayChange}
          oneDayVolume={item.oneDayVolume}
          sevenDayVolume={item.sevenDayVolume}
          owners={item.owners.toLocaleString('tr-TR')}
          supply={item.supply.toLocaleString('tr-TR')}
          maxSupply={item.maxSupply.toLocaleString('tr-TR')}
          imageUrl={item.imageUrl}
        />
      </div>
      <div className="flex">
        <div classname="w-1/5 h-max min-w-full">
          <div className="mx-5 my-5 w-80">
            <Dropdown></Dropdown>
          </div>
        </div>

        <div class="border border-black border-l h-100"></div>
        <div className="w-4/5 h-max mx-5 my-3">
          <Grid></Grid>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Collection;
