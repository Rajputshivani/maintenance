import  React, {Component} from 'react';
import './userdashboard.css';
class UserDashBoard extends Component{
    render(){
        return(
            <div>
                <h2><u>User Dashboard</u></h2>
                    <div class="container">
		     <div class="row">
				<div class="col-md-4">
					<div class="card" width="70%;">
  						<img class="card-img-top" src={require('../assets/complaints.png')} alt="complaints"/>
  							<div class="card-block">
   								 <a href="#" class="btn btn-primary btn-lg btn-block">Complaints</a>
   							</div>
					</div>
				
			   </div>
               <span class="col-md-1"></span>
			   				<div class="col-md-4">
					<div class="card" width="70%;">
                    <img class="card-img-top" src={require('../assets/events.png')} alt="events"/>
  							<div class="card-block">
   								 <a href="#" class="btn btn-primary btn-lg btn-block">Events</a>
   							</div>
					</div>
				
			   </div>
			
			</div>
			<div class="row">
								<div class="col-md-4">
					<div class="card" width="70%;">
  						<img class="card-img-top" src={require('../assets/fitness.png')} alt="fitness"/>
  							<div class="card-block">
   								 <a href="#" class="btn btn-primary btn-lg btn-block">Fitness</a>
   							</div>
					</div>
				
			   </div>
               <span class="col-md-1"></span>
			   				<div class="col-md-4">
					<div class="card" width="70%;">
  						<img class="card-img-top" src={require('../assets/invite.png')} alt="invite"/>
  							<div class="card-block">
   								 <a href="#" class="btn btn-primary btn-lg btn-block">Invite</a>
   							</div>
					</div>
				
			   </div>
				
			</div>
 	</div>
            </div>
        );
    }
}export default UserDashBoard;