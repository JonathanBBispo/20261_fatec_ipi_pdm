const App = () => (
  <div className="conteiner border mt-2">
    <div className="row">
      <div className="col-12">
        {/* i.fa.fa-hippo */}
        <i className="fa fa-hippo fa-2x p-3"></i>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-12 col-md-6 col-xxl-3">
        {/* .card>.card-header+.card-body */}
        <div className="card">
          <div className="card-header text-muted">15/04/2025</div>
          <div className="card-body d-flex">
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-basketball fa-4x"></i>
            </div>
            <div className="ms-2 flex-grow-1 border rounded p-2">
              <h4 className="text-center">Bola de Basquete</h4>
              <p className="text-center">Uma bola Mega Swag</p>
            </div>
          </div>
        </div>     
      </div>
      <div className="col-sm-12 col-md-6 col-xxl-3">
        <div className="card">
          <div className="card-header text-muted">21/03/2025</div>
          <div className="card-body d-flex">
            <div className="d-flex align-items-center">
              <i class="fa-solid fa-gamepad fa-4x"></i>
            </div>
            <div className="ms-2 flex-grow-1 border rounded p-2">
              <h4 className="text-center">Controle de Videogame</h4>
              <p className="text-center">Controle Giga Style</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-xxl-3">
        <div className="card">
          <div className="card-header text-muted">21/03/2025</div>
          <div className="card-body d-flex">
            <div className="d-flex align-items-center">
              <i class="fa-solid fa-mobile fa-4x"></i>
            </div>
            <div className="ms-2 flex-grow-1 border rounded p-2">
              <h4 className="text-center">Celular Swagsung</h4>
              <p className="text-center">Celular de última geração</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-xxl-3">
        <div className="card">
          <div className="card-header text-muted">21/03/2025</div>
          <div className="card-body d-flex">
            <div className="d-flex align-items-center">
              <i class="fa-solid fa-glasses fa-4x"></i>
            </div>
            <div className="ms-2 flex-grow-1 border rounded p-2">
              <h4 className="text-center">Óculos</h4>
              <p className="text-center">Óculos do Belissário</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default App