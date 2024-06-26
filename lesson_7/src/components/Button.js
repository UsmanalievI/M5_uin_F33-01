import React from "react";
import { forwardRef } from "react";

export const Button=forwardRef(({
    children,
    variant='primary',
    padding,
    width,
    disabled,
    className,
    fontSize,
    ...restProps
}, ref)=>{
    return(
        <button
            ref={ref}
            className={[variant+'Button']}
            style={{padding:padding, width:width, fontSize:fontSize}}
            disabled={disabled}
            {...restProps}
        >
            {children}
        </button>
    )
})