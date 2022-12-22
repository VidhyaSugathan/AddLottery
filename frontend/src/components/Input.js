import React from "react";
import "../styles/Input.css";
function Input({name,onChange,value}) {
    return (
        <div className="input_wrap">
            <input type="text"required onChange={onChange} value={value}  />
            <span>{name}</span>
            
        </div>
    )
}
export default  Input;