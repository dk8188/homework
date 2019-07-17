let money, time;

function start(){
   money = +prompt("Ваш бюждет?",'');
   time = prompt("Введите дату в формате YYYY-MM-DD",'');

   while(isNaN(money) || money == "" || money == null) {
      money = +prompt("Ваш бюждет?",'');
   }
}
start();

let appData = {
    budget:money,
    expenses:{},
    optionalExpenses:{},
    income:[],
    timeData:time,
    savings:true
};

function chooseExpenses() {
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
}
chooseExpenses();

function chooseOptExpenses() {
   for (let i = 0; i < 2; i++) {
      let a = prompt("Введите дополнительную статью расходов в этом месяце","");
          b = prompt("Во сколько обойдутся развлечения?","");
      if ((typeof(a)) === 'string' && (typeof(a)) != null 
         && a != '' && b !='' && a.length <50) {
         console.log("done");
         appData.optionalExpenses[a] = b;
      } else { 
         console.log("error");
      }
   };
}
chooseOptExpenses();

function detectDayBudget() {
   appData.moneyPerDay = (appData.budget/30).toFixed(1);
   alert("Daily budget:" + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
   if(appData.moneyPerDay < 100) {
      console.log ("Minimum wage");}
      else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
      console.log("average wage");}
      else if (appData.moneyPerDay > 20000) {
         console.log("high wage");}
      else {
         console.log("Mistake!");
      }
}
detectLevel();

   function checkSavings (){
      if (appData.savings == true) {
        let save = +prompt("какова сумма накоплений?"),
            percent = +prompt("под какой процент?");
         appData.monthIncome = save/100/12*percent;
         alert("Доход в месяц: " + appData.monthIncome);
      }
   }
checkSavings();


    


