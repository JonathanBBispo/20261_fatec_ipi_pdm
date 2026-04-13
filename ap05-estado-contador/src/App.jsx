import React, { useState } from 'react'

const App = () => {
  const [contador, setContador] = useState(0)
  return (
    <div>
      <div style={{textAlign:'center', marginTop:50}}>
        <h1>Contador:  {contador}</h1>
        <button onClick={() => setContador(contador + 1)} style={{padding: 4}}>Incrementar</button>
        {' '}
        <button onClick={() => setContador(contador - 1)} style={{padding: 4}}>Decrementar</button>
        {' '}
        <button onClick={() => setContador(0)} style={{padding: 4}}>Resetar</button>
      </div>
    </div>
  )
}

export default App