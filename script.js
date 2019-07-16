let money = +prompt("Ваш бюждет?","");
let time = prompt("Введите дату в формате YYYY-MM-DD","");

let appData = {
    budget:money,
    expenses:{},
    optionalExpenses:{},
    income:[],
    timeData:time,
    savings:false
};

for (let i = 0; i < 2; i++) {
   let a = prompt("Введите обязательную статью расходов в этом месяце","");
       b = prompt("Во сколько обойдется?","");
   if ((typeof(a)) === 'string' && (typeof(a)) != null 
      && a != '' && b !='' && a.length <50) {
      console.log("done");
      appData.expenses[a] = b;
   } else { 
      console.log("error");
   }
};
appData.moneyPerDay = appData.budget/30;
//appData.income.a5;
alert("Dailu budget:" + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
   console.log ("Minimum wage");}
   else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
   console.log("average wage");}
   else if (appData.moneyPerDay > 20000) {
      console.log("high wage");}
   else {
      console.log("Mistake!");
   }
   



    


