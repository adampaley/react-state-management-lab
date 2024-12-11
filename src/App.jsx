import { useState } from 'react'
import './App.css'

const App = () => {
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ])

  const zombieFightersCharacterSelection = zombieFighters.map((zombieFighter, index) =>
   <li key={index}>
      <div className='card-wrapper'>
        <p className='name'><b>{zombieFighter.name}</b></p>
        <img src={zombieFighter.img} alt={zombieFighter.name} className="image"/>
        <div className='stat'>
          <span>Price:</span><span>{zombieFighter.price}</span>
        </div>
        <div className='stat'>
          <span>Strength:</span><span>{zombieFighter.strength}</span>
        </div>
        <div className='stat'>
          <span>Agility:</span><span>{zombieFighter.agility}</span>
        </div>
      </div>
      <button onClick={() => handleAddFighter(zombieFighter)}>Add</button>
   </li> 
  )

  const handleAddFighter = (newFighter) => {
    if (money >=  newFighter.price) {
      setMoney(money - newFighter.price)
      setTeam([...team, newFighter])
    } else {
      console.log("Not enough money")
    }
  }

  const showTeam = team.map((zombieFighter, index) =>
    <li key={index}>
       <div className='card-wrapper'>
         <p className='name'><b>{zombieFighter.name}</b></p>
         <img src={zombieFighter.img} alt={zombieFighter.name} className="image"/>
         <div className='stat'>
           <span>Price:</span><span>{zombieFighter.price}</span>
         </div>
         <div className='stat'>
           <span>Strength:</span><span>{zombieFighter.strength}</span>
         </div>
         <div className='stat'>
           <span>Agility:</span><span>{zombieFighter.agility}</span>
         </div>
       </div>
    </li> 
   )

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h3>Money: {money}</h3>
      <h3>Team:</h3>
      <ul>
        {showTeam}
      </ul>
      <h3>Fighter Options</h3>
      <ul>
        { zombieFightersCharacterSelection }
      </ul>
    </>
  )
}

export default App
