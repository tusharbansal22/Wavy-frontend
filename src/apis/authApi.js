import axios from "axios";


const baseUrl ="http://localhost:8000/api/auth";

const loginApi = async(email,password)=>{

  let res;
  await axios.post(baseUrl+'/login',{
    email: email,
    password: password
  },{headers: { 
    "Content-Type": "application/x-www-form-urlencoded"
  }})
  .then( (response)=>{
    res = response;
  })
  .catch( (error)=>{
    res =error.response;
  });
  return res;

}

const registerApi = async(email,password)=>{

  let res;
  await axios.post(baseUrl+'/register',{
    email: email,
    password: password
  },{headers: { 
    "Content-Type": "application/x-www-form-urlencoded"
  }})
  .then( (response)=>{
    res = response;
  })
  .catch( (error)=>{
    res =error.response;
  });
  return res;

}

export {loginApi , registerApi};