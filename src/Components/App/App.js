import React, {useContext} from 'react'
import './App.css';
import { Context } from "../../context";

function App() {

  const { rooms } = useContext(Context);
  console.log(rooms);

	return (
		<div className="App">
			SBP BANK
		</div>
	);
}

export default App;
