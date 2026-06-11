import React from 'react'
import { type ReactNode } from 'react'
interface prop{
    isDark:boolean;
    icon:React.ReactNode;
    value:string;
    valueOf:string;
}

const Card = ({isDark,icon,value,valueOf}:prop) => {
  return (
    <>
        <div className={`${isDark?'bg-slate-800 border-slate-700':'bg-white border-slate-200'} flex flex-col justify-center items-center w-[25%] h-50 m-1 border-2`} >
            <div className={`${isDark?'text-slate-400':'text-slate-500'} text-[20px]`}>{icon}</div>
            <div className={`${isDark?'text-slate-100':'text-slate-900'} text-[32px]`}>{value}</div>
            <div className={`${isDark?'text-slate-400':'text-slate-500'} text-[20px]`}>{valueOf}</div>
        </div>
    </>
  )
}

export default Card