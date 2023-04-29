import { collectionData } from './data';

const sortByFloorAsc = (setCollectionData) => {
  const sortedData = [...collectionData].sort(
    (a, b) => a.floorPrice - b.floorPrice
  );
  setCollectionData(sortedData);
};
const sortByFloorDesc = (setCollectionData) => {
  const sortedData = [...collectionData].sort(
    (a, b) => b.floorPrice - a.floorPrice
  );
  setCollectionData(sortedData);
};
const sortBy1DAsc = (setCollectionData) => {
  const sortedData = [...collectionData].sort(
    (a, b) => a.oneDayChange - b.oneDayChange
  );
  setCollectionData(sortedData);
};
const sortBy1Desc = (setCollectionData) => {
  const sortedData = [...collectionData].sort(
    (a, b) => b.oneDayChange - a.oneDayChange
  );
  setCollectionData(sortedData);
};
const sortBy7DAsc = (setCollectionData) => {
  const sortedData = [...collectionData].sort(
    (a, b) => a.sevenDayChange - b.sevenDayChange
  );
  setCollectionData(sortedData);
};
const sortBy7Desc = (setCollectionData) => {
  const sortedData = [...collectionData].sort(
    (a, b) => b.sevenDayChange - a.sevenDayChange
  );
  setCollectionData(sortedData);
};
const sortBy1DVolumeAsc = (setCollectionData) => {
  const sortedData = [...collectionData].sort(
    (a, b) => a.oneDayVolume - b.oneDayVolume
  );
  setCollectionData(sortedData);
};
const sortBy1DVolumeDesc = (setCollectionData) => {
  const sortedData = [...collectionData].sort(
    (a, b) => b.oneDayVolume - a.oneDayVolume
  );
  setCollectionData(sortedData);
};
const sortBy7DVolumeAsc = (setCollectionData) => {
  const sortedData = [...collectionData].sort(
    (a, b) => a.sevenDayVolume - b.sevenDayVolume
  );
  setCollectionData(sortedData);
};
const sortBy7DVolumeDesc = (setCollectionData) => {
  const sortedData = [...collectionData].sort(
    (a, b) => b.sevenDayVolume - a.sevenDayVolume
  );
  setCollectionData(sortedData);
};
const sortByOwnersAsc = (setCollectionData) => {
  const sortedData = [...collectionData].sort((a, b) => a.owners - b.owners);
  setCollectionData(sortedData);
};
const sortByOwnersDesc = (setCollectionData) => {
  const sortedData = [...collectionData].sort((a, b) => b.owners - a.owners);
  setCollectionData(sortedData);
};
const sortBySupplyAsc = (setCollectionData) => {
  const sortedData = [...collectionData].sort((a, b) => a.supply - b.supply);
  setCollectionData(sortedData);
};
const sortBySupplyDesc = (setCollectionData) => {
  const sortedData = [...collectionData].sort((a, b) => b.supply - a.supply);
  setCollectionData(sortedData);
};
const sortByMaxSupplyAsc = (setCollectionData) => {
  const sortedData = [...collectionData].sort(
    (a, b) => a.maxSupply - b.maxSupply
  );
  setCollectionData(sortedData);
};
const sortByMaxSupplyDesc = (setCollectionData) => {
  const sortedData = [...collectionData].sort(
    (a, b) => b.maxSupply - a.maxSupply
  );
  setCollectionData(sortedData);
};
export function sorter(clickedId, isDescending, setIsDescending, setShownData) {
  switch (clickedId) {
    case 0:
      if (!isDescending) {
        setIsDescending(!isDescending);
        sortByFloorAsc(setShownData);
      } else {
        setIsDescending(!isDescending);
        sortByFloorDesc(setShownData);
      }
      break;
    case 1:
      setIsDescending(!isDescending);
      sortBy1DAsc(setShownData);
      if (isDescending) {
        setIsDescending(!isDescending);
        sortBy1Desc(setShownData);
      }
      break;
    case 2:
      setIsDescending(!isDescending);
      sortBy7DAsc(setShownData);
      if (isDescending) {
        setIsDescending(!isDescending);
        sortBy7Desc(setShownData);
      }
      break;
    case 3:
      setIsDescending(!isDescending);
      sortBy1DVolumeAsc(setShownData);
      if (isDescending) {
        setIsDescending(!isDescending);
        sortBy1DVolumeDesc(setShownData);
      }
      break;
    case 4:
      setIsDescending(!isDescending);
      sortBy7DVolumeAsc(setShownData);
      if (isDescending) {
        setIsDescending(!isDescending);
        sortBy7DVolumeDesc(setShownData);
      }
      break;
    case 5:
      setIsDescending(!isDescending);
      sortBy7DVolumeAsc(setShownData);
      if (isDescending) {
        setIsDescending(!isDescending);
        sortBy7DVolumeAsc(setShownData);
      }
      break;
    case 6:
      setIsDescending(!isDescending);
      sortByOwnersAsc(setShownData);
      if (isDescending) {
        setIsDescending(!isDescending);
        sortByOwnersDesc(setShownData);
      }
      break;
    case 7:
      setIsDescending(!isDescending);
      sortBySupplyAsc(setShownData);
      if (isDescending) {
        setIsDescending(!isDescending);
        sortBySupplyDesc(setShownData);
      }
      break;
    case 8:
      setIsDescending(!isDescending);
      sortByMaxSupplyAsc(setShownData);
      if (isDescending) {
        setIsDescending(!isDescending);
        sortByMaxSupplyDesc(setShownData);
      }
      break;
    default:
      setIsDescending(false);
  }
}
