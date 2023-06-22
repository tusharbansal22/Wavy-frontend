import React from "react";
import {useLocation, useNavigate} from 'react-router-dom';


function Dashboard(){
  const navigate=useNavigate();
  const location = useLocation();
  console.log(location);
  if(!location.state){
    navigate('/register');
  }
  return <div>
    <div  className="block  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 bg-gray-800 border-gray-700 hover:bg-gray-700 ">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">Hey!</h5>
    
</div>
  </div>

}

export default Dashboard;