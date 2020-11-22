import React, {useContext} from 'react'
import {motion} from 'framer-motion';
import './App.scss';
import { Context } from "../../context";

import Start from '../Start/Start'

function App() {

	const { em, isMobile } = useContext(Context);
	let clx = ['App'];

	if(isMobile){clx.push('app-mobile')}

	return (
		<motion.div className={clx.join(' ')} style={{fontSize: em}} animate={{opacity: 1}} transition={{duration: 0.5}} initial={{opacity: 0}}>
			<Start />
		</motion.div>
	);
}

export default App;
