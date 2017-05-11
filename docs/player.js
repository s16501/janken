/*
function action(oppornent){
  return 0;
}
const GU = 0;
const CHOKI = 1;
const PA = 2;
 function action(){
   return GU;
 }

 let matches = 0;
 
 function action(opporment){
   matches = matches + 1;
   let amari = matches % 2;
   console.log(amari);
   return GU;
 }
*/

const GU = 0;
const CHOKI = 1;
const PA = 2;

 let matches = 0;
 function action(opporment){
   matches = matches + 1;
   const remainder = matches % 3;
   const isEven = remainder == PA;
   console.log(`${matches}) % 3 = ${remainder}:${isEven}`);
   if(isEven){
     return CHOKI; 
   }
   return GU; 
 }


function abs(value){
  let result = value;
  if(result < 0){
    result = result * -1;
  }
  return result;
}