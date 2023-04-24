const billTotalInput = document.getElementById('bill-total');
const tipPercentageButtons = document.querySelectorAll('.tip-percentage button');
const customTipDiv = document.getElementById('custom-tip');
const customTipInput = document.querySelector('.tip-percentage input');
const numPeopleInput = document.getElementById('num-people');
const calculateBtn = document.getElementById('calculate-btn');
const resetBtn = document.getElementById('reset-btn');
const tipAmountOutput = document.getElementById('tip-amount');
const totalAmountOutput = document.getElementById('total-amount');

let tipPercentage = 0.15;

function calculate() {
  let billTotal = Number(billTotalInput.value);
  const numPeople = Number(numPeopleInput.value);

  if (isNaN(billTotal) || isNaN(numPeople) || billTotal <= 0 || numPeople <= 0) {
    alert('Please enter valid numbers for Bill Total and Number of People.');
    return;
  }

  // Remove 15% tax from bill total
  billTotal = billTotal / 1.15;

  let calculatedTipPercentage = tipPercentage;
  if (customTipDiv.style.display !== 'none') {
    calculatedTipPercentage = Number(customTipInput.value) / 100;
  } else {
    calculatedTipPercentage = Number(document.querySelector('.tip-percentage button.selected').value);
  }

  const tipAmount = billTotal * calculatedTipPercentage;
  const totalAmount = billTotal + tipAmount;
  const tipAmountPerPerson = tipAmount / numPeople;
  const totalAmountPerPerson = totalAmount / numPeople;

  tipAmountOutput.textContent = `$${tipAmountPerPerson.toFixed(2)}`;
  totalAmountOutput.textContent = `$${totalAmountPerPerson.toFixed(2)}`;
}

function reset() {
  billTotalInput.value = '';
  tipPercentageButtons[2].classList.add('selected');
  tipPercentageButtons.forEach(button => {
    if (button.value !== '0.15') {
      button.classList.remove('selected');
    }
  });
  customTipDiv.style.display = 'none';
  customTipInput.value = '';
  numPeopleInput.value = '';
  tipAmountOutput.textContent = '';
  totalAmountOutput.textContent = '';
}

function handleTipPercentageButtonClick(event) {
  tipPercentageButtons.forEach(button => button.classList.remove('selected'));
  event.target.classList.add('selected');

  if (event.target.value === 'custom') {
    customTipDiv.style.display = 'block';
  } else {
    customTipDiv.style.display = 'none';
  }
}

tipPercentageButtons.forEach(button => button.addEventListener('click', handleTipPercentageButtonClick));
calculateBtn.addEventListener('click', calculate);
resetBtn.addEventListener('click', reset);
