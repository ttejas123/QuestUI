// import react from 'react'
import './style.css'
import PlayerCard from './playerCard'
const playerCard = (props) => {
	return(
		<div className="d-flex align-item-center justify-content-center flex-wrap main_grid_player px-3 py-2">
			
			{props.cards?.map((val, index) => {
				return (<div className="col-4 p-1" key={index}><PlayerCard  {...val} /></div>)
			})}
		</div>
	);
}

export default playerCard;