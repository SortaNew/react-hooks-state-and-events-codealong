import React, {useState} from 'react'

function Toggle() {
  let [isOn, setIsOn] = useState(true)

  function handleClick(){
    setIsOn(isOn = !isOn)
  }

  let color = isOn ? 'red' : 'white'

  return <button style={{background: color}} onClick={handleClick}>{isOn ? 'ON' : 'OFF'}</button>;
}

export default Toggle;
