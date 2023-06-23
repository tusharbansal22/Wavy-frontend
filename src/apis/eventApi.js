import axios from "axios";

const baseUrl ="https://wavy-backend.vercel.app/api/event";

const registerEventApi = async (useremail ,eventname) => {
  let res;
  await axios.post(baseUrl+'/register',{
    useremail:useremail,
    eventname:eventname
  },{headers: { 
    "Content-Type": "application/x-www-form-urlencoded"
  }})
  .then(
    (response) => {
      res = response;
    }
  )
  .catch((e)=>{
    res = e.response;
  });
  return res;
}

export default registerEventApi;