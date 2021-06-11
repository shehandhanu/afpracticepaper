import React from 'react';
import axios from 'axios';

const initialState = {
    code: '',
    model: '',
    type: '',
    name: '',
    vPrice: '',
    categories: [],
    categoriesID: []
}

export default class insertVehical extends React.Component{

    constructor(props){
        super(props)
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;
        axios.get("http://localhost:4000/category/getcategory")
        .then(Response => {
            console.log(Response.data.category);
            this.setState({categoriesID: Response.data.category})
        }).catch(error => {
            alert(error.message)
        })
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        let vehical = {
            code: this.state.code,
            model: this.state.model,
            type: this.state.type,
            name: this.state.name,
            vPrice: this.state.vPrice,
            categories: this.state.categories
        };

        axios.post('http://localhost:4000/vehical/addvehical', vehical)
        .then(Response => {
            alert('Vehical Added Successfully');
        }).catch(error => {
            alert(error.message);
        })
    }

    handleCheckboxChange = (event)=> this.setState({categories: event.target.value});

    handleCheckboxChange = event => {
        console.log(event.target.id);
        let newArray = [...this.state.categories, event.target.id];
        if (this.state.categories.includes(event.target.id)) {
          newArray = newArray.filter(day => day !== event.target.id);
        } 
        this.setState({
            categories: newArray
        });
      };

    render(){
        return(

           <div classNameName="container  m-3">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group mt-3">
                    <label for="exampleInputEmail1">Vehical Code</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Vehical Code"
                        name="code"
                        id="code"
                        value={this.state.code}
                        onChange={this.onChange}/>
                    </div>
                    <div className="form-group mt-3">
                    <label for="exampleInputEmail1">Vehical Model</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Vehical Model"
                        name="model"
                        id="model"
                        value={this.state.model}
                        onChange={this.onChange}/>
                    </div>
                    <div className="form-group mt-3">
                    <label for="exampleInputEmail1">Vehical Type</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Vehical Type"
                        name="type"
                        id="type"
                        value={this.state.type}
                        onChange={this.onChange}/>
                    </div>
                    <div className="form-group mt-3">
                    <label for="exampleInputEmail1">Vehical Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Vehical Name"
                        name="name"
                        id="name"
                        value={this.state.name}
                        onChange={this.onChange}/>
                    </div>
                    <div className="form-group mt-3">
                    <label for="exampleInputEmail1">Vehical Price</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Vehical Price"
                        name="vPrice"
                        id="vPrice"
                        value={this.state.vPrice}
                        onChange={this.onChange}/>
                    </div>

                    <div classNameName="from-group mt-3">
                        <label for="exampleInputEmail1">Vehical Category</label>
                        <div className="form-check">
                        <ul>

                            {this.state.categoriesID.map((id) => (
                                <div>
                                    <label className="form-check-label" for="exampleCheck1">{id.name}</label>
                                    <input type="checkbox" className="form-check-input" id={id._id} value="60c25499b06ddd40b499547e"  onChange={this.handleCheckboxChange}/>
                                </div>
                            ))}

                        </ul>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
           </div>
           
        )
    }

}