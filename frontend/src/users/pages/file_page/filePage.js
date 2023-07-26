import React,{useState,useEffect,useContext} from "react";
import { AuthContext } from "../../../context/auth-context";
const FilePage=()=>{
    const [file,setFile]=useState(null)
    const data=useContext(AuthContext)
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(file)
        const formData=new FormData;
        formData.append("file",file)
        const response=await fetch('/upload',{
            method:"POST",
            body:formData,
           encType:"multipart/form-data",
           headers:{
            'Authorization':`BEARER ${data.token}`
        }
        }).then(res =>console.log(res))
        
        // setFile("");
    }
    
    return(
        <>
        <hr/>
        <hr/>
        <hr/>
        <hr/>
        <hr/>
        <form onSubmit={handleSubmit}>
        <input type="file" onChange={(e)=>{setFile(e.target.files[0])}} name="profileImage" />
        <button type="submit" >UPLOAD</button>
        </form>
        </>
    )
}
export default FilePage;