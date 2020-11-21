import React, {useContext} from 'react'
import './Start.scss';
import logo from './img/logo.svg';
import { Context } from "../../context";

function App() {

  const { em } = useContext(Context);

	return (
		<div className="Start">
			<div className="content">
                <div className="start-header">
                    <span>Игра</span>
                    <img className="logo"  src={logo}/>
                </div>
                <div className="title">
                    <span style={{color: '#0095D4'}}>В бой идёт родительский комитет.</span> 
                    <span style={{color: '#007C37'}}>Сможешь ли ты собрать деньги</span>
                    <span style={{color: '#65B32E'}}>на линолеум?</span>
                </div>
                <div className="title-foreb">
                    
                </div>
                <p>
                    <span>
                        Одно из самых неблагодарных занятий на свете — собирать деньги для общих целей: на день рождения директора, на линолеум в класс ребенка или — и это предстоит нам совсем скоро — на новогоднюю вечеринку с друзьями. И тут начинается! У кого-то только наличка, у кого-то огромные комиссии (а вот не надо было заводить карту Транссибирского Балдёжного Банка!), а кому-то нужно идти до банкомата, чтобы перевести даже маленькие суммы. 

                        Вместе с Системой быстрых платежей мы подготовили спецпроект, в котором предлагаем раз и навсегда обучиться искусству легких платежей. Ой, а сдача с 200 рублей будет?

                    </span>
                </p>

                <span className="start-btn app-btn">
                    <span>Играть</span>
                </span>
            </div>
		</div>
	);
}

export default App;