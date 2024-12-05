import React, { useState } from 'react'

function Character({ character }) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [isHomeworldVisible, setIsHomeworldVisible] = useState(false);
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const toggle = () => {
    setIsHomeworldVisible(!isHomeworldVisible);
  };

  return (
    <div className='character-card' onClick={toggle}>
      <h3 className='character-name'>
        {character.name}
      </h3>
      {isHomeworldVisible ? <p>{"Planet: "} 
        <span className='character-planet'>{character.homeworld.name}</span> 
      </p> : ''}

    </div>
  )
}

export default Character
