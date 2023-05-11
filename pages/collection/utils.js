import { BiSliderAlt } from 'react-icons/bi';
import { Dropdown } from '../../components/Collection/components/dropDown';
import { RadioButton } from '../../components/Collection/components/radio';
import { MdOutlineSell } from 'react-icons/md';
import { CollectionItem } from '../../components/Collection/components/collectionItem';

const options = [
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
];
export function FilterTraits({ isChecked, setIsChecked }) {
  return (
    <div className="w-1/5 hidden md:block h-screen max-h-screen overflow-y-auto overflow-hidden">
      <div className="flex justify-between ml-10 mt-6 mb-10">
        <div className="flex">
          <MdOutlineSell size={22}></MdOutlineSell>
          <p className="pl-5 font-bold font-mono"> STATUS </p>
        </div>
        <button className="mr-10 font-bold font-sans text-green-500">
          RESET
        </button>
      </div>

      <div className="ml-10 my-6 gap-4 flex-col flex">
        <RadioButton
          label={'BUY NOW'}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          id={1}
        />
        <RadioButton
          label={'SHOW ALL'}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          id={2}
        />
      </div>
      <div className="border border-gray-500 mx-10 mt-10"></div>
      <div className="flex justify-between ml-10 mt-10">
        <div className="flex">
          <BiSliderAlt size={22}></BiSliderAlt>
          <p className="pl-5 font-bold font-mono"> ATTRIBUTES </p>
        </div>
      </div>
      <div className="ml-10 mt-5 mb-40 pb-20 overflow-hidden">
        <Dropdown name="Background" options={options}></Dropdown>
        <Dropdown name="Clothes" options={options}></Dropdown>
        <Dropdown name="Earring" options={options}></Dropdown>
        <Dropdown name="Eyes" options={options}></Dropdown>
        <Dropdown name="Fur" options={options}></Dropdown>
        <Dropdown name="Hat" options={options}></Dropdown>
        <Dropdown name="Mouth" options={options}></Dropdown>
      </div>
    </div>
  );
}
const item = {
  collection: 'StarkGuardians',
  floorPrice: 0.26,
  oneDayChange: -0.03,
  sevenDayChange: -0.07,
  oneDayVolume: 0.12,
  sevenDayVolume: 0.6,
  owners: 221,
  supply: 326,
  maxSupply: 333,
};

export function TopCollectionData() {
  return (
    <div className="px-5 overflow-y-hidden overflow-hidden">
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
  );
}
