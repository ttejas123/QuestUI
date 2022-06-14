// import react from 'react'
import img1 from '../../assets/left.png'
import img from '../../assets/icon12.png'
import hourglass from '../../assets/Hourglass.png'
// /expenses 
import { useNavigate } from "react-router-dom";
import './style.css'

const CardforP = (props) => {
	return(
		<div className="h-full w-full rounded-2xl bg-red overflow-auto relative flex flex-col items-center justify-center">
			<div className="text-white font-extrabold text-2xl px-2  text-center md:text-3xl md:px-0 md:mt-7 mb-3 md:mb-12">{props.title}</div> 
			<div className={`absolute text-xl md:text-3xl font-extrabold drop-shadow-3xl top-[26%] md:top-[25%] ${props.color}`}>{props.legd}</div>
			<div className={`border-4 rounded-xl flex justify-center items-center flex-col p-3 md:p-5 mt-3 mb-1 ${props.border} ${props.bg}`}>
			   {props.para.map((val, index) => {
			   		return (
			   			<p className="p-1 font-semibold" key={index}>{val}</p> 
			   		)
			   })}
			   
 			</div>
 			<img src={props.img} className='w-28' />
 			<div className={`font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-t from-orange-600 to-orange-200 uppercase ${props.legd == "FAILURE" ? "hidden" : ""}`}>{props.last_text}</div>
 			<div className={`bg-gradient-to-b from-orange-600 to-yellow-300 hover:from-pink-500 hover:to-yellow-500 rounded-xl w-40 text-center font-extrabold text-white py-1 mt-1 outlines-title text-3xl ${props.legd == "FAILURE" ? "" : "hidden"}`}><div>OK</div></div>
		</div>
	);
}

export default CardforP;