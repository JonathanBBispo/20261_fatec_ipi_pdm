import React from 'react'

const Comentario = (props) => {
  return (
    <div className="card p-3 mt-2">
      <div className="row">
        <div className="col-sm-2 col-md-2 col-lg-2  justify-content-center align-items-center d-flex">
          <i className="fa-solid fa-photo-film" style={{fontSize:'clamp(50px, 8vw, 130px)' }}></i>
        </div>
        <div className="col-sm-10 col-md-10 col-lg-10">
          <div className="card w-100">
            <div className="card-header"><h1>{props.nome}</h1></div>
            <div className="card-body">
              <h3>{props.comentario}</h3>
              {props.data}
            </div>
          </div>
          <div className="row text-center">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comentario