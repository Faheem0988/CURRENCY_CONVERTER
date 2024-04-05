import inquirer from "inquirer";
const Currency_rates = {
    USD: 1,
    EUR: 302,
    GBP: 0.76,
    INR: 74.57,
    TRY: 34.63,
    AUD: 1.6461,
    CNY: 7.8421,
    PKR: 280,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from Currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'TRY', 'AUD', 'CNY', 'PKR',]
    },
    {
        name: "to",
        message: "Enter to Currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'TRY', 'AUD', 'CNY', 'PKR',]
    },
    {
        name: 'amount',
        message: 'Enter Your Amount',
        type: 'number'
    }
]);
let fromAmount = Currency_rates[user_answer.from];
let toAmount = Currency_rates[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
