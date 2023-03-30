const billTotalInput = document.getElementById('bill-total');
const tipPercentageSelect = document.getElementById('tip-percentage');
const customTipDiv = document.getElementById('custom-tip');
const customTipInput = document.getElementById('custom-tip-percentage');
const numPeopleInput = document.getElementById('num-people');
const calculateBtn = document.getElementById('calculate-btn');
const resetBtn = document.getElementById('reset-btn');
const tipAmountOutput = document.getElementById('tip-amount');
const totalAmountOutput = document.getElementById('total-amount');

let tipPercentage = 0.15;

function calculate() {
  const billTotal = Number(billTotalInput.value);
  const numPeople = Number(numPeopleInput.value);

  if (isNaN(billTotal) || isNaN(numPeople)) {
    alert('Please enter valid numbers for Bill Total and Number of People.');
    return;
  }

  let calculatedTipPercentage = tipPercentage;
  if (tipPercentageSelect.value === 'custom') {
    calculatedTipPercentage = Number(customTipInput.value) / 100;
  } else {
    calculatedTipPercentage = Number(tipPercentageSelect.value);
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
  tipPercentageSelect.value = '0.15';
  customTipDiv.style.display = 'none';
  customTipInput.value = '0';
  numPeopleInput.value = '';
  tipAmountOutput.textContent = '';
  totalAmountOutput.textContent = '';
}

tipPercentageSelect.addEventListener('change', () => {
  if (tipPercentageSelect.value === 'custom') {
    customTipDiv.style.display = 'block';
  } else {
    customTipDiv
