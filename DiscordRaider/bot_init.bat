@echo off
COLOR 0A
echo  			-- D I S C O R D     R A I D E R  -- 
echo     			    B y   A d B
set tab=	
set /p uid=Enter USER ID : 
cd Bot1
echo B O T - 1     I N I T I A L I Z A T I O N
call bot1_init
call npm init
call npm install discord.js --save
call npm install discord.js-commando --save
cd ..
cd Bot2
echo B O T - 2     I N I T I A L I Z A T I O N
call bot2_init
call npm init
call npm install discord.js --save 
call npm install discord.js-commando --save
cd ..
cd Bot3
echo B O T - 3      I N I T I A L I Z A T I O N 
call bot3_init
call npm init
call npm install discord.js --save
call npm install discord.js-commando --save
echo          -- D I S C O R D   R A I D E R   I N I T I A L I Z E D --