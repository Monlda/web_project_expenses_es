let totalExpensesValue = 0
let budgetValue = 0

let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

for(let i = 0; i < expenseEntries.length; i++) {
  totalExpensesValue += expenseEntries[i][1];
 console.log("Valor total de los gastos: " +  totalExpensesValue)
}

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }
let averageExpense = totalExpensesValue / expenseEntries.length;
  return averageExpense;
}

function calculateBalance() {
  let balance = budgetValue - totalExpensesValue;
  return balance;
}

let balanceColor = "green"

function updateBalanceColor() {
  let balance = calculateBalance();
  if (balance < 0) {
    balanceColor = "red";
  } else if (balance < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

function calculateCategoryExpenses(category) {
  let categoryTotal = 0;
  for (let i= 0; i < expenseEntries.length; i++) {
    if (expenseEntries[i][0] === category) {
      categoryTotal += expenseEntries[i][1];
    }
  }
  return categoryTotal;
}

function calculateLargestCategory() {
let categories = ["groceries", "restaurants", "transport", "home", "subscriptions"];
  let currentLargestCategory = 0 ;
  let largestCategory = "";
  for (let i = 0; i < categories.length; i++) {
    let categoryExpense = calculateCategoryExpenses(categories[i]);
    if (categoryExpense > currentLargestCategory) {
      currentLargestCategory = categoryExpense;
      largestCategory = categories[i];
    }
  }
  return largestCategory;
}

function addExpenseEntry(values) {
  expenseEntries.push(values);
  totalExpensesValue += values[1];
}
