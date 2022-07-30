import Cardstyles from "../Cardstyles.module.css"

const Cardcoin = ({ coin }) => {
  return (
    <>
      <div className={Cardstyles.cardBody}>
        <img src={coin.image} alt={coin.name} className={Cardstyles.cardLogo} />
        <span>{coin.name}</span>
        <small>{coin.symbol}</small>
        <span>{coin.current_price}</span>
        <span
          className={
            coin.price_change_percentage_24h > 0 ? "textGreen" : "textRed"
          }
        >
          {coin.price_change_percentage_24h}
        </span>
         {coin.price_change_24h}
         {coin.total_volume}
         <div>
          {coin.ath}
         </div>
      </div>
    </>
  );
};

export default Cardcoin;
