const CoinTableRow = ({ coin }) => {
  return (
    <>
      <tr>
        <td>
          <img
            src={coin.image}
            alt={coin.name}
            style={{ width: "3%" }}
          />
          <span>{coin.name}</span>
        </td>
        <td>{coin.current_price}</td>
        <td
          className={
            coin.price_change_percentage_24h > 0 ? "text-green" : "text-red"
          }
        >
          {coin.price_change_percentage_24h}
        </td>
      </tr>
    </>
  );
};

export default CoinTableRow;
