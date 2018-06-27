var timer = 2000;
var i = 1;
function carousel(){
    i = i+1;
    for(j=1;j<5;j++){
        if(j==i){
                document.getElementById('IMG'+j).className="visible";
                }
        else{
            document.getElementById('IMG'+j).className=" ";
            }
    }
    if(i==4){i=0;}else{}
    setTimeout(carousel,timer);
}
function play(){
    setTimeout(carousel,timer);
}
play();
