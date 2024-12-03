import { useState } from "react";

function SignUp(){
    const [formData, setFormData]=useState({
         name:"",
         email:"",
         mobile:"",
         userName:"",
         checkBox:false,

    });
    
    const [error, setError]=useState({
        name:false,
        email:false,
        mobile:false,
        userName:false,
        checkBox:false,
    });
    const handleSubmit = (e)=>{
         e.preventDefault()
         const{name, email, mobile, userName, checkBox}= formData;
         setError({
          name:false,
          email:false,
          mobile:false,
          userName:false,
          checkBox:false,
         });
         if(name.trim().length===0){
            setError((prevState)=>{return{...prevState, name:true}})
         }
         if(email.trim().length===0){
            setError((prevState)=>{return{...prevState, email:true}})
         }
         if(mobile.trim().length===0){
            setError((prevState)=>{return{...prevState, mobile:true}})
         }
         if(userName.trim().length===0){
            setError((prevState)=>{return{...prevState, userName:true}})
         }
         if(checkBox===false){
            setError((prevState)=>{return{...prevState, checkBox:true}})
         }
    }
    return(
        <div>
              <h1 style={{
                color:"white"
              }}>Sign Up Form</h1>
              <form style={{
                display:"flex",
                flexDirection:"column",
                width:"80%",
                margin:"0 auto",
                gap: "10px",
              }} onSubmit={handleSubmit}>
                  <input type="text" placeholder="Name" value={formData.name} onChange={(e)=> setFormData({...formData, name:e.target.value})}/>
                  {error.name && <p style={{
                        color:"red",
                        fontSize:"12px",
                        margin:"0",
                  }}>Name is required</p>}
                  <input type="text" placeholder="Email" value={formData.email} onChange={(e)=> setFormData({...formData, email:e.target.value})}/>
                  {error.email && <p style={{
                    color:"red",
                    fontSize:"12px",
                    margin:"0"
                  }}>Email is required</p>}
                  <input type="text" placeholder="Mobile" value={formData.mobile} onChange={(e)=> setFormData({...formData, mobile:e.target.value})}/>
                  {error.mobile && <p style={{
                    color:"red",
                    fontSize:"12px",
                    margin:"0"
                  }}>Mobile is required</p>}
                  <input type="text" placeholder="UserName" value={formData.userName} onChange={(e)=> setFormData({...formData, userName:e.target.value})}/>
                  {error.userName && <p style={{
                    color:"red",
                    fontSize:"12px",
                    margin:"0"
                  }}>UserName is required</p>}
                  <div style={{
                    display: "flex",
                    gap:"10px",
                  }}>
                         <input id="checkbox" type="checkbox" checked={formData.checkBox} onChange={(e)=>setFormData({...formData, checkBox:e.target.checked})}/>
                         <label style={{
                                  color:"white",
                         }} htmlFor="checkbox">Share my registration data with SuperApp</label> 
                  </div>
                  {error.checkBox && <p style={{
                    color:"red",
                    fontSize:"12px",
                    margin:"0",
                  }}>You must agree terms and conditions</p>}
                  <button style={{
                    width:"120px",
                  }} type="submit">Sign Up</button>
              </form>

        </div>
    );
}
export default SignUp;