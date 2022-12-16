import React from "react";
import { useState } from "react";
import "../styles/Input.css";
function Input({name,onChange}) {
    // const [add,setAdd]=useState("");
    // console.log(add)
    return (
        <div className="input_wrap">
            <input type="text"required onChange={onChange}  />
            <span>{name}</span>
            
        </div>
    )
}
export default  Input;