import react from 'react'
// import './style.css'
import img1 from '../../assets/left.png'
import TaskCard from './taskCard.js'
import TaskCard1 from './taskCard1.js'
import Startquest from './startQuest.js'
import Menu from './menu.js'
import img from '../../assets/7.png'
import left from '../../assets/left1.png'
import hourglass from '../../assets/Hourglass.png'
import Star from '../../assets/Star1.png'
import StarE from '../../assets/Star2.png'

import icon4 from '../../assets/icon4.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import img8 from '../../assets/8.png'
import img4 from '../../assets/4.png'
import img5 from '../../assets/5.png'
import img12 from '../../assets/12.png'
// import img11 from '../../assets/11.png'
import { useNavigate } from "react-router-dom";

const Playercard = (props) => {
	const navigate = useNavigate();
	return(
		<div className="w-full flex border-4 border-black rounded-2xl shadow-card_shadow bg-gradient-to-b from-orange-600 to-orange-300">
			<div className="w-4/12 bg-cover bg-center rounded-l-xl relative overflow-y-hidden">	
				<img src={left} className='h-full' width='100%' />

				<div className="w-11/12 absolute top-0 bg-red rounded-2xl py-3 px-5 flex-col">
					<div className='text-white text-2xl font-bold '>Goblin Attack On The South Village</div>
					<img src={props.src} className='my-6 w-8.5/12 ml-5' />
					<div className="star_collection mt-5 my-5 flex ml-11">
						<img onClick={() => navigate('/quest_sucess')} src={Star} className='w-6' />
						<img onClick={() => navigate('/quest_greatesucess')} src={Star} className='w-6 ml-3' />
						<img onClick={() => navigate('/quest_failure')} src={Star} className='w-6 ml-3' />
						<img onClick={() => navigate('/quest_inprogress')} src={Star} className='w-6 ml-3' />
						<img src={Star} className='w-6 ml-3' />
					</div>
					<div className='font-mono w-5/6 text-white ml-4 text-sm'>
						Goblins are attacking the South Village! We need to do something! I hope there is enough space here to explain exactly what you need to do! First off, you should- DANGIT!
					</div>

					<div className='flex my-5 grid grid-cols-3 w-4/5'>
						<div className="text-white mx-1 border my-1 rounded-2xl px-1 border-white bg-gray-800 flex justify-center text-sm">#All</div>
						<div className="text-white mx-1 border my-1 rounded-2xl px-1 border-white bg-gray-800 flex justify-center text-sm ">#Combat</div>
						<div className="text-white mx-1 border my-1 rounded-2xl px-1 border-white bg-gray-800 flex justify-center text-sm">#Morning</div>
						<div className="text-white mx-1 border my-1 rounded-2xl px-1 border-white bg-gray-800 flex justify-center text-sm">#Goblin</div>
					</div>

				</div>

			</div>
			<div className="bg-red flex flex-col items-center w-8/12 overflow-y-auto">
				<div className="bg-green h-2/4 flex justify-between w-full px-5">
					<Menu img={img12} stickerImg={icon3} color="bg-red-800" getwin="5" menu_title="Goblin" />
					<Menu img={img12} stickerImg={icon3} color="bg-red-800" getwin="10" menu_title="Hobgoblin" />
					<Menu img={img12} stickerImg={icon2} color="bg-lime-500" getwin="15" menu_title="Hobgoblin" />
				</div>
				<div className='flex justify-between w-full px-8 items-center h-full'>
					<div className='flex grid grid-cols-3 gap-4 items-center basis-7/12'>
						<TaskCard img={icon4} setvisible={props.setvisible} visible1={props.visible1}  />
						<TaskCard img={icon4} setvisible={props.setvisible} visible1={props.visible1} />
						<TaskCard img={icon4} setvisible={props.setvisible} visible1={props.visible1} />
						<TaskCard1 img={img5} Fox={props.Fox} setFox={props.setFox} name="Mystic" visibility={true} />
						<TaskCard1 img={img4} Fox={props.Fox} setFox={props.setFox} name="Commoner" visibility={true} />
						<TaskCard1 img={img4} Fox={props.Fox} setFox={props.setFox} name="Commoner" visibility={true} /> 
					</div>
					<div className="w-60"><Startquest Reward={props.Reward} setReward={props.setReward} /></div>
				</div>
			</div>
		</div>
	);
}

export default Playercard;