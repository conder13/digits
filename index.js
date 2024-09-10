
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

   if (newdate == '2024/9/10') {
      listNums0 = [220, 11, 4, 7, 22, 19, 3];
      listNums1 = [130, 6, 22, 7, 12, 13, 17];
      listNums2 = [138, 9, 6, 14, 17, 2, 10];
   }
   if (newdate == '2024/9/11') {
      listNums0 = [115, 7, 14, 8, 10, 9, 6];
      listNums1 = [388, 21, 5, 8, 10, 3, 11];
      listNums2 = [299, 6, 21, 22, 2, 9, 4];
   }
   if (newdate == '2024/9/12') {
      listNums0 = [199, 12, 25, 7, 13, 9, 15];
      listNums1 = [469, 7, 9, 11, 14, 8, 24];
      listNums2 = [296, 5, 3, 2, 20, 8, 13];
   }
   if (newdate == '2024/9/13') {
      listNums0 = [317, 6, 11, 20, 9, 12, 14];
      listNums1 = [134, 13, 6, 2, 5, 12, 23];
      listNums2 = [464, 8, 21, 3, 2, 19, 12];
   }
   if (newdate == '2024/9/14') {
      listNums0 = [293, 4, 3, 19, 9, 10, 24];
      listNums1 = [205, 12, 5, 9, 13, 24, 1];
      listNums2 = [272, 9, 7, 10, 3, 15, 2];
   }
   if (newdate == '2024/9/15') {
      listNums0 = [454, 8, 18, 2, 12, 3, 14];
      listNums1 = [53, 20, 11, 4, 16, 9, 6];
      listNums2 = [317, 23, 10, 17, 7, 3, 5];
   }
   if (newdate == '2024/9/16') {
      listNums0 = [377, 9, 3, 6, 7, 11, 23];
      listNums1 = [187, 12, 14, 9, 18, 1, 6];
      listNums2 = [134, 11, 14, 6, 19, 9, 3];
   }
   if (newdate == '2024/9/17') {
      listNums0 = [448, 17, 16, 5, 6, 8, 10];
      listNums1 = [185, 18, 3, 9, 15, 7, 5];
      listNums2 = [356, 22, 12, 4, 6, 8, 5];
   }
   if (newdate == '2024/9/18') {
      listNums0 = [166, 12, 3, 13, 22, 5, 7];
      listNums1 = [72, 6, 4, 11, 3, 12, 20];
      listNums2 = [409, 2, 6, 20, 17, 7, 8];
   }
   if (newdate == '2024/9/19') {
      listNums0 = [134, 7, 14, 5, 2, 15, 11];
      listNums1 = [438, 2, 7, 23, 5, 8, 11];
      listNums2 = [330, 7, 1, 17, 6, 8, 19];
   }
   if (newdate == '2024/9/20') {
      listNums0 = [267, 7, 19, 11, 2, 4, 9];
      listNums1 = [76, 25, 12, 16, 2, 9, 10];
      listNums2 = [81, 4, 13, 6, 20, 9, 19];
   }
   if (newdate == '2024/9/21') {
      listNums0 = [281, 21, 7, 12, 2, 10, 4];
      listNums1 = [270, 8, 4, 23, 10, 1, 19];
      listNums2 = [499, 6, 18, 14, 5, 10, 12];
   }
   if (newdate == '2024/9/22') {
      listNums0 = [353, 19, 10, 11, 5, 21, 8];
      listNums1 = [451, 3, 11, 7, 20, 10, 9];
      listNums2 = [467, 3, 8, 14, 10, 11, 21];
   }
   if (newdate == '2024/9/23') {
      listNums0 = [60, 25, 3, 17, 13, 6, 9];
      listNums1 = [257, 9, 2, 12, 21, 6, 4];
      listNums2 = [432, 7, 6, 1, 20, 9, 5];
   }
   if (newdate == '2024/9/24') {
      listNums0 = [146, 10, 1, 20, 5, 17, 12];
      listNums1 = [141, 9, 14, 4, 2, 20, 10];
      listNums2 = [60, 6, 3, 23, 2, 8, 10];
   }
   if (newdate == '2024/9/25') {
      listNums0 = [256, 12, 6, 23, 3, 11, 8];
      listNums1 = [230, 6, 11, 2, 23, 21, 8];
      listNums2 = [260, 12, 2, 17, 11, 15, 7];
   }
   if (newdate == '2024/9/26') {
      listNums0 = [294, 10, 2, 18, 1, 4, 16];
      listNums1 = [309, 4, 11, 15, 1, 25, 7];
      listNums2 = [381, 18, 1, 7, 12, 8, 5];
   }
   if (newdate == '2024/9/27') {
      listNums0 = [403, 2, 20, 5, 12, 9, 21];
      listNums1 = [445, 10, 1, 19, 8, 7, 3];
      listNums2 = [336, 6, 2, 12, 16, 11, 8];
   }
   if (newdate == '2024/9/28') {
      listNums0 = [337, 20, 7, 1, 10, 4, 17];
      listNums1 = [146, 23, 11, 5, 6, 8, 18];
      listNums2 = [438, 10, 6, 20, 17, 5, 11];
   }
   if (newdate == '2024/9/29') {
      listNums0 = [243, 11, 12, 8, 6, 20, 9];
      listNums1 = [263, 12, 8, 2, 7, 21, 15];
      listNums2 = [111, 1, 2, 11, 9, 3, 21];
   }
   if (newdate == '2024/9/30') {
      listNums0 = [488, 17, 5, 7, 4, 12, 3];
      listNums1 = [496, 5, 10, 4, 16, 19, 9];
      listNums2 = [239, 15, 11, 12, 9, 10, 8];
   }
   if (newdate == '2024/10/1') {
      listNums0 = [136, 8, 22, 1, 13, 3, 5];
      listNums1 = [462, 2, 15, 13, 11, 8, 23];
      listNums2 = [320, 2, 12, 1, 10, 22, 3];
   }
   if (newdate == '2024/10/2') {
      listNums0 = [208, 7, 4, 25, 6, 1, 21];
      listNums1 = [200, 24, 5, 3, 13, 8, 10];
      listNums2 = [175, 25, 8, 7, 4, 10, 15];
   }
   if (newdate == '2024/10/3') {
      listNums0 = [471, 6, 16, 11, 8, 3, 9];
      listNums1 = [170, 8, 2, 7, 1, 18, 24];
      listNums2 = [174, 10, 9, 2, 14, 7, 8];
   }
   if (newdate == '2024/10/4') {
      listNums0 = [216, 8, 6, 3, 19, 21, 9];
      listNums1 = [396, 8, 5, 9, 19, 18, 3];
      listNums2 = [494, 5, 4, 7, 17, 15, 8];
   }
   if (newdate == '2024/10/5') {
      listNums0 = [457, 4, 12, 20, 9, 8, 17];
      listNums1 = [215, 6, 9, 3, 7, 5, 20];
      listNums2 = [274, 10, 12, 2, 3, 14, 7];
   }
   if (newdate == '2024/10/6') {
      listNums0 = [391, 9, 21, 11, 22, 10, 6];
      listNums1 = [284, 23, 3, 6, 2, 13, 8];
      listNums2 = [276, 17, 7, 3, 16, 1, 2];
   }
   if (newdate == '2024/10/7') {
      listNums0 = [114, 13, 18, 7, 10, 4, 17];
      listNums1 = [161, 7, 17, 2, 5, 24, 13];
      listNums2 = [162, 4, 5, 10, 2, 22, 11];
   }
   if (newdate == '2024/10/8') {
      listNums0 = [375, 10, 18, 11, 8, 1, 16];
      listNums1 = [314, 6, 19, 20, 4, 10, 11];
      listNums2 = [94, 5, 16, 23, 10, 3, 9];
   }
   if (newdate == '2024/10/9') {
      listNums0 = [457, 17, 10, 8, 3, 12, 13];
      listNums1 = [73, 9, 5, 10, 12, 21, 2];
      listNums2 = [300, 21, 9, 7, 4, 25, 3];
   }
   if (newdate == '2024/10/10') {
      listNums0 = [86, 1, 20, 9, 11, 12, 3];
      listNums1 = [137, 1, 6, 16, 4, 7, 23];
      listNums2 = [232, 20, 12, 2, 8, 13, 6];
   }
   if (newdate == '2024/10/11') {
      listNums0 = [253, 11, 5, 10, 7, 20, 16];
      listNums1 = [115, 6, 7, 9, 12, 15, 11];
      listNums2 = [182, 7, 20, 19, 1, 5, 9];
   }
   if (newdate == '2024/10/12') {
      listNums0 = [428, 23, 3, 7, 5, 11, 1];
      listNums1 = [175, 7, 16, 21, 3, 6, 5];
      listNums2 = [91, 11, 2, 12, 13, 7, 14];
   }
   if (newdate == '2024/10/13') {
      listNums0 = [252, 11, 8, 20, 3, 5, 17];
      listNums1 = [210, 19, 5, 4, 14, 8, 12];
      listNums2 = [485, 8, 21, 10, 9, 7, 16];
   }
   if (newdate == '2024/10/14') {
      listNums0 = [305, 8, 5, 12, 23, 4, 11];
      listNums1 = [247, 4, 17, 15, 6, 5, 9];
      listNums2 = [94, 12, 19, 2, 5, 7, 17];
   }
   if (newdate == '2024/10/15') {
      listNums0 = [311, 18, 3, 7, 9, 19, 8];
      listNums1 = [189, 24, 3, 5, 7, 11, 20];
      listNums2 = [296, 7, 5, 12, 10, 23, 17];
   }
   if (newdate == '2024/10/16') {
      listNums0 = [435, 13, 9, 2, 15, 5, 16];
      listNums1 = [250, 7, 2, 19, 6, 1, 13];
      listNums2 = [218, 8, 10, 24, 7, 4, 20];
   }
   if (newdate == '2024/10/17') {
      listNums0 = [444, 4, 1, 20, 9, 7, 15];
      listNums1 = [230, 2, 12, 17, 6, 5, 7];
      listNums2 = [297, 8, 6, 5, 25, 21, 7];
   }
   if (newdate == '2024/10/18') {
      listNums0 = [166, 14, 12, 15, 10, 8, 2];
      listNums1 = [206, 15, 10, 11, 8, 7, 4];
      listNums2 = [346, 17, 11, 10, 4, 6, 23];
   }
   if (newdate == '2024/10/19') {
      listNums0 = [136, 21, 10, 13, 8, 19, 6];
      listNums1 = [476, 4, 19, 10, 22, 12, 5];
      listNums2 = [140, 22, 3, 12, 4, 2, 8];
   }
   if (newdate == '2024/10/20') {
      listNums0 = [387, 12, 18, 7, 20, 4, 5];
      listNums1 = [150, 3, 10, 17, 9, 7, 2];
      listNums2 = [125, 13, 15, 11, 17, 7, 6];
   }
   if (newdate == '2024/10/21') {
      listNums0 = [158, 22, 20, 5, 6, 9, 10];
      listNums1 = [368, 22, 2, 7, 5, 10, 8];
      listNums2 = [254, 2, 10, 9, 22, 8, 6];
   }
   if (newdate == '2024/10/22') {
      listNums0 = [284, 9, 8, 19, 7, 20, 13];
      listNums1 = [300, 8, 4, 9, 6, 21, 22];
      listNums2 = [241, 9, 7, 19, 16, 8, 11];
   }
   if (newdate == '2024/10/23') {
      listNums0 = [205, 9, 8, 23, 7, 11, 18];
      listNums1 = [281, 5, 16, 25, 8, 2, 6];
      listNums2 = [486, 19, 16, 6, 2, 11, 8];
   }
   if (newdate == '2024/10/24') {
      listNums0 = [349, 23, 3, 5, 10, 8, 14];
      listNums1 = [465, 2, 20, 7, 12, 25, 1];
      listNums2 = [461, 6, 13, 16, 3, 25, 8];
   }
   if (newdate == '2024/10/25') {
      listNums0 = [98, 7, 3, 15, 9, 12, 2];
      listNums1 = [322, 12, 15, 7, 9, 2, 21];
      listNums2 = [122, 8, 2, 5, 6, 15, 18];
   }
   if (newdate == '2024/10/26') {
      listNums0 = [229, 10, 9, 15, 3, 6, 7];
      listNums1 = [313, 8, 10, 17, 4, 20, 7];
      listNums2 = [371, 7, 9, 12, 3, 1, 18];
   }
   if (newdate == '2024/10/27') {
      listNums0 = [172, 16, 12, 11, 5, 4, 2];
      listNums1 = [83, 22, 11, 19, 8, 9, 6];
      listNums2 = [206, 8, 15, 7, 4, 14, 1];
   }
   if (newdate == '2024/10/28') {
      listNums0 = [351, 3, 16, 2, 14, 6, 8];
      listNums1 = [142, 10, 2, 9, 20, 4, 12];
      listNums2 = [287, 5, 3, 10, 1, 16, 15];
   }
   if (newdate == '2024/10/29') {
      listNums0 = [195, 8, 10, 4, 11, 16, 7];
      listNums1 = [248, 3, 12, 5, 13, 2, 19];
      listNums2 = [335, 8, 4, 11, 1, 16, 21];
   }
   if (newdate == '2024/10/30') {
      listNums0 = [439, 15, 7, 18, 10, 6, 5];
      listNums1 = [138, 2, 8, 6, 14, 7, 15];
      listNums2 = [354, 3, 9, 7, 11, 21, 4];
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