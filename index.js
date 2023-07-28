let targetNum = 105;
let num1 = 2;
let num2 = 3;
let num3 = 7;
let num4 = 9;
let num5 = 10;
let num6 = 11;
var moves = { 0: { but1: num1, but2: num2, but3: num3, but4: num4, but5: num5, but6: num6 } };

var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate() - 1;
var year = dateObj.getUTCFullYear();

newdate = year + "/" + month + "/" + day;
function main() {


   document.getElementById("targetNumber").innerHTML = targetNum;
   document.getElementById("button1").innerHTML = num1;
   document.getElementById("button2").innerHTML = num2;
   document.getElementById("button3").innerHTML = num3;
   document.getElementById("button4").innerHTML = num4;
   document.getElementById("button5").innerHTML = num5;
   document.getElementById("button6").innerHTML = num6;

   // var moves = { 0: { but1: num1, but2: num2, but3: num3, but4: num4, but5: num5, but6: num6 } };
   //console.log(moves);

   const express = require('express');
   const { createPool } = require('mysql2');
   const app = express();

   const pool = createPool({
      host: "localhost",
      user: "root",
      password: "Tuukka112413",
      database: "digits"
   });
   console.log(newdate);

   app.get('/data', (req, res) => {
      const sqlQuery = 'SELECT * FROM days'; // Replace 'your_table_name' with the actual table name

      pool.query(sqlQuery, (error, results) => {
         if (error) {
            console.error('Error executing query:', error);
            return res.status(500).json({ message: 'Error fetching data from the database' });
         }

         res.json(results); // Respond with the data in JSON format
      });
   });
   function saveVariable(value) {
      console.log(value[0].targetnum1);
      targetNum = value[0].targetnum1;

   }

   const port = 3000;
   app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
   });
}
function changeClass(id) {
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
                     newNum = Number(document.getElementById(id).innerHTML);

                  }
               }
               if (symbol.id == "timesButton") {
                  newNum = Number(document.getElementById(num.id).innerHTML) * Number(document.getElementById(id).innerHTML);
                  madeMove = true;
                  number.classList.add("gettingUsed");
                  $('#' + id).addClass("gettingChanged");
               }
               if (symbol.id == "divideButton") {
                  if (Number(document.getElementById(num.id).innerHTML) % Number(document.getElementById(id).innerHTML) === 0) {
                     newNum = Number(document.getElementById(num.id).innerHTML) / Number(document.getElementById(id).innerHTML);
                     madeMove = true;
                     number.classList.add("gettingUsed");
                     $('#' + id).addClass("gettingChanged");

                  }
                  else {
                     newNum = Number(document.getElementById(id).innerHTML);
                  }

               }

               console.log(newNum);


               document.getElementById(id).innerHTML = newNum;


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
         sym.classList.add("unselectedSymbol")
      });
   }
   if (madeMove) {
      let one = document.getElementById("button1");
      let two = document.getElementById("button2");
      let three = document.getElementById("button3");
      let four = document.getElementById("button4");
      let five = document.getElementById("button5");
      let six = document.getElementById("button6");
      console.log(Object.keys(moves).length);
      moves[{ key: Object.keys(moves).length + 1, value: { one: one.innerHTML, two: two.innerHTML, three: three.innerHTML, four: four.innerHTML, five: five.innerHTML, six: six.innerHTML } }];
      console.log(moves);
   }

   allNums.forEach(button => {
      if (button.innerHTML == targetNum) {
         $('#' + id).addClass('match');

         setTimeout(() => { window.location.href = "game.html"; }, 1800);
      }

   });


}