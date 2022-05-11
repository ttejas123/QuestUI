// import react from 'react'
import './style.css'
import img1 from '../assets/left.png'
import PlayerCard from './playerCard'
const playerCard = (props) => {
	return(
		<div className="main_grid_player d-flex">
			<div className="left_card_block">
				<img src={img1} className="img-fluid img_CSS" />
			</div>
			<div className="d-flex align-item-center justify-content-center flex-wrap right_card_block">
				{props.cards?.map((val, index) => {
					return (<div className="col-4 pt-2 m-0" key={index}><PlayerCard  {...val} /></div>)
				})}
			</div>
		</div>
	);
}

export default playerCard;