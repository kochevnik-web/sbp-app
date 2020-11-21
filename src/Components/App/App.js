import React, {useContext} from 'react'
import './App.scss';
import { Context } from "../../context";

import Start from '../Start/Start'

function App() {

	const { em } = useContext(Context);
console.log(em)
	return (
		<div className="App" style={{fontSize: em}}>
			<Start />
		</div>
	);
}

export default App;
