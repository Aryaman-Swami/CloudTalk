import axios from 'axios';

export const getUserData = async(id) =>{
 try {
  const res = await axios.get(`http://localhost:8000/getUser/${id}`);
  if(res.status !== 200) throw new Error("Error in fetching user data");
  
  return [null , res];

 } catch (error) {
  console.log(error);
  return [error , null];
 }
}
export const fetchConversation = async(id) =>{
 try {
  const res = await axios.get(`http://localhost:8000/fetchConversation/${id}`);
  if(res.status !== 200) throw new Error("Error in fetching user data");

  return [null , res];

 } catch (error) {
  console.log(error);
  return [error , null];
 }
}
export const sendMessage = async(id , msg) =>{
 try {
  console.log(id , msg)
  const res = await axios.post(`http://localhost:8000/sendMessage`,{id:id , msg : msg});
  if(res.status !== 200) throw new Error("Error in fetching user data");

  return [null , res];

 } catch (error) {
  console.log(error);
  return [error , null];
 }
}