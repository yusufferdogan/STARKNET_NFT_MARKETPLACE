import EthereumLogo from '../../../components/Trending/ethereum';
import { TableHeader } from './tableHeader';
const tableHeaders = [
  { text: 'FLOOR PRICE' },
  { text: 'LAST SALE' },
  { text: 'TOP OFFER' },
  { text: '1D CHANGE' },
  { text: '7D CHANGE' },
  { text: '1D VOLUME' },
  { text: '7D VOLUME' },
  { text: 'OWNERS' },
  { text: 'SUPPLY' },
  { text: 'MAX SUPPLY' },
  { text: 'LISTED' },
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
  const itemClass = 'w-1/6 flex items-center justify-start';
  return (
    <div className="mt-5">
      <div className="flex py-1">
        <button className="w-1/5">
          <div className="flex items-center">
            {/*eslint-disable-next-line @next/next/no-img-element*/}
            <img
              className="w-16 h-16"
              src="https://mintsquare.sfo3.cdn.digitaloceanspaces.com/mintsquare/collections/starkguardian.jpeg"
              alt={collection}
            />
            <div className="w-12 px-5 text-lg whitespace-nowrap">
              {collection}
            </div>
          </div>
        </button>
        <div className="w-4/5">
          <div className="flex flex-grow">
            {tableHeaders.map((item, index) => {
              return <TableHeader text={item.text} id={index} key={index} />;
            })}
          </div>
          <div className="flex flex-grow py-5 font-mono font-semibold">
            <div className={itemClass}>
              <span className="pr-2 flex justify-start">
                <EthereumLogo width={20} height={25}></EthereumLogo>
              </span>
              <p className="justify-end">{floorPrice.toFixed(2)}</p>
            </div>{' '}
            <div className={itemClass}>
              <span className="pr-2 flex justify-start">
                <EthereumLogo width={20} height={25}></EthereumLogo>
              </span>
              <p className="justify-end">{floorPrice.toFixed(2)}</p>
            </div>{' '}
            <div className={itemClass}>
              <span className="pr-2 flex justify-start">
                <EthereumLogo width={20} height={25}></EthereumLogo>
              </span>
              <p className="justify-end">{floorPrice.toFixed(2)}</p>
            </div>
            <div className={itemClass}>
              <span className="pr-2 flex justify-start">
                <EthereumLogo width={20} height={25}></EthereumLogo>
              </span>
              <p
                className={`${
                  oneDayChange < 0 ? 'text-red-500' : 'text-green-500'
                }`}
              >
                {oneDayChange}
              </p>{' '}
            </div>
            <div className={itemClass}>
              <span className="pr-2 flex justify-start">
                <EthereumLogo width={20} height={25}></EthereumLogo>
              </span>
              <p
                className={`${
                  oneDayChange < 0 ? 'text-red-500' : 'text-green-500'
                }`}
              >
                {sevenDayChange}
              </p>{' '}
            </div>
            <div className={itemClass}>
              <span className="pr-2 flex justify-start">
                <EthereumLogo width={20} height={25}></EthereumLogo>
              </span>
              <p>{oneDayVolume}</p>{' '}
            </div>
            <div className={itemClass}>
              <span className="pr-2 flex justify-start">
                <EthereumLogo width={20} height={25}></EthereumLogo>
              </span>
              <p>{sevenDayVolume}</p>
            </div>
            <div className={itemClass}>{owners}</div>
            <div className={itemClass}>{supply}</div>
            <div className={itemClass}>{maxSupply}</div>{' '}
            <div className={itemClass}>{`24 (%7)`}</div>{' '}
          </div>
        </div>
      </div>

      <div className="border border-gray-500"></div>
    </div>
  );
}
