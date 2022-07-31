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
    const handleSubmit = e => e.preventDefault();
  useEffect(() => {
    const newUpdateResponse = setInterval(() => {
     getInfo();
    }, 1000);
    return () => clearInterval(newUpdateResponse);
  }, []);


  return (
    <>
    <main>
      <form className="form-container">
        <input type="search" id="searchinput" placeholder="buscar moneda" required onChange={e=> setSearch(e.target.value)} className="input"/>
        <button type="submit" className="btn-grad " onClick={handleSubmit}>Buscar</button>
      </form>
      <div>
        <CoinsDataTable datacoins={datacoins} search={search}/>
      </div>
    </main>
    <footer className="footer">
        <a>&copy; copywrite 2022 </a>
        <a href="https://github.com/BigBitDev/">github</a>
        <a href="https://twitter.com/bigbitdev/">twitter</a>
      </footer>
    </>
  );
};

export default App;
