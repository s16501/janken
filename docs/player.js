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
/*;
 function action(opporment){
   matches = matches + 1;
   const remainder = matches % 2;
   const isEven = remainder == 0;
   console.log(`${matches}) % 2 = ${remainder}:${isEven}`);
   if(isEven){
     return GU 
   }
   return CHOKI; 
 }
*/

 function action(oppornent)
 console.log(oppornent);
  let result = GU;
  countup();
  if(oppornent == "fighter::choki-lover"){
    result = actionAgainstChokiDaisukiman();
  } else {
    if (oppornent == "fighter::odd-even"){
      result = actionAgainstOmoteUra();
    else {
      result = actionAgainstOmoteUra2();
    }
  }
  return result;
}

function actionAgainstRotation() {
  const toReturnChoki = matches % 3 == 0
  const toReturnPa = false;
  let result = GU;
   if(toReturnChoki){
     result = CHOKI;
   } else {
     if(toReturnPa) {
       result = PA;
      } else {
        result = GU;
      }
   }
}
]