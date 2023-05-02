import data from '../data/data.json';
export function Card({ id, imageUrl }) {
  return (
    <div
      className="max-w-md rounded-lg overflow-hidden shadow-lg border border-gray-300
       hover:border-gray-900"
      tabIndex="0"
    >
      <a></a>
      <div className="h-72">
        <img
          className="object-cover w-full h-full"
          src={imageUrl}
          alt="Product Image"
        />
      </div>
      <div className="px-6 py-4">
        <div className="flex justify-between">
          <div className="text-base">
            <span className="font-bold text-gray-300">Price </span>{' '}
            <p> 14886$</p>
          </div>
          <div className="text-base">
            <span className="font-bold text-gray-300">Last Sale </span>{' '}
            <p> 14886$</p>
          </div>{' '}
        </div>
        <div className="text-base mt-4">
          <span className="font-bold text-gray-300">ID: #{id} </span>{' '}
        </div>{' '}
      </div>
    </div>
  );
}
export function Grid() {
  return (
    <div className="grid grid-cols-5 gap-4">
      {data.collection.map((resource, index) => {
        return (
          <Card
            key={index}
            imageUrl={resource.image}
            id={resource.tokenId}
          ></Card>
        );
      })}
    </div>
  );
}
