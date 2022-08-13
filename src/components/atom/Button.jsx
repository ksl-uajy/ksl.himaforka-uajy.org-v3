import React from "react";

const Button = ({title, style, styleH}) =>{
    return(
        <div className={style + " bg-buttonColor max-w-fit rounded-full text-center cursor-pointer hover:opacity-90"}>
            <h1 className={styleH + " text-fontColor font-display py-2 px-4 text-sm md:text-base"}>{title}</h1>
        </div>
    )
}
export default Button;