import React from 'react';
import axios from 'axios';

const initialState = {
    selectValue: '',
    categoryVehicals: [],
    categoriesID: []
}

export default class viewvehicalsInCategory extends React.Component{

    constructor(props){
        super(props)
        this.state = initialState;
        this.onSubmit = this.onSubmit.bind(this);
        axios.get("http://localhost:4000/category/getcategory")
        .then(Response => {
            this.setState({categoriesID: Response.data.category})
        }).catch(error => {
            alert(error.message)
        })
    }

    handleChange = (e) => {
        this.setState({selectValue:e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        axios.get('http://localhost:4000/category/getcategory/'+this.state.selectValue)
        .then(Response => {
            this.setState({categoryVehicals: Response.data.category})
        }).catch(error => {
            alert(error.message);
        })
    }

    render(){
        return(

            <div>
               <div classNameName="container mt-2">
                <form className="form-inline" onSubmit={this.onSubmit}>
                    <div className="form-group ">
                        <div classNameName="row">
                            <div classNameName="col-1">
                                <label for="inputState">Category</label>
                                </div>
                                <div classNameName="col-3">
                                <select 
                                    id="inputState" 
                                    className="form-control"
                                    value={this.state.selectValue} 
                                    onChange={this.handleChange} 
                                >
                                    <option selected>Choose</option>
                                    {this.state.categoriesID.map((id) => (
                                        <option value={id._id}>{id.name}</option>
                                    ))}
                                </select>
                                </div>
                                <div classNameName="col-3">
                                    <button type="submit" className="btn btn-primary mb-2">Apply</button>
                                </div>
                            </div>
                        </div>
                    </form>
               </div>
            <div classNameName="container">
                <h5 className="card-title">Category Name</h5>
            
                {this.state.categoryVehicals.map((vehical) => (
                    <div className="card m-1">
                        <div className="card-body">
                            <h5 className="card-title">{vehical.id}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                ))}

            </div>
            </div>
           
        )
    }

}