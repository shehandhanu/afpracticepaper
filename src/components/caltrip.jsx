import React from 'react';
import axios from 'axios';

const initialState = {
    vID: '',
    cID: '',
    duration: '',
    vehicals:[],
    categoriesID:[],
    totPrice: '00'

}

export default class calTrip extends React.Component{

    constructor(props){
        super(props)
        this.state = initialState;
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

        axios.get("http://localhost:4000/vehical/getvehical")
        .then(Response => {
            this.setState({vehicals: Response.data.vehical})
        }).catch(error => {
            alert(error.message)
        })

        axios.get("http://localhost:4000/category/getcategory")
        .then(Response => {
            this.setState({categoriesID: Response.data.category})
        }).catch(error => {
            alert(error.message)
        })
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value})
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        let numbers = {
            vID: this.state.vID,
            cID: this.state.cID,
            duration: this.state.duration,
        };

        axios.post('http://localhost:4000/vehical/getvalue', numbers)
        .then(Response => {
            this.setState({totPrice: Response.data.price});
        }).catch(error => {
            alert(error.message);
        })
    }
    render(){
        return(

           <div>
               <div className="container mt-2">
                <form class="form-inline" onSubmit={this.onSubmit}>
                        <div class="form-group">
                        <div className="row mt-2">
                            <div className="col-2">
                                <label for="inputState">Category</label>
                                </div>
                                <div className="col-6">
                                <select 
                                    id="inputState" 
                                    className="form-control"
                                    name="cID"
                                    value={this.state.selectValue} 
                                    onChange={this.handleChange} 
                                >
                                    <option selected>Choose</option>
                                    {this.state.categoriesID.map((category) => (
                                        <option value={category._id} name="cID">{category.name}</option>
                                    ))}
                                </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                        <div className="row mt-2">
                            <div className="col-2">
                                <label for="inputState">Vehical</label>
                                </div>
                                <div className="col-6">
                                <select 
                                    id="inputState" 
                                    className="form-control"
                                    name="vID"
                                    value={this.state.selectValue} 
                                    onChange={this.handleChange} 
                                >
                                    <option selected>Choose</option>
                                    {this.state.vehicals.map((vehical) => (
                                        <option value={vehical._id} name="vID">{vehical.name}</option>
                                    ))}
                                </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                        <div className="row mt-2">
                            <div className="col-2">
                                <label for="inputState">Duration</label>
                                </div>
                                <div className="col-6">
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    placeholder="Vehical Name"
                                    name="duration"
                                    id="duration"
                                    value={this.state.duration}
                                    onChange={this.onChange}/>
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary mt-2">Calculate</button>
                    </form>
               </div>

                <div className="m-5">
                <h1>Total Price : {this.state.totPrice}.00</h1>
                </div>

           </div>
           
        )
    }

}