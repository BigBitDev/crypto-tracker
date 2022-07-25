import axios from "axios";
import { useEffect, useState } from "react";
import CoinsDataTable from "./components/CoinsDataTable";
const App = () => {
  const [datacoins, setDatacoins] = useState([]);
  const [search,setSearch] = useState("");

  const getInfo = async () => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    console.log(response);
    setDatacoins(response.data);
  };

  useEffect(() => {
    getInfo();
  }, []);


  return (
    <main>
      <form className="container">
        <input type="search" id="searchinput" placeholder="buscar moneda" onChange={e=> setSearch(e.target.value)}/>
        <button type="submit">Buscar</button>
      </form>
      <div className="container-fluid">
        <CoinsDataTable datacoins={datacoins} search={search}/>
      </div>
    </main>
  );
};

export default App;
