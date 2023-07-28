-- @block
CREATE TABLE days(
   id INT PRIMARY KEY AUTO_INCREMENT,
   currentDay CHAR(100),
   targetnum1 INT,
   firstNum1 INT,
   firstNum2 INT,
   firstNum3 INT,
   firstNum4 INT,
   firstNum5 INT,
   firstNum6 INT,
   targetnum2 INT,
   secondNum1 INT,
   secondNum2 INT,
   secondNum3 INT,
   secondNum4 INT,
   secondNum5 INT,
   secondNum6 INT,
   targetnum3 INT,
   thirdNum1 INT,
   thirdNum2 INT,
   thirdNum3 INT,
   thirdNum4 INT,
   thirdNum5 INT,
   thirdNum6 INT
);
-- @block
INSERT INTO days(currentDay, targetnum1)
VALUES ('2023/7/27', 24) -- @block
   -- @block
   DROP TABLE days;