
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

   if (newdate == '2024/3/21') {
      listNums0 = [53, 7, 13, 10, 5, 14, 6];
      listNums1 = [267, 3, 2, 9, 5, 13, 24];
      listNums2 = [191, 5, 8, 1, 14, 16, 10];
   }
   if (newdate == '2024/3/22') {
      listNums0 = [423, 4, 5, 7, 8, 17, 6];
      listNums1 = [457, 18, 5, 15, 8, 2, 3];
      listNums2 = [449, 8, 2, 14, 4, 16, 12];
   }
   if (newdate == '2024/3/23') {
      listNums0 = [496, 11, 16, 5, 19, 2, 3];
      listNums1 = [474, 1, 20, 8, 13, 11, 6];
      listNums2 = [471, 20, 7, 9, 8, 10, 6];
   }
   if (newdate == '2024/3/24') {
      listNums0 = [464, 11, 8, 15, 14, 3, 5];
      listNums1 = [488, 14, 7, 2, 8, 1, 13];
      listNums2 = [231, 14, 9, 8, 3, 11, 5];
   }
   if (newdate == '2024/3/25') {
      listNums0 = [466, 4, 9, 23, 13, 3, 10];
      listNums1 = [170, 1, 12, 6, 3, 18, 21];
      listNums2 = [448, 8, 5, 12, 20, 10, 2];
   }
   if (newdate == '2024/3/26') {
      listNums0 = [149, 8, 5, 1, 15, 11, 14];
      listNums1 = [68, 9, 8, 10, 12, 23, 3];
      listNums2 = [316, 25, 8, 4, 1, 3, 17];
   }
   if (newdate == '2024/3/27') {
      listNums0 = [115, 11, 3, 12, 17, 7, 9];
      listNums1 = [303, 10, 19, 9, 13, 17, 11];
      listNums2 = [77, 12, 7, 8, 5, 25, 3];
   }
   if (newdate == '2024/3/28') {
      listNums0 = [145, 3, 6, 20, 10, 16, 8];
      listNums1 = [126, 13, 1, 9, 11, 20, 2];
      listNums2 = [293, 1, 4, 7, 10, 19, 6];
   }
   if (newdate == '2024/3/29') {
      listNums0 = [326, 4, 1, 2, 9, 18, 8];
      listNums1 = [439, 10, 6, 13, 9, 12, 14];
      listNums2 = [284, 9, 7, 14, 10, 16, 5];
   }
   if (newdate == '2024/3/30') {
      listNums0 = [365, 2, 3, 4, 18, 10, 16];
      listNums1 = [321, 21, 1, 2, 11, 23, 10];
      listNums2 = [152, 4, 7, 15, 10, 17, 11];
   }
   if (newdate == '2024/3/31') {
      listNums0 = [454, 10, 11, 8, 4, 15, 20];
      listNums1 = [381, 9, 10, 11, 21, 8, 5];
      listNums2 = [409, 1, 9, 16, 19, 12, 7];
   }
   if (newdate == '2024/4/1') {
      listNums0 = [107, 7, 6, 9, 1, 10, 17];
      listNums1 = [128, 17, 2, 11, 7, 6, 25];
      listNums2 = [197, 9, 2, 22, 6, 8, 10];
   }
   if (newdate == '2024/4/2') {
      listNums0 = [58, 5, 4, 10, 21, 22, 13];
      listNums1 = [418, 9, 1, 5, 6, 15, 20];
      listNums2 = [318, 2, 5, 18, 4, 7, 19];
   }
   if (newdate == '2024/4/3') {
      listNums0 = [102, 16, 6, 3, 11, 13, 4];
      listNums1 = [51, 4, 14, 12, 13, 20, 7];
      listNums2 = [140, 12, 3, 9, 11, 14, 13];
   }
   if (newdate == '2024/4/4') {
      listNums0 = [283, 10, 3, 6, 11, 1, 23];
      listNums1 = [246, 14, 5, 9, 10, 8, 3];
      listNums2 = [323, 1, 9, 15, 7, 20, 8];
   }
   if (newdate == '2024/4/5') {
      listNums0 = [402, 11, 5, 12, 8, 22, 18];
      listNums1 = [73, 21, 11, 7, 4, 8, 3];
      listNums2 = [348, 11, 8, 13, 1, 24, 6];
   }
   if (newdate == '2024/4/6') {
      listNums0 = [478, 4, 18, 8, 23, 7, 1];
      listNums1 = [118, 7, 2, 4, 17, 3, 8];
      listNums2 = [69, 16, 3, 10, 6, 21, 9];
   }
   if (newdate == '2024/4/7') {
      listNums0 = [476, 16, 4, 2, 12, 1, 22];
      listNums1 = [452, 23, 9, 6, 17, 2, 3];
      listNums2 = [479, 10, 8, 7, 1, 24, 9];
   }
   if (newdate == '2024/4/8') {
      listNums0 = [369, 3, 10, 7, 23, 9, 8];
      listNums1 = [78, 10, 12, 4, 6, 7, 18];
      listNums2 = [237, 22, 7, 4, 5, 8, 15];
   }
   if (newdate == '2024/4/9') {
      listNums0 = [244, 5, 6, 8, 20, 9, 10];
      listNums1 = [98, 3, 7, 12, 15, 9, 11];
      listNums2 = [215, 8, 21, 3, 4, 6, 15];
   }
   if (newdate == '2024/4/10') {
      listNums0 = [248, 18, 21, 5, 4, 7, 1];
      listNums1 = [405, 5, 9, 2, 20, 16, 12];
      listNums2 = [409, 2, 24, 11, 3, 5, 18];
   }
   if (newdate == '2024/4/11') {
      listNums0 = [212, 3, 6, 5, 17, 20, 4];
      listNums1 = [280, 1, 3, 7, 18, 5, 17];
      listNums2 = [378, 1, 15, 4, 9, 6, 11];
   }
   if (newdate == '2024/4/12') {
      listNums0 = [74, 9, 13, 8, 5, 23, 7];
      listNums1 = [348, 7, 8, 5, 3, 1, 21];
      listNums2 = [137, 7, 8, 24, 10, 9, 19];
   }
   if (newdate == '2024/4/13') {
      listNums0 = [254, 8, 9, 15, 12, 22, 6];
      listNums1 = [104, 3, 23, 11, 8, 7, 12];
      listNums2 = [274, 4, 12, 17, 8, 10, 7];
   }
   if (newdate == '2024/4/14') {
      listNums0 = [266, 19, 12, 9, 6, 2, 7];
      listNums1 = [357, 4, 2, 13, 21, 14, 5];
      listNums2 = [221, 6, 10, 4, 20, 24, 3];
   }
   if (newdate == '2024/4/15') {
      listNums0 = [485, 6, 17, 2, 1, 8, 20];
      listNums1 = [337, 2, 3, 13, 8, 25, 10];
      listNums2 = [445, 9, 4, 6, 15, 2, 16];
   }
   if (newdate == '2024/4/16') {
      listNums0 = [206, 9, 24, 4, 2, 12, 5];
      listNums1 = [387, 9, 1, 12, 17, 15, 5];
      listNums2 = [348, 9, 23, 5, 13, 1, 12];
   }
   if (newdate == '2024/4/17') {
      listNums0 = [66, 6, 18, 5, 7, 20, 2];
      listNums1 = [138, 8, 12, 17, 4, 7, 18];
      listNums2 = [108, 12, 7, 21, 13, 9, 2];
   }
   if (newdate == '2024/4/18') {
      listNums0 = [420, 6, 8, 9, 18, 5, 15];
      listNums1 = [467, 16, 23, 2, 6, 10, 12];
      listNums2 = [199, 2, 6, 23, 21, 5, 12];
   }
   if (newdate == '2024/4/19') {
      listNums0 = [122, 3, 4, 6, 12, 14, 11];
      listNums1 = [87, 1, 25, 2, 20, 10, 6];
      listNums2 = [227, 10, 4, 19, 5, 12, 7];
   }
   if (newdate == '2024/4/20') {
      listNums0 = [167, 21, 20, 3, 10, 13, 9];
      listNums1 = [208, 12, 17, 1, 14, 10, 11];
      listNums2 = [321, 2, 8, 11, 18, 9, 3];
   }
   if (newdate == '2024/4/21') {
      listNums0 = [293, 8, 10, 7, 4, 15, 24];
      listNums1 = [245, 17, 5, 18, 11, 3, 4];
      listNums2 = [67, 15, 8, 9, 2, 17, 6];
   }
   if (newdate == '2024/4/22') {
      listNums0 = [117, 14, 1, 5, 3, 4, 22];
      listNums1 = [80, 12, 2, 16, 6, 9, 3];
      listNums2 = [377, 15, 21, 11, 9, 12, 5];
   }
   if (newdate == '2024/4/23') {
      listNums0 = [75, 22, 12, 10, 9, 4, 13];
      listNums1 = [206, 10, 17, 4, 7, 23, 8];
      listNums2 = [391, 4, 23, 1, 11, 14, 3];
   }
   if (newdate == '2024/4/24') {
      listNums0 = [398, 20, 4, 14, 3, 7, 10];
      listNums1 = [340, 11, 5, 10, 15, 18, 3];
      listNums2 = [449, 10, 1, 13, 2, 4, 17];
   }
   if (newdate == '2024/4/25') {
      listNums0 = [395, 18, 21, 10, 9, 2, 3];
      listNums1 = [226, 16, 8, 2, 9, 24, 3];
      listNums2 = [309, 10, 6, 1, 22, 5, 12];
   }
   if (newdate == '2024/4/26') {
      listNums0 = [365, 4, 1, 18, 5, 14, 10];
      listNums1 = [271, 6, 15, 11, 20, 9, 13];
      listNums2 = [210, 12, 15, 10, 9, 1, 3];
   }
   if (newdate == '2024/4/27') {
      listNums0 = [310, 18, 20, 7, 6, 10, 9];
      listNums1 = [249, 11, 13, 10, 23, 3, 4];
      listNums2 = [387, 5, 3, 10, 20, 14, 6];
   }
   if (newdate == '2024/4/28') {
      listNums0 = [279, 13, 2, 4, 7, 23, 10];
      listNums1 = [89, 8, 25, 1, 12, 3, 2];
      listNums2 = [53, 4, 3, 9, 12, 21, 11];
   }
   if (newdate == '2024/4/29') {
      listNums0 = [191, 10, 11, 2, 6, 7, 25];
      listNums1 = [68, 3, 6, 5, 18, 4, 19];
      listNums2 = [185, 3, 1, 18, 11, 10, 16];
   }
   if (newdate == '2024/4/30') {
      listNums0 = [449, 10, 20, 17, 9, 13, 6];
      listNums1 = [155, 4, 16, 8, 12, 18, 10];
      listNums2 = [368, 3, 2, 13, 10, 17, 12];
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