import React from 'react'

const Feedback = (props) => {
  return (
    <div className="d-flex justify-content-center gap-2 mt-2">
      <button className="btn btn-outline-primary" onClick={() => alert(`${props.textAprova}`)}><strong>Aprovar</strong></button>
      <button className="btn btn-outline-danger" onClick={() => alert(`${props.textReprova}`)}><strong>Reprovar</strong></button>
    </div>
  )
}

export default Feedback