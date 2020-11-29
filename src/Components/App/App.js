import React, {useContext} from 'react'
import {motion} from 'framer-motion';
import './App.scss';
import { Context } from "../../context";

import Start from '../Start/Start'
import Game from '../Game/Game'
import Overlay from '../Overlay/Overlay'
import FinalStage from '../FinalStage/FinalStage'

function App() {

	const { em, isMobile, isGameLvl, finalStage } = useContext(Context);
	let clx = ['App'];

	if(isMobile){clx.push('app-mobile')}

	return (
		<motion.div className={clx.join(' ')} style={{fontSize: em}} animate={{opacity: 1}} transition={{duration: 0.5}} initial={{opacity: 0}}>
			<Start />
			{isGameLvl && !finalStage ? <Game /> : ''}
			{finalStage ? <FinalStage /> : ''}
			{isMobile && <Overlay />}
		</motion.div>
	);
}

export default App;
