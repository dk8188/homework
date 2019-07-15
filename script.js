'use strict';
let money = +prompt("Ваш бюждет?","");
console.log(money);
let time = prompt("Введите дату в формате YYYY-MM-DD","");
console.log(time);
let appData = {
    budget:money,
    expenses:{},
    optionalExpenses:{},
    income:[],
    timeData:time,
    savings:false
};
let a1 = prompt("Введите обязательную статью расходов в этом месяце","");
    a2 = prompt("Во сколько обойдется жилье?","");
    a3 = prompt("Введите обязательную статью расходов в следующем месяце","");
    a4 = prompt("Во сколько обойдется жилье?","");
   // a5 =prompt("Ваш доход в месяц?","");

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;
//appData.income.a5;
alert(appData.budget/30);
//alert(appData.budget%appData.expenses.a1);



    


