const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const cancelButton = document.querySelector("#btn-cancel");
const confirmButton = document.querySelector("#btn-confirm");
const listExpense = document.querySelector("#expense-list");
const totalExpenseElement = document.querySelector("#total-expense");
const alertCtrl = document.querySelector("ion-alert");

let totalExpense = 0;

clear = () => {
  reasonInput.value = "";
  amountInput.value = "";
};

confirmButton.addEventListener("click", () => {
  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;

  if (
    enteredReason.trim().length <= 0 ||
    enteredAmount <= 0 ||
    enteredAmount.trim().length <= 0
  ) {
    const alert = document.createElement("ion-alert");
    alert.header = "Inavalid inputs!!";
    alert.message = "Please enter a valid reason and input!!";
    alert.buttons = ["OK"];

    document.body.appendChild(alert);
    alert.present();
    return;
  }

  const listItem = document.createElement("ion-item");
  listItem.textContent = enteredReason + ": $" + enteredAmount;
  listExpense.append(listItem);

  totalExpense += +enteredAmount;
  totalExpenseElement.textContent = "$" + totalExpense;
  clear();
});

cancelButton.addEventListener("click", clear);
