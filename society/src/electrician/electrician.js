import React,{Component} from 'react';
import './electrician.css';

class Electrician extends Component{
    render(){
        return(
            <div>
              <h3><strong><u>Electrician</u></strong></h3>
                <section>
                             <div className="container py-3">
                               <div className="card col-md-push-3 col-md-10">
                                     <div className="row ">
                                       <div className="col-md-push-5">
                                           <img src={require('../assets/electrician.jpg')} className="rounded float-left" alt="electrician"/>
                                         </div>
                                         <div className="col-md-6 col-sm-4 px-3">
                                           <div className="card-block px-3">
                                                 <h4 className="card-title">Details</h4>
                                                 <p className="card-text">Name:ABC<br/>
                                                 Contact:123<br/>
                                                 Address:Kalkaji
                                                 </p>                                                  
                                
                                           </div>
                                         </div>
                                    </div>
                                 </div>
                           </div>
                        </section>
                        <section>
                             <div className="container py-3">
                               <div className="card col-md-push-3 col-md-10">
                                     <div className="row ">
                                       <div className="col-md-push-5">
                                           <img src={require('../assets/electrician.jpg')} className="rounded float-left" alt="electrician"/>
                                         </div>
                                         <div className="col-md-6 col-sm-4 px-3">
                                           <div className="card-block px-3">
                                                 <h4 className="card-title">Details</h4>
                                                 <p className="card-text">Name:ABC<br/>
                                                 Contact:123<br/>
                                                 Address:Kalkaji
                                                 </p>                                                  
                                
                                           </div>
                                         </div>
                                    </div>
                                 </div>
                           </div>
                        </section>
                        <section>
                             <div className="container py-3">
                               <div className="card col-md-push-3 col-md-10">
                                     <div className="row ">
                                       <div className="col-md-push-5">
                                           <img src={require('../assets/electrician.jpg')} className="rounded float-left" alt="electrician"/>
                                         </div>
                                         <div className="col-md-6 col-sm-4 px-3">
                                           <div className="card-block px-3">
                                                 <h4 className="card-title">Details</h4>
                                                 <p className="card-text">Name:ABC<br/>
                                                 Contact:123<br/>
                                                 Address:Kalkaji
                                                 </p>                                                  
                                
                                           </div>
                                         </div>
                                    </div>
                                 </div>
                           </div>
                        </section>
            </div>

        );

    }
}export default Electrician;