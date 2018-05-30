echo -e "\t\t ***  D i s c o r d   R a i d e r   B o t s  ***"
echo -e "\t\t\t ~ B y       A d B ~ "
echo -e "\n\n"
chmod +x run.sh
read -p " USER ID : " uid
echo -e "\t ~ B O T  -  1     I N I T I A L I Z A T I O N "
cd Bot1
chmod +x bot1_init.sh
export uid
./bot1_init.sh
npm init
npm install discord.js --save
npm install discord.js-commando --save
echo "-- BOT 1 Initialization Complete "
echo -e "\n\n"
cd ..
echo -e "\t ~ B O T   - 2    I N I T I A L I Z A T I O N "
cd Bot2 
chmod +x bot2_init.sh
export uid
./bot2_init.sh
npm init
npm install discord.js --save
npm install discord.js-commando --save
echo "-- BOT 2 Initialization Complete "
echo -e "\n\n"
cd ..
echo -e "\t ~ B O T    - 3   I N I T I A L I Z A T I O N "
cd Bot3
chmod +x bot3_init.sh
export uid
./bot3_init.sh
npm init
npm install discord.js --save
npm install discord.js-commando --save
echo "--BOT3 Initialization Complete "
echo -e "\n\n\n"
echo -e "\n\t -- Discord Raider Initialization is Complete -- " 
