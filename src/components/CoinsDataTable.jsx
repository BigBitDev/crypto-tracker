import { CoinTableRow } from "./IndexComponents";

const titles = ["coin", "percent changed"];

const CoinsDataTable = ({ datacoins, search}) => {
  const filteredcoins = datacoins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
     
      <table>
        <thead>
          <tr>
            {titles.map((title) => (
              <td>{title}</td>
            ))}
          </tr>
        </thead>
        <tbody>
         

          {filteredcoins.map((coin, index) => (
             <CoinTableRow coin={coin} key={index} index={index} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CoinsDataTable;
