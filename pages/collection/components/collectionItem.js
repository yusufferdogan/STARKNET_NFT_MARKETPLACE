import EthereumLogo from '../../../components/Trending/ethereum';
import { TableHeader } from './tableHeader';
const tableHeaders = [
  { text: 'FLOOR PRICE' },
  { text: '1D CHANGE' },
  { text: '7D CHANGE' },
  { text: '1D VOLUME' },
  { text: '7D VOLUME' },
  { text: 'OWNERS' },
  { text: 'SUPPLY' },
  { text: 'MAX SUPPLY' },
];
export function CollectionItem(props) {
  const {
    collection,
    floorPrice,
    oneDayChange,
    sevenDayChange,
    oneDayVolume,
    sevenDayVolume,
    owners,
    supply,
    maxSupply,
    imageUrl,
  } = props;
  return (
    <div className="mt-5 py-5">
      <div className="flex py-5">
        <button className="w-1/4">
          <div className="flex items-center">
            {/*eslint-disable-next-line @next/next/no-img-element*/}
            <img
              className="w-12 h-12 rounded-full "
              src="https://images.blur.io/_blur-prod/0xed5af388653567af2f388e6224dc7c4b3241c544/4361-29b9f08af6d9c52f?w=128&h=128"
              alt={collection}
            />
            <div className="w-12 px-5 text-lg whitespace-nowrap">
              {collection}
            </div>
          </div>
        </button>
        <div className="w-3/4">
          <div className="flex flex-grow">
            {tableHeaders.map((item, index) => {
              console.log('i:', index, ':', item.text);
              return <TableHeader text={item.text} id={index} key={index} />;
            })}
          </div>
          <div className="flex flex-grow py-5 font-mono font-semibold">
            <div className="w-1/6 px-5 flex items-center justify-start">
              <span className="pr-2 flex justify-start">
                <EthereumLogo width={10} height={10}></EthereumLogo>
              </span>
              <p className="justify-end">{floorPrice.toFixed(2)}</p>
            </div>
            <div className="w-1/6 px-5 flex items-center justify-start">
              <span className="pr-2 flex justify-start">
                <EthereumLogo width={10} height={10}></EthereumLogo>
              </span>
              <p
                className={`${
                  oneDayChange < 0 ? 'text-red-500' : 'text-green-500'
                }`}
              >
                {oneDayChange}
              </p>{' '}
            </div>
            <div className="w-1/6 px-5 flex items-center justify-start">
              <span className="pr-2 flex justify-start">
                <EthereumLogo width={10} height={10}></EthereumLogo>
              </span>
              <p
                className={`${
                  oneDayChange < 0 ? 'text-red-500' : 'text-green-500'
                }`}
              >
                {sevenDayChange}
              </p>{' '}
            </div>
            <div className="w-1/6 px-5 flex items-center justify-start">
              <span className="pr-2 flex justify-start">
                <EthereumLogo width={10} height={10}></EthereumLogo>
              </span>
              <p>{oneDayVolume}</p>{' '}
            </div>
            <div className="w-1/6 px-5 flex items-center justify-start">
              <span className="pr-2 flex justify-start">
                <EthereumLogo width={10} height={10}></EthereumLogo>
              </span>
              <p>{sevenDayVolume}</p>
            </div>
            <div className="w-1/6 px-5 flex items-center justify-start">
              {owners}
            </div>
            <div className="w-1/6 px-5 flex items-center justify-start">
              {supply}
            </div>
            <div className="w-1/6 px-5 flex items-center justify-start">
              {maxSupply}
            </div>
          </div>
        </div>
      </div>

      <div className="border border-gray-500"></div>
    </div>
  );
}
