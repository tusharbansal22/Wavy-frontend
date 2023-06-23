import React, { useState } from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import {useParams} from "react-router-dom";
import { useEffect } from "react";
import { Snackbar ,Alert} from "@mui/material";
import registerEventApi from "../apis/eventApi";

function Event (){
  const navigate=useNavigate();
  const location = useLocation();
  const {eventName} = useParams();
  const [message, setMessage] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [registered , setRegistered] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(
    ()=>{
      async function callRegisterApi(){
        const res = await registerEventApi(location.state.email, eventName);
        if(res.status ===200){
          setRegistered(true);
        }
        else{
          setOpen(true);
          setRegistered(true);
          setMessage(res.data.message);
        }
      }

      if(!location.state){
        navigate('/register' ,{state:{eventName:eventName}}, {replace: true});
      }
      else{
        callRegisterApi();
        
      }
    }
  );
  
  
  if(registered){
    return( <div className="flex gap-4 rounded-xl shadow-sm p-6 bg-green-300">
  <div className="min-w-max"></div>
  <div className="space-y-2">
    
    <h3 className="text-[22px] font-semibold text-green-900">Registered</h3>
    <p className="leading-8 text-slate-900 font-normal">You have successfully registered for {eventName}</p>
  </div>
  <Snackbar open={open}  anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
   }}>
  <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {message}
        </Alert>
  </Snackbar>
</div>)

}
else{
  return( <div className="flex gap-4 rounded-xl shadow-sm p-6 bg-slate-400">
  <div className="min-w-max"></div>
  <div className="space-y-2">
    
    <h3 className="text-[22px] font-semibold text-slate-900">Register</h3>
    <p className="leading-8 text-gray-500 font-normal">Registering for {eventName}</p>
  </div>
  <Snackbar open={open}  anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
   }}>
  <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {message}
        </Alert>
  </Snackbar>
</div>)

    
}
  }
  
  

export default Event;