import React from 'react';
import axios from 'axios';

const initialState = {
    categories: [],
}

export default class viewCategories extends React.Component{

    constructor(props){
        super(props)
        this.state = initialState;
        axios.get("http://localhost:4000/category/getcategory")
        .then(Response => {
            console.log(Response.data.category);
            this.setState({categories: Response.data.category})
        }).catch(error => {
            alert(error.message)
        })
    }

    render(){
        return(

            <div>
            {this.state.categories.map((category) => (
                <div className="card m-1">
                    <div className="card-body">
                        <h5 className="card-title">Category: {category.name}</h5>
                        <h6 className="card-title">Vehical Price: {category.tripPrice}</h6>
                    </div>
                </div>
            ))}
        </div>
           
        )
    }

}