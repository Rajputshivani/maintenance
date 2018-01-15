import React, { Component } from 'react';
import './profile.css';
class Profile extends Component{

    constructor(){
        super();
        this.state={
            prof:{
                name:"Shivani Singh",
                email:"shivanistunner@gmail.com",
                phone:"6447",
                address:{
                    flat:"118",
                    block:"A",
                    society:"ExpressGreens"
                }
            }
        }
    }

    render(){
        return(
            <div>
                <h2><strong><u>User Profile</u></strong></h2>
                <div className="container">
                    <div className="card card-container">
                        <form>
                            <div className="form-group row">
                                <label for="inputName3" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                    <input type="name" className="form-control" id="inputName3"  value={this.state.prof.name} placeholder="Name" disabled/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="eame" className="form-control" id="inputEmail3" value={this.state.prof.email} placeholder="Email" disabled/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="inputEmail3" className="col-sm-2 col-form-label">Phone</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="inputPhone3" value={this.state.prof.phone} placeholder="Phone" disabled/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="inputEmail3" className="col-sm-2 col-form-label">Address</label>
                                <div className="col-sm-10">
                                     <div className="form-row">
                                             <div className="form-group col-md-4">
                                    <input type="text" className="form-control" id="inputPhone3" value={this.state.prof.address.flat} placeholder="Flat" disabled/>
                                </div>
                                <div className="form-group col-md-4" >
                                <input type="text" className="form-control" id="inputPhone3" value={this.state.prof.address.block} placeholder="Flat" disabled/>
                                               
                                                  {/* <select id="inputBlock" className="form-control">
                                                        <option selected >Block</option>
                                                              <option>A</option>
                                                              <option>B</option>
                                                              <option>C</option>
                                                              <option>D</option>
                                                  </select> */}
                                       </div>
                                        <div className="form-group col-md-4">
                                                <input type="text" className="form-control" id="inputSociety3"  value={this.state.prof.address.society} placeholder="Society" disabled/>
                                    
                                       
                                </div>
                            </div>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}
export default Profile;