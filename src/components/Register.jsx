import React from "react";
import { useNavigate , useLocation } from "react-router-dom";
import { Snackbar ,Alert} from "@mui/material";
import { registerApi } from "../apis/authApi"

function Register(){
  const location = useLocation();
  const [message, setMessage] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return <div>
  <form className="flex justify-center flex-col mx-2 py-30 " onSubmit={async(e)=>{
    e.preventDefault();
    if(e.target.email.value==="" || e.target.password.value==="" ){
      setOpen(true);
      setMessage("Both details required!");
      return;
    }
    const res = await registerApi(e.target.email.value, e.target.password.value);
    if(res.status === 200){
      if(! location.state){
        navigate('/dashboard',{state:{email:e.target.email.value, password:e.target.password.value} , replace:true});
      }
      else{
        navigate(`/event/${location.state.eventName}`,{state:{email:e.target.email.value, password:e.target.password.value} , replace:true});navigate('/dashboard',{state:{email:e.target.email.value, password:e.target.password.value} , replace:true});
      }
      
    }
    else{
      setMessage(res.data.message);
      setOpen(true);
    }


  }}>
  <label htmlFor="email" className=" text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-0 scale-75 top-2 z-10 origin-[0]  bg-slate-900 px-2  peer-focus:text-blue-600 peer-focus:dark:text-blue-500    left-1">Email</label>
  <input type="email" id="email" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
  <label  htmlFor= "password" className=" text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-0 scale-75 top-2 z-10 origin-[0] bg-slate-900 px-2  left-1">Password</label>
  <input type="password" id="password" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
  <button className="bg-teal-400 hover:bg-gray-100 text-gray-800 font-semibold  my-6 py-2 px-4 border border-gray-400 rounded shadow" > Register</button>
  </form>
  <h6 className="text-white font-bold text-right mx-4 text-slate-400  hover:text-slate-100 self-right text-base font-sans" onClick={()=>{
    if(! location.state){
      navigate('/login',{replace:true})
      }
      else{
        const eventName = location.state["eventName"];
        navigate('/login',{state:{eventName: eventName}},{replace:true})
      }
    
    
    }}> Login</h6>
  <Snackbar open={open}  anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
   }}>
  <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {message}
        </Alert>
  </Snackbar>
   </div>

}

export default  Register;