import React from "react";
import { useState } from "react";

export const Input=({startIcon, endIcon, containerClassName, label, isError, type, value, name, ...props})=>{

    const [isPassOpen, setIsPassOpen]=useState(false)
    return(
        <>
            <div style={{display: "flex", flexDirection: 'column',}}>
                {label && <label className="label">{label}</label>}
                <div className={`inputContainer ${containerClassName}`}>
                    <div className="startIcon">
                        {startIcon}
                    </div>
                    <input className={`input ${isError?'error': ''}`}
                        {...props}
                        type={props.type==='password'? isPassOpen ? 'text' : 'password' : props.type|| 'text'} 
                        value={value}   
                    />
                    <div className="endIcon">
                        {props.type==='password'? <div className="eye">
                            {isPassOpen?
                                <img src="" alt="openEye"/>
                                :<img src="" alt="closeEye"/>
                            }
                        </div>: endIcon}
                    </div>
            </div>

            </div>
            
        </>
    )
}