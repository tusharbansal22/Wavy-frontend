import React from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import { useEffect } from "react";


function Dashboard(){
  const navigate=useNavigate();
  const location = useLocation();
  useEffect(
    ()=>{
      if(!location.state){
        navigate('/register' , {replace: true});
      }
    }
  );
  return <div>
    <div  className="block  p-6  border border-gray-200 rounded-lg shadow hover:bg-gray-100 bg-slate-800 border-gray-700 hover:bg-gray-700 ">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">Hey! {location.state.email}</h5>
    
</div>
  </div>

}

export default Dashboard;