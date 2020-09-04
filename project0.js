//let money = prompt("Ваш бюджет на месяц?");
//let second = prompt("Введите дату в формате YYYY-MM-DD");
//let a = prompt("Введите обязательную статью расходов в этом месяце");
//let b = prompt("Во сколько обойдется?");



//bujet="money";
//timeData="second";
//expenses="a";
//optionalExpenses=false;
//income=false;
//savings=false;


//console.log(money);
//console.log(second);
//console.log(a);



let money = prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a2 = prompt("Во сколько обойдется?", ''),
	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a4 = prompt("Во сколько обойдется?", '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30)




    
