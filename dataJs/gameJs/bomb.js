var myArray = [0,0,0,0,0,0];
var myArray2 = [0,0,0,0,0,0];
var myArray3 = [0,0,0,0,0,0];
var myArray4 = [0,0,0,0,0,0];
var myArray5 = [0,0,0,0,0,0];
var i,j,k,l;

function start() {

  for (i = 0; i < 6; i++) {
    j = Math.floor(Math.random() * 2 + 1);
    document.write("<img src=\"../../../static/light" + j + ".png\" style='height: 180px;width: 12%;'>");
    myArray[i] += j;
  }
  for (i = 0; i < 1; i++) {
    j = Math.floor(Math.random() * 2 + 1);
    document.write("<img src=\"../../../static/battery" + j + ".png\" style='height: 150px;width: 12%;'>");
    myArray2[i] += j;
  }
  for (i = 0; i < 1; i++) {
    k = Math.floor(Math.random() * 10);
    k += 48720;
    document.write("序列号：" + k);
  }
  document.write("<br>");
  for (i = 0; i < 6; i++) {
    j = Math.floor(Math.random() * 6 + 1);
    myArray[i] += j * 10;
    document.write("<img src=\"../../../static/" + j + ".png\" id='img" + i + "' style='height: 300px;width: 12%;margin-top: -47px;'>");
    myArray5[i]=j+6;
  }
  for (i = 0; i < 1; i++) {
    j = Math.floor(Math.random() * 2 + 1);
    document.write("<img src=\"../../../static/interface" + j + ".png\" style='height: 130px;width: 24%;'>");
    myArray3[i] += j;
  }
  document.write("<br>");
  for (i = 0; i < 6; i++) {
    j = Math.floor(Math.random() * 2 + 1);
    document.write("<img src=\"../../../static/star" + j + ".png\" style='height: 150px;width: 12%;margin-top: -47px;'>");
    myArray[i] += j * 100;
  }
  document.write("<br>");
  // document.write("<button onclick='mark()' style='float: bottom'><span style='font-size: 50px;'>结算</span></button>")
  document.write("<button id='but' style='float: bottom;border-radius: 20px;background-color:white;float: right;position: absolute;right: 45%;outline: none'><span style='font-size: 40px;font-family: LiSu;padding: 10px;'>结算</span></button>")

  document.getElementById("but").onclick=function () {
    if (myArray4[0]===1&&myArray4[1]===1&&myArray4[2]===1&&myArray4[3]===1&&myArray4[4]===1&&myArray4[5]===1){
      document.write("<img src=\"../../../static/good.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -34%;margin-left: -1%;'>")
      document.write("<button id='but1' style='float: bottom;border-radius: 20px;background-color:white;float: right;position: absolute;right: 45%;bottom: 5%;outline: none'><span style='font-size: 40px;font-family: LiSu;padding: 10px;'>完成</span></button>")
      document.getElementById("but1").onclick=function () {
        window.location.reload();
      }
    }
    else{
      document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -34%;margin-left: -1%;'>");
      document.write("<button id='but1' style='float: bottom;border-radius: 20px;background-color:white;float: right;position: absolute;right: 45%;bottom: 5%;outline: none'><span style='font-size: 40px;font-family: LiSu;padding: 10px;'>撤退</span></button>")
      document.getElementById("but1").onclick=function () {
        window.location.reload();
      }
    }
  }
  document.getElementById("but").onmouseover=function () {
    this.style.cursor="pointer";
  }


  if (myArray[0] === 231 || myArray[0] === 141 || myArray[0] === 122 || myArray[0] === 162) {
    myArray4[0]=1;
  } else if (myArray[0] === 211 || myArray[0] === 111 || myArray[0] === 131 || myArray[0] === 151 || myArray[0] === 251) {
    if (myArray2[0] === 1) {
      myArray4[0]=1;
    }
  } else if (myArray[0] === 221 || myArray[0] === 261 || myArray[0] === 121 || myArray[0] === 161 || myArray[0] === 142) {
    if (myArray3[0] === 2) {
      myArray4[0]=1;
    }
  } else if (myArray[0] === 212 || myArray[0] === 242 || myArray[0] === 252 || myArray[0] === 262 || myArray[0] === 222 || myArray[0] === 241) {
    if (k % 2 === 1) {
      myArray4[0]=1;
    }
  }

  if (myArray[1] === 231 || myArray[1] === 141 || myArray[1] === 122 || myArray[1] === 162) {
    myArray4[1]=1;
  } else if (myArray[1] === 211 || myArray[1] === 111 || myArray[1] === 131 || myArray[1] === 151 || myArray[1] === 251) {
    if (myArray2[1] === 1) {
      myArray4[1]=1;
    }
  } else if (myArray[1] === 221 || myArray[1] === 261 || myArray[1] === 121 || myArray[1] === 161 || myArray[1] === 142) {
    if (myArray3[1] === 2) {
      myArray4[1]=1;
    }
  } else if (myArray[1] === 212 || myArray[1] === 242 || myArray[1] === 252 || myArray[1] === 262 || myArray[1] === 222 || myArray[1] === 241) {
    if (k % 2 === 1) {
      myArray4[1]=1;
    }
  }

  if (myArray[2] === 231 || myArray[2] === 141 || myArray[2] === 122 || myArray[2] === 162) {
    myArray4[2]=1;
  } else if (myArray[2] === 211 || myArray[2] === 111 || myArray[2] === 131 || myArray[2] === 151 || myArray[2] === 251) {
    if (myArray2[2] === 1) {
      myArray4[2]=1;
    }
  } else if (myArray[2] === 221 || myArray[2] === 261 || myArray[2] === 121 || myArray[2] === 161 || myArray[2] === 142) {
    if (myArray3[2] === 2) {
      myArray4[2]=1;
    }
  } else if (myArray[2] === 212 || myArray[2] === 242 || myArray[2] === 252 || myArray[2] === 262 || myArray[2] === 222 || myArray[2] === 241) {
    if (k % 2 === 1) {
      myArray4[2]=1;
    }
  }
  if (myArray[3] === 231 || myArray[3] === 141 || myArray[3] === 122 || myArray[3] === 162) {
    myArray4[3]=1;
  } else if (myArray[3] === 211 || myArray[3] === 111 || myArray[3] === 131 || myArray[3] === 151 || myArray[3] === 251) {
    if (myArray2[3] === 1) {
      myArray4[3]=1;
    }
  } else if (myArray[3] === 221 || myArray[3] === 261 || myArray[3] === 121 || myArray[3] === 161 || myArray[3] === 142) {
    if (myArray3[3] === 2) {
      myArray4[3]=1;
    }
  } else if (myArray[3] === 212 || myArray[3] === 242 || myArray[3] === 252 || myArray[3] === 262 || myArray[3] === 222 || myArray[3] === 241) {
    if (k % 2 === 1) {
      myArray4[3]=1;
    }
  }
  if (myArray[4] === 231 || myArray[4] === 141 || myArray[4] === 122 || myArray[4] === 162) {
    myArray4[4]=1;
  } else if (myArray[4] === 211 || myArray[4] === 111 || myArray[4] === 131 || myArray[4] === 151 || myArray[4] === 251) {
    if (myArray2[4] === 1) {
      myArray4[4]=1;
    }
  } else if (myArray[4] === 221 || myArray[4] === 261 || myArray[4] === 121 || myArray[4] === 161 || myArray[4] === 142) {
    if (myArray3[4] === 2) {
      myArray4[4]=1;
    }
  } else if (myArray[4] === 212 || myArray[4] === 242 || myArray[4] === 252 || myArray[4] === 262 || myArray[4] === 222 || myArray[4] === 241) {
    if (k % 2 === 1) {
      myArray4[4]=1;
    }
  }
  if (myArray[5] === 231 || myArray[5] === 141 || myArray[5] === 122 || myArray[5] === 162) {
    myArray4[5]=1;
  } else if (myArray[5] === 211 || myArray[5] === 111 || myArray[5] === 131 || myArray[5] === 151 || myArray[5] === 251) {
    if (myArray2[5] === 1) {
      myArray4[5]=1;
    }
  } else if (myArray[5] === 221 || myArray[5] === 261 || myArray[5] === 121 || myArray[5] === 161 || myArray[5] === 142) {
    if (myArray3[5] === 2) {
      myArray4[5]=1;
    }
  } else if (myArray[5] === 212 || myArray[5] === 242 || myArray[5] === 252 || myArray[5] === 262 || myArray[5] === 222 || myArray[5] === 241) {
    if (k % 2 === 1) {
      myArray4[5]=1;
    }
  }






  document.getElementById('img0').onclick = function () {
    l=myArray5[0];
    if (myArray[0] === 231 || myArray[0] === 141 || myArray[0] === 122 || myArray[0] === 162) {
      // document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -38%;margin-left: -13%;'>")
      document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -34%;margin-left: -1%;'>");
      document.write("<button id='but1' style='float: bottom;border-radius: 20px;background-color:white;float: right;position: absolute;right: 45%;bottom: 5%;outline: none'><span style='font-size: 40px;font-family: LiSu;padding: 10px;'>撤退</span></button>")
      document.getElementById("but1").onclick=function () {
        window.location.reload();
      }
    } else if (myArray[0] === 211 || myArray[0] === 111 || myArray[0] === 131 || myArray[0] === 151 || myArray[0] === 251) {
      if (myArray2[0] === 1) {
        // document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -38%;margin-left: -13%;'>")
        document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -34%;margin-left: -1%;'>");
        document.write("<button id='but1' style='float: bottom;border-radius: 20px;background-color:white;float: right;position: absolute;right: 45%;bottom: 5%;outline: none'><span style='font-size: 40px;font-family: LiSu;padding: 10px;'>撤退</span></button>")
        document.getElementById("but1").onclick=function () {
          window.location.reload();
        }
      } else {
        document.getElementById('img0').src="../../../static/"+l+".png";
        myArray4[0]=1;
      }
    } else if (myArray[0] === 221 || myArray[0] === 261 || myArray[0] === 121 || myArray[0] === 161 || myArray[0] === 142) {
      if (myArray3[0] === 2) {
        // document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -38%;margin-left: -13%;'>")
        document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -34%;margin-left: -1%;'>");
        document.write("<button id='but1' style='float: bottom;border-radius: 20px;background-color:white;float: right;position: absolute;right: 45%;bottom: 5%;outline: none'><span style='font-size: 40px;font-family: LiSu;padding: 10px;'>撤退</span></button>")
        document.getElementById("but1").onclick=function () {
          window.location.reload();
        }
      } else {
        document.getElementById('img0').src="../../../static/"+l+".png";
        myArray4[0]=1;
      }
    } else if (myArray[0] === 212 || myArray[0] === 242 || myArray[0] === 252 || myArray[0] === 262 || myArray[0] === 222 || myArray[0] === 241) {
      if (k % 2 === 1) {
        // document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -38%;margin-left: -13%;'>")
        document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -34%;margin-left: -1%;'>");
        document.write("<button id='but1' style='float: bottom;border-radius: 20px;background-color:white;float: right;position: absolute;right: 45%;bottom: 5%;outline: none'><span style='font-size: 40px;font-family: LiSu;padding: 10px;'>撤退</span></button>")
        document.getElementById("but1").onclick=function () {
          window.location.reload();
        }
      } else {
        document.getElementById('img0').src="../../../static/"+l+".png";
        myArray4[0]=1;
      }
    } else {
      document.getElementById('img0').src="../../../static/"+l+".png";
      myArray4[0]=1;
    }
  }

  document.getElementById('img1').onclick = function () {
    l=myArray5[1];
    if (myArray[1] === 231 || myArray[1] === 141 || myArray[1] === 122 || myArray[1] === 162) {
      // document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -38%;margin-left: -13%;'>")
      document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -34%;margin-left: -1%;'>");
      document.write("<button id='but1' style='float: bottom;border-radius: 20px;background-color:white;float: right;position: absolute;right: 45%;bottom: 5%;outline: none'><span style='font-size: 40px;font-family: LiSu;padding: 10px;'>撤退</span></button>")
      document.getElementById("but1").onclick=function () {
        window.location.reload();
      }
    } else if (myArray[1] === 211 || myArray[1] === 111 || myArray[1] === 131 || myArray[1] === 151 || myArray[1] === 251) {
      if (myArray2[1] === 1) {
        // document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -38%;margin-left: -13%;'>")
        document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -34%;margin-left: -1%;'>");
        document.write("<button id='but1' style='float: bottom;border-radius: 20px;background-color:white;float: right;position: absolute;right: 45%;bottom: 5%;outline: none'><span style='font-size: 40px;font-family: LiSu;padding: 10px;'>撤退</span></button>")
        document.getElementById("but1").onclick=function () {
          window.location.reload();
        }
      } else {
        document.getElementById('img1').src="../../../static/"+l+".png";
        myArray4[1]=1;
      }
    } else if (myArray[1] === 221 || myArray[1] === 261 || myArray[1] === 121 || myArray[1] === 161 || myArray[1] === 142) {
      if (myArray3[1] === 2) {
        // document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -38%;margin-left: -13%;'>")
        document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -34%;margin-left: -1%;'>");
        document.write("<button id='but1' style='float: bottom;border-radius: 20px;background-color:white;float: right;position: absolute;right: 45%;bottom: 5%;outline: none'><span style='font-size: 40px;font-family: LiSu;padding: 10px;'>撤退</span></button>")
        document.getElementById("but1").onclick=function () {
          window.location.reload();
        }
      } else {
        document.getElementById('img1').src="../../../static/"+l+".png";
        myArray4[1]=1;
      }
    } else if (myArray[1] === 212 || myArray[1] === 242 || myArray[1] === 252 || myArray[1] === 262 || myArray[1] === 222 || myArray[1] === 241) {
      if (k % 2 === 1) {
        // document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -38%;margin-left: -13%;'>")
        document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -34%;margin-left: -1%;'>");
        document.write("<button id='but1' style='float: bottom;border-radius: 20px;background-color:white;float: right;position: absolute;right: 45%;bottom: 5%;outline: none'><span style='font-size: 40px;font-family: LiSu;padding: 10px;'>撤退</span></button>")
        document.getElementById("but1").onclick=function () {
          window.location.reload();
        }
      } else {
        document.getElementById('img1').src="../../../static/"+l+".png";
        myArray4[1]=1;
      }
    } else {
      document.getElementById('img1').src="../../../static/"+l+".png";
      myArray4[1]=1;
    }
  }

  document.getElementById('img2').onclick = function () {
    l=myArray5[2];
    if (myArray[2] === 231 || myArray[2] === 141 || myArray[2] === 122 || myArray[2] === 162) {
      // document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -38%;margin-left: -13%;'>")
      document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -34%;margin-left: -1%;'>");
      document.write("<button id='but1' style='float: bottom;border-radius: 20px;background-color:white;float: right;position: absolute;right: 45%;bottom: 5%;outline: none'><span style='font-size: 40px;font-family: LiSu;padding: 10px;'>撤退</span></button>")
      document.getElementById("but1").onclick=function () {
        window.location.reload();
      }
    } else if (myArray[2] === 211 || myArray[2] === 111 || myArray[2] === 131 || myArray[2] === 151 || myArray[2] === 251) {
      if (myArray2[2] === 1) {
        // document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -38%;margin-left: -13%;'>")
        document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -34%;margin-left: -1%;'>");
        document.write("<button id='but1' style='float: bottom;border-radius: 20px;background-color:white;float: right;position: absolute;right: 45%;bottom: 5%;outline: none'><span style='font-size: 40px;font-family: LiSu;padding: 10px;'>撤退</span></button>")
        document.getElementById("but1").onclick=function () {
          window.location.reload();
        }
      } else {
        document.getElementById('img2').src="../../../static/"+l+".png";
        myArray4[2]=1;
      }
    } else if (myArray[2] === 221 || myArray[2] === 261 || myArray[2] === 121 || myArray[2] === 161 || myArray[2] === 142) {
      if (myArray3[2] === 2) {
        // document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -38%;margin-left: -13%;'>")
        document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -34%;margin-left: -1%;'>");
        document.write("<button id='but1' style='float: bottom;border-radius: 20px;background-color:white;float: right;position: absolute;right: 45%;bottom: 5%;outline: none'><span style='font-size: 40px;font-family: LiSu;padding: 10px;'>撤退</span></button>")
        document.getElementById("but1").onclick=function () {
          window.location.reload();
        }
      } else {
        document.getElementById('img2').src="../../../static/"+l+".png";
        myArray4[2]=1;
      }
    } else if (myArray[2] === 212 || myArray[2] === 242 || myArray[2] === 252 || myArray[2] === 262 || myArray[2] === 222 || myArray[2] === 241) {
      if (k % 2 === 1) {
        // document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -38%;margin-left: -13%;'>")
        document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -34%;margin-left: -1%;'>");
        document.write("<button id='but1' style='float: bottom;border-radius: 20px;background-color:white;float: right;position: absolute;right: 45%;bottom: 5%;outline: none'><span style='font-size: 40px;font-family: LiSu;padding: 10px;'>撤退</span></button>")
        document.getElementById("but1").onclick=function () {
          window.location.reload();
        }
      } else {
        document.getElementById('img2').src="../../../static/"+l+".png";
        myArray4[2]=1;
      }
    } else {
      document.getElementById('img2').src="../../../static/"+l+".png";
      myArray4[2]=1;
    }
  }

  document.getElementById('img3').onclick = function () {
    l=myArray5[3];
    if (myArray[3] === 231 || myArray[3] === 141 || myArray[3] === 122 || myArray[3] === 162) {
      // document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -38%;margin-left: -13%;'>")
      document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -34%;margin-left: -1%;'>");
      document.write("<button id='but1' style='float: bottom;border-radius: 20px;background-color:white;float: right;position: absolute;right: 45%;bottom: 5%;outline: none'><span style='font-size: 40px;font-family: LiSu;padding: 10px;'>撤退</span></button>")
      document.getElementById("but1").onclick=function () {
        window.location.reload();
      }
    } else if (myArray[3] === 211 || myArray[3] === 111 || myArray[3] === 131 || myArray[3] === 151 || myArray[3] === 251) {
      if (myArray2[3] === 1) {
        // document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -38%;margin-left: -13%;'>")
        document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -34%;margin-left: -1%;'>");
        document.write("<button id='but1' style='float: bottom;border-radius: 20px;background-color:white;float: right;position: absolute;right: 45%;bottom: 5%;outline: none'><span style='font-size: 40px;font-family: LiSu;padding: 10px;'>撤退</span></button>")
        document.getElementById("but1").onclick=function () {
          window.location.reload();
        }
      } else {
        document.getElementById('img3').src="../../../static/"+l+".png";
        myArray4[3]=1;
      }
    } else if (myArray[3] === 221 || myArray[3] === 261 || myArray[3] === 121 || myArray[3] === 161 || myArray[3] === 142) {
      if (myArray3[3] === 2) {
        // document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -38%;margin-left: -13%;'>")
        document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -34%;margin-left: -1%;'>");
        document.write("<button id='but1' style='float: bottom;border-radius: 20px;background-color:white;float: right;position: absolute;right: 45%;bottom: 5%;outline: none'><span style='font-size: 40px;font-family: LiSu;padding: 10px;'>撤退</span></button>")
        document.getElementById("but1").onclick=function () {
          window.location.reload();
        }
      } else {
        document.getElementById('img3').src="../../../static/"+l+".png";
        myArray4[3]=1;
      }
    } else if (myArray[3] === 212 || myArray[3] === 242 || myArray[3] === 252 || myArray[3] === 262 || myArray[3] === 222 || myArray[3] === 241) {
      if (k % 2 === 1) {
        // document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -38%;margin-left: -13%;'>")
        document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -34%;margin-left: -1%;'>");
        document.write("<button id='but1' style='float: bottom;border-radius: 20px;background-color:white;float: right;position: absolute;right: 45%;bottom: 5%;outline: none'><span style='font-size: 40px;font-family: LiSu;padding: 10px;'>撤退</span></button>")
        document.getElementById("but1").onclick=function () {
          window.location.reload();
        }
      } else {
        document.getElementById('img3').src="../../../static/"+l+".png";
        myArray4[3]=1;
      }
    } else {
      document.getElementById('img3').src="../../../static/"+l+".png";
      myArray4[3]=1;
    }
  }

  document.getElementById('img4').onclick = function () {
    l=myArray5[4];
    if (myArray[4] === 231 || myArray[4] === 141 || myArray[4] === 122 || myArray[4] === 162) {
      // document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -38%;margin-left: -13%;'>")
      document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -34%;margin-left: -1%;'>");
      document.write("<button id='but1' style='float: bottom;border-radius: 20px;background-color:white;float: right;position: absolute;right: 45%;bottom: 5%;outline: none'><span style='font-size: 40px;font-family: LiSu;padding: 10px;'>撤退</span></button>")
      document.getElementById("but1").onclick=function () {
        window.location.reload();
      }
    } else if (myArray[4] === 211 || myArray[4] === 111 || myArray[4] === 131 || myArray[4] === 151 || myArray[4] === 251) {
      if (myArray2[4] === 1) {
        // document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -38%;margin-left: -13%;'>")
        document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -34%;margin-left: -1%;'>");
        document.write("<button id='but1' style='float: bottom;border-radius: 20px;background-color:white;float: right;position: absolute;right: 45%;bottom: 5%;outline: none'><span style='font-size: 40px;font-family: LiSu;padding: 10px;'>撤退</span></button>")
        document.getElementById("but1").onclick=function () {
          window.location.reload();
        }
      } else {
        document.getElementById('img4').src="../../../static/"+l+".png";
        myArray4[4]=1;
      }
    } else if (myArray[4] === 221 || myArray[4] === 261 || myArray[4] === 121 || myArray[4] === 161 || myArray[4] === 142) {
      if (myArray3[4] === 2) {
        // document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -38%;margin-left: -13%;'>")
        document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -34%;margin-left: -1%;'>");
        document.write("<button id='but1' style='float: bottom;border-radius: 20px;background-color:white;float: right;position: absolute;right: 45%;bottom: 5%;outline: none'><span style='font-size: 40px;font-family: LiSu;padding: 10px;'>撤退</span></button>")
        document.getElementById("but1").onclick=function () {
          window.location.reload();
        }
      } else {
        document.getElementById('img4').src="../../../static/"+l+".png";
        myArray4[4]=1;
      }
    } else if (myArray[4] === 212 || myArray[4] === 242 || myArray[4] === 252 || myArray[4] === 262 || myArray[4] === 222 || myArray[4] === 241) {
      if (k % 2 === 1) {
        // document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -38%;margin-left: -13%;'>")
        document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -34%;margin-left: -1%;'>");
        document.write("<button id='but1' style='float: bottom;border-radius: 20px;background-color:white;float: right;position: absolute;right: 45%;bottom: 5%;outline: none'><span style='font-size: 40px;font-family: LiSu;padding: 10px;'>撤退</span></button>")
        document.getElementById("but1").onclick=function () {
          window.location.reload();
        }
      } else {
        document.getElementById('img4').src="../../../static/"+l+".png";
        myArray4[4]=1;
      }
    } else {
      document.getElementById('img4').src="../../../static/"+l+".png";
      myArray4[4]=1;
    }
  }

  document.getElementById('img5').onclick = function () {
    l=myArray5[5];
    if (myArray[5] === 231 || myArray[5] === 141 || myArray[5] === 122 || myArray[5] === 162) {
      // document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -38%;margin-left: -13%;'>")
      document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -34%;margin-left: -1%;'>");
      document.write("<button id='but1' style='float: bottom;border-radius: 20px;background-color:white;float: right;position: absolute;right: 45%;bottom: 5%;outline: none'><span style='font-size: 40px;font-family: LiSu;padding: 10px;'>撤退</span></button>")
      document.getElementById("but1").onclick=function () {
        window.location.reload();
      }
    } else if (myArray[5] === 211 || myArray[5] === 111 || myArray[5] === 131 || myArray[5] === 151 || myArray[5] === 251) {
      if (myArray2[5] === 1) {
        // document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -38%;margin-left: -13%;'>")
        document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -34%;margin-left: -1%;'>");
        document.write("<button id='but1' style='float: bottom;border-radius: 20px;background-color:white;float: right;position: absolute;right: 45%;bottom: 5%;outline: none'><span style='font-size: 40px;font-family: LiSu;padding: 10px;'>撤退</span></button>")
        document.getElementById("but1").onclick=function () {
          window.location.reload();
        }
      } else {
        document.getElementById('img5').src="../../../static/"+l+".png";
        myArray4[5]=1;
      }
    } else if (myArray[5] === 221 || myArray[5] === 261 || myArray[5] === 121 || myArray[5] === 161 || myArray[5] === 142) {
      if (myArray3[5] === 2) {
        // document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -38%;margin-left: -13%;'>")
        document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -34%;margin-left: -1%;'>");
        document.write("<button id='but1' style='float: bottom;border-radius: 20px;background-color:white;float: right;position: absolute;right: 45%;bottom: 5%;outline: none'><span style='font-size: 40px;font-family: LiSu;padding: 10px;'>撤退</span></button>")
        document.getElementById("but1").onclick=function () {
          window.location.reload();
        }
      } else {
        document.getElementById('img5').src="../../../static/"+l+".png";
        myArray4[5]=1;
      }
    } else if (myArray[5] === 212 || myArray[5] === 242 || myArray[5] === 252 || myArray[5] === 262 || myArray[5] === 222 || myArray[5] === 241) {
      if (k % 2 === 1) {
        // document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -38%;margin-left: -13%;'>")
        document.write("<img src=\"../../../static/boom.png\" style='height: 100%;width: 100%;position: absolute;margin-top: -34%;margin-left: -1%;'>");
        document.write("<button id='but1' style='float: bottom;border-radius: 20px;background-color:white;float: right;position: absolute;right: 45%;bottom: 5%;outline: none'><span style='font-size: 40px;font-family: LiSu;padding: 10px;'>撤退</span></button>")
        document.getElementById("but1").onclick=function () {
          window.location.reload();
        }
      } else {
        document.getElementById('img5').src="../../../static/"+l+".png";
        myArray4[5]=1;
      }
    } else {
      document.getElementById('img5').src="../../../static/"+l+".png";
      myArray4[5]=1;
    }
  }
}

export {start}
