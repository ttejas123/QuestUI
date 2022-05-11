// import logo from './logo.svg';
import './App.css';
import GameRankCard from './gameRankCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './assets/1.png'
import img2 from './assets/2.png'
import img3 from './assets/3.png'

import img4 from './assets/4.png'
import img5 from './assets/5.png'
import img6 from './assets/6.png'

function App() {
  const dataTosend = [
    {
      name: "Commoner",
      rank: 21,
      src: img1,
      number: 122
    },
    {
      name: "Apprentice",
      rank: 23,
      src: img2,
      number: 211
    },
    {
      name: "Champion",
      rank: 22,
      src: img3,
      number: 322
    },
    {
      name: "Commoner",
      rank: 21,
      src: img4,
      number: 122
    },
    {
      name: "Apprentice",
      rank: 23,
      src: img5,
      number: 211
    },
    {
      name: "Champion",
      rank: 22,
      src: img6,
      number: 322
    },
    {
      name: "Commoner",
      rank: 21,
      src: img1,
      number: 122
    },
    {
      name: "Apprentice",
      rank: 23,
      src: img2,
      number: 211
    },
    {
      name: "Champion",
      rank: 22,
      src: img3,
      number: 322
    },
    {
      name: "Commoner",
      rank: 21,
      src: img1,
      number: 122
    },
    {
      name: "Apprentice",
      rank: 23,
      src: img2,
      number: 211
    },
    {
      name: "Champion",
      rank: 22,
      src: img3,
      number: 322
    },
    {
      name: "Champion",
      rank: 22,
      src: img3,
      number: 322
    }
  ]
  return (
    <div className="appBG d-flex justify-content-center">
      <div className="gameRankCard d-flex justify-content-center align-item-center"><GameRankCard cards={dataTosend} src={img1} /></div>
    </div>
  );
}

export default App;
