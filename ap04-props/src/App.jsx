import Pedido from "./Pedido"
import Cartao from "./Cartao"
import Feedback from "./Feedback"
const App = () => {
  const textoOK = "Já recebi"
  const textoNOK = "Ainda não recebi"
  const funcaoOK = () => alert('Agradecemos o feedback')
  const funcaoNOK = () => alert('Verificaremos')
  const componenteFeedback = (
    <Feedback 
      textoOK={textoOK}
      textoNOK={textoNOK}
      funcaoOK={funcaoOK}
      funcaoNOK={funcaoNOK}
    />
  )
  return <div className="container border mt-2">
    <div className="row">
      <div className="col-12">
        {/* i.fa.fa-hippo */}
        <i className="fa fa-hippo fa-2x p-3"></i>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-12 col-md-6 col-xxl-3">
        <Cartao cabecalho="22/04/2026">
          <Pedido
            data="15/04/2025"
            icone="basketball fa-4x"
            titulo="Bola de Basquete"
            descricao="Uma bola Mega Swag" />
          {componenteFeedback}
        </Cartao>     
      </div>
      <div className="col-sm-12 col-md-6 col-xxl-3">
        <Cartao cabecalho="21/03/2025">
          <Pedido
            data="15/04/2025"
            icone="gamepad fa-4x"
            titulo="Controle de Videogame"
            descricao="Controle Giga Style" />
          {componenteFeedback}
        </Cartao>   
      </div>
      <div className="col-sm-12 col-md-6 col-xxl-3">
        <Cartao cabecalho="20/03/2025">
          <Pedido
            icone="mobile fa-4x"
            titulo= "Celular Swagsung"
            descricao= "Celular de última geração" />
            {componenteFeedback}
        </Cartao>
      </div>        
      <div className="col-sm-12 col-md-6 col-xxl-3">
        <Cartao cabecalho="21/03/2025">
          <Pedido
            icone="glasses fa-4x"
            titulo= "Óculos"
            descricao= "Óculos do Belissário" />
            {componenteFeedback}
        </Cartao>
      </div>
    </div>
  </div>
}

export default App