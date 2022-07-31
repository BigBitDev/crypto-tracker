import Cardstyles from "../Cardstyles.module.css";

const Cardcoin = ({ coin }) => {
  return (
    <>
      <div className={Cardstyles.cardBody}>
        <img src={coin.image} alt={coin.name} className={Cardstyles.cardLogo} />
        <ul className={Cardstyles.coinInfo}>
          <li>{coin.name} <small>{coin.symbol}</small></li>
         
          <li>current: {coin.current_price}</li>
          <li
            className={
              coin.price_change_percentage_24h > 0 ? "textGreen" : "textRed"
            }
          >
         {coin.price_change_percentage_24h}
          </li>
          
          <li>Total :{coin.total_volume}</li>
          <li>{coin.ath}</li>
        </ul>
      </div>
    </>
  );
};

export default Cardcoin;
