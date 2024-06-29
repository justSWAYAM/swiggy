import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="w-6/12 shadow-orange-100 shadow-xl rounded-xl mx-auto my-7 p-4 cursor-pointer">
      {/* {Header} */}
      <div className="flex justify-between" onClick={handleClick}>
        <span className="font-semibold text-lg">{data.title} ({data.itemCards.length})</span>
        <span>🔽</span>
      </div>
      <div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
