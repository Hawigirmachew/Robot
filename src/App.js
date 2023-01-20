// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import {ReactProvider} from "./context/RobotContext"
import CardList from './components/CardList';
import Footer from './components/Footer';

// import tachyons from "../"

function App() {
  return (
   <ReactProvider>
   <Header/>
   <SearchBar/>
   <CardList/>
   <Footer/>
   </ReactProvider>
  );
}

export default App;
