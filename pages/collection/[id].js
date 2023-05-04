import { useRouter } from 'next/router';
import { CollectionItem } from './components/collectionItem';
import { Dropdown } from './components/dropDown';
import { Grid } from './components/grid';

import Header from '../../components/Header';
import { useState } from 'react';

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
  const [selectedTraits, setSelectedTraits] = useState([]);

  return (
    <div className="">
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
      <div className="flex justify-center justify-items-center justify-self-center">
        <div className="w-1/5 hidden md:block">
          <div className="mx-5 my-5 w-80">
            <Dropdown
              name="Background"
              count={8}
              options={[
                { value: 'turquois_octopus', count: 9 },
                { value: 'meadow_octopus', count: 13 },
                { value: 'purple_batwing', count: 20 },
                { value: 'turquois_triangle', count: 13 },
                { value: 'meadow_pegacircle', count: 20 },
                { value: 'cyan_pegacircle', count: 16 },
                { value: 'burgundy_octopus', count: 19 },
                { value: 'navy_cirsquare', count: 24 },
                { value: 'brown_hexatriangle', count: 18 },
                { value: 'mustard_hexatrigon', count: 18 },
                { value: 'lead team', count: 5 },
                { value: 'purple_cirsquare', count: 14 },
                { value: 'purple_circle', count: 15 },
                { value: 'purple_solar', count: 16 },
                { value: 'navy_solar', count: 18 },
                { value: 'yellow_trigon', count: 11 },
                { value: 'yellow_pegacircle', count: 14 },
                { value: 'pink_solar', count: 13 },
                { value: 'green_batwing', count: 17 },
                { value: 'turquois_circle', count: 12 },
                { value: 'navy_circle', count: 7 },
                { value: 'burgundy_pegacircle', count: 12 },
                { value: 'team leader', count: 4 },
                { value: 'mintsquare', count: 1 },
                { value: 'early starkers', count: 1 },
                { value: 'dolven labs', count: 1 },
                { value: 'alpha drops', count: 1 },
              ]}
            ></Dropdown>
            <Dropdown name="Clothes" count={43} options={[]}></Dropdown>
            <Dropdown name="Earring" count={6} options={[]}></Dropdown>
            <Dropdown name="Eyes" count={23} options={[]}></Dropdown>
            <Dropdown name="Fur" count={19} options={[]}></Dropdown>
            <Dropdown name="Hat" count={36} options={[]}></Dropdown>
            <Dropdown name="Mouth" count={33} options={[]}></Dropdown>
          </div>
        </div>

        <div className="appearance-none border border-gray-500 border-l h-100 hidden lg:block"></div>
        <div className="w-4/5 h-max mx-5 my-3 justify-center justify-items-center justify-self-center">
          <Grid></Grid>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Collection;
