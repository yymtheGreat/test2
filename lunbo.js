

var click1
var moveevent=function(boxname,long,speed){  
    clearInterval(click1)
    click1=window.setInterval(function (){
    var distance=boxname.offsetLeft
    //到达距离后停止
    if(distance==long){
        clearInterval(click1)
    }
    if(Math.abs(long-boxname.offsetLeft)<speed){
        boxname.style.left=long+'px'
    }
    else {
        if(long-boxname.offsetLeft>0){
            boxname.style.left=distance+speed+'px'
        }
        else{
            boxname.style.left=distance-speed+'px'
        }
    }
   
    },10)

} 
