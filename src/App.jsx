import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import fc25Image from './assets/fc25_2_3.jpg';
import gowImage from './assets/gowr_2_3.jpg';
import codImage from './assets/codbo6_2_3.jpg';

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <ItemListContainer nombre={"FC 25"} precio={"50 usd"} foto={fc25Image}/>
      <ItemListContainer nombre={"GOD OF WAR RAGNAROK"} precio={"80 usd"} foto={gowImage}/>
      <ItemListContainer nombre={"CALL OF DUTY BLACK OPS 6"} precio={"80 usd"} foto={codImage}/>
    </div>
  )
}

export default App
