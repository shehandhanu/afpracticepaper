import React from 'react';
import axios from 'axios';

const initialState = {
    vehicals: [],
}

export default class viewVehicals extends React.Component{

    constructor(props){
        super(props)
        this.state = initialState;
        axios.get("http://localhost:4000/vehical/getvehical")
        .then(Response => {
            console.log(Response.data.vehical);
            this.setState({vehicals: Response.data.vehical})
        }).catch(error => {
            alert(error.message)
        })
    }

    render(){
        return(

            <div>
                {this.state.vehicals.map((vehical) => (
                    <div className="card m-1">
                        <div className="card-body">
                            <h5 className="card-title">Vehical Name: {vehical.name}</h5>
                            <h6 className="card-title">Vehical Code: {vehical.code}</h6>
                            <h6 className="card-title">Vehical Model: {vehical.model}</h6>
                            <h6 className="card-title">Vehical Type: {vehical.type}</h6>
                            <h6 className="card-title">Vehical Price: {vehical.vPrice}</h6>
                        </div>
                    </div>
                ))}
            </div>
           
        )
    }

}