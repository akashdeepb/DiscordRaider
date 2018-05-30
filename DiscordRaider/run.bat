@echo off
COLOR 0A
echo -- D I S C O R D     R A I D E R --
cd Bot1
call start cmd /k node bot.js --harmony
cd ..
cd Bot2
call start cmd /k node bot.js --harmony
cd ..
cd Bot3
call start cmd /k node bot.js --harmony