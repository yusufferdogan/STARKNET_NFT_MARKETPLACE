import { collectionData } from './data';

const sortAscFloorPrice = (setCollectionData) => {
  const sortedData = [...collectionData].sort(
    (a, b) => a.floorPrice - b.floorPrice
  );
  setCollectionData(sortedData);
};
const sortDescFloorPrice = (setCollectionData) => {
  const sortedData = [...collectionData].sort(
    (a, b) => b.floorPrice - a.floorPrice
  );
  setCollectionData(sortedData);
};
const sortAscOneDayChange = (setCollectionData) => {
  const sortedData = [...collectionData].sort(
    (a, b) => a.oneDayChange - b.oneDayChange
  );
  setCollectionData(sortedData);
};
const sortDescOneDayChange = (setCollectionData) => {
  const sortedData = [...collectionData].sort(
    (a, b) => b.oneDayChange - a.oneDayChange
  );
  setCollectionData(sortedData);
};
const sortAscSevenDayChange = (setCollectionData) => {
  const sortedData = [...collectionData].sort(
    (a, b) => a.sevenDayChange - b.sevenDayChange
  );
  setCollectionData(sortedData);
};
const sortDescSevenDayChange = (setCollectionData) => {
  const sortedData = [...collectionData].sort(
    (a, b) => b.sevenDayChange - a.sevenDayChange
  );
  setCollectionData(sortedData);
};
const sortAscOneDayVolume = (setCollectionData) => {
  const sortedData = [...collectionData].sort(
    (a, b) => a.oneDayVolume - b.oneDayVolume
  );
  setCollectionData(sortedData);
};
const sortDescOneDayVolume = (setCollectionData) => {
  const sortedData = [...collectionData].sort(
    (a, b) => b.oneDayVolume - a.oneDayVolume
  );
  setCollectionData(sortedData);
};
const sortAscSevenDayVolume = (setCollectionData) => {
  const sortedData = [...collectionData].sort(
    (a, b) => a.sevenDayVolume - b.sevenDayVolume
  );
  setCollectionData(sortedData);
};
const sortDescSevenDayVolume = (setCollectionData) => {
  const sortedData = [...collectionData].sort(
    (a, b) => b.sevenDayVolume - a.sevenDayVolume
  );
  setCollectionData(sortedData);
};
const sortAscOwners = (setCollectionData) => {
  const sortedData = [...collectionData].sort((a, b) => a.owners - b.owners);
  setCollectionData(sortedData);
};
const sortDescOwners = (setCollectionData) => {
  const sortedData = [...collectionData].sort((a, b) => b.owners - a.owners);
  setCollectionData(sortedData);
};
const sortAscSupply = (setCollectionData) => {
  const sortedData = [...collectionData].sort((a, b) => a.supply - b.supply);
  setCollectionData(sortedData);
};
const sortDescSupply = (setCollectionData) => {
  const sortedData = [...collectionData].sort((a, b) => b.supply - a.supply);
  setCollectionData(sortedData);
};
const sortAscMaxSupply = (setCollectionData) => {
  const sortedData = [...collectionData].sort(
    (a, b) => a.maxSupply - b.maxSupply
  );
  setCollectionData(sortedData);
};
const sortDescMaxSupply = (setCollectionData) => {
  const sortedData = [...collectionData].sort(
    (a, b) => b.maxSupply - a.maxSupply
  );
  setCollectionData(sortedData);
};
export function sorter(clickedId, isDescending, setIsDescending, setShownData) {
  switch (clickedId) {
    case 0:
      setIsDescending(!isDescending);
      if (isDescending) {
        sortDescFloorPrice(setShownData);
      } else {
        sortAscFloorPrice(setShownData);
      }
      break;
    case 1:
      setIsDescending(!isDescending);
      if (isDescending) {
        sortDescOneDayChange(setShownData);
      } else {
        sortAscOneDayChange(setShownData);
      }
      break;
    case 2:
      setIsDescending(!isDescending);
      if (isDescending) {
        sortDescSevenDayChange(setShownData);
      } else {
        sortAscSevenDayChange(setShownData);
      }
      break;
    case 3:
      setIsDescending(!isDescending);
      if (isDescending) {
        sortDescOneDayVolume(setShownData);
      } else {
        sortAscOneDayVolume(setShownData);
      }
      break;
    case 4:
      setIsDescending(!isDescending);
      if (isDescending) {
        sortDescSevenDayVolume(setShownData);
      } else {
        sortAscSevenDayVolume(setShownData);
      }
      break;
    case 5:
      setIsDescending(!isDescending);
      if (isDescending) {
        sortDescOwners(setShownData);
      } else {
        sortAscOwners(setShownData);
      }
      break;
    case 6:
      setIsDescending(!isDescending);
      if (isDescending) {
        sortDescSupply(setShownData);
      } else {
        sortAscSupply(setShownData);
      }
      break;
    case 7:
      setIsDescending(!isDescending);
      if (isDescending) {
        sortDescMaxSupply(setShownData);
      } else {
        sortAscMaxSupply(setShownData);
      }
      break;
    default:
      setIsDescending(false);
  }
}
