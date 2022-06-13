// import react from 'react'
import icon4 from '../../assets/icon4.png'
import icon15 from '../../assets/icon15.png'
import icon16 from '../../assets/icon16.png'
import icon17 from '../../assets/icon17.png'
import hourglass from '../../assets/Hourglass.png'
import im1 from '../../assets/1.png'
import im2 from '../../assets/2.png'
import im3 from '../../assets/3.png'
import im4 from '../../assets/4.png'
import im5 from '../../assets/5.png'
import im6 from '../../assets/6.png'
// /expenses 
import { useNavigate } from "react-router-dom";
import Attack from './attack.js'
// import './style.css'

const CardforP = (props) => {
	return(
		<div className="h-full w-full rounded-2xl bg-red overflow-y-auto relative flex items-center justify-center flex-col">
			<div className='flex w-10/12'>
				<div className="bg-green bg-gradient-to-b from-orange-600 to-orange-600 border-2 border-black absolute top-5 z-40 left-[7%] flex justify-center rounded-t-xl h-[10.5%] w-[9%] items-center"><img className="w-[70%]" src={icon15} /></div>
				<div className="bg-[#552e00] border-2 border-black absolute top-5 z-30 left-[15%] flex justify-center rounded-t-xl h-[10.5%] w-[9%] items-center"><img className=" opacity-70 w-[60%]" src={icon16} /></div>
				<div className="bg-[#552e00] border-2 border-black absolute top-5 z-20 left-[23%] flex justify-center rounded-t-xl h-[10.5%] w-[9%] items-center"><img className=" opacity-70 w-[55%]" src={icon17} /></div>
				<div className="bg-[#552e00] border-2 border-black absolute top-5 z-10 left-[31%] flex justify-center rounded-t-xl h-[10.5%] w-[9%] items-center"><img className=" opacity-70 w-[60%]" src={icon15} /></div>
				<div className="bg-[#552e00] border-2 border-black absolute top-5 left-[39%] flex justify-center rounded-t-xl h-[10.5%] w-[9%] items-center"><div className="opacity-70  font-extrabold text-white outlines-title1">All</div></div>
			</div>
			
			<div className="bg-gradient-to-b from-orange-600 mt-[8%] to-orange-300 w-11/12 h-full mb-3  overflow-y-auto rounded-xl z-50">	
				<div className='grid grid-cols-4 p-5 gap-4 w-full h-full'>
						<Attack img={im1} border="border-dashed" color="bg-[#c16326]" data="No Fox" />
						<Attack img={im2} color="bg-[#552e00]" name="Mystic" />
						<Attack img={im3} color="bg-[#552e00]" name="Commoner" />
						<Attack img={im4} color="bg-[#552e00]" name="Mystic" />
						<Attack img={im5} color="bg-[#552e00]" name="Mystic" />
						<Attack img={im6} color="bg-[#552e00]" name="Commoner" />
						<Attack img={im1} color="bg-[#552e00]" name="Commoner" />
						<Attack img={im2} color="bg-[#552e00]" name="Mystic" />
						<Attack img={im3} color="bg-[#552e00]" name="Mystic" />
						<Attack img={im4} color="bg-[#552e00]" name="Commoner" />
						<Attack img={im5} color="bg-[#552e00]" name="Mystic" />
						<Attack img={im6} color="bg-[#552e00]" name="Mystic" />
						<Attack img={im1} color="bg-[#552e00]" name="Mystic" />
						<Attack img={im2} color="bg-[#552e00]" name="Commoner" />
						<Attack img={im3} color="bg-[#552e00]" name="Mystic" />
						<Attack img={im4} color="bg-[#552e00]" name="Mystic" />
				</div>
			</div>
		</div>
	);
}

export default CardforP;