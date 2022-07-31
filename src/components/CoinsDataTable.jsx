import Cardcoin from "./Cardcoin";

const CoinsDataTable = ({ datacoins, search }) => {
  const filteredcoins = datacoins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  const arrangedArr = (arr) => arr.slice(0, 12);
  return (
    <div className="tableDim">
      {arrangedArr(
        filteredcoins.map((coin, index) => (
          <Cardcoin coin={coin} key={index} index={index} />
        ))
      )}
    </div>
  );
};

export default CoinsDataTable;
