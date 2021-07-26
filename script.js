const submitBtn = document.querySelector('button[type="submit"]');
const inputs = document.querySelectorAll('input[type="text"]');
const errors = document.querySelectorAll('.error');
const main = document.querySelector('.main');
const output = document.querySelector('.output');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // gethering the values
    let cp = Number(inputs[0].value);
    let sp= Number(inputs[1].value);
    let quantity = Number(inputs[2].value);

    // reseting the errors
    errors.forEach(error => error.innerText = "");

    if(isNaN(cp) || cp<1) {
        errors[0].innerText = "Please enter a valid number for cost price. Cost Price should be greater than 0";
        return;
    }
    if(isNaN(sp) || sp<1) {
        errors[1].innerText = "Please enter a valid number for selling price. Selling Price should be greater than 0.";
        return;
    }
    if(isNaN(quantity) || quantity <1) {
        errors[2].innerText = "Please enter a valid quantity. Quantity should be greater than 0.";
        return;
    }

    //profit
    if(cp <= sp) {
        const profit = (sp-cp) * quantity;
        const profitPercentage = (profit/cp) * 100;
        if(profitPercentage >= 50) {
            main.classList.add('highProfit');
        }
        output.style.display = "block";
        output.innerText = `Wohoo, your profit is INR ${profit.toFixed(2)} and the profit % is ${profitPercentage.toFixed(2)}`
    } //loss
    else if (cp > sp) {
        const loss = (cp-sp) * quantity;
        const lossPercentage = (loss/cp) * 100;
        if(lossPercentage > 50) {
            main.classList.add('highLoss');
        }
        output.style.display = "block";
        output.innerText = `You lost INR ${loss.toFixed(2)} and the loss % is ${lossPercentage.toFixed(2)}`
    } 
});