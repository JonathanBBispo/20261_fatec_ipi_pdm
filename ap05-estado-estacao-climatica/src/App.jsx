import React, { useState } from 'react'

const App = () => {
  
  const [latitude, setLatitude] = useState(null)
  const [longitude, setlongitude] = useState(null)
  const [estacao, setEstacao] = useState(null)
  const [data, setData] = useState(null)
  const [icone, setIcone] = useState(null)

  const obterEstacao = (dataAtual, latitude) => {
    const ano = dataAtual.getFullYear()
    const d1 = new Date(ano, 5, 21) //ínicio do inverno/verão
    const d2 = new Date(ano, 8, 23) //ínicio da primavera/outono
    const d3 = new Date(ano, 11, 22) //ínicio do verão/inverno
    const d4 = new Date(ano, 2, 21) //ínicio do outono/primavera
    const sul = latitude < 0
    if(dataAtual >= d1 && dataAtual < d2) return sul ? 'Inverno' : 'Verão'
    if(dataAtual >= d2 && dataAtual < d3) return sul ? 'Primavera' : 'Outono'
    if(dataAtual >= d3 || dataAtual < d4) return sul ? 'Verão' : 'Inverno'
    return sul ? 'Outono' : 'Primavera'
    
  }

  const obterLocalizacao = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const dataAtual = new Date()
        const estacao = obterEstacao(dataAtual, position.coords.latitude)
        const icone = icones[estacao]
        setLatitude(position.coords.latitude)
        setlongitude(position.coords.longitude)
        setEstacao(estacao)
        setIcone(icone)
      }, 
      (err) => {
        console.log(err)
      }
    )
  }

  const icones = {
    'Outono' : 'leaf',
    'Inverno' : 'snowflake',
    'Verão' : 'sun',
    'Primavera' : 'seedling'
  }

  return (
    <div>
      <div className="container m-2">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center border rounded mb-2 p-4" style={{height: '6rem'}}>
                  <i className={`fa-solid fa-4x fa-${icone}`}></i>
                  <p className="w-75 ms-3 text-center fs-1">{estacao}</p>
                </div>
                <div>
                  <p className="text-center">
                    {
                      latitude ? 
                        `Coordenadas: ${latitude}, ${longitude}. Data: ${data}` :
                        "Clique no botão para saber sua localização"
                    }
                  </p>
                </div>
                <button 
                  onClick={obterLocalizacao}
                  className="btn btn-outline-primary w-100 mt-2">
                  Qual minha estação?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App