// import react from 'react'
import './style.css'
import PlayerCard from './playerCard'
const playerCard = (props) => {
	return(
		<div className="main_grid_player d-flex">
			<div className="left_card_block">
				left block
			</div>
			<div className="d-flex align-item-center justify-content-center flex-wrap right_card_block px-3 py-2">
				{props.cards?.map((val, index) => {
					return (<div className="col-4 " key={index}><PlayerCard  {...val} /></div>)
				})}
			</div>
		</div>
	);
}

export default playerCard;