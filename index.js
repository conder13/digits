
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

   if (newdate == '2023/8/23') {
      listNums0 = [208, 2, 8, 3, 1, 16, 9];
      listNums1 = [53, 10, 7, 5, 21, 14, 6];
      listNums2 = [433, 14, 11, 10, 18, 12, 3];
   }
   if (newdate == '2023/8/24') {
      listNums0 = [143, 10, 17, 16, 4, 8, 9];
      listNums1 = [124, 13, 18, 12, 3, 1, 20];
      listNums2 = [122, 2, 15, 5, 3, 16, 1];
   }
   if (newdate == '2023/8/25') {
      listNums0 = [213, 1, 24, 4, 3, 13, 12];
      listNums1 = [164, 20, 6, 19, 12, 3, 5];
      listNums2 = [421, 7, 18, 2, 10, 14, 11];
   }
   if (newdate == '2023/8/26') {
      listNums0 = [114, 13, 3, 19, 7, 5, 6];
      listNums1 = [336, 8, 15, 18, 9, 4, 6];
      listNums2 = [424, 10, 4, 2, 9, 25, 7];
   }
   if (newdate == '2023/8/27') {
      listNums0 = [490, 10, 9, 8, 12, 5, 23];
      listNums1 = [415, 2, 1, 14, 9, 18, 6];
      listNums2 = [137, 19, 17, 5, 9, 12, 10];
   }
   if (newdate == '2023/8/28') {
      listNums0 = [326, 7, 20, 3, 9, 5, 25];
      listNums1 = [374, 10, 8, 9, 25, 19, 3];
      listNums2 = [471, 16, 10, 9, 7, 19, 5];
   }
   if (newdate == '2023/8/29') {
      listNums0 = [496, 21, 13, 17, 10, 7, 9];
      listNums1 = [58, 12, 6, 21, 10, 1, 7];
      listNums2 = [388, 1, 3, 18, 4, 5, 17];
   }
   if (newdate == '2023/8/30') {
      listNums0 = [337, 21, 23, 12, 1, 8, 7];
      listNums1 = [498, 19, 12, 5, 9, 6, 20];
      listNums2 = [301, 22, 10, 9, 8, 11, 17];
   }
   if (newdate == '2023/8/31') {
      listNums0 = [297, 1, 8, 3, 18, 14, 7];
      listNums1 = [224, 5, 16, 9, 7, 6, 20];
      listNums2 = [304, 12, 17, 4, 6, 5, 16];
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
         $('#' + id).addClass('match');
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

   listNums = [94, -2, 9, 12, -5, -13, 4];

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