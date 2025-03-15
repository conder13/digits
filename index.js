
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

let listNums0 = [];
let listNums1 = [];
let listNums2 = [];

let states = [];
let currentState = {};
let activatedStates = [];
let currentActivated = {};




function main(gameNum) {
   console.log(gameNum);

   if (newdate == '2025/3/15') {
      listNums0 = [173, 8, 11, 17, 20, 7, 3];
      listNums2 = [471, 7, 17, 12, 14, 10, 8];
   }
   if (newdate == '2025/3/16') {
      listNums0 = [69, 5, 7, 6, 21, 17, 8];
      listNums1 = [217, 16, 6, 9, 10, 2, 22];
      listNums2 = [300, 7, 18, 1, 9, 24, 10];
   }
   if (newdate == '2025/3/17') {
      listNums0 = [263, 9, 17, 10, 6, 14, 5];
      listNums1 = [304, 15, 5, 8, 21, 12, 10];
      listNums2 = [252, 20, 25, 4, 12, 1, 2];
   }
   if (newdate == '2025/3/18') {
      listNums0 = [84, 13, 6, 12, 2, 19, 1];
      listNums1 = [205, 12, 6, 4, 11, 17, 9];
      listNums2 = [359, 7, 18, 6, 9, 4, 16];
   }
   if (newdate == '2025/3/19') {
      listNums0 = [363, 2, 11, 7, 3, 17, 8];
      listNums1 = [214, 22, 5, 10, 6, 13, 7];
      listNums2 = [325, 9, 12, 24, 2, 15, 3];
   }
   if (newdate == '2025/3/20') {
      listNums0 = [344, 14, 16, 8, 13, 7, 3];
      listNums1 = [134, 5, 10, 1, 7, 14, 25];
      listNums2 = [229, 6, 25, 5, 9, 12, 13];
   }
   if (newdate == '2025/3/21') {
      listNums0 = [477, 4, 24, 21, 6, 9, 8];
      listNums1 = [114, 7, 11, 9, 12, 15, 5];
      listNums2 = [491, 7, 19, 1, 2, 10, 11];
   }
   if (newdate == '2025/3/22') {
      listNums0 = [226, 2, 8, 14, 10, 11, 13];
      listNums1 = [421, 7, 14, 8, 22, 1, 10];
      listNums2 = [429, 4, 8, 10, 12, 7, 18];
   }
   if (newdate == '2025/3/23') {
      listNums0 = [185, 11, 1, 5, 25, 9, 15];
      listNums1 = [270, 4, 11, 5, 22, 6, 8];
      listNums2 = [89, 19, 9, 8, 11, 10, 21];
   }
   if (newdate == '2025/3/24') {
      listNums0 = [253, 7, 10, 18, 9, 3, 4];
      listNums1 = [245, 20, 8, 4, 17, 9, 11];
      listNums2 = [257, 4, 5, 3, 21, 12, 11];
   }
   if (newdate == '2025/3/25') {
      listNums0 = [155, 10, 15, 4, 7, 6, 17];
      listNums1 = [326, 3, 5, 15, 7, 9, 10];
      listNums2 = [174, 19, 9, 14, 4, 1, 6];
   }
   if (newdate == '2025/3/26') {
      listNums0 = [269, 12, 3, 17, 14, 1, 2];
      listNums1 = [472, 9, 16, 6, 3, 11, 21];
      listNums2 = [184, 12, 9, 17, 21, 3, 10];
   }
   if (newdate == '2025/3/27') {
      listNums0 = [175, 5, 9, 17, 8, 22, 3];
      listNums1 = [472, 5, 16, 9, 10, 6, 4];
      listNums2 = [320, 2, 25, 4, 3, 8, 9];
   }
   if (newdate == '2025/3/28') {
      listNums0 = [129, 4, 10, 14, 25, 5, 9];
      listNums1 = [332, 6, 7, 8, 21, 5, 20];
      listNums2 = [139, 6, 16, 11, 10, 5, 14];
   }
   if (newdate == '2025/3/29') {
      listNums0 = [74, 9, 8, 5, 12, 10, 22];
      listNums1 = [338, 4, 21, 3, 16, 2, 6];
      listNums2 = [337, 17, 2, 7, 10, 5, 25];
   }
   if (newdate == '2025/3/30') {
      listNums0 = [90, 5, 7, 20, 6, 8, 11];
      listNums1 = [332, 7, 9, 15, 1, 13, 3];
      listNums2 = [73, 10, 3, 16, 2, 7, 21];
   }
   if (newdate == '2025/3/31') {
      listNums0 = [335, 21, 13, 16, 1, 11, 9];
      listNums1 = [128, 8, 18, 7, 12, 3, 9];
      listNums2 = [403, 1, 2, 9, 4, 18, 10];
   }

   if (gameNum == 0) {
      targetNum = listNums0[0];
      num1 = listNums0[1];
      num2 = listNums0[2];
      num3 = listNums0[3];
      num4 = listNums0[4];
      num5 =
         listNums0[5];
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

function switchTabs(newTab, currentTab, save) {
   num1 = Number(document.getElementById('button1').innerHTML);
   num2 = Number(document.getElementById('button2').innerHTML);
   num3 = Number(document.getElementById('button3').innerHTML);
   num4 = Number(document.getElementById('button4').innerHTML);
   num5 = Number(document.getElementById('button5').innerHTML);
   num6 = Number(document.getElementById('button6').innerHTML);
   currentState = { "num1": [num1, num1Status], "num2": [num2, num2Status], "num3": [num3, num3Status], "num4": [num4, num4Status], "num5": [num5, num5Status], "num6": [num6, num6Status] };
   console.log(currentState["num1"]);
   strCurrentState = JSON.stringify(currentState);
   localStorage.setItem("state", strCurrentState);
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
      if (states[states.length - 1] != undefined) {
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
         num1 = Number(document.getElementById('button1').innerHTML);
         num2 = Number(document.getElementById('button2').innerHTML);
         num3 = Number(document.getElementById('button3').innerHTML);
         num4 = Number(document.getElementById('button4').innerHTML);
         num5 = Number(document.getElementById('button5').innerHTML);
         num6 = Number(document.getElementById('button6').innerHTML);
         currentState = { "num1": [num1, num1Status], "num2": [num2, num2Status], "num3": [num3, num3Status], "num4": [num4, num4Status], "num5": [num5, num5Status], "num6": [num6, num6Status] };

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