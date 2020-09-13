import React from 'react';
const PriceCard = (props) => {
    return (
        <div className="card">
            <div className="card-header text-center bg-dark text-white">
                <p>Qualified {props.leads}</p>
            </div>
            <div className="card-body text-center">
                <h2>$ {props.perLead}</h2>
                <p>Per Qualified lead</p>
                <hr />
                <p>Qualified leads Per month  </p>
                <p><b>{props.leads}</b></p>
                <hr />
                <p>Platform fee Per month  </p>
                <p>$ <b>{props.perMonth}</b></p>
                <div className="btn w-100 btn-dark text-ewhite"> ${props.totalPackage}/mo</div>
            </div>
            <div className="card-footer bg-outline-dark text-white">
                <button onClick={()=>{props.showModal(props.leads)}} className="btn w-100 btn-outline-danger text-danger"> Start Trial</button>
            </div>
        </div>
    )

}
export default PriceCard