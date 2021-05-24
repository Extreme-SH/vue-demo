// 全局变量
var Win=0;//每局胜利次数
var Lose=0;//每局失败的次数
var Tie=0;//每局平局的次数
function select(event){
  let index=FComputer();

  let data=-1;

  if (event.target.className=="left"){
    data=1;
  }else if(event.target.className=="center"){
    data=2;
  }else if(event.target.className=="right"){
    data=3;
  }
  
  switch(data){
    case 1:
      document.getElementsByClassName("left")[0].style.cssText="background-size: contain;";
      document.getElementsByClassName("center")[0].style.cssText="background-size: 80px;";
      document.getElementsByClassName("right")[0].style.cssText="background-size: 80px;";
      break;
    case 2:
      document.getElementsByClassName("left")[0].style.cssText="background-size: 80px;";
      document.getElementsByClassName("center")[0].style.cssText="background-size: contain;";
      document.getElementsByClassName("right")[0].style.cssText="background-size: 80px;";
      break;
    case 3:
      document.getElementsByClassName("left")[0].style.cssText="background-size: 80px;";
      document.getElementsByClassName("center")[0].style.cssText="background-size: 80px;";
      document.getElementsByClassName("right")[0].style.cssText="background-size: contain;";
      break;
  }
  let x=data-index
  switch(x)
  {
    case 0:
      document.getElementsByClassName("b")[1].innerHTML=++Tie;
      console.log(document.getElementsByClassName("b")[1]);
      // alert("You Win");
      break;
    case 1:
    case -2:
      document.getElementsByClassName("b")[0].innerHTML=++Win;
      // alert("You Tie");
      break;
    case -1:
    case 2:
      document.getElementsByClassName("b")[2].innerHTML=++Lose;
      // alert("You Lose");
      break;
  }
}
//计算机随机出拳
function FComputer() {
  let index=Math.floor(Math.random()*100)%3+1;//生成一个随机数1，2，3
  switch(index){
    case 1:document.getElementsByClassName("sys")[0].style.cssText="background:url(../../../static/Scissors.png) no-repeat;background-size:contain;";
      break;
    case 2:document.getElementsByClassName("sys")[0].style.cssText="background:url(../../../static/Rock.png) no-repeat;background-size:contain;";
      break;
    case 3:document.getElementsByClassName("sys")[0].style.cssText="background:url(../../../static/Paper.png) no-repeat;background-size:contain;";
      break;
    default:break;
  }
  return index;
}

function end(){
  if(Win>Lose){
    alert("卧槽，牛逼，你赢了!");
  }
  else if(Win<Lose){
    alert("多捞哦，你输了!");
  }
  else{
    alert("摊牌了，你平了!");
  }
  document.getElementsByClassName("left")[0].style.cssText="background-size: 80px;";
  document.getElementsByClassName("center")[0].style.cssText="background-size: 80px;";
  document.getElementsByClassName("right")[0].style.cssText="background-size: 80px;";
  document.getElementsByClassName("sys")[0].style.cssText="background:url(../../../static/Paper.png) no-repeat;background-size:contain;";
  document.getElementsByClassName("b")[0].innerHTML="0";
  document.getElementsByClassName("b")[1].innerHTML="0";
  document.getElementsByClassName("b")[2].innerHTML="0";
  Win=Lose=Tie=0;
}


export {select,end}
