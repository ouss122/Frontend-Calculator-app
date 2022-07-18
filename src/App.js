import { useState } from "react";
import  Key  from "./button";
import theme from './theme'
function App() {
 let [text,setText]=useState('')
 let calc=['7','8','9','DEL',
            '4','5','6','+',
            '1','2','3','-',
            '.','0','/','x',
            'RESET','='
          ]
  let [index,setIndex]=useState(1);
 
  return (
    <div className={theme[index][0]+" h-screen w-auto flex justify-center items-center"}>
         <div className="w-60 esm:w-80">
           <nav className="mb-7 flex justify-between items-end">
             <h1 className={theme[index][9]+" font-bold text-2xl"}>calc</h1>
             <div className="flex items-end h-full">
             <h1 className={"font-League text-sm esm:text-base mr-2 "+theme[index][9]}>THEME</h1>
              <div className={" flex relative px-1 justify-between w-16 esm:w-20 rounded-xl h-5 esm:h-7 "+theme[index][1]}>
                 <div className={(index===0?'left-1':index===1?'left-[24px] esm:left-[30px]':'right-1')+" absolute h-4 w-4 esm:h-5 esm:w-5 top-[2px] esm:top-1 rounded-full "+theme[index][5]}>
                     
                 </div>
                 <div onClick={()=>{
                   setIndex(0);
                 }} className={"h-full w-1/5  btna after:content-['1'] cursor-pointer "+theme[index][9]}></div>
                 <div onClick={()=>{
                   setIndex(1);
                 }} className={"h-full w-1/5  btna after:content-['2'] cursor-pointer "+theme[index][9]}></div>
                 <div onClick={()=>{
                   setIndex(2);
                 }} className={"h-full w-1/5  btna after:content-['3'] cursor-pointer "+theme[index][9]}></div>
              </div>
             </div>
           </nav>
           <div className={theme[index][2]+' '+theme[index][9]+" overflow-x-scroll h-16 rounded-lg  mb-5 text-3xl font-League text-right pt-4 pr-2"}>
              {text}
           </div>
           <div className={theme[index][1]+" gap-3 rounded-xl grid grid-cols-4 grid-rows-5 p-4"}>
             {calc.map((e)=>{
               return (
                 <Key screen={text} index={index} click={setText} key={e} text={e}/>
               )
})}
           </div>
         </div>
    </div>
  )
}

export default App;
