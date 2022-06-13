import './questBord.css';
import GameRankCard from '../components/QuestBord'
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'

import img4 from '../assets/4.png'
import img5 from '../assets/5.png'
import img6 from '../assets/6.png'

import cross from '../assets/cross.png'
import resetFox from '../assets/resetfox5.png'

function App() {
  return (
    <div className="appBG flex justify-center items-center flex-col py-5 h-screen">
      <div className="outline-title absolute top-3 z-10 text-white text-5xl font-bold">Quest Board</div>
      <div className="w-11/12 h-full bg-neutral-900 rounded-2xl relative flex justify-center px-5 my-5">
        <img src={cross} className='absolute w-10 right-2 top-2 hover:opacity-80 cursor-pointer'/>
        <GameRankCard className="pt-5" src={img1} />
        
        <div className="bg-neutral-900 absolute w-full rounded-b-xl h-1/6 bottom-0 flex justify-between items-center px-5">
          <div className='flex items-center justify-center ml-5 pl-4'>
            <h1 className="style-sm-font text-4xl text-white">Time until reset</h1>
            <div className='time-by-hour-to-sec flex justify-center items-center ml-5'>
              <div className='text-white style-sm-font text-2xl bg-neutral-600 px-3 py-2 rounded-lg'>05</div>
              <div className='text-white style-sm-font text-2xl mx-1'>:</div>
              <div className='text-white style-sm-font text-2xl bg-neutral-600 px-3 py-2 rounded-lg'>05</div>
              <div className='text-white style-sm-font text-2xl mx-1'>:</div>
              <div className='text-white style-sm-font text-2xl bg-neutral-600 px-3 py-2 rounded-lg'>05</div>
            </div>
          </div>
          <div className='mr-5 pr-3'>
            <img src={resetFox} className='w-52'/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
