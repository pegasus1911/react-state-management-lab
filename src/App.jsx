// src/App.jsx

import { useState } from "react";

const App = () => {

  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [totalStrength , setTotalStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState(0)
  const [zombeiFighters] = useState([
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
  ]);
  const handleAddFighter = (newFighter) => {
    if (newFighter.price > money) {
      console.log("Not enough money")
      return
    }
    setTeam([...team, newFighter])
    setMoney(money - newFighter.price)
    setTotalAgility(totalAgility + newFighter.agility)
    setTotalStrength(totalStrength + newFighter.strength)
  }
  const handleRemoveFighters = (index) => {
    const removeFighter = team[index]
    const newTeam = []
    for (let i = 0; i < team.length; i++) {
      if (i !== index) {
        newTeam.push(team[i])
      }
    }
    let strength = 0
    let agility = 0
    for (let i = 0; i < newTeam.length; i++) {
      strength += newTeam[i].strength
      agility += newTeam[i].agility
    }
    setTeam(newTeam)
    setMoney(money + removeFighter.price)
    setTotalAgility(agility)
    setTotalStrength(strength)
  }

  return (
    <>
      <h1>Hello world!</h1>
      <h2>Money left = {money}</h2>
      {zombeiFighters.length === 0 ? (<h1>you have to pick some players</h1>) : (zombeiFighters.map((item, index) => {
        return(
          <li key={index}>
          <p>Name : {item.name}</p>
          <p>Price: {item.price}</p>
          <p>Strenght :{item.strength}</p>
          <p>Agility: {item.agility}</p>
          <button onClick={() => handleAddFighter(item)}>Add fighter</button>
        </li>
       )
      }))}
      <h2>Your team</h2>
      <section>
        
      <ul>
        {team.map((teamMembr, index) => {
          return (
            
            < li key={index} >
            <p>zombei Fighters image <img src={teamMembr.img}></img></p>
            <p>zombei Fighters name {teamMembr.name}</p>
            <p>zombei Fighters price {teamMembr.price}</p>
            <p>zombei Fighters strenght {teamMembr.strength}</p>
            <p>zombei Fighters agility {teamMembr.agility}</p>
            <button onClick={() => handleRemoveFighters(index)}>Remove fighter</button>
          </li>
      )
    }
  )
}
      </ul >
</section>

      <p>Total strenght {totalStrength}</p>
      <p>Total agility {totalAgility}</p>
    </>
  );
}

export default App