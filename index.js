
let targetNum = 105;
let num1 = 2;
let num2 = 3;
let num3 = 7;
let num4 = 9;
let num5 = 10;
let num6 = 11;

let num1Status = true;
let num2Status = true;
let num3Status = true;
let num4Status = true;
let num5Status = true;
let num6Status = true;

var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

newdate = year + "/" + month + "/" + day;

let listNums = [];
let states = [];
let currentState = {};
let activatedStates = [];
let currentActivated = {};

function main(gameNum) {
   console.log(gameNum);

   if (newdate == '2023/8/31') {
      listNums0 = [297, 1, 8, 3, 18, 14, 7];
      listNums1 = [224, 5, 16, 9, 7, 6, 20];
      listNums2 = [304, 12, 17, 4, 6, 5, 16];
   }
   if (newdate == '2023/9/1') {
     listNums0 = [459, 15, 21, 12, 9, 8, 7];
     listNums1 = [101, 10, 24, 20, 3, 8, 12];
     listNums2 = [370, 23, 16, 3, 2, 8, 7];
   }
   if (newdate == '2023/9/2') {
     listNums0 = [350, 3, 1, 14, 12, 8, 4];
     listNums1 = [378, 8, 5, 7, 22, 1, 19];
     listNums2 = [55, 6, 12, 21, 7, 5, 2];
   }
   if (newdate == '2023/9/3') {
     listNums0 = [424, 5, 4, 9, 13, 1, 15];
     listNums1 = [202, 12, 22, 6, 8, 3, 11];
     listNums2 = [448, 7, 1, 5, 13, 8, 18];
   }
   if (newdate == '2023/9/4') {
     listNums0 = [473, 22, 5, 8, 11, 1, 6];
     listNums1 = [169, 8, 14, 9, 7, 1, 22];
     listNums2 = [405, 15, 9, 4, 8, 21, 12];
   }
   if (newdate == '2023/9/5') {
     listNums0 = [494, 13, 9, 8, 7, 19, 6];
     listNums1 = [388, 20, 3, 6, 16, 1, 7];
     listNums2 = [182, 1, 5, 19, 14, 6, 4];
   }
   if (newdate == '2023/9/6') {
     listNums0 = [358, 7, 18, 4, 24, 6, 2];
     listNums1 = [416, 11, 14, 5, 1, 13, 17];
     listNums2 = [71, 1, 7, 2, 8, 22, 3];
   }
   if (newdate == '2023/9/7') {
     listNums0 = [102, 12, 5, 21, 10, 20, 7];
     listNums1 = [494, 10, 1, 6, 4, 25, 21];
     listNums2 = [366, 20, 2, 12, 1, 7, 21];
   }
   if (newdate == '2023/9/8') {
     listNums0 = [302, 15, 8, 2, 20, 4, 1];
     listNums1 = [326, 17, 3, 4, 9, 16, 8];
     listNums2 = [194, 6, 24, 17, 10, 1, 9];
   }
   if (newdate == '2023/9/9') {
     listNums0 = [97, 3, 21, 11, 4, 9, 10];
     listNums1 = [388, 20, 9, 3, 8, 21, 7];
     listNums2 = [117, 7, 6, 25, 19, 8, 4];
   }
   if (gameNum == 0) {
      targetNum = listNums0[0];
      num1 = listNums0[1];
      num2 = listNums0[2];
      num3 = listNums0[3];
      num4 = listNums0[4];
      num5 = listNums0[5];
      num6 = listNums0[6];
   }
   if (gameNum == 1) {
      targetNum = listNums1[0];
      num1 = listNums1[1];
      num2 = listNums1[2];
      num3 = listNums1[3];
      num4 = listNums1[4];
      num5 = listNums1[5];
      num6 = listNums1[6];
   }
   if (gameNum == 2) {
      targetNum = listNums2[0];
      num1 = listNums2[1];
      num2 = listNums2[2];
      num3 = listNums2[3];
      num4 = listNums2[4];
      num5 = listNums2[5];
      num6 = listNums2[6];
   }


   document.getElementById("targetNumber").innerHTML = targetNum;
   document.getElementById("button1").innerHTML = num1;
   document.getElementById("button2").innerHTML = num2;
   document.getElementById("button3").innerHTML = num3;
   document.getElementById("button4").innerHTML = num4;
   document.getElementById("button5").innerHTML = num5;
   document.getElementById("button6").innerHTML = num6;

}

function changeClass(id) {
   num1 = Number(document.getElementById('button1').innerHTML);
   num2 = Number(document.getElementById('button2').innerHTML);
   num3 = Number(document.getElementById('button3').innerHTML);
   num4 = Number(document.getElementById('button4').innerHTML);
   num5 = Number(document.getElementById('button5').innerHTML);
   num6 = Number(document.getElementById('button6').innerHTML);
   currentState = { "num1": [num1, num1Status], "num2": [num2, num2Status], "num3": [num3, num3Status], "num4": [num4, num4Status], "num5": [num5, num5Status], "num6": [num6, num6Status] };
   console.log(currentState["num1"]);
   console.log("3: " + num1);
   let madeMove = false;
   let isNumSelected = false;
   let isSymbolSelected = false;
   let selectedNums = document.querySelectorAll('.selectedNum');
   let selectedSyms = document.querySelectorAll('.selectedSymbol');
   let allNums = document.querySelectorAll('.numButton');
   let winText = document.querySelectorAll('.winText');
   let symbol = "";
   let newNum = 0;

   selectedNums.forEach(num => {
      isNumSelected = true;
   });
   selectedSyms.forEach(sym => {
      isSymbolSelected = true;
   });

   console.log("4: " + num1);
   if ($('#' + id).hasClass('unselectedSymbol')) {
      if (isNumSelected) {
         $('#' + id).removeClass('unselectedSymbol');

         if (isNumSelected) {
            selectedSyms.forEach(sym => {
               sym.classList.remove('selectedSymbol');
               sym.classList.add("unselectedSymbol")
            });
         }

         $('#' + id).addClass('selectedSymbol');

      }

   }
   else if ($('#' + id).hasClass('selectedSymbol')) {
      $('#' + id).removeClass('selectedSymbol');
      $('#' + id).addClass('unselectedSymbol');
   }

   if ($('#' + id).hasClass('unselectedNum')) {
      console.log("5: " + num1);
      selectedNums = document.querySelectorAll('.selectedNum');

      if (isNumSelected) {
         let number;
         selectedNums.forEach(num => {
            num.classList.remove('selectedNum');
            num.classList.add("unselectedNum");
            console.log(num.id);
            number = num;
            if (isSymbolSelected) {
               selectedSyms.forEach(sym => {
                  sym.classList.remove('selectedSymbol');
                  sym.classList.add("unselectedSymbol");
                  symbol = sym;
                  console.log("6: " + num1);
               });
               console.log(symbol.id);
               if (symbol.id == "plusButton") {
                  newNum = Number(document.getElementById(num.id).innerHTML) + Number(document.getElementById(id).innerHTML);
                  madeMove = true;
                  number.classList.add("gettingUsed");
                  $('#' + id).addClass("gettingChanged");
               }
               if (symbol.id == "minusButton") {
                  if (Number(document.getElementById(num.id).innerHTML) - Number(document.getElementById(id).innerHTML) >= 0) {
                     newNum = Number(document.getElementById(num.id).innerHTML) - Number(document.getElementById(id).innerHTML);
                     madeMove = true;
                     number.classList.add("gettingUsed");
                     $('#' + id).addClass("gettingChanged");
                  }
                  else {
                     console.log("7: " + num1);
                     newNum = Number(document.getElementById(id).innerHTML);

                  }
               }
               if (symbol.id == "timesButton") {
                  newNum = Number(document.getElementById(num.id).innerHTML) * Number(document.getElementById(id).innerHTML);
                  if (newNum < 10000) {
                     madeMove = true;
                     number.classList.add("gettingUsed");
                     $('#' + id).addClass("gettingChanged");
                  } else {
                     newNum = Number(document.getElementById(id).innerHTML);
                  }

               }
               if (symbol.id == "divideButton") {
                  if (Number(document.getElementById(num.id).innerHTML) % Number(document.getElementById(id).innerHTML) === 0) {
                     newNum = Number(document.getElementById(num.id).innerHTML) / Number(document.getElementById(id).innerHTML);
                     madeMove = true;
                     number.classList.add("gettingUsed");
                     $('#' + id).addClass("gettingChanged");
                     console.log("8: " + num1);
                  }
                  else {
                     newNum = Number(document.getElementById(id).innerHTML);
                  }

               }
               madeMove = true;
               console.log(newNum);


               document.getElementById(id).innerHTML = newNum;

               setTimeout(() => { $('#' + id).removeClass('gettingChanged'); }, 1800);
            }

         });
      }
      $('#' + id).removeClass('unselectedNum');

      $('#' + id).addClass('selectedNum');

   } else if ($('#' + id).hasClass('selectedNum')) {
      $('#' + id).removeClass('selectedNum');
      $('#' + id).addClass('unselectedNum');
      selectedSyms.forEach(sym => {
         sym.classList.remove('selectedSymbol');
         sym.classList.add("unselectedSymbol");
      });
      console.log("10: " + num1);
   } else if ($('#' + id).hasClass('undoButton')) {
      currentState = states[states.length - 1];
      console.log("hhhhh: " + currentState["num1"][0]);
      if (currentState != undefined) {
         if (currentState["num1"][1] == true) {
            if ($('#button1').hasClass('gettingUsed')) {
               $('#button1').removeClass('gettingUsed')
               console.log("11: " + num1);
            }
            if ($('#button1').hasClass('gettingChanged')) {
               $('#button1').removeClass('gettingChanged')
            }
            document.getElementById('button1').innerHTML = currentState["num1"][0];
         }
         if (currentState["num2"][1] == true) {
            if ($('#button2').hasClass('gettingUsed')) {
               $('#button2').removeClass('gettingUsed')
            }
            if ($('#button2').hasClass('gettingChanged')) {
               $('#button2').removeClass('gettingChanged')
            }
            document.getElementById('button2').innerHTML = currentState["num2"][0];
         }
         if (currentState["num3"][1] == true) {
            if ($('#button3').hasClass('gettingUsed')) {
               $('#button3').removeClass('gettingUsed')
            }
            if ($('#button3').hasClass('gettingChanged')) {
               $('#button3').removeClass('gettingChanged')
            }
            document.getElementById('button3').innerHTML = currentState["num3"][0];
         }
         if (currentState["num4"][1] == true) {
            if ($('#button4').hasClass('gettingUsed')) {
               $('#button4').removeClass('gettingUsed')
            }
            if ($('#button4').hasClass('gettingChanged')) {
               $('#button4').removeClass('gettingChanged')
            }
            document.getElementById('button4').innerHTML = currentState["num4"][0];
         }
         if (currentState["num5"][1] == true) {
            if ($('#button5').hasClass('gettingUsed')) {
               $('#button5').removeClass('gettingUsed')
            }
            if ($('#button5').hasClass('gettingChanged')) {
               $('#button5').removeClass('gettingChanged')
            }
            document.getElementById('button5').innerHTML = currentState["num5"][0];
         }
         if (currentState["num6"][1] == true) {
            if ($('#button6').hasClass('gettingUsed')) {
               $('#button6').removeClass('gettingUsed')
            }
            if ($('#button6').hasClass('gettingChanged')) {
               $('#button6').removeClass('gettingChanged')
            }
            document.getElementById('button6').innerHTML = currentState["num6"][0];
         }
         states.splice(states.length - 1, 1);
         console.log(states);
      }
   }


   if (madeMove) {
      console.log("12: " + num1);
      states.push(currentState);
      console.log(states);
      let hiddenNums = document.querySelectorAll('.gettingUsed');
      hiddenNums.forEach(n => {
         if (n.id == "button1") {
            num1Status = false;
         }
         if (n.id == "button2") {
            num2Status = false;
         }
         if (n.id == "button3") {
            num3Status = false;
         }
         if (n.id == "button4") {
            num4Status = false;
         }
         if (n.id == "button5") {
            num5Status = false;
         }
         if (n.id == "button6") {
            num6Status = false;
         }
      });
   }

   allNums.forEach(button => {
      if (button.innerHTML == targetNum) {
         //$('#' + id).addClass('match');
         if (window.location.href == "https://conder13.github.io/digits/game.html") {
            setTimeout(() => { window.location.href = "game1.html"; }, 1800);
         }
         if (window.location.href == "https://conder13.github.io/digits/game1.html") {
            setTimeout(() => { window.location.href = "game2.html"; }, 1800);
         }
         if (window.location.href == "https://conder13.github.io/digits/game2.html") {
            setTimeout(() => { window.location.href = "end.html"; }, 1800);
         }


      }

   });

   console.log("13: " + num1);
}

function challenge() {
   console.log(newdate);

   listNums = [343, 3, 7, 22, 14, 10, 5];

   targetNum = listNums[0];
   num1 = listNums[1];
   num2 = listNums[2];
   num3 = listNums[3];
   num4 = listNums[4];
   num5 = listNums[5];
   num6 = listNums[6];

   document.getElementById("targetNumber").innerHTML = targetNum;
   document.getElementById("button1").innerHTML = num1;
   document.getElementById("button2").innerHTML = num2;
   document.getElementById("button3").innerHTML = num3;
   document.getElementById("button4").innerHTML = num4;
   document.getElementById("button5").innerHTML = num5;
   document.getElementById("button6").innerHTML = num6;

}
