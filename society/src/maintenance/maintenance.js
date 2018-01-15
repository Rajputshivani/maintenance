import React,{Component} from 'react';
import './maintenance.css';
import Electrician from '../electrician/electrician';
import Gardner from '../gardner/gardner';
import Carpenter from '../carpenter/carpenter';
import Plumber from '../plumber/plumber';
import Maid from '../maid/maid';
import Others from '../others/others';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class Maintenance extends Component{
    render(){
        return(
	
            <div>
                     <div class="container">
		                    <h2><strong><u>Maintenance</u></strong></h2>
		     <div className="row">
				<div class="col-md-4">
					<div class="card" width="70%;">
  						<img class="card-img-top" src={require('../assets/electrician.jpg')} alt="electrician"/>
  							<div class="card-block">
   								 <Link to={'/electrician'} class="btn btn-primary btn-lg btn-block">Electrician</Link>
									  
   							</div>
					</div>
				</div>
			   				<div class="col-md-4">
					<div class="card" width="70%;">
  						<img class="card-img-top" src={require('../assets/gardner.jpg')}alt="gardner"/>
  							<div class="card-block">
							  <Link to={'/gardner'} class="btn btn-primary btn-lg btn-block">Gardner</Link>
   							</div>
					</div>
				
			   </div>
			   				<div class="col-md-4">
					<div class="card" width="70%;">
  						<img class="card-img-top" src={require('../assets/carpenter.jpg')} alt="carpenter"/>
  							<div class="card-block">
							  <Link to={'/carpenter'} class="btn btn-primary btn-lg btn-block">Carpenter</Link>
   							</div>
					</div>
				
			   </div>
			
			</div>
			<div class="row">
								<div class="col-md-4">
					<div class="card" width="70%;">
  						<img class="card-img-top" src={require('../assets/plumber.jpg')} alt="plumber"/>
  							<div class="card-block">
							  <Link to={'/plumber'} class="btn btn-primary btn-lg btn-block">Plumber</Link>
   							</div>
					</div>
				
			   </div>
               <div class="col-md-4">
               <div class="card" width="70%;">
                     <img class="card-img-top" src={require('../assets/maid.jpg')} alt="maid"/>
                         <div class="card-block">
						 <Link to={'/maid'} class="btn btn-primary btn-lg btn-block">Maid</Link>
                          </div>
               </div>
           
          </div>
			   				<div class="col-md-4">
					<div class="card" width="70%;">
  						<img class="card-img-top" src={require('../assets/others.jpg')} alt="others"/>
  							<div class="card-block">
							  <Link to={'/others'} class="btn btn-primary btn-lg btn-block">Others</Link>
   							</div>
					</div>
				
			   </div>
				
			</div>
 	</div>
</div>
        );
    }
}export default Maintenance;