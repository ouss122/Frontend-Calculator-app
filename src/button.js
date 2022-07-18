import theme from "./theme";
 let solved=false;
const Key = ({screen,text,click,index}) => { 
function check(){
  let i=1;
  if (isNaN(parseInt(screen[0]))||isNaN(parseInt(screen[screen.length-1]))){
      return false
  }else{ 
      let b=true
      while (i<screen.length-1 && b){
       if (isNaN(parseInt(screen[i]))){
         b=parseInt(screen[i+1])?true:false   
       }
       i++;
      } 
    return b
  }
 
}
function clicked(e){
    if (!btn1 && !btn2){
        if ((solved && parseInt(text))||screen==='error'){
            click(text)
        }else{
              click(screen+text);
        }
        solved=false
      }else if (btn2){
          solved=true;
          if (check()){
              click(eval(screen.replace('x','*')).toString())
          }else{
              click('error')
          }
      }else if (text==='DEL'){
          if (screen==='error'){
              click('')
          }else{
              click(screen.substr(0,screen.length-1))
          }
          solved=false;
      }else{
          solved=false;
          click('')
      }
     e.target.classList.remove('shadow-custom');
     e.target.classList.add('shadow-custom2');
     e.target.classList.add('hover:shadow-custom2');

     setTimeout(()=>{
      e.target.classList.remove('hover:shadow-custom2');
      e.target.classList.remove('shadow-custom2');
      e.target.classList.add('shadow-custom');
     },200)

}
 let   btn1=text==='DEL'||text==='RESET'?true:false;
 let   btn2=text==='='
    return ( 
        <button
        onClick={clicked} 
        className={'btn w-full h-12 esm:h-16 rounded-md  shadow-custom  font-League '+
             (btn1?(theme[index][3]+' '+ theme[index][4]+' '+theme[index][11]+'  text-lg '):
             btn2?(theme[index][5]+' '+ theme[index][6]+' '+(index===2?theme[index][10]:theme[index][11])+' col-span-2 w-full text-2xl'):
             (theme[index][7]+' '+ theme[index][8]+' text-3xl pt-1 '+theme[index][10]))+
             (text==='RESET'?' col-span-2 w-full text-3xl':'')}>
            {text}
        </button>
     );
}
 
export default Key;