import React from 'react'
import Feedback from './Feedback'
import Comentario from './Comentario'

const App = () => {
  const textAprova = 'Enviaremos mais conteúdos similares'
  const textReprova = 'Agradecemos o feedback, não enviaremos esse tipo de conteúdo'

  return (
    <div className="container">
      <Comentario
        nome="Rogerio_Simas67"
        comentario='Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolores beatae velit vel impedit amet modi suscipit ea maxime temporibus!'
        data={new Date().toLocaleTimeString()}>
        <Feedback
        textAprova={textAprova}
        textReprova={textReprova}
        />
      </Comentario>
      
      <Comentario
        nome="Dailene_Silva"
        comentario='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quaerat!'
        data={new Date().toLocaleTimeString()}>
        <Feedback
        textAprova={textAprova}
        textReprova={textReprova}
        />
      </Comentario>

      <Comentario
        nome="Tirve_Nolan"
        comentario='Lorem ipsum dolor sit amet.'
        data={new Date().toLocaleTimeString()}>
        <Feedback
        textAprova={textAprova}
        textReprova={textReprova}
        />
      </Comentario>
    </div>
  )
}

export default App