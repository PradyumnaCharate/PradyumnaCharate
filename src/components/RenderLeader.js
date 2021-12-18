import React from "react";
import { Media } from "reactstrap";
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import { baseUrl } from "../shared/baseUrl";
function RenderLeader(props){
            return (
      
                  <div key={props.leader.id} className="col-12 mt-5">

                  <Media tag="ul" className="row">
                    
                      <Media left middle className="col-2">
                        <Media height="121" width="121" object src={baseUrl+props.leader.image} alt={props.leader.name} />
                      </Media>
                      <Media body className="ml-5 col-10">
                        <Media heading>{props.leader.name}</Media>
                        <h6>{props.leader.designation}</h6>
                        <p>{props.leader.description}</p>
                      </Media>
           
                  </Media>
                </div>
          
        
            ); 
}
    

export default RenderLeader;