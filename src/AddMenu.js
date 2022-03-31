import React, { Component } from 'react';
import axios from 'axios';
class AddMenu extends Component{
    constructor()
    {
        super();
        this.state = {menus:{mname:'',description:'', price:''}, showMessage:''}
    }
    onChangeHandler = (e)=>
    {
        let {name, value }= e.target;
        let { menus } = this.state;
        this.setState({menus:{...menus,[name]:value}});
    }
    onSubmit = (e)=>
    {
        e.preventDefault();
        const URL = "http://localhost:8181/menunew/addMenu";
        axios.post(URL, this.state.menus).then(response=>{
            console.log(response);
         });
    }
    render(){
    
        let { menus, showMessage } = this.state;
        return(
            <>
               <div>
               <span className="alert-success">{showMessage}</span>
               <form onSubmit={this.onSubmit}>
                <h5>Add Menu</h5>
                <div className="form-group">
                    <label>Menu Name</label>
                    <input type="text" className="form-control" name="mname" value={menus.mname} onChange={this.onChangeHandler} />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" className="form-control" name="description" value={menus.description} onChange={this.onChangeHandler}/>
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="text" className="form-control" name="price" value={menus.price} onChange={this.onChangeHandler}/>
                </div>
                <div className="form-group">
                  <button type="submit" className='btn btn-info'>AddMenu</button>
                </div>
                </form>
               </div>
            </>
        )
    }

}

export default AddMenu;