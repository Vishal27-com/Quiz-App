const timeConverter=(time)=>{
    time=Number(time);
    let ss=time%60;
    if(ss<10)ss=`0${ss}`
    let min=Math.floor(time/60);
    if(min<10)min=`0${min}`
    let hh=Math.floor(min/60);
    if(hh<10)hh=`0${hh}`  
  return `${min}min ${ss}sec`
  }
  export default timeConverter;